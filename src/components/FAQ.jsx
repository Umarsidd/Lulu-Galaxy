import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 'faq-1',
    question: 'How do I book the venue?',
    answer:
      'Booking is simple! You can call or WhatsApp us at +91-8707408916 or send an email to ayazk56780@gmail.com. We will discuss your event requirements, check availability for your preferred date, and confirm your booking with an advance payment. You can also fill out the inquiry form on this website and our team will reach out to you within 24 hours.',
  },
  {
    id: 'faq-2',
    question: 'What is the cancellation policy?',
    answer:
      'Cancellation terms are as per the agreement signed at the time of booking. Generally, cancellations made well in advance may receive a partial refund of the advance payment. We recommend discussing the cancellation policy with our team before confirming your booking. We strive to be flexible and understanding in case of genuine emergencies.',
  },
  {
    id: 'faq-3',
    question: 'Can we bring outside catering?',
    answer:
      'Outside catering is subject to the package you select. Some packages allow approved outside caterers while others include our in-house catering service. Please discuss your catering preferences with our team during the booking process, and we will accommodate your requirements as best as possible.',
  },
  {
    id: 'faq-4',
    question: 'Is decoration included in the package?',
    answer:
      'Decoration depends on the package chosen. Basic packages include standard décor while our premium packages include elaborate stage and venue decoration. We also offer customizable decoration add-ons including floral arrangements, thematic setups, mandap decoration, entry gates, and more. Our in-house decoration team can create your dream event setup.',
  },
  {
    id: 'faq-5',
    question: 'What is the guest capacity?',
    answer:
      'Lulu Galaxy Banquet Hall & Hotel can accommodate 2000 to 2500 guests comfortably across our indoor hall and outdoor lawn combined. For smaller, more intimate events, we can configure the space accordingly. Please contact us to discuss arrangements for your specific guest count.',
  },
  {
    id: 'faq-6',
    question: 'Are guest rooms available for outstation guests?',
    answer:
      'Yes! We have comfortable AC and Non-AC guest rooms available for outstation guests. This makes it very convenient for families and guests traveling from other cities for the event. Room availability is subject to prior booking. Please inquire about room rates and availability when booking the venue.',
  },
  {
    id: 'faq-7',
    question: 'What events do you host?',
    answer:
      'We host a wide variety of events including: Weddings, Receptions, Engagements, Haldi & Mehndi ceremonies, Birthdays, Anniversaries, Corporate events, Conferences, Family gatherings, and more. Our versatile indoor and outdoor spaces can be customized for any type of celebration.',
  },
  {
    id: 'faq-8',
    question: 'Is parking available at the venue?',
    answer:
      'Yes, we have ample parking space available at Lulu Galaxy. The parking area can accommodate a large number of vehicles comfortably, ensuring a hassle-free experience for all your guests. Parking is complimentary for event guests.',
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        id={faq.id}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
        aria-expanded={open}
      >
        <h3 className="font-poppins font-semibold text-white text-sm md:text-base pr-4">
          {faq.question}
        </h3>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
          open ? 'border-gold bg-gold/20 rotate-180' : 'border-white/20'
        }`}>
          <ChevronDown size={16} className={open ? 'text-gold' : 'text-white/50'} />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-gold/10">
              <p className="font-poppins text-white/60 text-sm leading-relaxed pt-4">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="section-padding bg-black-soft relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)', filter: 'blur(60px)' }} />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-tag mb-3">FAQs</p>
            <h2 className="section-title mb-6">
              Frequently<br />
              <span className="gold-text">Asked Questions</span>
            </h2>
            <div className="section-divider" />
            <p className="text-white/55 font-poppins text-sm mt-6 leading-relaxed">
              Have questions about booking, services, or our venue? We've answered the most common
              queries below. Can't find what you're looking for? Contact us directly!
            </p>

            <div className="mt-8 glass-card-dark p-6">
              <p className="font-playfair text-white text-lg mb-4">Still have questions?</p>
              <div className="flex flex-col gap-3">
                <a
                  id="faq-call-btn"
                  href="tel:8707408916"
                  className="btn-gold justify-center"
                  style={{ display: 'flex' }}
                >
                  Call Us: 8707408916
                </a>
                <a
                  id="faq-email-btn"
                  href="mailto:ayazk56780@gmail.com"
                  className="btn-outline-gold justify-center"
                  style={{ display: 'flex' }}
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
