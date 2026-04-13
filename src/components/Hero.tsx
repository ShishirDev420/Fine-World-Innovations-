import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, Suspense } from 'react'
import ThreeGlobe from './ThreeGlobe'
import LogoWithTransparency from './LogoWithTransparency'
import logoImage from '../assets/fwi_logo.png'

/* Stagger container orchestration */
const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.6 }
  }
}

/* Individual item animation — spring-based rise with blur */
const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    filter: "blur(10px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  /* Spring-damped parallax — feels physical, not computed */
  const springConfig = { stiffness: 80, damping: 25, restDelta: 0.001 }
  const yParallax = useSpring(useTransform(scrollYProgress, [0, 1], [0, 250]), springConfig)
  const opacityFade = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scaleShrink = useTransform(scrollYProgress, [0, 0.6], [1, 0.85])

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center noise-overlay"
      style={{ perspective: "1200px" }}
    >
      {/* ===== 3D INTERACTIVE BACKGROUND ===== */}
      <Suspense fallback={
        <div className="absolute inset-0 bg-midnight flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-cyan/30 border-t-cyan rounded-full animate-spin" />
        </div>
      }>
        <ThreeGlobe />
      </Suspense>

      {/* ===== ATMOSPHERIC DEPTH LAYERS ===== */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Top-left blue nebula */}
        <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] bg-[#0a3d7f]/15 blur-[140px] rounded-full" />
        {/* Bottom-right cyan glow */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-cyan/8 blur-[120px] rounded-full" />
        {/* Center spotlight for logo */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[30%] h-[30%] bg-cyan/5 blur-[100px] rounded-full" />
      </div>

      {/* ===== GRID PATTERN SUBSTRATE ===== */}
      <div className="absolute inset-0 -z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none" />

      {/* ===== MAIN CONTENT — PARALLAX LAYER ===== */}
      <motion.div 
        style={{ y: yParallax, opacity: opacityFade, scale: scaleShrink }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center pt-32 pb-20"
      >
        {/* ANIMATED LOGO — The hero's centerpiece */}
        <motion.div 
          className="relative mb-10"
          initial={{ opacity: 0, scale: 0.7, filter: "brightness(0) blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "brightness(1.1) blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Multi-layered glow behind logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan/10 blur-[80px] rounded-full animate-pulse pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#0a3d7f]/20 blur-[60px] rounded-full pointer-events-none" />
          
          <motion.div 
            className="relative z-10"
            animate={{
              filter: [
                'drop-shadow(0 0 25px rgba(0, 229, 255, 0.2)) drop-shadow(0 0 60px rgba(10, 61, 127, 0.15)) brightness(1.6) contrast(1.2)',
                'drop-shadow(0 0 35px rgba(0, 229, 255, 0.3)) drop-shadow(0 0 80px rgba(10, 61, 127, 0.2)) brightness(1.8) contrast(1.2)',
                'drop-shadow(0 0 25px rgba(0, 229, 255, 0.2)) drop-shadow(0 0 60px rgba(10, 61, 127, 0.15)) brightness(1.6) contrast(1.2)',
              ]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <LogoWithTransparency 
              src={logoImage} 
              alt="Fine World Innovations" 
              className="w-auto max-w-[420px] md:max-w-[520px] h-auto mx-auto select-none pointer-events-none"
              threshold={230}
            />
          </motion.div>
        </motion.div>

        {/* Luminous divider beneath logo */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent mb-12"
        />

        {/* STAGGERED TEXT CONTENT */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Tagline chip */}
          <motion.div variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-semibold tracking-widest uppercase">
              Since 2017 — Mumbai, India
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.03em] leading-[0.9]"
          >
            <span className="text-gradient-warm">Our Vision</span>
            <br />
            <span className="text-white/90">to Make You</span>
            <br />
            <span className="text-gradient">Grow</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={fadeUp}
            className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed font-light"
          >
            Specializing in SEO, Data-Driven Marketing, and high-performance 
            Web Solutions that turn interactions into meaningful brand experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          >
            <a 
              href="#services"
              className="group relative px-8 py-4 bg-white text-midnight font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:shadow-[0_0_50px_rgba(0,229,255,0.15)]"
            >
              <span className="relative z-10 font-display">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            
            <a 
              href="#contact"
              className="px-8 py-4 glass-panel rounded-full text-white border border-white/10 font-bold hover:bg-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] font-display"
            >
              Contact Expert
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ===== FLOATING AMBIENT PARTICLES ===== */}
      <motion.div 
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-[22%] right-[12%] w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_20px_rgba(0,229,255,0.5)] z-[2]"
      />
      <motion.div 
        animate={{ y: [0, 12, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[45%] left-[8%] w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.4)] z-[2]"
      />
      <motion.div 
        animate={{ y: [0, -10, 0], x: [0, 5, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 3 }}
        className="absolute top-[30%] right-[20%] w-0.5 h-0.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)] z-[2]"
      />

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-cyan/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
