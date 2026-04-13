import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <main className="min-h-screen bg-midnight text-white selection:bg-cyan selection:text-midnight font-sans antialiased overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Sleek CTA Footer */}
      <section className="relative w-full py-32 flex items-center justify-center bg-black overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan/10 via-black to-black pointer-events-none" />
        <div className="relative z-10 text-center px-6">
           <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Ready to Scale?</h2>
           <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto font-light">
             Partner with Fine World Innovations and bring your vision to life.
           </p>
           <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
             Start a Project
           </button>
        </div>
      </section>
    </main>
  )
}

export default App
