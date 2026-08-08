import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Wind, TreePine, Car, Zap, Shield, Droplets,
  Shirt, Crown, Layout, CalendarCheck, Lamp, Mic
} from 'lucide-react'

const amenities = [
  { icon: <Wind size={24} />, title: 'Fully AC Hall', desc: 'Central air conditioning throughout' },
  { icon: <TreePine size={24} />, title: 'Outdoor Lawn', desc: 'Lush green garden space' },
  { icon: <Car size={24} />, title: 'Ample Parking', desc: 'Spacious secure parking area' },
  { icon: <Zap size={24} />, title: 'Power Backup', desc: '24×7 generator support' },
  { icon: <Shield size={24} />, title: 'CCTV Security', desc: 'Full venue surveillance' },
  { icon: <Droplets size={24} />, title: 'Clean Washrooms', desc: 'Modern hygienic facilities' },
  { icon: <Shirt size={24} />, title: 'Changing Rooms', desc: 'Private preparation rooms' },
  { icon: <Crown size={24} />, title: 'Bridal Suite', desc: 'Luxurious bridal dressing room' },
  { icon: <Layout size={24} />, title: 'Premium Seating', desc: 'Comfortable elegant seating' },
  { icon: <CalendarCheck size={24} />, title: 'Event Management', desc: 'Professional coordination team' },
  { icon: <Lamp size={24} />, title: 'Premium Lighting', desc: 'Ambiance lighting systems' },
  { icon: <Mic size={24} />, title: 'AV Equipment', desc: 'Sound & projection systems' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
}

export default function Amenities() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="amenities" className="section-padding animated-bg relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(11,61,46,0.6) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">Amenities</p>
          <h2 className="section-title">
            World-Class Facilities<br />
            <span className="gold-text">At Your Service</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-white/55 font-poppins text-sm max-w-xl mx-auto mt-4">
            Every amenity thoughtfully designed to ensure your guests experience the pinnacle of comfort and luxury.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {amenities.map((amenity) => (
            <motion.div key={amenity.title} variants={itemVariants} className="amenity-card group">
              <div className="text-gold group-hover:scale-125 transition-transform duration-300">
                {amenity.icon}
              </div>
              <h3 className="font-poppins font-semibold text-white text-xs text-center leading-tight">
                {amenity.title}
              </h3>
              <p className="font-poppins text-white/40 text-xs text-center leading-relaxed hidden lg:block">
                {amenity.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 glass-card-dark p-8 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '2000–2500', label: 'Guest Capacity' },
              { val: 'Indoor + Outdoor', label: 'Venue Options' },
              { val: 'Fully AC', label: 'Climate Controlled' },
              { val: '24×7', label: 'Backup Power' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-playfair text-gold font-bold text-lg md:text-xl">{item.val}</div>
                <div className="font-poppins text-white/50 text-xs mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
