import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "Tech Infra Intern",
    org: "Trustmedis",
    logo: "/trustmedis.png",
    period: "2026 — Sekarang",
    desc: "Fokus pada eksplorasi AI untuk peringkasan data operasional infrastruktur. Bekerja dengan Docker, monitoring tools, dan integrasi LLM ke dalam workflow internal.",
  },
  {
    icon: GraduationCap,
    role: "Politeknik Elektronika Negeri Surabaya",
    org: "Prodi Sains Data Terapan",
    logo: "/pens.png",
    period: "2023 — Sekarang",
    desc: "Mempelajari dasar-dasar data science, machine learning, dan AI. Aktif dalam proyek-proyek kampus yang berfokus pada analisis data dan pengembangan model AI.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="bg-card">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Pengalaman</p>
          <h2 className="section-heading">Perjalanan saya sejauh ini</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * (i + 1) }}
                className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-5 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-1.5 ring-4 ring-background z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-background border border-border rounded-xl p-5">
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <exp.icon size={16} className="text-primary" />
                      <span className="text-xs font-medium text-primary font-display">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse justify-start" : ""}`}>
                      {exp.logo && (
                        <div className="w-10 h-10 rounded-md bg-white p-1 shadow-sm shrink-0 overflow-hidden flex items-center justify-center">
                          <img src={exp.logo} alt={exp.org} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <p className="text-sm text-primary/80 font-bold">{exp.org}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
