import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react'

// ─────────────────────────────────────────
// REPLACE WITH REAL CUSTOMER REVIEWS
// Add actual customer photos, names, and review text here.
// These are placeholder reviews for demonstration purposes.
// ─────────────────────────────────────────
const testimonials = [
  {
    id: 1,
    name: 'Priya & Rahul Sharma',
    event: 'Wedding Reception',
    rating: 5,
    review:
      'Our wedding at Lulu Galaxy was absolutely magical! The venue is stunning, the staff is incredibly professional, and they handled every detail perfectly. The stage decoration was beyond our expectations. We highly recommend Lulu Galaxy to every couple!',
    // Replace with real customer photo
    avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=D4AF37&color=111&bold=true&size=80',
    date: 'January 2026',
  },
  {
    id: 2,
    name: 'Mohammed Ayaz Khan',
    event: 'Birthday Celebration',
    rating: 5,
    review:
      'What a phenomenal venue! Organized my father\'s 60th birthday here and it was a grand success. The outdoor lawn is beautiful, the AC hall is spacious, and the catering was delicious. The team was very cooperative and accommodating.',
    avatar: 'https://ui-avatars.com/api/?name=Ayaz+Khan&background=222222&color=D4AF37&bold=true&size=80',
    date: 'February 2026',
  },
  {
    id: 3,
    name: 'Sunita & Vikram Singh',
    event: 'Engagement Ceremony',
    rating: 5,
    review:
      'The most beautiful engagement ceremony venue in Balrampur! Everything from the decorations to the sound system was top-notch. The bridal suite was luxurious. Our guests are still talking about how beautiful the venue was!',
    avatar: 'https://ui-avatars.com/api/?name=Sunita+Singh&background=D4AF37&color=111&bold=true&size=80',
    date: 'March 2026',
  },
  {
    id: 4,
    name: 'Ramesh Gupta',
    event: 'Corporate Conference',
    rating: 5,
    review:
      'We organized our company\'s annual conference at Lulu Galaxy and it was a massive hit. The AV setup was perfect, seating arrangements excellent, and the catering was very professional. Will definitely book again!',
    avatar: 'https://ui-avatars.com/api/?name=Ramesh+Gupta&background=222222&color=D4AF37&bold=true&size=80',
    date: 'April 2026',
  },
  {
    id: 5,
    name: 'Anjali & Deepak Verma',
    event: 'Wedding',
    rating: 5,
    review:
      'Lulu Galaxy exceeded all our expectations! The garden area for the haldi ceremony was gorgeous, and the indoor hall for the reception was breathtaking. The 24/7 power backup ensured no interruptions. Truly a premium venue!',
    avatar: 'https://ui-avatars.com/api/?name=Anjali+Verma&background=D4AF37&color=111&bold=true&size=80',
    date: 'May 2026',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= rating ? 'star-filled fill-current' : 'star-empty'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [auto, setAuto] = useState(true)
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!auto) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [auto])

  const go = (dir) => {
    setAuto(false)
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length)
    setTimeout(() => setAuto(true), 10000)
  }

  const t = testimonials[current]

  return (
    <section id="testimonials" className="section-padding animated-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 opacity-10"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)', filter: 'blur(80px)' }} />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">Testimonials</p>
          <h2 className="section-title">
            What Our Guests<br />
            <span className="gold-text">Are Saying</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="testimonial-card relative overflow-hidden"
              >
                {/* Quote mark watermark */}
                <div className="absolute top-2 sm:top-4 right-4 sm:right-6 font-playfair text-6xl sm:text-8xl text-gold/10 leading-none select-none pointer-events-none">
                  "
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gold/50 object-cover"
                      style={{ boxShadow: '0 0 20px rgba(212,175,55,0.3)' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className="flex justify-center sm:justify-start">
                      <StarRating rating={t.rating} />
                    </div>
                    <p className="font-poppins text-white/80 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 mb-4 sm:mb-6 italic">
                      "{t.review}"
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2">
                      <div>
                        <p className="font-playfair text-white font-bold text-base sm:text-lg">{t.name}</p>
                        <p className="font-poppins text-gold text-xs sm:text-sm">{t.event} • {t.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between mt-6 sm:mt-8 px-2 sm:px-0">
              <button
                id="testimonial-prev-btn"
                onClick={() => go(-1)}
                className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300 active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex gap-1.5 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setAuto(false); setCurrent(i) }}
                    className="p-1.5 focus:outline-none"
                    aria-label={`Go to testimonial ${i + 1}`}
                  >
                    <span className={`block rounded-full transition-all duration-300 ${
                      i === current ? 'w-6 sm:w-8 h-2 bg-gold' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`} />
                  </button>
                ))}
              </div>

              <button
                id="testimonial-next-btn"
                onClick={() => go(1)}
                className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300 active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Mini Cards Row — Horizontally Scrollable on Mobile */}
          <div className="flex overflow-x-auto no-scrollbar gap-2.5 pb-2 md:grid md:grid-cols-5 md:gap-3 mt-8 sm:mt-10 px-1">
            {testimonials.map((test, i) => (
              <button
                key={test.id}
                onClick={() => { setAuto(false); setCurrent(i) }}
                className={`flex-shrink-0 w-28 md:w-auto p-2.5 sm:p-3 rounded-xl border transition-all duration-300 text-left ${
                  i === current
                    ? 'border-gold/60 bg-gold/10'
                    : 'border-white/10 bg-white/5 hover:border-gold/30'
                }`}
              >
                <img src={test.avatar} alt={test.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mb-1.5 sm:mb-2 object-cover" />
                <p className="text-white/70 font-poppins text-xs leading-tight truncate">{test.name.split(' ')[0]}</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(test.rating)].map((_, s) => (
                    <Star key={s} size={8} className="text-gold fill-current" />
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <p className="text-white/40 font-poppins text-xs mb-3 italic">
              {/* DEVELOPER NOTE: Replace placeholder reviews above with real customer testimonials */}
              Want to share your experience?
            </p>
            <a
              id="google-reviews-btn"
              href="https://www.google.com/maps/search/Lulu+Galaxy+Banquet+Hall+Balrampur"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-sm px-6 py-3"
            >
              <ExternalLink size={14} />
              Read More on Google Reviews
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
