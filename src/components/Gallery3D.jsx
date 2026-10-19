import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

// ─────────────────────────────────────────
// GALLERY IMAGE DATA
// ─────────────────────────────────────────
const ALL_IMAGES = [
  {
    id: 'grand-entrance',
    src: '/images/gallery/grand-entrance.jpg',
    caption: 'Grand Royal Entrance & Floral Welcome Gate',
    category: ['decorations', 'exterior'],
  },
  {
    id: 'lawn-dining',
    src: '/images/gallery/lawn-dining.jpg',
    caption: 'Outdoor Lawn & Catering Counters (Day & Night View)',
    category: ['lawn', 'dining', 'night', 'stage'],
  },
  {
    id: 'exterior-facade',
    src: '/images/gallery/exterior-facade.jpg',
    caption: 'Lulu Galaxy Banquet Hall & Grounds Exterior',
    category: ['exterior', 'lawn'],
  },
  {
    id: 'hall-entrance',
    src: '/images/gallery/hall-entrance.jpg',
    caption: 'Banquet Hall Front Architecture & Grand Glass Facade',
    category: ['exterior', 'interior'],
  },
  {
    id: 'hall-interior-stage',
    src: '/images/gallery/hall-interior-stage.jpg',
    caption: 'Air-Conditioned Grand Banquet Hall & Royal Stage Setup',
    category: ['interior', 'stage'],
  },
  {
    id: 'luxury-room',
    src: '/images/gallery/luxury-room.jpg',
    caption: 'Luxury Air-Conditioned Bridal Suite & Guest Room',
    category: ['interior'],
  },
]

const CATEGORIES = [
  { id: 'all',          label: 'All Photos' },
  { id: 'exterior',     label: 'Exterior' },
  { id: 'interior',     label: 'Interior' },
  { id: 'lawn',         label: 'Lawn' },
  { id: 'decorations',  label: 'Decorations' },
  { id: 'dining',       label: 'Dining Area' },
  { id: 'night',        label: 'Night View' },
  { id: 'stage',        label: 'Stage' },
]

function filterImages(categoryId) {
  if (categoryId === 'all') return ALL_IMAGES
  return ALL_IMAGES.filter((img) => {
    if (Array.isArray(img.category)) {
      return img.category.includes(categoryId)
    }
    return img.category === categoryId
  })
}

// ─────────────────────────────────────────
// Lightbox Modal
// ─────────────────────────────────────────
function Lightbox({ image, images, onClose, onNavigate }) {
  const currentIndex = images.findIndex((img) => img.id === image.id)

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lightbox-overlay p-3 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative max-w-5xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* In-viewport Close Button with 44px touch target */}
          <button
            id="lightbox-close-btn"
            onClick={onClose}
            className="absolute top-3 right-3 z-30 w-11 h-11 rounded-full bg-black/80 border border-gold/50 flex items-center justify-center text-white hover:text-gold transition-colors shadow-lg active:scale-95"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>

          <div className="relative rounded-2xl overflow-hidden bg-black/95"
            style={{ border: '2px solid rgba(212,175,55,0.5)', boxShadow: '0 0 60px rgba(212,175,55,0.2)' }}>
            <img
              src={image.src}
              alt={image.caption}
              className="w-full max-h-[60vh] sm:max-h-[72vh] object-contain bg-black/90"
            />
            <div className="p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
              <p className="font-playfair text-white text-base sm:text-lg leading-tight">{image.caption}</p>
              <p className="font-poppins text-gold text-xs sm:text-sm capitalize mt-0.5">
                {Array.isArray(image.category) ? image.category.join(' • ') : image.category}
              </p>
            </div>
          </div>

          {images.length > 1 && (
            <div className="flex justify-between items-center mt-3 sm:mt-4">
              <button id="lightbox-prev-btn" onClick={() => onNavigate(-1)} disabled={currentIndex === 0}
                className="btn-outline-gold py-2 px-3 sm:px-4 text-xs sm:text-sm min-h-[44px] disabled:opacity-30">
                <ChevronLeft size={16} /> Prev
              </button>
              <span className="text-white/60 font-poppins text-xs sm:text-sm">{currentIndex + 1} / {images.length}</span>
              <button id="lightbox-next-btn" onClick={() => onNavigate(1)} disabled={currentIndex === images.length - 1}
                className="btn-outline-gold py-2 px-3 sm:px-4 text-xs sm:text-sm min-h-[44px] disabled:opacity-30">
                Next <ChevronRight size={16} />
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─────────────────────────────────────────
// Image Grid Component
// ─────────────────────────────────────────
function ImageGrid({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-4">
      {images.map((image, i) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.03, duration: 0.35 }}
          className="relative overflow-hidden border border-gold/30 hover:border-gold aspect-[4/3] cursor-pointer group rounded-xl bg-neutral-950 transition-all duration-300 hover:shadow-xl hover:shadow-gold/15"
          onClick={() => onImageClick(image)}
        >
          <img
            src={image.src}
            alt={image.caption}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 flex items-end p-2.5 sm:p-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
            <div>
              <p className="text-white font-poppins text-[11px] sm:text-xs font-medium line-clamp-1">{image.caption}</p>
              <div className="flex items-center gap-1 text-gold text-[10px] sm:text-xs mt-0.5">
                <ZoomIn size={11} /><span>View Full</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────
export default function Gallery3D() {
  const [activeTab, setActiveTab] = useState('all')
  const [lightboxImage, setLightboxImage] = useState(null)

  const currentImages = filterImages(activeTab)

  const handleImageClick = useCallback((image) => setLightboxImage(image), [])

  const handleNavigate = useCallback((dir) => {
    setLightboxImage((prev) => {
      const idx = currentImages.findIndex((img) => img.id === prev.id)
      return currentImages[idx + dir] || prev
    })
  }, [currentImages])

  return (
    <section id="gallery" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)', filter: 'blur(120px)' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="section-tag mb-2 sm:mb-3">Gallery</p>
          <h2 className="section-title">
            Our Venue<br />
            <span className="gold-text">Photo Gallery</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-white/55 font-poppins text-xs sm:text-sm max-w-xl mx-auto mt-3 sm:mt-4 px-2">
            Explore every corner of Lulu Galaxy through our gallery.
            Click any image to view in full size.
          </p>
        </motion.div>

        {/* Category Tabs — Horizontally Scrollable on Mobile */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap sm:justify-center mb-8 sm:mb-10 px-1">
          {CATEGORIES.map((cat) => {
            const count = filterImages(cat.id).length
            return (
              <button
                key={cat.id}
                id={`gallery-tab-${cat.id}`}
                onClick={() => setActiveTab(cat.id)}
                className={`gallery-tab flex-shrink-0 min-h-[40px] ${activeTab === cat.id ? 'active' : ''}`}
              >
                {cat.label}
                {count > 0 && <span className="ml-1 text-xs opacity-60">({count})</span>}
              </button>
            )
          })}
        </div>

        {/* Photo Grid */}
        {currentImages.length > 0 ? (
          <ImageGrid images={currentImages} onImageClick={handleImageClick} />
        ) : (
          <div className="text-center py-20 text-white/30 font-poppins">
            <p>Photos coming soon for this category.</p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12"
        >
          <button
            id="gallery-book-btn"
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
          >
            Book Your Event
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          images={currentImages}
          onClose={() => setLightboxImage(null)}
          onNavigate={handleNavigate}
        />
      )}
    </section>
  )
}
