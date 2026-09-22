import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Heart, Star, Gem, Sun, Leaf, Gift, Briefcase, Users,
  Utensils, Sparkles, Music, Camera, Crown, BedDouble
} from 'lucide-react'

const services = [
  { icon: <Heart size={26} />, title: 'Wedding', desc: 'Fairy-tale weddings crafted with love and elegance' },
  { icon: <Star size={26} />, title: 'Reception', desc: 'Grand receptions for unforgettable first celebrations' },
  { icon: <Gem size={26} />, title: 'Engagement', desc: 'Beautiful engagement ceremonies to mark new beginnings' },
  { icon: <Sun size={26} />, title: 'Haldi', desc: 'Vibrant and colorful haldi ceremony arrangements' },
  { icon: <Leaf size={26} />, title: 'Mehndi', desc: 'Elegant mehndi setups with floral décor themes' },
  { icon: <Gift size={26} />, title: 'Birthday', desc: 'Spectacular birthday events for all age groups' },
  { icon: <Heart size={26} />, title: 'Anniversary', desc: 'Celebrate milestones with romantic ambiance' },
  { icon: <Briefcase size={26} />, title: 'Corporate Events', desc: 'Professional conference & corporate gathering setups' },
  { icon: <Users size={26} />, title: 'Family Gatherings', desc: 'Warm and spacious settings for family reunions' },
  { icon: <Utensils size={26} />, title: 'Catering', desc: 'Exquisite in-house catering with diverse menus' },
  { icon: <Sparkles size={26} />, title: 'Stage Decoration', desc: 'Breathtaking stage designs for every occasion' },
  { icon: <Music size={26} />, title: 'DJ & Sound', desc: 'Professional DJ and premium sound systems' },
  { icon: <Camera size={26} />, title: 'Photography', desc: 'Expert photography & videography services' },
  { icon: <Crown size={26} />, title: 'Bridal Room', desc: 'Luxuriously appointed bridal suite for the special day' },
  { icon: <BedDouble size={26} />, title: 'Guest Rooms', desc: 'Comfortable AC & Non-AC rooms for outstation guests' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)', filter: 'blur(100px)' }} />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">Our Services</p>
          <h2 className="section-title">
            Everything You Need for<br />
            <span className="gold-text">Your Perfect Event</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-white/55 font-poppins text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            From intimate family gatherings to grand wedding celebrations, we offer comprehensive
            services to make every moment extraordinary.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants} className="service-card flex flex-col items-center justify-center">
              <div className="icon-wrap text-gold">
                {service.icon}
              </div>
              <h3 className="font-poppins font-semibold text-white text-xs sm:text-sm mb-1 sm:mb-2 leading-snug">{service.title}</h3>
              <p className="font-poppins text-white/45 text-[11px] sm:text-xs leading-relaxed hidden md:block">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-white/50 font-poppins text-sm mb-6">
            Don't see what you're looking for? We customize every event to your vision.
          </p>
          <a
            id="services-contact-btn"
            href="https://wa.me/918707408916?text=Hello! I would like to inquire about your services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Discuss Your Event
          </a>
        </motion.div>
      </div>
    </section>
  )
}
