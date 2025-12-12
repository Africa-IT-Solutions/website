import { useEffect, useRef } from 'react'
import { ChevronDown, Network, Code, Server, GraduationCap, ArrowRight, Shield, Zap, Users, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import itInfraImg from '../assets/it-infrastructure.jpeg'
import networkingImg from '../assets/Networking-IT-Infrastructure.jpg'
import appDevImg from '../assets/app-development.jpg'
import trainingImg from '../assets/training-programs.webp'
import networkSecurityImg from '../assets/network-security.webp'
import networkDesignImg from '../assets/network-design-2.jpg'

const services = [
  {
    icon: <Network className="h-8 w-8" />,
    title: 'Networking Solutions',
    description: 'Design, deploy, and manage network systems that form the backbone of your digital operations.',
    image: networkingImg,
    link: '/services',
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Software Development',
    description: 'Custom software that accelerates processes and unlocks new business value.',
    image: appDevImg,
    link: '/services',
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: 'Hardware Sales & Support',
    description: 'Quality hardware solutions backed by comprehensive support services.',
    image: itInfraImg,
    link: '/services',
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'IT Training',
    description: 'Professional training programs to elevate technical knowledge and productivity.',
    image: trainingImg,
    link: '/services',
  },
]

const benefits = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 24/7 monitoring to protect your business.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Fast Implementation',
    description: 'Rapid deployment and seamless integration with your existing systems.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Expert Team',
    description: '50+ experienced professionals with 15+ years of industry expertise.',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Proven Track Record',
    description: '500+ successful projects completed for businesses across Mozambique.',
  },
]

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '50+', label: 'Expert Team Members' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const heroBgRef = useRef<HTMLDivElement>(null)
  const servicesBgRef = useRef<HTMLDivElement>(null)
  const benefitsBgRef = useRef<HTMLDivElement>(null)
  const statsBgRef = useRef<HTMLDivElement>(null)

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

    const refs = [heroRef, servicesRef, benefitsRef, statsRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let ticking = false

    const updateParallax = () => {
      const scrollY = window.scrollY

      // Hero section parallax
      if (heroBgRef.current) {
        const heroOffset = scrollY * 0.5
        heroBgRef.current.style.transform = `translate3d(0, ${heroOffset}px, 0)`
      }

      // Services section parallax
      if (servicesBgRef.current && servicesRef.current) {
        const rect = servicesRef.current.getBoundingClientRect()
        const sectionTop = rect.top + scrollY
        const scrollProgress = (scrollY - sectionTop + window.innerHeight) / (rect.height + window.innerHeight)
        
        if (scrollProgress > -0.2 && scrollProgress < 1.2) {
          const parallaxOffset = (scrollY - sectionTop) * 0.3
          servicesBgRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`
        }
      }

      // Benefits section parallax
      if (benefitsBgRef.current && benefitsRef.current) {
        const rect = benefitsRef.current.getBoundingClientRect()
        const sectionTop = rect.top + scrollY
        const scrollProgress = (scrollY - sectionTop + window.innerHeight) / (rect.height + window.innerHeight)
        
        if (scrollProgress > -0.2 && scrollProgress < 1.2) {
          const parallaxOffset = (scrollY - sectionTop) * 0.3
          benefitsBgRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`
        }
      }

      // Stats section parallax
      if (statsBgRef.current && statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect()
        const sectionTop = rect.top + scrollY
        const scrollProgress = (scrollY - sectionTop + window.innerHeight) / (rect.height + window.innerHeight)
        
        if (scrollProgress > -0.2 && scrollProgress < 1.2) {
          const parallaxOffset = (scrollY - sectionTop) * 0.3
          statsBgRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`
        }
      }

      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateParallax() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div
            ref={heroBgRef}
            className="absolute inset-0 will-change-transform z-0"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          >
            <img
              src={itInfraImg}
              alt="IT Infrastructure"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80 z-0" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              At Africa IT Solutions, we believe that every organization—no matter its size—should have access to world-class technology that drives growth, efficiency, and innovation. Based in Maputo, Mozambique, we are a trusted IT partner dedicated to delivering robust, reliable, and future-ready technology services.
            </p>

            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto opacity-0 animate-slide-up delay-700">
              From modernizing legacy systems to implementing secure infrastructure and custom software, our solutions are designed to help you stay competitive in a rapidly evolving digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 opacity-0 animate-slide-up delay-800">
              <Link
                to="/services"
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#services-preview"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('services-preview')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            aria-label="Scroll to services"
          >
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative py-16 bg-black text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div
            ref={statsBgRef}
            className="absolute inset-0 will-change-transform z-0"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          >
            <img
              src={networkDesignImg}
              alt="Network Design"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90 z-0" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 opacity-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services-preview" ref={servicesRef} className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div
            ref={servicesBgRef}
            className="absolute inset-0 will-change-transform z-0"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          >
            <img
              src={itInfraImg}
              alt="IT Infrastructure"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/60 z-0" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Our Comprehensive IT Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From networking and software development to hardware support and training, we provide end-to-end IT solutions tailored to your business needs.
            </p>
            <div className="w-24 h-1 bg-black mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 p-3 bg-black/80 backdrop-blur-sm text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={benefitsRef} className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div
            ref={benefitsBgRef}
            className="absolute inset-0 will-change-transform z-0"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          >
            <img
              src={networkingImg}
              alt="Networking"
              className="w-full h-full object-cover opacity-45"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-gray-50/40 to-white/50 z-0" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Why Choose Africa IT Solutions?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              We combine localized understanding with global-standard technology practices to deliver outcomes that matter.
            </p>
            <div className="w-24 h-1 bg-black mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="relative bg-white/95 backdrop-blur-sm p-8 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Subtle background pattern on each card */}
                <div className="absolute inset-0 rounded-lg overflow-hidden opacity-15 z-0">
                  <img
                    src={networkSecurityImg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <div className="p-3 bg-black text-white rounded-lg w-fit mb-4 transition-transform duration-300 hover:scale-110">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-black text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={networkSecurityImg}
            alt="Network Security"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 z-0" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] z-0" />
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT solutions can drive growth, efficiency, and innovation for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
