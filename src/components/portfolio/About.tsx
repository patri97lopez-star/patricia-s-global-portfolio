import { motion } from "framer-motion";
import { Scale, Globe, BookOpen } from "lucide-react";

const highlights = [
  { icon: Scale, title: "Derecho", desc: "Formación jurídica sólida con enfoque en derecho internacional y derechos humanos." },
  { icon: Globe, title: "Estudios Internacionales", desc: "Visión global de las relaciones políticas, económicas y sociales." },
  { icon: BookOpen, title: "4 Idiomas", desc: "Español, inglés, italiano y chino — comunicación sin fronteras." },
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
            Soy <strong className="text-foreground">Patricia Paniagua López</strong>, una persona curiosa,
            comprometida y con un gran interés por entender el mundo desde múltiples perspectivas.
          </p>
          <p>
            Actualmente curso el doble grado en <strong className="text-foreground">Derecho y Estudios Internacionales</strong>,
            lo que me permite combinar el rigor del análisis jurídico con una visión amplia de las dinámicas globales.
          </p>
          <p>
            Domino cuatro idiomas — español, inglés, italiano y chino — lo que me abre puertas a culturas,
            mercados y oportunidades profesionales en todo el mundo.
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
