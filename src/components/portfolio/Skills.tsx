import { motion } from "framer-motion";

const skills = [
  { name: "Derecho Internacional", level: 90 },
  { name: "Derechos Humanos", level: 85 },
  { name: "Investigación Jurídica", level: 88 },
  { name: "Mediación y Negociación", level: 80 },
  { name: "Oratoria", level: 82 },
  { name: "Análisis Político", level: 78 },
];

const Skills = () => (
  <section className="py-24 px-6 bg-card/50">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Competencias</p>
        <h2 className="text-4xl md:text-5xl font-bold">Habilidades</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{s.name}</span>
              <span className="text-xs text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="h-full rounded-full bg-primary"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
