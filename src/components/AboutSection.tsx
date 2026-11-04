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
          <h2 className="section-heading">Tentang saya</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
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
