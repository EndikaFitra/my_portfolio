import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Server, Database } from "lucide-react";

const skillGroups = [
  {
    icon: Brain,
    title: "AI",
    skills: ["LLM", "RAG", "MCP", "Ollama"],
  },
  {
    icon: Server,
    title: "Infrastructure & Tools",
    skills: ["Docker", "Grafana", "Prometheus", "Linux", "Git"],
  },
  {
    icon: Database,
    title: "Data",
    skills: ["SQL", "NoSQL", "Data Modeling", "ETL", "Data Warehousing", "Data Visualization", "Data Analysis", "Machine Learning", "Deep Learning", "NLP"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Keahlian</p>
          <h2 className="section-heading">Tools & teknologi yang saya gunakan</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <group.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
