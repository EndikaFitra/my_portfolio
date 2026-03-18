import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-card">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Tentang Saya</p>
          <h2 className="section-heading">Endika Fitra Ramadani</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="relative mx-auto md:ml-0 rounded-2xl overflow-hidden shadow-xl border border-border group w-full max-w-sm aspect-[4/5] object-cover">
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
            <img
              src="/myphotos.png"
              alt="Endika Fitra Ramadani"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              Saya adalah mahasiswa <span className="text-foreground font-medium">Applied Data Science</span> di Politeknik Elektronika Negeri Surabaya yang sangat tertarik pada pengembangan sistem berbasis kecerdasan buatan. Mulai dari Large Language Models <span className="text-foreground font-medium">(LLM)</span>, Retrieval-Augmented Generation <span className="text-foreground font-medium">(RAG)</span>, hingga Model Context Protocol <span className="text-foreground font-medium">(MCP)</span>.
            </p>
            <p>
              Selain dunia AI, saya juga memiliki antusiasme besar di bidang <span className="text-foreground font-medium">Data Engineering</span>. Saya berfokus pada perancangan arsitektur data, membangun <i>data pipeline</i> (ETL/ELT) yang efisien, serta memastikan kualitas dan ketersediaan data untuk kebutuhan analisis maupun <i>machine learning</i> dan <i>deep learning</i>.
            </p>
            <p>
              Saya siap untuk belajar dan berkembang di lingkungan yang dinamis serta berkontribusi dalam proyek-proyek yang menantang.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
