import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

// ─────────────────────────────────────────
// GALLERY IMAGE DATA
// Replace the `src` values with your real venue photo URLs.
// For Google Drive photos use:
//   https://drive.google.com/thumbnail?id=FILE_ID&sz=w800
// ─────────────────────────────────────────
const ALL_IMAGES = [
  { id: 'g1',  src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80', caption: 'Grand Banquet Entrance',   category: 'exterior' },
  { id: 'g2',  src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80', caption: 'Royal Wedding Stage',       category: 'stage' },
  { id: 'g3',  src: 'https://images.unsplash.com/photo-1573594547035-c7b87c43b9ab?w=800&q=80', caption: 'Elegant Dining Setup',      category: 'dining' },
  { id: 'g4',  src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', caption: 'Floral Decorations',         category: 'decorations' },
  { id: 'g5',  src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80', caption: 'Beautiful Outdoor Lawn',    category: 'lawn' },
  { id: 'g6',  src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80', caption: 'Night View — Grand Hall',  category: 'night' },
  { id: 'g7',  src: 'https://images.unsplash.com/photo-1470753937643-efeb931202a9?w=800&q=80', caption: 'Mandap Stage Decoration',  category: 'stage' },
  { id: 'g8',  src: 'https://images.unsplash.com/photo-1551882547-ff40c4fe1fa7?w=800&q=80', caption: 'Hotel Exterior View',        category: 'exterior' },
  { id: 'g9',  src: 'https://images.unsplash.com/photo-1572552635104-9c21978bdf7c?w=800&q=80', caption: 'Premium Reception Hall',   category: 'interior' },
  { id: 'g10', src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80', caption: 'Banquet Dinner Arrangement', category: 'dining' },
  { id: 'g11', src: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?w=800&q=80', caption: 'Lawn at Night',            category: 'night' },
  { id: 'g12', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', caption: 'Wedding Decoration',       category: 'decorations' },
  { id: 'g13', src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80', caption: 'Grand Hall Interior',      category: 'interior' },
  { id: 'g14', src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80', caption: 'Outdoor Evening Event',   category: 'lawn' },
  { id: 'g15', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', caption: 'VIP Seating Area',         category: 'interior' },
]

const CATEGORIES = [
  { id: 'all',          label: 'All Photos' },
  { id: 'exterior',     label: 'Exterior' },
  { id: 'interior',     label: 'Interior' },
  { id: 'stage',        label: 'Stage' },
  { id: 'dining',       label: 'Dining Area' },
  { id: 'decorations',  label: 'Decorations' },
  { id: 'lawn',         label: 'Lawn' },
  { id: 'night',        label: 'Night View' },
]

function filterImages(categoryId) {
  if (categoryId === 'all') return ALL_IMAGES
  return ALL_IMAGES.filter((img) => img.category === categoryId)
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lightbox-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative max-w-5xl w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            id="lightbox-close-btn"
            onClick={onClose}
            className="absolute -top-12 right-0 text-white/70 hover:text-gold transition-colors"
          >
            <X size={32} />
          </button>

          <div className="relative rounded-2xl overflow-hidden"
            style={{ border: '2px solid rgba(212,175,55,0.5)', boxShadow: '0 0 60px rgba(212,175,55,0.2)' }}>
            <img
              src={image.src}
              alt={image.caption}
              className="w-full max-h-[75vh] object-contain bg-black/90"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="font-playfair text-white text-lg">{image.caption}</p>
              <p className="font-poppins text-gold text-sm capitalize mt-1">{image.category}</p>
            </div>
          </div>

          {images.length > 1 && (
            <div className="flex justify-between items-center mt-4">
              <button id="lightbox-prev-btn" onClick={() => onNavigate(-1)} disabled={currentIndex === 0}
                className="btn-outline-gold py-2 px-4 disabled:opacity-30">
                <ChevronLeft size={16} /> Prev
              </button>
              <span className="text-white/50 font-poppins text-sm">{currentIndex + 1} / {images.length}</span>
              <button id="lightbox-next-btn" onClick={() => onNavigate(1)} disabled={currentIndex === images.length - 1}
                className="btn-outline-gold py-2 px-4 disabled:opacity-30">
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((image, i) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.04, duration: 0.4 }}
          className="img-frame aspect-[4/3] cursor-pointer group"
          onClick={() => onImageClick(image)}
        >
          <img src={image.src} alt={image.caption} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-end p-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
            <div>
              <p className="text-white font-poppins text-xs font-medium">{image.caption}</p>
              <div className="flex items-center gap-1 text-gold text-xs mt-1">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)', filter: 'blur(120px)' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-tag mb-3">Gallery</p>
          <h2 className="section-title">
            Our Venue<br />
            <span className="gold-text">Photo Gallery</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-white/55 font-poppins text-sm max-w-xl mx-auto mt-4">
            Explore every corner of Lulu Galaxy through our gallery.
            Click any image to view in full size.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const count = filterImages(cat.id).length
            return (
              <button
                key={cat.id}
                id={`gallery-tab-${cat.id}`}
                onClick={() => setActiveTab(cat.id)}
                className={`gallery-tab ${activeTab === cat.id ? 'active' : ''}`}
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
          className="text-center mt-12"
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
