import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Search, Megaphone, PenTool, Layout, Mail, Share2, ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: "SEO Optimization",
    desc: "Enhance your website's visibility and rank higher in search engine results. Thorough keyword research, on-page optimization, and authoritative link building.",
    icon: Search,
    accent: "#00e5ff",
    gradient: "from-cyan/15 via-transparent to-transparent",
  },
  {
    title: "Pay-Per-Click Advertising",
    desc: "Maximize ROI with targeted campaigns across Google Ads, Bing, and social channels to drive qualified traffic and conversions.",
    icon: Megaphone,
    accent: "#64b5f6",
    gradient: "from-blue-400/15 via-transparent to-transparent",
  },
  {
    title: "Content Marketing",
    desc: "Fuel your digital presence with high-quality blogs, articles, videos, and infographics. We tell your story to the right audience.",
    icon: PenTool,
    accent: "#a78bfa",
    gradient: "from-violet-400/15 via-transparent to-transparent",
  },
  {
    title: "Website Design & Dev",
    desc: "Visually stunning, user-friendly websites. From UX/UI design to responsive development and e-commerce integration.",
    icon: Layout,
    accent: "#34d399",
    gradient: "from-emerald-400/15 via-transparent to-transparent",
  },
  {
    title: "Email Marketing",
    desc: "Nurture leads and foster relationships with personalized automation to deliver the right message at the perfect time.",
    icon: Mail,
    accent: "#f472b6",
    gradient: "from-pink-400/15 via-transparent to-transparent",
  },
  {
    title: "Social Media Marketing",
    desc: "Build brand loyalty through strategic community management, influencer partnerships, and impactful paid social campaigns.",
    icon: Share2,
    accent: "#fbbf24",
    gradient: "from-amber-400/15 via-transparent to-transparent",
  },
]

/* Individual service card with magnetic hover effect */
function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 lg:p-10 overflow-hidden cursor-pointer"
    >
      {/* Radial spotlight that follows cursor */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, ${service.accent}10 0%, transparent 60%)`,
        }}
      />
      
      {/* Top edge glow on hover */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        {/* Icon container */}
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5 transition-all duration-300 group-hover:border-white/10 group-hover:shadow-lg"
          style={{ 
            backgroundColor: `${service.accent}10`,
            boxShadow: `0 0 0 0 ${service.accent}00`,
          }}
        >
          <service.icon 
            className="w-6 h-6 transition-colors duration-300" 
            style={{ color: service.accent }} 
          />
        </div>

        {/* Title + arrow */}
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-white transition-colors duration-300">
            {service.title}
          </h3>
          <ArrowUpRight 
            className="w-5 h-5 text-white/0 group-hover:text-white/40 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" 
          />
        </div>

        {/* Description */}
        <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
          {service.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section 
      id="services" 
      className="relative w-full py-32 lg:py-44 bg-surface overflow-hidden noise-overlay"
    >
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      {/* Background atmosphere */}
      <div className="absolute top-1/3 left-[-10%] w-[40%] h-[40%] bg-indigo/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-20 lg:mb-28"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-semibold tracking-widest uppercase mb-6">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6">
            Capabilities
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            A comprehensive suite of digital services designed to accelerate 
            your growth and transform your brand.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
