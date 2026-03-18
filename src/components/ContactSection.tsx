import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/EndikaFitra" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/endika-fitra-ramadani" },
  { icon: Mail, label: "Email", href: "mailto:endikfitra10@gmail.com" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([data]);

      if (error) {
        throw error;
      }

      // Notifikasi Email via Web3Forms
      const web3formsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (web3formsAccessKey && web3formsAccessKey !== "your_web3forms_access_key") {
        try {
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: web3formsAccessKey,
              ...data,
            }),
          });
        } catch (emailError) {
          console.error("Gagal mengirim notifikasi email:", emailError);
        }
      }

      toast({ title: "Pesan terkirim!", description: "Terima kasih telah menghubungi saya." });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      toast({ 
        title: "Gagal mengirim pesan", 
        description: "Pastikan URL dan Anon Key Supabase sudah benar di file .env", 
        variant: "destructive" 
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-card">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Kontak</p>
          <h2 className="section-heading">Mari terhubung</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tertarik untuk berkolaborasi atau sekadar berdiskusi? Jangan ragu untuk menghubungi saya melalui platform berikut atau isi formulir di samping.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                  aria-label={s.label}
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <Input
              name="name"
              placeholder="Nama"
              required
              className="bg-background font-body"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="bg-background font-body"
            />
            <Textarea
              name="message"
              placeholder="Pesan Anda..."
              required
              rows={4}
              className="bg-background font-body resize-none"
            />
            <Button
              type="submit"
              disabled={sending}
              className="rounded-full px-8 font-display"
            >
              <Send size={16} className="mr-2" />
              {sending ? "Mengirim..." : "Kirim Pesan"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
