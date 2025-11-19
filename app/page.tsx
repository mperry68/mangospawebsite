'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/MangoSTx250.png"
                alt="Mango Spray Tan Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <span className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-red-600' : 'text-white'
              }`} style={{ fontFamily: 'Bungasai, serif' }}>
                Mango Spray Tan
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors hover:text-red-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('technology')}
                className={`transition-colors hover:text-red-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`transition-colors hover:text-red-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors font-semibold"
              >
                Book Now
              </button>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="md:hidden bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              Book
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/MangoBoat.jpg"
            alt="Mango Spray Tan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6" style={{ fontFamily: 'Bungasai, serif' }}>
            Beauty by the Sun
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience the Ultimate in Spray Tanning Comfort
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            State-of-the-art heated spray tan technology for the most comfortable and luxurious tanning experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Your Appointment Today
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-red-600" style={{ fontFamily: 'Bungasai, serif' }}>
                About Mango Spray Tan
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At Mango Spray Tan, we believe that achieving a beautiful, natural-looking tan should be a luxurious and comfortable experience. We specialize in premium spray tanning services using the latest heated spray tan technology.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our state-of-the-art heated spray tan machines provide an unparalleled level of comfort, ensuring that your tanning session is not only effective but also relaxing and enjoyable.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're preparing for a special event, maintaining your glow year-round, or simply treating yourself, we're here to help you achieve the perfect tan.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-all inline-block"
              >
                Contact Us for More Information
              </button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/IMG_0627.jpg"
                alt="Spray tanning session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-red-600" style={{ fontFamily: 'Bungasai, serif' }}>
              Latest Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of spray tanning with our advanced heated spray tan systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <Image
                src="/images/TanningDisplay.png"
                alt="Heated spray tan machine"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl mb-6 text-gray-800" style={{ fontFamily: 'Bungasai, serif' }}>
                Heated Spray Tan Technology
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Our premium heated spray tan machines revolutionize the tanning experience by providing a warm, comfortable mist that makes your session more enjoyable than ever before.
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✓</span>
                  <span>Warm, comfortable mist for maximum relaxation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✓</span>
                  <span>Even, streak-free application every time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✓</span>
                  <span>Faster drying time for your convenience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✓</span>
                  <span>Premium tanning solutions for natural-looking results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✓</span>
                  <span>State-of-the-art equipment for the best experience</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Bungasai, serif' }}>
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl mb-6 text-red-50">
              Book your appointment today and discover why our heated spray tan technology is the preferred choice for a perfect, comfortable tan.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Your Appointment Today
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-red-600" style={{ fontFamily: 'Bungasai, serif' }}>
              Gallery
            </h2>
            <p className="text-xl text-gray-600">
              See the beautiful results of our premium spray tanning services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/images/IMG_0618.jpg',
              '/images/IMG_0627.jpg',
              '/images/IMG_0630.jpg',
              '/images/AD7x550.jpg',
              '/images/PoolSidex550.jpg',
              '/images/BeachReachx800.png',
            ].map((src, index) => (
              <div key={index} className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Bungasai, serif' }}>
              Book Your Appointment Today
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to experience the ultimate in spray tanning comfort? Contact us to schedule your appointment or learn more about our services.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <div className="space-y-6 text-center">
                <div>
                  <h3 className="text-2xl mb-4" style={{ fontFamily: 'Bungasai, serif' }}>
                    Get in Touch
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Contact us for pricing, availability, and to book your appointment. We're here to help you achieve the perfect tan!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start justify-center space-x-3 text-lg">
                    <svg className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <a 
                      href="https://maps.google.com/?q=110-186+Sutton+Place+Beaconsfield+QC+H9W+5S3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-red-400 transition-colors text-center"
                    >
                      110-186 Sutton Place<br />
                      Beaconsfield, QC H9W 5S3
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-lg">
                    <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a 
                      href="mailto:appointments@mangospra.com" 
                      className="text-gray-300 hover:text-red-400 transition-colors"
                    >
                      appointments@mangospra.com
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-lg text-red-400 font-semibold mb-4">
                    We look forward to helping you achieve your perfect tan!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image
              src="/images/MangoSTx250.png"
              alt="Mango Spray Tan Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-white" style={{ fontFamily: 'Bungasai, serif' }}>
              Mango Spray Tan
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-sm">
              110-186 Sutton Place, Beaconsfield, QC H9W 5S3
            </p>
            <p className="text-sm">
              <a href="mailto:appointments@mangospra.com" className="hover:text-red-400 transition-colors">
                appointments@mangospra.com
              </a>
            </p>
            <p className="text-sm mt-4">
              © 2023 Mango Spray Tan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

