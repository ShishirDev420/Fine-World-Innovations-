import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: "2017", label: "Founded" },
  { value: "50+", label: "Clients Served" },
  { value: "6+", label: "Core Services" },
  { value: "Mumbai", label: "Headquarters" },
]

const reasons = [
  {
    title: "Expertise",
    desc: "Seasoned professionals — strategists, analysts, creatives, and developers — all under one roof.",
  },
  {
    title: "Customized Approach",
    desc: "Tailor-made strategies aligned with your specific business goals. No cookie-cutter playbooks.",
  },
  {
    title: "Cutting-Edge Solutions",
    desc: "Leveraging the latest technologies and market trends to keep you ahead of the curve.",
  },
  {
    title: "Transparent Communication",
    desc: "We keep you informed every step of the way with clear reporting and open dialogue.",
  },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineScaleY = useTransform(scrollYProgress, [0.1, 0.6], [0, 1])

  return (
    <section 
      id="about"
      ref={containerRef} 
      className="relative w-full py-32 lg:py-44 bg-midnight overflow-hidden noise-overlay"
    >
      {/* Background atmosphere */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-indigo/8 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top section: Headline + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-semibold tracking-widest uppercase mb-6">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6">
              Leading Digital
              <br />
              Marketing Agency
              <br />
              <span className="text-gradient">Since 2017</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="flex flex-col justify-center"
          >
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light mb-8">
              Whether you're a startup looking to establish your online presence, or a seasoned enterprise 
              aiming to amplify your digital footprint, our team of experts is dedicated to delivering 
              cutting-edge strategies that exceed expectations.
            </p>
            <p className="text-gray-500 text-base leading-relaxed font-light">
              Based in Malad West, Mumbai — we serve businesses of all sizes with 
              customized digital marketing solutions that drive real, measurable results.
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 lg:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } }
              }}
              className="text-center lg:text-left p-6 rounded-2xl glass-panel"
            >
              <div className="font-display text-3xl md:text-4xl font-extrabold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm tracking-widest uppercase font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us — Vertical timeline with animated line */}
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why Choose Us
            </h3>
            <p className="text-gray-500 text-lg font-light">
              Four pillars that define our approach to your growth.
            </p>
          </motion.div>

          {/* Animated vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-[0.5px] top-40 bottom-0 w-[1px] bg-white/5 origin-top">
            <motion.div 
              style={{ scaleY: lineScaleY }}
              className="absolute inset-0 bg-gradient-to-b from-cyan/40 to-transparent origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {reasons.map((r, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
                className={`relative pl-16 md:pl-0 md:w-[45%] ${
                  idx % 2 === 0 ? 'md:mr-auto md:text-right md:pr-12' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-2 w-3 h-3 rounded-full bg-cyan/60 border-2 border-midnight shadow-[0_0_12px_rgba(0,229,255,0.4)] left-5 md:left-auto ${
                  idx % 2 === 0 ? 'md:right-[-6.5px]' : 'md:left-[-6.5px]'
                }`} />
                
                <span className="block text-cyan/60 text-xs font-semibold tracking-widest uppercase mb-2">
                  0{idx + 1}
                </span>
                <h4 className="font-display text-xl md:text-2xl font-bold mb-3 text-white">
                  {r.title}
                </h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
