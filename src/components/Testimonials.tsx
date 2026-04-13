import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "We have been associated with Fine World Innovations for 5-6 years now. Their promptness and fruitful digital marketing solutions have been exceptional.",
    name: "Dr. Clinic Owner",
    role: "Mumbai & Jalgaon",
    stars: 5,
  },
  {
    quote: "They have consistently improved our online presence and helped us build a quality customer base over the past 3-4 years. Highly recommended.",
    name: "Google Profile Client",
    role: "Verified Review",
    stars: 5,
  },
  {
    quote: "Ms. Farah and Ms. Swati have been incredibly cooperative, hardworking, and helpful throughout our entire engagement. A fantastic team to work with.",
    name: "Business Client",
    role: "Mumbai",
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="relative w-full py-32 lg:py-44 bg-midnight overflow-hidden noise-overlay"
    >
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background atmosphere */}
      <div className="absolute bottom-0 right-[-10%] w-[35%] h-[50%] bg-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-28"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-semibold tracking-widest uppercase mb-6">
            Client Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05]">
            Trusted by <span className="text-gradient">Businesses</span>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] as any }}
              className="group relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 lg:p-10 overflow-hidden hover:border-white/10 transition-all duration-500"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/15 to-transparent" />

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-cyan/20 mb-6" />
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-300 font-light leading-relaxed mb-8 text-sm md:text-base">
                "{t.quote}"
              </p>

              {/* Attribution */}
              <div className="border-t border-white/5 pt-6">
                <div className="font-display font-bold text-white">{t.name}</div>
                <div className="text-gray-500 text-sm">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
