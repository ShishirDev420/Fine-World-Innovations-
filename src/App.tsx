import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <motion.main 
      className="min-h-screen bg-midnight text-white font-body antialiased overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </motion.main>
  )
}

export default App
