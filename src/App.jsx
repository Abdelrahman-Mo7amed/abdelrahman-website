import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Experience from './components/Experience/Experience.jsx'
import TestimonialsSection from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import { ThemeProvider } from "./context/ThemeContext.jsx";


function App(){
  return(
    <>
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <Projects />
      <Skills />
      <TestimonialsSection />
      <Contact />
      <Footer />
    </ThemeProvider>
    </>
  )
}

export default App;