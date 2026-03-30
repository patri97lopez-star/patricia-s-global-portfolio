import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Languages from "@/components/portfolio/Languages";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Experience />
    <Skills />
    <Languages />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default Index;
