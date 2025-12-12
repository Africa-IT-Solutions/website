import { useEffect, useRef } from 'react'
import { MapPin, Users, Award, Target } from 'lucide-react'
import networkSecurityImg from '../assets/network-security.webp'

const stats = [
  { icon: <MapPin className="h-8 w-8" />, label: 'Location', value: 'Maputo, Mozambique' },
  { icon: <Users className="h-8 w-8" />, label: 'Expert Team', value: '50+' },
  { icon: <Award className="h-8 w-8" />, label: 'Projects Completed', value: '500+' },
  { icon: <Target className="h-8 w-8" />, label: 'Years Experience', value: '15+' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (contentRef.current) observer.observe(contentRef.current)
    statsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-100 via-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            About Africa IT Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted technology partner in Mozambique
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div
            ref={contentRef}
            className="space-y-6 opacity-0"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-black">
              Leading IT Solutions Provider
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Africa IT Solutions is a Mozambican-based company with offices in
              Maputo, dedicated to providing comprehensive IT services that drive
              business growth and innovation.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              With years of experience in the industry, we have established
              ourselves as a trusted partner for businesses seeking reliable,
              scalable, and cutting-edge technology solutions.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our team of skilled professionals is committed to delivering
              excellence in every project, ensuring that our clients receive
              the highest quality service and support.
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-2xl">
              <img
                src={networkSecurityImg}
                alt="Network Security"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm">
                <div className="p-8 sm:p-12 space-y-8">
                  <div>
                    <h4 className="text-white text-xl font-semibold mb-4">
                      Our Mission
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      To empower African businesses through innovative technology
                      solutions that enhance productivity, efficiency, and
                      competitive advantage.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white text-xl font-semibold mb-4">
                      Our Vision
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      To be the leading IT solutions provider in Africa, recognized
                      for excellence, innovation, and commitment to client success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(el) => {
                statsRefs.current[index] = el
              }}
              className="bg-white p-6 rounded-lg border border-gray-200 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg opacity-0"
            >
              <div className="flex justify-center mb-4 text-black">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

