import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const EMAIL = "endikfitra10@gmail.com";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/EndikaFitra" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/endika-fitra-ramadani" },
  { icon: Mail, label: "Email", href: `mailto:${EMAIL}` },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Supabase hanya dibutuhkan saat submit — jangan ikut payload awal.
      const { supabase } = await import("@/lib/supabase");
      const { error } = await supabase.from("contacts").insert([data]);

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

      toast({
        title: "Pesan terkirim",
        description: "Saya balas ke email yang kamu tulis.",
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Pesan gagal terkirim",
        description: `Isianmu masih utuh. Coba sekali lagi, atau kirim langsung ke ${EMAIL}.`,
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Mari terhubung</h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Untuk peran, kolaborasi, atau pertanyaan teknis. Email paling cepat —
              saya balas dari alamat yang sama.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="mb-8 inline-block font-display text-lg text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              {EMAIL}
            </a>

            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                  aria-label={s.label}
                >
                  <s.icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-5"
          >
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">
                Nama
              </label>
              <Input
                id="contact-name"
                name="name"
                autoComplete="name"
                maxLength={100}
                required
                className="bg-background font-body"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-background font-body"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
                Pesan
              </label>
              <Textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                maxLength={2000}
                className="resize-none bg-background font-body"
              />
            </div>

            <Button
              type="submit"
              disabled={sending}
              className="rounded-full px-8 font-display"
            >
              <Send size={16} className="mr-2" aria-hidden="true" />
              {sending ? "Mengirim…" : "Kirim pesan"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
