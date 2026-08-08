import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Phone, Check, Leaf, Sparkles, Briefcase } from 'lucide-react'

const packages = [
  {
    name: 'Basic Celebration',
    icon: <Leaf size={32} className="text-gold" />,
    desc: 'Perfect for intimate gatherings and smaller celebrations.',
    features: [
      'Hall / Lawn as per availability',
      'Basic seating arrangement',
      'Standard lighting setup',
      'Clean washrooms & parking',
      'Power backup',
    ],
    highlight: false,
  },
  {
    name: 'Premium Event',
    icon: <Sparkles size={32} className="text-gold" />,
    desc: 'Our most popular package for weddings and grand celebrations.',
    features: [
      'Indoor Hall + Outdoor Lawn',
      'Premium stage decoration',
      'DJ & sound system',
      'Catering arrangement',
      'Photography & videography',
      'Bridal suite access',
      'Event management team',
    ],
    highlight: true,
  },
  {
    name: 'Corporate Package',
    icon: <Briefcase size={32} className="text-gold" />,
    desc: 'Tailored for business events, conferences, and seminars.',
    features: [
      'Conference hall setup',
      'AV & projection equipment',
      'Business catering options',
      'Professional staff',
      'CCTV & security',
      'Flexible arrangement',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10"
          style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent)', filter: 'blur(80px)' }} />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="section-tag mb-3">Pricing</p>
          <h2 className="section-title">
            Customized Packages<br />
            <span className="gold-text">Tailored For You</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-white/55 font-poppins text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
            We believe every celebration is unique. Our pricing is fully customized based on your
            requirements, guest count, and selected services. Contact us for a personalized quote.
          </p>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card-dark p-4 text-center mb-12 text-gold font-poppins text-sm"
        >
          Seasonal offers available &nbsp;|&nbsp; Premium decoration, DJ, catering & photography available as add-ons &nbsp;|&nbsp; Advance booking required
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`pricing-card relative ${pkg.highlight ? 'border-gold/60' : ''}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-poppins font-bold text-black"
                  style={{ background: 'linear-gradient(90deg, #D4AF37, #F0D060)' }}>
                  Most Popular
                </div>
              )}

              <div className="flex justify-center mb-4">{pkg.icon}</div>
              <h3 className="font-playfair text-white text-xl font-bold mb-2">{pkg.name}</h3>
              <p className="font-poppins text-white/50 text-sm mb-6 leading-relaxed">{pkg.desc}</p>

              <div className="space-y-3 mb-8 text-left">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-gold" />
                    </div>
                    <span className="font-poppins text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gold font-playfair text-2xl font-bold mb-1">Custom Quote</p>
                <p className="text-white/40 font-poppins text-xs mb-4">Price based on requirements</p>
                <a
                  id={`pricing-cta-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href="https://wa.me/918707408916?text=Hello! I am interested in getting a quote for my event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${pkg.highlight ? 'btn-gold' : 'btn-outline-gold'} w-full justify-center`}
                  style={{ display: 'flex' }}
                >
                  Get Custom Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="glass-card-dark p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-white text-xl mb-4">Additional Services Available</h3>
              <div className="space-y-2">
                {[
                  'Premium floral & thematic decorations',
                  'Professional DJ & sound system',
                  'In-house & outside catering options',
                  'Photography & cinematic videography',
                  'Additional seating arrangements',
                  'Guest accommodation (AC & Non-AC rooms)',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/60 font-poppins text-sm">
                    <Check size={12} className="text-gold flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center space-y-4">
              <p className="font-playfair text-white text-lg italic">
                "Ready to plan your dream event?"
              </p>
              <p className="text-white/50 font-poppins text-sm">
                Call or WhatsApp us to discuss your requirements and get a personalized package.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a id="pricing-call-btn" href="tel:8707408916" className="btn-gold">
                  <Phone size={16} /> Call Now
                </a>
                <a id="pricing-whatsapp-btn" href="https://wa.me/918707408916"
                  target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
