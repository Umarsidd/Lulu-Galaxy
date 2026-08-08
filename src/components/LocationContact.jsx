import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'

export default function LocationContact() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 opacity-10"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)', filter: 'blur(60px)' }} />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">Location & Contact</p>
          <h2 className="section-title">
            Find Us &<br />
            <span className="gold-text">Get In Touch</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Map + Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden gold-border"
              style={{ boxShadow: '0 0 30px rgba(212,175,55,0.15)' }}>
              <iframe
                title="Lulu Galaxy Banquet Hall Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.8065498395!2d82.1659!3d27.4305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI1JzQ5LjgiTiA4MsKwMDknNTcuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Open in Maps Button */}
            <a
              id="open-maps-btn"
              href="https://www.google.com/maps/search/Gas+Godown+Road+Dharampur+Near+Fire+Station+Balrampur+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold w-full justify-center"
              style={{ display: 'flex' }}
            >
              <ExternalLink size={16} />
              Open in Google Maps
            </a>
          </motion.div>

          {/* Right: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="glass-card-dark p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold" size={22} />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-white text-sm mb-2">Address</h3>
                  <p className="font-poppins text-white/60 text-sm leading-relaxed">
                    Gas Godown Road, Dharampur,<br />
                    Near Fire Station,<br />
                    Balrampur, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <a
              id="contact-call-btn"
              href="tel:8707408916"
              className="glass-card-dark p-6 flex gap-4 hover:border-gold/50 transition-all duration-300 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="text-gold" size={22} />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-white text-sm mb-2">Phone / WhatsApp</h3>
                <p className="font-playfair text-gold text-xl font-bold">+91 8707408916</p>
                <p className="font-poppins text-white/40 text-xs mt-1">Click to call</p>
              </div>
            </a>

            {/* Email */}
            <a
              id="contact-email-btn"
              href="mailto:ayazk56780@gmail.com"
              className="glass-card-dark p-6 flex gap-4 hover:border-gold/50 transition-all duration-300 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="text-gold" size={22} />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-white text-sm mb-2">Email</h3>
                <p className="font-poppins text-gold text-base">ayazk56780@gmail.com</p>
              </div>
            </a>

            {/* Social Media */}
            <div className="glass-card-dark p-6">
              <h3 className="font-poppins font-semibold text-white text-sm mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  id="social-instagram-venue"
                  href="https://www.instagram.com/lulu_galaxy_banquet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:border-pink-500/50 bg-white/5 hover:bg-pink-500/10 transition-all duration-300 group"
                >
                  <FaInstagram className="text-pink-400" size={18} />
                  <span className="font-poppins text-white/70 text-xs group-hover:text-white transition-colors">
                    @lulu_galaxy_banquet
                  </span>
                </a>
                <a
                  id="social-instagram-personal"
                  href="https://www.instagram.com/Ayazkhan__04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:border-pink-500/50 bg-white/5 hover:bg-pink-500/10 transition-all duration-300 group"
                >
                  <FaInstagram className="text-pink-400" size={18} />
                  <span className="font-poppins text-white/70 text-xs group-hover:text-white transition-colors">
                    @Ayazkhan__04
                  </span>
                </a>
                {/* YouTube — Coming Soon, link disabled */}
                <div
                  id="social-youtube-placeholder"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 opacity-40 cursor-not-allowed"
                  title="YouTube channel coming soon"
                >
                  <FaYoutube className="text-red-400" size={18} />
                  <span className="font-poppins text-white/50 text-xs">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-card-dark p-6">
              <h3 className="font-poppins font-semibold text-white text-sm mb-3">Availability</h3>
              <div className="space-y-2">
                {[
                  { day: 'Monday – Sunday', time: 'Open All Days' },
                  { day: 'Inquiries', time: '9:00 AM – 9:00 PM' },
                  { day: 'Events', time: 'As Per Booking' },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between">
                    <span className="font-poppins text-white/50 text-xs">{item.day}</span>
                    <span className="font-poppins text-gold text-xs font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
