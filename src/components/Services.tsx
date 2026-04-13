import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Search, Megaphone, PenTool, Layout, Mail, Share2 } from 'lucide-react'

const services = [
  {
    title: "SEO Optimization",
    desc: "Enhance your website's visibility and rank higher in search engine results. We conduct thorough keyword research and optimize on-page elements.",
    icon: Search,
    color: "from-blue-500/20 to-blue-500/0"
  },
  {
    title: "Pay-Per-Click Advertising",
    desc: "Maximize ROI with targeted campaigns. We manage ads across Google, Bing, and social channels to drive qualified traffic.",
    icon: Megaphone,
    color: "from-cyan/20 to-cyan/0"
  },
  {
    title: "Content Marketing",
    desc: "Fuel your digital presence with high-quality content. Blogs, articles, infographics—we tell your story to the right audience.",
    icon: PenTool,
    color: "from-purple-500/20 to-purple-500/0"
  },
  {
    title: "Website Design & Dev",
    desc: "Visually stunning, user-friendly websites. From UX/UI design to responsive development and e-commerce integration.",
    icon: Layout,
    color: "from-emerald-500/20 to-emerald-500/0"
  },
  {
    title: "Email Marketing",
    desc: "Nurture leads and foster relationships with personalized automation to deliver the right message at the perfect time.",
    icon: Mail,
    color: "from-rose-500/20 to-rose-500/0"
  },
  {
    title: "Social Media Marketing",
    desc: "Build brand loyalty through strategic community management, influencer partnerships, and impactful paid social ads.",
    icon: Share2,
    color: "from-amber-500/20 to-amber-500/0"
  }
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-midnight border-t border-white/5 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-indigo/10 blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 lg:mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Capabilities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            A comprehensive suite of digital services designed to accelerate your growth and transform your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 overflow-hidden backdrop-blur-sm"
            >
              {/* Hover gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${srv.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/5">
                  <srv.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-cyan transition-colors duration-300">
                  {srv.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
