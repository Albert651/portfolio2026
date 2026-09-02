import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import RendezVous from './components/RendezVous.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'
import useTheme from './hooks/useTheme.js'

export default function App() {
  useReveal()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white text-slate-700 transition-colors duration-300 dark:bg-ink-900 dark:text-slate-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <RendezVous theme={theme} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
