import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Elaboración de informes técnicos jurídicos",
    category: "Derecho",
    desc: "Experiencia en redacción de informes técnicos y documentación jurídica durante las prácticas en bufete de abogados y juzgados.",
  },
  {
    title: "Gestión documental en Juzgados",
    category: "Administración Judicial",
    desc: "Gestión de documentos, actas y expedientes judiciales en los Juzgados de Toledo como auxiliar de administración.",
  },
  {
    title: "Formación en IA y Marketing Digital",
    category: "Tecnología",
    desc: "Grado Superior en Inteligencia Artificial y Marketing por Fedeto y la Universidad de Nebrija, combinando tecnología con estrategia comercial.",
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
