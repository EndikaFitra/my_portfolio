import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  role?: string;
  desc: string;
  tech: string[];
  link: string;
  outcome?: string;
};

/* Tiga karya yang paling layak dipertahankan di interview. */
const featured: Project[] = [
  {
    title: "DETECT.IT — Deteksi Kualitas Buah & Sayuran dengan Deep Learning",
    role: "Back-end Web Developer & Model Trainer",
    desc: "Aplikasi web yang dikembangkan menggunakan FastAPI dan model Deep Learning TensorFlow (EfficientNetV2B0) untuk mengklasifikasi kualitas buah dan sayuran.",
    tech: ["FastAPI", "TensorFlow", "EfficientNetV2B0"],
    link: "https://github.com/EndikaFitra/Project-DETECT.IT",
  },
  {
    title: "Reduksi Dimensi & Robust Clustering pada Analisis Ketimpangan Kesejahteraan Provinsi",
    desc: "Mereduksi dimensi data dengan PCA, lalu membandingkan lima metode clustering untuk memetakan ketimpangan kesejahteraan antarprovinsi.",
    tech: ["PCA", "DBSCAN", "FCM", "MFPCM", "Data Analysis"],
    link: "https://github.com/EndikaFitra/Dashboard-Ketimpangan-Kesejahteraan-Provinsi",
    outcome: "BSS/TSS 0.861 · silhouette 0.340",
  },
  {
    title: "AIOps — Dashboard Operasional Berbasis LLM",
    desc: "Dashboard untuk memantau dan menganalisis data operasional infrastruktur IT, dengan LLM untuk peringkasan, deteksi anomali, dan rekomendasi tindakan proaktif.",
    tech: ["LLM", "RAG", "MCP", "ChromaDB", "Ollama", "Docker", "PostgreSQL", "Prometheus", "qwen3:4b-instruct", "Data Warehouse"],
    link: "https://github.com/EndikaFitra/AI-Server-Assistant-DataWarehouse",
  },
];

/* Sisanya: daftar padat, satu baris per karya. */
const others: Project[] = [
  {
    title: "Obsicare — Monitoring & Rekomendasi Makanan Berdasarkan Kalori",
    role: "Back-end Web Developer",
    desc: "Aplikasi penanggulangan risiko obesitas di Indonesia, menggunakan framework FastAPI berpadu dengan database PostgreSQL.",
    tech: ["FastAPI", "PostgreSQL", "Python", "Machine Learning"],
    link: "https://github.com/ObsiCare/ObsiCare",
  },
  {
    title: "Faktor yang Memengaruhi Profit Startup dengan Regresi Variabel Dummy",
    desc: "Menganalisis faktor yang memengaruhi kenaikan profit perusahaan (pengeluaran R&D, administrasi, marketing) lewat regresi variabel dummy.",
    tech: ["Regression", "Dummy Variables", "Statistical Analysis"],
    link: "https://github.com/EndikaFitra/Regresi-dengan-Variabel-Dummy",
  },
  {
    title: "Dashboard KPI with Chatbot Integration",
    desc: "Dashboard KPI dengan chatbot berbasis LLM untuk wawasan real-time dan rekomendasi berbasis data.",
    tech: ["LLM", "MCP", "Ollama", "Data Warehouse"],
    link: "",
  },
];

const MAX_CHIPS = 4;

const TechList = ({ tech }: { tech: string[] }) => {
  const shown = tech.slice(0, MAX_CHIPS);
  const rest = tech.length - shown.length;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
      {shown.map((t) => (
        <span key={t} className="font-display">
          {t}
        </span>
      ))}
      {rest > 0 && <span className="text-muted-foreground/70">+{rest}</span>}
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects">
      <div className="section-container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading max-w-2xl"
        >
          Karya terpilih
        </motion.h2>

        <div>
          {featured.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="border-t border-border py-10 md:py-14"
            >
              <div className="grid gap-5 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-7">
                  <h3 className="font-display text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:text-primary hover:underline"
                    >
                      {project.title}
                    </a>
                  </h3>
                </div>

                <div className="md:col-span-5">
                  {project.role && (
                    <p className="mb-2 text-sm font-semibold text-primary">{project.role}</p>
                  )}
                  <p className="mb-5 leading-relaxed text-muted-foreground">{project.desc}</p>

                  {project.outcome && (
                    <p className="mb-5 font-display text-xl font-medium text-foreground">
                      {project.outcome}
                    </p>
                  )}

                  <div className="mb-5">
                    <TechList tech={project.tech} />
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
                  >
                    Lihat repositori
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="border-t border-border">
          <h3 className="pt-10 font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Karya lain
          </h3>
          <div>
            {others.map((project, i) => {
              const meta = project.tech.slice(0, 2).join(" · ");
              const content = (
                <>
                  <span className="font-display text-base leading-snug text-foreground md:text-lg">
                    {project.title}
                  </span>
                  <span className="shrink-0 font-display text-sm text-muted-foreground">
                    {project.link ? meta : "Repositori belum publik"}
                  </span>
                </>
              );

              return project.link ? (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex flex-col gap-1 border-b border-border py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 transition-colors hover:[&_span:first-child]:text-primary"
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex flex-col gap-1 border-b border-border py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 opacity-70"
                >
                  {content}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
