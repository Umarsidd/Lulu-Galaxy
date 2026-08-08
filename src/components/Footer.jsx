import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book Now', href: '#booking' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="footer" className="bg-black border-t border-gold/10 relative overflow-hidden">
      {/* Top decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg"
                style={{ boxShadow: '0 0 25px rgba(212,175,55,0.3)' }}>
                <span className="font-playfair text-black font-bold text-2xl">LG</span>
              </div>
              <div>
                <div className="font-playfair text-white font-bold text-xl leading-none">Lulu Galaxy</div>
                <div className="text-gold text-xs font-poppins tracking-widest">BANQUET HALL & HOTEL</div>
              </div>
            </div>

            <p className="font-poppins text-white/55 text-sm leading-relaxed mb-6 max-w-sm">
              Balrampur's most elegant event destination. We make your celebrations unforgettable 
              with our premium indoor & outdoor spaces, world-class amenities, and dedicated team.
            </p>

            <blockquote className="font-playfair italic text-gold text-base border-l-2 border-gold/40 pl-4 mb-6">
              "Where Every Celebration Becomes a Beautiful Memory."
            </blockquote>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                id="footer-instagram-venue"
                href="https://www.instagram.com/lulu_galaxy_banquet"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram - Lulu Galaxy Banquet"
              >
                <FaInstagram size={18} />
              </a>
              <a
                id="footer-instagram-personal"
                href="https://www.instagram.com/Ayazkhan__04"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram - Ayaz Khan"
              >
                <FaInstagram size={18} />
              </a>
              <a
                id="footer-whatsapp"
                href="https://wa.me/918707408916"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              {/* YouTube - Coming Soon, disabled */}
              <div
                id="footer-youtube-placeholder"
                className="social-icon opacity-30 cursor-not-allowed"
                title="YouTube coming soon"
                aria-label="YouTube - Coming Soon"
              >
                <FaYoutube size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-white text-lg mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gold rounded-full" />
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="footer-link flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/0 group-hover:bg-gold transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-white text-lg mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gold rounded-full" />
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="text-white/55 font-poppins text-sm leading-relaxed">
                  Gas Godown Road, Dharampur, Near Fire Station, Balrampur, UP
                </p>
              </div>
              <a href="tel:8707408916" id="footer-phone" className="flex gap-3 items-center footer-link">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span className="text-gold font-semibold">+91 8707408916</span>
              </a>
              <a href="mailto:ayazk56780@gmail.com" id="footer-email" className="flex gap-3 items-center footer-link">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span>ayazk56780@gmail.com</span>
              </a>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                id="footer-book-btn"
                href="#booking"
                onClick={(e) => { e.preventDefault(); handleNavClick('#booking') }}
                className="btn-gold w-full justify-center"
                style={{ display: 'flex' }}
              >
                Book Your Event
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-poppins text-white/40 text-xs text-center md:text-left">
              © 2025 Lulu Galaxy Banquet Hall & Hotel. All Rights Reserved.
            </p>
            <p className="font-poppins text-white/30 text-xs">
              Designed with ♥ for Balrampur | 
              <a href="https://lulugalaxybanquet.com" className="text-gold/50 hover:text-gold ml-1 transition-colors">
                lulugalaxybanquet.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
