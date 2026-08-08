import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader, Phone, MessageCircle, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'

// ─────────────────────────────────────────
// EMAILJS CONFIGURATION
// Replace the values below after setting up your EmailJS account:
// 1. Go to https://www.emailjs.com and sign up
// 2. Create a new Email Service (connect Gmail: ayazk56780@gmail.com)
// 3. Create an Email Template with variables:
//    {{from_name}}, {{phone}}, {{event_date}}, {{event_type}}, {{guest_count}}, {{message}}
// 4. Replace the three placeholder strings below with your actual IDs
// ─────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const eventTypes = [
  'Wedding','Reception','Engagement','Haldi','Mehndi',
  'Birthday','Anniversary','Corporate Event','Family Gathering','Other',
]

const initialForm = {
  name: '', phone: '', event_date: '', event_type: '', guest_count: '', message: '',
}

export default function BookingForm() {
  const [form, setForm]     = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const ref     = useRef()
  const formRef = useRef()
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="section-padding animated-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 opacity-10"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 opacity-10"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)', filter: 'blur(80px)' }} />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-tag mb-3">Book Now</p>
            <h2 className="section-title mb-6">
              Reserve Your<br />
              <span className="gold-text">Special Date</span>
            </h2>
            <div className="section-divider" />
            <p className="text-white/55 font-poppins text-sm mt-6 leading-relaxed mb-8">
              Fill out the inquiry form and our event specialist will contact you within 24 hours
              to discuss your requirements and create the perfect celebration package.
            </p>

            {/* Quick contact links */}
            <div className="space-y-4">
              <a href="tel:8707408916" id="booking-call-link"
                className="flex items-center gap-4 glass-card-dark p-4 hover:border-gold/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={22} className="text-gold" />
                </div>
                <div>
                  <p className="text-white font-poppins font-semibold text-sm">Call / Click to Call</p>
                  <p className="text-gold font-poppins text-base font-bold">+91 8707408916</p>
                </div>
              </a>

              <a href="https://wa.me/918707408916" target="_blank" rel="noopener noreferrer"
                id="booking-whatsapp-link"
                className="flex items-center gap-4 glass-card-dark p-4 hover:border-gold/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={22} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-white font-poppins font-semibold text-sm">WhatsApp Chat</p>
                  <p className="text-[#25D366] font-poppins text-base font-bold">wa.me/918707408916</p>
                </div>
              </a>

              <a href="mailto:ayazk56780@gmail.com" id="booking-email-link"
                className="flex items-center gap-4 glass-card-dark p-4 hover:border-gold/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={22} className="text-gold" />
                </div>
                <div>
                  <p className="text-white font-poppins font-semibold text-sm">Email Us</p>
                  <p className="text-gold font-poppins text-sm">ayazk56780@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card-dark p-8">
              <h3 className="font-playfair text-white text-2xl mb-6">Inquiry Form</h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mx-auto mb-6"
                    style={{ boxShadow: '0 0 40px rgba(212,175,55,0.4)' }}>
                    <CheckCircle size={40} className="text-gold" />
                  </div>
                  <h4 className="font-playfair text-white text-2xl mb-3">Thank You!</h4>
                  <p className="text-white/60 font-poppins text-sm mb-6">
                    Your inquiry has been received. Our team will contact you within 24 hours.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-outline-gold">
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="to_email" value="ayazk56780@gmail.com" />

                  <div>
                    <label className="block text-white/60 font-poppins text-xs mb-2 uppercase tracking-wider">Full Name *</label>
                    <input id="form-name" type="text" name="name" value={form.name} onChange={handleChange}
                      required placeholder="Enter your full name" className="form-input" />
                  </div>

                  <div>
                    <label className="block text-white/60 font-poppins text-xs mb-2 uppercase tracking-wider">Phone Number *</label>
                    <input id="form-phone" type="tel" name="phone" value={form.phone} onChange={handleChange}
                      required placeholder="Enter your phone number" className="form-input" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 font-poppins text-xs mb-2 uppercase tracking-wider">Event Date *</label>
                      <input id="form-event-date" type="date" name="event_date" value={form.event_date}
                        onChange={handleChange} required className="form-input" style={{ colorScheme: 'dark' }} />
                    </div>
                    <div>
                      <label className="block text-white/60 font-poppins text-xs mb-2 uppercase tracking-wider">Event Type *</label>
                      <select id="form-event-type" name="event_type" value={form.event_type}
                        onChange={handleChange} required className="form-input" style={{ colorScheme: 'dark' }}>
                        <option value="" disabled>Select event type</option>
                        {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 font-poppins text-xs mb-2 uppercase tracking-wider">Expected Guest Count *</label>
                    <input id="form-guest-count" type="number" name="guest_count" value={form.guest_count}
                      onChange={handleChange} required placeholder="e.g. 500" min="1" max="2500" className="form-input" />
                  </div>

                  <div>
                    <label className="block text-white/60 font-poppins text-xs mb-2 uppercase tracking-wider">Additional Message</label>
                    <textarea id="form-message" name="message" value={form.message} onChange={handleChange}
                      rows={4} placeholder="Tell us about your event, special requirements, or any questions..."
                      className="form-input resize-none" />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 font-poppins text-sm p-3 rounded-lg bg-red-400/10 border border-red-400/20">
                      <AlertCircle size={16} />
                      Failed to send. Please call us directly at 8707408916.
                    </div>
                  )}

                  <button id="form-submit-btn" type="submit" disabled={status === 'loading'}
                    className="btn-gold w-full justify-center text-base py-4" style={{ display: 'flex' }}>
                    {status === 'loading'
                      ? <><Loader size={18} className="animate-spin" /> Sending Inquiry...</>
                      : <><Send size={18} /> Send Inquiry</>
                    }
                  </button>

                  <p className="text-white/30 font-poppins text-xs text-center">
                    We'll respond within 24 hours · Your information is secure
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
