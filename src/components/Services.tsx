import { useEffect, useRef } from 'react'
import {
  Network,
  Code,
  Server,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'
import networkingImg from '../assets/Networking-IT-Infrastructure.jpg'
import appDevImg from '../assets/app-development.jpg'
import itInfraImg from '../assets/it-infrastructure.jpeg'
import trainingImg from '../assets/training-programs.webp'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  image: string
}

const services: Service[] = [
  {
    icon: <Network className="h-12 w-12" />,
    title: 'Networking Solutions',
    description:
      'Comprehensive network design, implementation, and management services to keep your business connected.',
    features: [
      'Network Design & Architecture',
      'Infrastructure Setup',
      'Network Security',
      '24/7 Monitoring & Support',
    ],
    image: networkingImg,
  },
  {
    icon: <Code className="h-12 w-12" />,
    title: 'Software Development',
    description:
      'Custom software solutions tailored to your business needs, from web applications to enterprise systems.',
    features: [
      'Web & Mobile Applications',
      'Enterprise Software',
      'API Development',
      'System Integration',
    ],
    image: appDevImg,
  },
  {
    icon: <Server className="h-12 w-12" />,
    title: 'Hardware Sales & Support',
    description:
      'Quality hardware solutions with comprehensive support and maintenance services.',
    features: [
      'Hardware Procurement',
      'Installation & Configuration',
      'Maintenance & Repairs',
      'Technical Support',
    ],
    image: itInfraImg,
  },
  {
    icon: <GraduationCap className="h-12 w-12" />,
    title: 'IT Training for Corporates',
    description:
      'Professional IT training programs designed to upskill your team and enhance productivity.',
    features: [
      'Custom Training Programs',
      'Certification Courses',
      'On-site & Remote Training',
      'Ongoing Support',
    ],
    image: trainingImg,
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions to meet all your technology needs
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="group relative bg-white rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden opacity-0"
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 p-3 bg-black/80 backdrop-blur-sm text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-lg">
                  {service.title}
                </h3>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 group-hover:text-black transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-black flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-gray-600 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

