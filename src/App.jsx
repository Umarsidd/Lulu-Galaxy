import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatsAppButton from './components/WhatsAppButton'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load below-fold sections for performance
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Gallery3D = lazy(() => import('./components/Gallery3D'))
const Amenities = lazy(() => import('./components/Amenities'))
const Pricing = lazy(() => import('./components/Pricing'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const BookingForm = lazy(() => import('./components/BookingForm'))
const LocationContact = lazy(() => import('./components/LocationContact'))
const Footer = lazy(() => import('./components/Footer'))

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero — loaded eagerly */}
      <Hero />

      {/* Lazy-loaded sections protected by ErrorBoundary */}
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Gallery3D />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Amenities />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Pricing />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <FAQ />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <BookingForm />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <LocationContact />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>

      {/* Floating Buttons */}
      <WhatsAppButton />
    </div>
  )
}
