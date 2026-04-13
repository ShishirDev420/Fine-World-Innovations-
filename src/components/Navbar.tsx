import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import LogoWithTransparency from './LogoWithTransparency'
import logoImage from '../assets/fwi_logo.png'

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-midnight/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo — the ACTUAL logo, not text */}
          <motion.a 
            href="#home"
            className="relative z-10 flex items-center gap-3 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <LogoWithTransparency 
              src={logoImage} 
              alt="Fine World Innovations" 
              className={`h-10 w-auto object-contain transition-all duration-300 ${
                scrolled ? 'brightness-110' : 'brightness-100'
              }`}
              style={{ filter: 'brightness(1.5) contrast(1.1) drop-shadow(0 0 8px rgba(0, 229, 255, 0.15))' }}
              threshold={230}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan rounded-full group-hover:w-6 transition-all duration-300" />
              </motion.a>
            ))}
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan/20 to-transparent border border-cyan/30 text-cyan font-semibold text-sm hover:bg-cyan/10 hover:border-cyan/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)] transition-all duration-300"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span 
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white rounded-full"
            />
            <motion.span 
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-white rounded-full"
            />
            <motion.span 
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white rounded-full"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        className="fixed inset-0 z-40 bg-midnight/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {navLinks.map((link, idx) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: idx * 0.1 }}
            className="text-3xl font-display font-bold text-white hover:text-cyan transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
        <motion.a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-4 px-8 py-3 rounded-full border border-cyan/30 text-cyan font-bold"
        >
          Let's Talk
        </motion.a>
      </motion.div>
    </>
  )
}
