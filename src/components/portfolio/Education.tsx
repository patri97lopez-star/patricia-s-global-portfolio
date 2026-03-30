import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const items = [
  {
    period: "2021 – Presente",
    title: "Doble Grado en Derecho y Estudios Internacionales",
    institution: "Universidad",
    desc: "Formación interdisciplinar que combina fundamentos jurídicos con análisis político, económico y social a nivel global.",
  },
  {
    period: "2019 – 2021",
    title: "Bachillerato",
    institution: "Instituto",
    desc: "Bachillerato en Ciencias Sociales con excelentes resultados académicos.",
  },
];

const Education = () => (
  <section id="education" className="py-24 px-6 bg-card/50">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Trayectoria</p>
        <h2 className="text-4xl md:text-5xl font-bold">Formación Académica</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

        <div className="space-y-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
            >
              {/* Dot */}
              <div className="absolute left-[18px] top-1 w-5 h-5 rounded-full bg-primary shadow-emerald md:left-1/2 md:-translate-x-1/2" />

              <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">{item.period}</span>
                <h3 className="text-xl font-bold mt-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5 md:justify-end">
                  <GraduationCap size={14} /> {item.institution}
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
