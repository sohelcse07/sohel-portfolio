import { useEffect } from "react";
import Hero from "./component/hero/Hero";
import Skills from "./component/skills/Skills";
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Experience from "./component/experience/Experience";
import Projects from "./component/projects/Projects";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
   <>
   <Hero />
   <Skills />
   <Experience />
   <Projects />
   <Contact />
   <Footer />
  
   </>
  );
}

export default App;