import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import heroImage from '../assets/hero.png'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-midnight pt-20">
      
      {/* Background gradients for premium Next.js aesthetic */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo/30 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      
      {/* Image Container with Parallax */}
      <motion.div 
        style={{ y: imageY, opacity }}
        className="absolute inset-0 w-full h-full z-0 flex items-center justify-center opacity-40 mix-blend-luminosity"
      >
        <motion.div
           initial={{ scale: 1.1, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-full h-full relative"
        >
          <img 
            src={heroImage} 
            alt="Fine World Innovations Logo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/20 via-midnight/60 to-midnight" />
        </motion.div>
      </motion.div>

      {/* Content Overlay */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center mt-[-10vh]"
      >
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
           className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 inline-flex items-center gap-2"
        >
           <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
           <span className="text-sm uppercase tracking-widest text-gray-300 font-medium">Fine World Innovations</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight drop-shadow-2xl"
        >
          Elevate Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Digital Presence</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Comprehensive digital marketing, SEO, and web development. 
          We craft custom strategies that engage audiences and drive measurable results.
        </motion.p>
        
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1 }}
           className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="px-8 py-4 bg-white text-midnight hover:bg-gray-200 font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Explore Services
          </button>
          
          <button className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95">
            Get in touch
          </button>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>
    </section>
  )
}
