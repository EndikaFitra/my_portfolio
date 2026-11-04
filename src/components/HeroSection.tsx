import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMAIL = "endikfitra10@gmail.com";

const facts = [
  {
    label: "Sekarang",
    value: "Software Engineer Intern, EHFS Division — PT Sinar Mas Agro Resources and Technology",
  },
  { label: "Fokus", value: "LLM & RAG, data pipeline, backend FastAPI" },
  {
    label: "Basis",
    value: "Sains Data Terapan, Politeknik Elektronika Negeri Surabaya",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Tekstur grid halus di belakang hero, memudar ke tepi */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 75% at 32% 42%, #000 0%, rgba(0,0,0,0.6) 45%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 75% at 32% 42%, #000 0%, rgba(0,0,0,0.6) 45%, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[2.75rem] font-bold leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl"
            >
              Endika
              <br />
              Fitra
              <br />
              Ramadani<span className="text-primary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
            >
              Membangun sistem AI dan data — dari model dan pipeline sampai aplikasi
              web yang menjalankannya.
            </motion.p>

            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 max-w-md space-y-3 border-t border-border pt-6"
            >
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[5.25rem_1fr] gap-x-4 gap-y-1 text-sm leading-relaxed"
                >
                  <dt className="font-display text-muted-foreground">{fact.label}</dt>
                  <dd className="text-foreground">{fact.value}</dd>
                </div>
              ))}
            </motion.dl>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg" className="rounded-full px-7 font-display">
                <a href="#projects">
                  <ArrowDown size={16} className="mr-2" aria-hidden="true" />
                  Lihat karya
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-full px-5 font-display text-foreground"
              >
                <a href={`mailto:${EMAIL}`}>
                  <Mail size={16} className="mr-2" aria-hidden="true" />
                  Email saya
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <img
              src="/myphotos.webp"
              srcSet="/myphotos-480.webp 480w, /myphotos.webp 900w"
              sizes="(min-width: 768px) 320px, 70vw"
              width={900}
              height={971}
              alt="Endika Fitra Ramadani"
              className="w-full max-w-[20rem] rounded-2xl border border-border object-cover shadow-[0_18px_40px_-24px_rgba(20,25,35,0.35)] md:ml-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
