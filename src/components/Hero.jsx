import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle, Calendar } from 'lucide-react'

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image / Ambient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-10000 opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80')`,
        }}
      />

      {/* Dark Ambient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* Subtle Glowing Radial Background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-20 z-1"
        style={{
          background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container-custom w-full">
        <div className="min-h-screen flex flex-col items-center justify-center text-center py-24">

          {/* Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 bg-white/5 backdrop-blur-md mb-8 shadow-lg shadow-gold/5"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-poppins font-semibold tracking-widest uppercase">
              Premium Venue • Est. 2025 • Balrampur, UP
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-playfair text-white font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)' }}
          >
            Celebrate Life's Most{' '}
            <span className="gold-shimmer">Beautiful Moments</span>
            <br />
            at Lulu Galaxy Banquet
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-poppins text-white/80 text-lg md:text-xl max-w-2xl mb-3 italic font-light"
          >
            "Where Every Celebration Becomes a Beautiful Memory."
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-poppins text-white/55 text-sm md:text-base max-w-xl mb-10"
          >
            Indoor Hall + Outdoor Lawn • Capacity 2000–2500 Guests • Fully AC • 24×7 Generator Backup
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <button
              id="hero-book-btn"
              onClick={() => handleScroll('#booking')}
              className="btn-gold text-base px-8 py-4 shadow-xl shadow-gold/20"
            >
              <Calendar size={18} />
              Book Your Event Now
            </button>
            <a
              id="hero-whatsapp-btn"
              href="https://wa.me/918707408916"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-base px-8 py-4"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Key Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-16 p-6 rounded-2xl glass-card border border-gold/30 max-w-4xl w-full"
          >
            {[
              { num: '2500+', label: 'Guest Capacity' },
              { num: '10+', label: 'Event Types' },
              { num: '24/7', label: 'Power Backup' },
              { num: '100%', label: 'Customizable' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-playfair text-2xl md:text-3xl font-bold text-gold">{stat.num}</div>
                <div className="font-poppins text-white/60 text-xs tracking-wider uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => handleScroll('#about')}
      >
        <span className="text-white/40 text-xs font-poppins tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="text-gold scroll-indicator" size={22} />
      </motion.div>
    </section>
  )
}
