import { useEffect, useRef } from 'react'
import { MapPin, Users, Award, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
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
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-100 via-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Your Trusted Technology Partner in Mozambique
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Africa IT Solutions is a Mozambican-based IT service provider headquartered in Maputo. With years of experience serving businesses across multiple sectors, we have established a reputation for delivering dependable, scalable, and forward-thinking technology solutions tailored to local and regional needs.
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div
            ref={contentRef}
            className="space-y-6 opacity-0"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Leading IT Solutions Provider
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our team of experienced professionals brings technical expertise, strategic insight, and a passion for innovation to every engagement. We partner with you to understand your challenges, recommend the right solutions, and implement systems that deliver long-term value.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              At Africa IT Solutions, we combine localized understanding with global-standard technology practices to deliver outcomes that matter.
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
                    <h3 className="text-white text-xl font-semibold mb-4">
                      Our Mission
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      To empower African businesses with innovative technology solutions that enhance productivity, streamline operations, and strengthen competitive advantage.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-4">
                      Our Vision
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      To be the leading IT solutions provider in Africa, recognized for excellence, innovation, and unwavering commitment to client success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-8">
            Our Capabilities at a Glance
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                ref={(el) => {
                  statsRefs.current[index] = el
                }}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl opacity-0"
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

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-gray-900 to-black rounded-xl p-12 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Partner With Us Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the difference that expert IT solutions can make for your business. Let's work together to achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

