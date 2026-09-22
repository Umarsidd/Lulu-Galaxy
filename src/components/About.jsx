import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Wind, Car, Zap, TreePine, Star } from 'lucide-react'

/* ── Animated Counter ── */
function Counter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <span ref={ref} className="counter-value">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const features = [
  {
    icon: <Wind size={26} className="text-gold" />,
    title: 'Fully AC Indoor Hall',
    desc: 'Premium air-conditioned banquet hall for a comfortable celebration in any season.',
  },
  {
    icon: <TreePine size={26} className="text-gold" />,
    title: 'Beautiful Outdoor Lawn',
    desc: 'Lush outdoor garden space perfect for daytime ceremonies and evening receptions.',
  },
  {
    icon: <Car size={26} className="text-gold" />,
    title: 'Spacious Parking',
    desc: 'Ample parking space to accommodate vehicles of all your valued guests.',
  },
  {
    icon: <Zap size={26} className="text-gold" />,
    title: '24×7 Generator Backup',
    desc: 'Uninterrupted power supply ensuring your event runs flawlessly round the clock.',
  },
]

const stats = [
  { end: 2500, suffix: '+', label: 'Guest Capacity', icon: <Users className="text-gold" size={28} /> },
  { end: 10, suffix: '+', label: 'Event Types', icon: <Star className="text-gold" size={28} /> },
  { end: 15, suffix: '+', label: 'Services Offered', icon: <Wind className="text-gold" size={28} /> },
  { end: 1, suffix: 'st', label: 'Premium Venue in Balrampur', icon: <TreePine className="text-gold" size={28} /> },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding animated-bg relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)', filter: 'blur(80px)' }} />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="section-tag mb-3">About Us</motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            Balrampur's Most Elegant<br />
            <span className="gold-text">Event Destination</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="section-divider mx-auto" />
          <motion.p
            variants={itemVariants}
            className="text-white/60 font-poppins text-base max-w-3xl mx-auto leading-relaxed mt-4"
          >
            Lulu Galaxy Banquet Hall & Hotel is one of Balrampur's premier event venues offering elegant 
            indoor and outdoor spaces for weddings, receptions, engagements, birthdays, corporate events, 
            and family celebrations. Every detail is crafted to make your special occasion truly unforgettable.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass-card-dark p-3.5 sm:p-6 text-center group hover:border-gold/50 transition-all duration-300 flex flex-col justify-center"
            >
              <div className="flex justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="counter-card p-0">
                <Counter end={stat.end} suffix={stat.suffix} />
                <p className="text-white/60 font-poppins text-[11px] sm:text-xs mt-1 sm:mt-2 leading-tight">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features + Image */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-3.5 sm:space-y-5"
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-playfair text-xl sm:text-2xl text-white mb-4 sm:mb-6">
                Why Choose <span className="gold-text">Lulu Galaxy?</span>
              </h3>
            </motion.div>
            {features.map((f) => (
              <motion.div key={f.title} variants={itemVariants} className="feature-badge">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">{f.title}</h4>
                  <p className="font-poppins text-white/55 text-[11px] sm:text-xs leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-4 lg:mt-0"
          >
            <div className="glass-card-dark p-5 sm:p-8 text-center relative overflow-hidden">
              {/* Decorative gold corner ornaments */}
              <div className="absolute top-3 left-3 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-gold/50 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-t-2 border-gold/50 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-b-2 border-gold/50 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-gold/50 rounded-br-lg" />

              {/* Logo symbol */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
                style={{ boxShadow: '0 0 40px rgba(212,175,55,0.4)' }}>
                <span className="font-playfair text-black font-bold text-2xl sm:text-3xl">LG</span>
              </div>

              <h3 className="font-playfair text-white text-xl sm:text-2xl mb-1 sm:mb-2">Lulu Galaxy</h3>
              <p className="text-gold font-poppins text-xs sm:text-sm tracking-widest mb-4 sm:mb-6">BANQUET HALL & HOTEL</p>
              <div className="section-divider mx-auto mb-4 sm:mb-6" />

              <blockquote className="font-playfair italic text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                "Where Every Celebration Becomes a Beautiful Memory."
              </blockquote>

              <div className="flex justify-center gap-6 text-center">
                <div>
                  <div className="text-gold font-playfair text-lg sm:text-xl font-bold">2025</div>
                  <div className="text-white/40 text-[11px] sm:text-xs font-poppins">Established</div>
                </div>
                <div className="w-px bg-gold/20" />
                <div>
                  <div className="text-gold font-playfair text-lg sm:text-xl font-bold">Balrampur</div>
                  <div className="text-white/40 text-[11px] sm:text-xs font-poppins">Uttar Pradesh</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
