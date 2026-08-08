import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { Phone } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <>
      {/* WhatsApp FAB */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="glass-card px-4 py-3 text-right"
            >
              <p className="font-poppins text-white text-sm font-semibold">Chat on WhatsApp</p>
              <p className="font-poppins text-white/50 text-xs">+91 8707408916</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <a
          id="whatsapp-fab"
          href="https://wa.me/918707408916?text=Hello! I would like to inquire about booking Lulu Galaxy Banquet Hall."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={30} color="white" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping"
            style={{ background: 'rgba(37,211,102,0.4)' }} />
        </a>
      </div>

      {/* Fixed Mobile Call Button (mobile only) */}
      <div className="fixed bottom-6 left-6 z-50 md:hidden">
        <a
          id="mobile-call-btn"
          href="tel:8707408916"
          className="flex items-center gap-2 px-5 py-3.5 rounded-full font-poppins font-semibold text-sm text-white"
          style={{
            background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
            color: '#111',
            boxShadow: '0 4px 20px rgba(212,175,55,0.5)',
          }}
        >
          <Phone size={18} />
          Call Now
        </a>
      </div>
    </>
  )
}
