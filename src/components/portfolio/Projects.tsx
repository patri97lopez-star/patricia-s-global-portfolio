import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Análisis de la política migratoria de la UE",
    category: "Estudios Internacionales",
    desc: "Investigación sobre las políticas de asilo y migración en la Unión Europea y su impacto en los derechos fundamentales.",
  },
  {
    title: "Derecho comparado: España e Italia",
    category: "Derecho",
    desc: "Estudio comparativo de los sistemas jurídicos español e italiano en materia de derecho civil.",
  },
  {
    title: "Traducción jurídica chino-español",
    category: "Idiomas",
    desc: "Proyecto de traducción de textos legales del mandarín al español para una ONG de cooperación internacional.",
  },
];

const Projects = () => (
  <section id="projects" className="py-24 px-6 bg-card/50">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Trabajos</p>
        <h2 className="text-4xl md:text-5xl font-bold">Proyectos Destacados</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group p-6 rounded-xl bg-background border border-border hover:border-glow hover:shadow-emerald transition-all"
          >
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">{p.category}</span>
            <h3 className="text-lg font-bold text-foreground mt-2 mb-3">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-4 flex items-center gap-1.5 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Ver más <ExternalLink size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
