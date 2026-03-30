import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const items = [
  {
    period: "2023 – Presente",
    role: "Prácticas en Departamento Jurídico",
    company: "Organización internacional",
    tasks: ["Análisis de normativa internacional", "Redacción de informes jurídicos", "Apoyo en investigación legal"],
  },
  {
    period: "2022 – 2023",
    role: "Voluntariado en ONG",
    company: "Organización sin ánimo de lucro",
    tasks: ["Asistencia legal a personas vulnerables", "Mediación intercultural", "Traducción de documentos"],
  },
];

const Experience = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Trayectoria</p>
        <h2 className="text-4xl md:text-5xl font-bold">Experiencia</h2>
      </motion.div>

      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-6 rounded-xl bg-card border border-border hover:border-glow transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                <Briefcase size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">{item.period}</span>
                <h3 className="text-lg font-bold text-foreground mt-1">{item.role}</h3>
                <p className="text-sm text-muted-foreground">{item.company}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.tasks.map((t, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
