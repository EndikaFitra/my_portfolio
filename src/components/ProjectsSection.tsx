import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DETECT.IT: Web App dengan Deep Learning Untuk Mendeteksi Kualitas Buah dan Sayuran",
    desc: "Back-end Web Developer & Model Trainer. Aplikasi ini dikembangkan menggunakan FastAPI dan model Deep Learning TensorFlow (EfficientNetV2B0).",
    tech: ["FastAPI", "TensorFlow", "Deep Learning", "EfficientNetV2B0"],
    link: "https://github.com/EndikaFitra/Project-DETECT.IT",
  },
  {
    title: "Reduksi Dimensi & Robust Clustering pada Analisis Ketimpangan Kesejahteraan Provinsi (2024)",
    desc: "Mereduksi dimensi data dengan PCA dan membandingkan metode clustering (DBSCAN, FCM, PCM, FPCM, MFPCM). Hasil terbaik diperoleh dengan metode FCM (rasio BSS/TSS: 0.861, silhouette score: 0.340).",
    tech: ["PCA", "DBSCAN", "FCM", "Clustering", "Data Analysis"],
    link: "https://github.com/EndikaFitra/Dashboard-Ketimpangan-Kesejahteraan-Provinsi",
  },
  {
    title: "Faktor yang Memengaruhi Profit Startup Menggunakan Regresi Variabel Dummy",
    desc: "Menganalisis berbagai faktor yang memengaruhi peningkatan dari profit perusahaan (menggunakan pengeluaran R&D, administrasi, marketing, dll) lewat regresi variabel dummy.",
    tech: ["Regression", "Dummy Variables", "Statistical Analysis"],
    link: "https://github.com/EndikaFitra/Regresi-dengan-Variabel-Dummy",
  },
  {
    title: "Obsicare: Aplikasi Monitoring & Rekomendasi Makanan Berdasarkan Kalori",
    desc: "Aplikasi penanggulangan risiko obesitas di Indonesia. Berperan sebagai Back-end Web Developer menggunakan framework FastAPI berpadu dengan database PostgreSQL.",
    tech: ["FastAPI", "PostgreSQL", "Backend", "Python", "Machine Learning"],
    link: "https://github.com/ObsiCare/ObsiCare", 
  },
  {
    title: "AIOps - AI-Powered Operations Dashboard",
    desc: "Dashboard untuk memantau dan menganalisis data operasional infrastruktur IT. Menggunakan LLM untuk peringkasan data, deteksi anomali, dan rekomendasi tindakan proaktif.",
    tech: ["LLM", "RAG", "MCP", "Ollama", "Docker", "PostgreSQL", "Prometheus", "Data Warehouse", "ChromaDB", "qwen3:4b-instruct"],
    link: "https://github.com/EndikaFitra/AI-Server-Assistant-DataWarehouse",
  },
  {
    title: "Dashboard KPI with Chatbot Integration",
    desc: "Dashboard untuk memantau KPI perusahaan dengan integrasi chatbot berbasis LLM. Chatbot memberikan wawasan real-time, menjawab pertanyaan terkait KPI, dan memberikan rekomendasi berdasarkan data yang tersedia.",
    tech: ["LLM", "MCP", "Ollama", "Data Warehouse", "llama3.1", "llama-3.1-8b-instant", "gemini-3.1-flash-lite-preview", "inclusionai/ling-2.6-flash:free"],
    link: "",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Proyek</p>
          <h2 className="section-heading">Karya yang saya banggakan</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * (i + 1) }}
              className="project-card group flex flex-col cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink size={16} className="text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-display"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
