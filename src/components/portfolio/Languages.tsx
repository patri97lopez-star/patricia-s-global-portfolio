import { motion } from "framer-motion";

const langs = [
  { name: "Español", level: "Nativo", flag: "🇪🇸", pct: 100 },
  { name: "Inglés", level: "Avanzado (C1)", flag: "🇬🇧", pct: 90 },
  { name: "Italiano", level: "Intermedio-Alto (B2)", flag: "🇮🇹", pct: 75 },
  { name: "Chino (Mandarín)", level: "Intermedio (B1)", flag: "🇨🇳", pct: 55 },
];

const Languages = () => (
  <section id="languages" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Comunicación global</p>
        <h2 className="text-4xl md:text-5xl font-bold">Idiomas</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {langs.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="p-6 rounded-xl bg-card border border-border hover:border-glow transition-colors text-center"
          >
            <span className="text-4xl mb-3 block">{l.flag}</span>
            <h3 className="text-lg font-bold text-foreground">{l.name}</h3>
            <p className="text-sm text-primary font-medium mt-1">{l.level}</p>
            <div className="mt-4 h-1.5 rounded-full bg-secondary overflow-hidden mx-auto max-w-[180px]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${l.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.12 }}
                className="h-full rounded-full bg-primary"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Languages;
