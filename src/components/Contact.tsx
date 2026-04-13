import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import LogoWithTransparency from './LogoWithTransparency'
import logoImage from '../assets/fwi_logo.png'

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "fineworldinnovations@gmail.com",
    href: "mailto:fineworldinnovations@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9136767781",
    href: "tel:+919136767781",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Office No. 5, Saptarshi Towers, Malad West, Mumbai 400095",
    href: "https://maps.google.com/?q=Saptarshi+Towers+Malad+West+Mumbai",
  },
]

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative w-full overflow-hidden noise-overlay"
    >
      {/* Section border */}
      <div className="absolute top-0 left-0 right-0 section-divider z-10" />

      {/* ===== CTA BANNER ===== */}
      <div className="relative py-32 lg:py-44 bg-surface">
        {/* Dramatic radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(0,229,255,0.06)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-semibold tracking-widest uppercase mb-8">
                Get Started
              </span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-8">
                Ready to <span className="text-gradient">Scale?</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed mb-12">
                Partner with Fine World Innovations and bring your vision to life. 
                Let's turn your brand into an unstoppable digital force.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a 
                  href="mailto:fineworldinnovations@gmail.com"
                  className="group relative px-10 py-5 bg-white text-midnight font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_60px_rgba(255,255,255,0.08)] hover:shadow-[0_0_80px_rgba(0,229,255,0.15)] font-display text-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Project
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
                
                <a 
                  href="https://wa.me/919136767781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 glass-panel rounded-full text-white border border-white/10 font-bold hover:bg-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] font-display text-lg"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-16 bg-midnight border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <LogoWithTransparency 
                src={logoImage} 
                alt="Fine World Innovations" 
                className="h-12 w-auto mb-6"
                style={{ filter: 'brightness(1.4) contrast(1.1)' }}
                threshold={230}
              />
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Leading digital marketing agency specializing in customized strategies 
                to elevate brand visibility, engage audiences, and drive results.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-display font-bold text-white mb-6">Navigation</h4>
              <div className="flex flex-col gap-3">
                {["Home", "About", "Services", "Testimonials"].map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-cyan transition-colors text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-display font-bold text-white mb-6">Services</h4>
              <div className="flex flex-col gap-3">
                {["SEO Optimization", "PPC Advertising", "Content Marketing", "Web Development", "Email Marketing", "Social Media"].map(s => (
                  <a key={s} href="#services" className="text-gray-500 hover:text-cyan transition-colors text-sm">
                    {s}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-display font-bold text-white mb-6">Contact</h4>
              <div className="flex flex-col gap-4">
                {contacts.map(c => (
                  <a 
                    key={c.label} 
                    href={c.href}
                    target={c.label === "Office" ? "_blank" : undefined}
                    rel={c.label === "Office" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 text-gray-500 hover:text-cyan transition-colors text-sm group"
                  >
                    <c.icon className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{c.value}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Fine World Innovations. All rights reserved.
            </p>
            <p className="text-gray-700 text-xs">
              Malad West, Mumbai, Maharashtra
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}
