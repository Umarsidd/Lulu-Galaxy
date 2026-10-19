import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { 
  Sun, Moon, Check, Phone, MessageCircle, Sparkles, 
  Zap, Eye, X, Info, Layers, ChevronRight 
} from 'lucide-react'

// ─────────────────────────────────────────
// OFFICIAL RATE CARD DATA
// ─────────────────────────────────────────
const PRICING_DATA = {
  muslim: {
    id: 'muslim',
    title: 'Muslim Wedding & Walima Packages',
    hindiTitle: 'मुस्लिम निकाह एवं वलीमा पैकेज',
    tagline: 'Tailored wedding and Walima celebration plans with full banquet, lawn, and catering facilities.',
    subcategories: [
      {
        id: 'muslim-wedding',
        title: 'Muslim Wedding / Nikah Package',
        desc: 'Comprehensive wedding arrangement with grand stage, lawn, deg facility, and luxury seating.',
        rateCardImg: '/images/pricing/muslim-wedding-package.jpg',
        rateCardTitle: 'Official Muslim Wedding Rate Card',
        packages: [
          {
            id: 'm-wed-day',
            timing: 'day',
            name: 'Day Wedding Package',
            price: '₹55,999',
            badge: '☀️ Day Wedding',
            highlight: false,
            features: [
              'Grand Air-Conditioned Banquet Hall',
              '3 Rooms Included for Family',
              '1 Grand Stage Setup',
              'Lawn Area + Daytime Decor',
              'Mair (Deg) Facility for Cooking',
              'Chairs (VIP + Normal)',
              'Luxury Sofa Seating',
              'Dinner Plates Included',
              'Welcome Entry Gate',
              'Generator Facility Provided by Banquet (Diesel by party)',
            ],
            optional: [
              { name: 'DJ Setup (Separate Charge)', price: '₹6,000' },
              { name: 'LED Counter', price: '₹1,000 / piece' },
              { name: '20 LED Counters Package', price: '₹20,000' },
              { name: '30 LED Counters Package', price: '₹25,000' },
            ],
          },
          {
            id: 'm-wed-night',
            timing: 'night',
            name: 'Night Wedding Package',
            price: '₹64,999',
            badge: '🌙 Most Popular',
            highlight: true,
            features: [
              'Grand Air-Conditioned Banquet Hall',
              'Guest Rooms Included',
              'Grand Stage in Hall',
              'Lawn Area + Decorative Lighting',
              'VIP Lawn Baithak Setup',
              'Mair (Deg) Facility for Cooking',
              'Chairs (VIP + Normal)',
              'Luxury Sofa Seating',
              'Dinner Plates Included',
              'Entry Gate + Architectural Lighting',
              'Generator Facility Provided by Banquet (Diesel by party)',
            ],
            optional: [
              { name: 'DJ Setup (Separate Charge)', price: '₹6,000' },
              { name: 'LED Counter', price: '₹1,000 / piece' },
              { name: '20 LED Counters Package', price: '₹20,000' },
              { name: '30 LED Counters Package', price: '₹25,000' },
            ],
          },
        ],
      },
      {
        id: 'muslim-walima',
        title: 'Muslim Walima Package',
        desc: 'Curated for graceful Walima receptions, family feasts and post-wedding celebrations.',
        rateCardImg: '/images/pricing/muslim-walima-package.jpg',
        rateCardTitle: 'Official Muslim Walima Rate Card',
        packages: [
          {
            id: 'm-wal-day',
            timing: 'day',
            name: 'Day Walima Package',
            price: '₹45,000',
            badge: '☀️ Day Celebration',
            highlight: false,
            features: [
              'Air-Conditioned Banquet Hall',
              '2 AC Rooms Included',
              '1 Decorated Stage',
              'VIP & Normal Chairs',
              'Sofa Seating Arrangement',
              'Entry Gate Decoration',
              'Deg Cooking Facility',
              'Dinner Plates Included',
              'Generator Facility Provided by Banquet (Diesel by party)',
            ],
            optional: [
              { name: 'LED Counter', price: '₹1,000 / counter' },
            ],
          },
          {
            id: 'm-wal-night',
            timing: 'night',
            name: 'Night Walima Package',
            price: '₹55,000',
            badge: '🌙 Evening Walima',
            highlight: true,
            features: [
              'Air-Conditioned Banquet Hall',
              '2 AC Rooms Included',
              '1 Decorated Stage',
              'VIP & Normal Chairs',
              'Sofa Seating Arrangement',
              'Entry Gate Decoration',
              'Deg Cooking Facility',
              'Dinner Plates Included',
              'Lawn Area with Ambient Light Decoration',
              'Lawn Baithak Arrangement',
              'Generator Facility Provided by Banquet (Diesel by party)',
            ],
            optional: [
              { name: 'LED Counter', price: '₹1,000 / counter' },
            ],
          },
        ],
      },
    ],
  },
  hindu: {
    id: 'hindu',
    title: 'Hindu Wedding & Engagement Packages',
    hindiTitle: 'हिन्दू विवाह एवं सगाई पैकेज',
    tagline: 'Complete ceremonial packages for Engagement, Ring Ceremony, Tilak, and Grand Receptions.',
    subcategories: [
      {
        id: 'hindu-day',
        title: 'Hindu Day Engagement Packages',
        desc: 'Perfect for daytime Ring Ceremony, Roka, Tilak, and festive family celebrations.',
        rateCardImg: '/images/pricing/hindu-day-package.jpg',
        rateCardTitle: 'Official Hindu Day Engagement Rate Card',
        packages: [
          {
            id: 'h-day-normal',
            timing: 'day',
            name: 'Normal Day Package',
            price: '₹40,999',
            badge: '☀️ Essential Package',
            highlight: false,
            features: [
              '2 AC Rooms',
              'AC Hall + Stage Setup',
              'Selfie Point (Greeting Area)',
              'Maiz (Mic System)',
              'VIP Chairs + Normal Chairs',
              'Welcome Entry Gate',
              '4 Luxury Sofas',
              'Hassle-Free Management',
            ],
            optional: [
              { name: 'Custom Stage & Floral Decor', price: 'On Requirement' },
            ],
          },
          {
            id: 'h-day-3ac',
            timing: 'day',
            name: '3 AC Room + DJ Package',
            price: '₹51,000',
            badge: '☀️ Complete Day Event',
            highlight: true,
            features: [
              '3 AC Rooms + 2 Non-AC Rooms (5 Rooms)',
              'AC Hall with Full Decoration',
              'Stage Setup According to Function',
              'DJ & 2 Sound Setup + Dance Floor',
              'Selfie Point (Greeting Area)',
              'Maiz (Mic System)',
              'Chairs VIP & Normal',
              'Welcome Entry Gate',
              '8 Luxury Sofas',
            ],
            optional: [
              { name: 'Custom Floral Variations', price: 'On Requirement' },
            ],
          },
        ],
      },
      {
        id: 'hindu-night',
        title: 'Hindu Night Engagement & Lawn Packages',
        desc: 'Grand evening packages with full lighting, lawn setups, DJ dance floor and spacious hospitality.',
        rateCardImg: '/images/pricing/hindu-night-package.jpg',
        rateCardTitle: 'Official Hindu Night Engagement Rate Card',
        packages: [
          {
            id: 'h-night-std',
            timing: 'night',
            name: 'Night Engagement Package',
            price: '₹55,000',
            badge: '🌙 Evening Engagement',
            highlight: false,
            features: [
              '2 AC Rooms',
              'AC Banquet Hall',
              'Stage Setup',
              'Maiz (Mic System)',
              'Chairs VIP & Normal',
              'Welcome Entry Gate',
              '4 Luxury Sofas',
              'Lawn Area with Decor of Light',
              'Lawn Baithak Arrangement',
              'DJ 2 Sound Setup + Dance Floor',
              'Generator Facility Provided by Banquet (Diesel by party)',
            ],
            optional: [
              { name: 'LED Counter', price: '₹1,000 / piece' },
              { name: '20 LED Counters Package', price: '₹18,000' },
              { name: '30 LED Counters Package', price: '₹25,000' },
              { name: 'Grand Market DJ Setup', price: 'Market Rate' },
            ],
          },
          {
            id: 'h-night-lawn',
            timing: 'night',
            name: 'Night + Full Lawn Package',
            price: '₹69,999',
            badge: '👑 Grand Celebration',
            highlight: true,
            features: [
              '3 AC Rooms + 2 Non-AC Rooms (5 Rooms)',
              'Grand AC Banquet Hall',
              'Stage Setup According to Function',
              'Maiz (Mic System)',
              'Chairs VIP & Normal',
              'Royal Welcome Entry Gate',
              '8 Luxury Sofas',
              'Lawn Area Full + Ambient Light Decor',
              'VIP Lawn Baithak Arrangement',
              'DJ 2 Sound Setup + Dance Floor',
              'Generator Facility Provided by Banquet (Diesel by party)',
            ],
            optional: [
              { name: 'LED Counter', price: '₹1,000 / piece' },
              { name: '20 LED Counters Package', price: '₹18,000' },
              { name: '30 LED Counters Package', price: '₹25,000' },
              { name: 'Mega Truss DJ & Extra Lighting', price: 'Market Rate' },
            ],
          },
        ],
      },
    ],
  },
}

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState('muslim') // 'muslim' | 'hindu'
  const [timingFilter, setTimingFilter] = useState('all') // 'all' | 'day' | 'night'
  const [modalImage, setModalImage] = useState(null)

  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Lock body scroll while modal is open
  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalImage])

  const categoryData = PRICING_DATA[activeCategory]

  return (
    <section id="pricing" className="section-padding bg-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] opacity-10"
          style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent)', filter: 'blur(100px)' }} 
        />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="section-tag mb-2 sm:mb-3">Official Rate Menu</p>
          <h2 className="section-title">
            Wedding & Event<br />
            <span className="gold-text">Pricing Packages</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-white/60 font-poppins text-xs sm:text-sm max-w-2xl mx-auto mt-3 sm:mt-4 px-2 leading-relaxed">
            Transparent and official booking rates for Lulu Galaxy Banquet Hall & Lawn. 
            Choose between daytime ceremonies and illuminated evening packages.
          </p>
        </motion.div>

        {/* Category Selector Tabs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            id="tab-pricing-muslim"
            onClick={() => setActiveCategory('muslim')}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-full font-poppins text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 border ${
              activeCategory === 'muslim'
                ? 'bg-gradient-to-r from-gold to-gold-light text-black border-gold shadow-lg shadow-gold/25'
                : 'bg-white/5 text-white/75 border-gold/30 hover:border-gold hover:text-white'
            }`}
          >
            <span className="text-base sm:text-lg">🌙</span>
            <div className="text-left">
              <div>Muslim Wedding & Walima</div>
              <div className="text-[10px] opacity-80 font-normal">₹45,000 – ₹64,999</div>
            </div>
          </button>

          <button
            id="tab-pricing-hindu"
            onClick={() => setActiveCategory('hindu')}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-full font-poppins text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 border ${
              activeCategory === 'hindu'
                ? 'bg-gradient-to-r from-gold to-gold-light text-black border-gold shadow-lg shadow-gold/25'
                : 'bg-white/5 text-white/75 border-gold/30 hover:border-gold hover:text-white'
            }`}
          >
            <span className="text-base sm:text-lg">🪔</span>
            <div className="text-left">
              <div>Hindu Wedding & Engagement</div>
              <div className="text-[10px] opacity-80 font-normal">₹40,999 – ₹69,999</div>
            </div>
          </button>
        </div>

        {/* Day / Night Filter Pills */}
        <div className="flex justify-center items-center gap-2 mb-10 sm:mb-12">
          <span className="text-white/40 text-xs font-poppins mr-1 flex items-center gap-1">
            <Clock size={13} className="text-gold" /> Filter Timing:
          </span>
          {[
            { id: 'all', label: 'All Packages' },
            { id: 'day', label: '☀️ Day Events' },
            { id: 'night', label: '🌙 Night Events' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setTimingFilter(f.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-poppins transition-all duration-200 border ${
                timingFilter === f.id
                  ? 'bg-gold/20 text-gold border-gold/60 font-semibold'
                  : 'bg-transparent text-white/60 border-white/10 hover:border-gold/40'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Subcategories & Packages */}
        <div className="space-y-12 sm:space-y-16">
          {categoryData.subcategories.map((subcat) => {
            const visiblePackages = subcat.packages.filter(
              (p) => timingFilter === 'all' || p.timing === timingFilter
            )

            if (visiblePackages.length === 0) return null

            return (
              <div key={subcat.id} className="relative">
                {/* Subcategory Banner */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b border-gold/20">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      <h3 className="font-playfair text-xl sm:text-2xl text-white font-bold">
                        {subcat.title}
                      </h3>
                    </div>
                    <p className="text-white/60 font-poppins text-xs sm:text-sm mt-1">
                      {subcat.desc}
                    </p>
                  </div>

                  {/* View Official Rate Card Flyer Button */}
                  <button
                    onClick={() => setModalImage({ src: subcat.rateCardImg, title: subcat.rateCardTitle })}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold/10 hover:bg-gold/20 border border-gold/40 text-gold text-xs font-poppins font-medium transition-colors self-start md:self-auto"
                  >
                    <Eye size={14} />
                    <span>View Official Rate Card</span>
                  </button>
                </div>

                {/* Package Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {visiblePackages.map((pkg) => {
                    const isDay = pkg.timing === 'day'
                    const whatsappMsg = `Hello Lulu Galaxy! I would like to book / inquire about the *${pkg.name}* (${pkg.price}) for *${subcat.title}*. Please let me know the availability.`

                    return (
                      <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`relative rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                          pkg.highlight
                            ? 'bg-gradient-to-b from-[#1c180e] via-[#121212] to-black border-2 border-gold shadow-xl shadow-gold/15'
                            : 'bg-neutral-950/90 border border-gold/30 hover:border-gold/60'
                        }`}
                      >
                        {/* Top Badge */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-poppins font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                              isDay
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : 'bg-purple-500/20 text-purple-200 border border-purple-500/30'
                            }`}
                          >
                            {isDay ? <Sun size={12} /> : <Moon size={12} />}
                            {pkg.badge}
                          </span>

                          <span className="text-[11px] font-poppins text-white/40">
                            Lulu Galaxy Official
                          </span>
                        </div>

                        {/* Title & Price */}
                        <div className="mb-6">
                          <h4 className="font-playfair text-xl sm:text-2xl text-white font-bold mb-2">
                            {pkg.name}
                          </h4>
                          <div className="flex items-baseline gap-2">
                            <span className="font-playfair text-3xl sm:text-4xl font-extrabold text-gold tracking-tight">
                              {pkg.price}
                            </span>
                            <span className="font-poppins text-xs text-white/50">/ Package Charge Only</span>
                          </div>
                        </div>

                        {/* Features Checklist */}
                        <div className="space-y-2.5 mb-6 flex-grow">
                          <p className="text-xs uppercase font-poppins text-gold font-semibold tracking-wider mb-2">
                            Package Includes:
                          </p>
                          {pkg.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-poppins">
                              <div className="w-4 h-4 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={10} className="text-gold" />
                              </div>
                              <span className="leading-snug">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Optional Add-Ons */}
                        {pkg.optional && pkg.optional.length > 0 && (
                          <div className="mb-6 p-3.5 rounded-xl bg-white/[0.03] border border-gold/20">
                            <p className="text-[11px] uppercase font-poppins text-gold/90 font-semibold tracking-wider mb-2 flex items-center gap-1">
                              <Sparkles size={12} className="text-gold" /> Optional Add-Ons:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-poppins">
                              {pkg.optional.map((opt, oIdx) => (
                                <div key={oIdx} className="flex justify-between items-center text-white/70 bg-black/40 px-2.5 py-1.5 rounded-lg border border-white/5">
                                  <span>{opt.name}</span>
                                  <span className="text-gold font-semibold ml-2">{opt.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Generator Policy Note */}
                        <div className="mb-6 flex items-center gap-2 text-[11px] font-poppins text-white/60 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                          <Zap size={14} className="text-gold flex-shrink-0" />
                          <span><strong>Generator Facility:</strong> Provided by Banquet (Diesel by party)</span>
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-3 pt-2">
                          <a
                            href={`https://wa.me/918707408916?text=${encodeURIComponent(whatsappMsg)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold justify-center text-xs sm:text-sm py-3 font-semibold shadow-lg shadow-gold/20"
                          >
                            <MessageCircle size={15} /> Book on WhatsApp
                          </a>
                          <a
                            href="tel:8707408916"
                            className="btn-outline-gold justify-center text-xs sm:text-sm py-3"
                          >
                            <Phone size={15} /> Call 8707408916
                          </a>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* LED Counter Package & Add-ons Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 sm:mt-16 glass-card-dark p-6 sm:p-8 rounded-2xl border border-gold/30"
        >
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="section-tag mb-1 inline-block">Popular Add-On</span>
            <h3 className="font-playfair text-xl sm:text-2xl text-white font-bold">
              LED Catering Counter Packages
            </h3>
            <p className="text-white/60 font-poppins text-xs sm:text-sm mt-1">
              Elevate your dining space with illuminating luxury LED food counters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-center font-poppins">
            <div className="p-4 rounded-xl bg-black/60 border border-gold/20">
              <div className="text-white/50 text-xs mb-1">Single Piece</div>
              <div className="text-xl sm:text-2xl font-bold text-gold font-playfair">₹1,000</div>
              <div className="text-[11px] text-white/60 mt-1">Per Counter</div>
            </div>
            <div className="p-4 rounded-xl bg-gold/10 border border-gold/50 shadow-lg shadow-gold/10">
              <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-1">Standard Set</div>
              <div className="text-xl sm:text-2xl font-bold text-white font-playfair">20 Counters</div>
              <div className="text-gold font-semibold text-sm mt-1">₹18,000 – ₹20,000</div>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-gold/20">
              <div className="text-white/50 text-xs mb-1">Grand Wedding Set</div>
              <div className="text-xl sm:text-2xl font-bold text-white font-playfair">30 Counters</div>
              <div className="text-gold font-semibold text-sm mt-1">₹25,000 Only</div>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-gold/10 text-white/55 font-poppins text-xs flex flex-wrap items-center justify-center gap-3">
            <span>• Prices can be customized according to special decoration & requirement</span>
            <span className="hidden sm:inline">|</span>
            <span>• Venue: Gas Gudam Road, Dharampur, Near Fire Station, Balrampur</span>
            <span className="hidden sm:inline">|</span>
            <span>• Booking Desk: <strong className="text-gold">8707408916</strong></span>
          </div>
        </motion.div>
      </div>

      {/* Official Rate Card Image Lightbox Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay p-3 sm:p-6"
            onClick={() => setModalImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="rate-card-close-btn"
                onClick={() => setModalImage(null)}
                className="absolute top-3 right-3 z-30 w-11 h-11 rounded-full bg-black/85 border border-gold/60 flex items-center justify-center text-white hover:text-gold transition-colors shadow-lg active:scale-95"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

              <div 
                className="relative rounded-2xl overflow-hidden bg-black/95 p-2 sm:p-3"
                style={{ border: '2px solid rgba(212,175,55,0.6)', boxShadow: '0 0 60px rgba(212,175,55,0.25)' }}
              >
                <div className="p-3 text-center border-b border-gold/20 mb-2">
                  <h4 className="font-playfair text-white text-base sm:text-lg font-bold">
                    {modalImage.title}
                  </h4>
                  <p className="font-poppins text-gold text-xs">
                    Lulu Galaxy Banquet Hall & Lawn Official Document
                  </p>
                </div>
                
                <img
                  src={modalImage.src}
                  alt={modalImage.title}
                  className="w-full max-h-[75vh] object-contain rounded-lg mx-auto bg-neutral-900"
                />

                <div className="p-3 text-center flex justify-between items-center mt-2">
                  <span className="text-white/60 text-xs font-poppins">Click anywhere outside to close</span>
                  <a
                    href={modalImage.src}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold py-1.5 px-3 text-xs"
                  >
                    Open Full Resolution
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
