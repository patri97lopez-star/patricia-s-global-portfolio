import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden pt-16">
    {/* Decorative circles */}
    <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-primary/3 blur-3xl" />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-6"
      >
        Portfolio Profesional
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-primary"
      >
        <span className="text-foreground">Patricia</span>{" "}
        <span className="text-gradient-emerald">Paniagua</span>{" "}
        <span className="block text-3xl md:text-5xl font-normal mt-2 text-primary/70">López</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-lg md:text-xl text-primary/60 max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        Profesional comprometida y adaptable, con sólidas habilidades en{" "}
        <strong className="text-primary">Derecho</strong>,{" "}
        <strong className="text-primary">Estudios Internacionales</strong> e{" "}
        <strong className="text-primary">Inteligencia Artificial</strong>. Multilingüe, con visión global y pasión por la justicia.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contact"
          className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Contactar
        </a>
        <a
          href="#about"
          className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-glow text-foreground font-medium hover:bg-secondary transition-colors"
        >
          Conocer más
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16"
      >
        <a href="#about" className="inline-block text-muted-foreground animate-bounce">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
