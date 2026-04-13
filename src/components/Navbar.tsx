import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 pointer-events-none"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-white pointer-events-auto cursor-pointer drop-shadow-md">
          FW<span className="text-cyan">I</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 pointer-events-auto">
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 hover:bg-white text-white hover:text-midnight font-semibold transition-all backdrop-blur-md">
            Let's Talk
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
