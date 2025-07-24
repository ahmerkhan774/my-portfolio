import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import SkillsAndServices from "../components/SkillsAndServices";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SkillsAndServices />
      <Projects />
      <Experience />
        <Certifications /> 
      <Contact />
      <Footer />
    </>
  );
}
