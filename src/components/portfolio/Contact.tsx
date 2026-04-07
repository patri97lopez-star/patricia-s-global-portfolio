import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Hablemos</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          ¿Tienes alguna propuesta, pregunta o simplemente quieres conectar?
          No dudes en escribirme. Estaré encantada de conversar.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
      >
        <a
          href="mailto:patri97lopez@gmail.com"
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-glow transition-colors"
        >
          <Mail size={20} className="text-primary" />
          <span className="text-sm text-foreground">patri97lopez@gmail.com</span>
        </a>
        <a
          href="tel:+34629906810"
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-glow transition-colors"
        >
          <Phone size={20} className="text-primary" />
          <span className="text-sm text-foreground">629 906 810</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-glow transition-colors"
        >
          <Linkedin size={20} className="text-primary" />
          <span className="text-sm text-foreground">LinkedIn</span>
        </a>
        <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border">
          <MapPin size={20} className="text-primary" />
          <span className="text-sm text-foreground">Polán, Toledo</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
