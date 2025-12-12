import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import itInfraImg from '../assets/it-infrastructure.jpeg'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToServices = () => {
    const element = document.querySelector('#services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={itInfraImg}
          alt="IT Infrastructure"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block opacity-0 animate-slide-up">Empowering</span>
            <span className="block mt-2 opacity-0 animate-slide-up delay-200">
              African Businesses
            </span>
            <span className="block mt-2 text-gray-400 opacity-0 animate-slide-up delay-400">
              Through Technology
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto opacity-0 animate-slide-up delay-600">
            Leading IT solutions provider in Mozambique, delivering comprehensive
            technology services to drive your business forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 opacity-0 animate-slide-up delay-800">
            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Our Services
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToServices}
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="Scroll to services"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}

