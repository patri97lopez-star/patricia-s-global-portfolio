import { motion } from "framer-motion";
import { Scale, Globe, BookOpen, Brain } from "lucide-react";

const highlights = [
  { icon: Scale, title: "Derecho", desc: "Doble grado en Derecho y Estudios Internacionales por la UCLM con muy buenas calificaciones." },
  { icon: Globe, title: "Perfil Internacional", desc: "Nivel C1 de inglés (Cambridge), italiano y chino en curso. Capacidad para trabajar en entornos bilingües." },
  { icon: Brain, title: "IA y Marketing", desc: "Grado Superior en Inteligencia Artificial y Marketing por Fedeto y Universidad de Nebrija." },
  { icon: BookOpen, title: "Investigación", desc: "Experiencia en elaboración de informes técnicos y documentación jurídica." },
];

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Conóceme</p>
        <h2 className="text-4xl md:text-5xl font-bold">Sobre mí</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            Soy <strong className="text-foreground">Patricia Paniagua López</strong>, una profesional altamente
            comprometida y adaptable, con sólidas habilidades de trabajo en equipo, comunicación y resolución de problemas.
          </p>
          <p>
            Cursé el doble grado en <strong className="text-foreground">Derecho y Estudios Internacionales</strong> en
            la Universidad de Castilla-La Mancha, con muy buenas calificaciones. Además, estoy formándome en{" "}
            <strong className="text-foreground">Inteligencia Artificial y Marketing</strong>.
          </p>
          <p>
            Asumo rápidamente nuevas responsabilidades, entrego resultados de calidad bajo presión y tengo muchas ganas
            de aportar mi energía y dedicación a cada proyecto, añadiendo valor desde el primer día.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-glow transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <h.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
