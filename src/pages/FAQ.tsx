import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What IT services does Africa IT Solutions provide?',
    answer: 'We offer comprehensive IT services including networking solutions (design, architecture, security, and monitoring), custom software development (web and mobile applications, enterprise software, APIs, and system integration), hardware sales and support (procurement, installation, maintenance, and technical support), and IT training for corporates (custom programs, certification courses, on-site and remote training).',
  },
  {
    question: 'Where is Africa IT Solutions located?',
    answer: 'We are headquartered in Maputo, Mozambique, with our office located at Av. Vladimir Lenine, 1 Floor, Millenium Park Building. We serve clients locally and regionally across Africa.',
  },
  {
    question: 'How long has Africa IT Solutions been in business?',
    answer: 'We have over 15 years of industry experience, successfully completing 500+ projects with a team of 50+ experienced IT professionals.',
  },
  {
    question: 'Do you provide 24/7 support for networking services?',
    answer: 'Yes, we offer 24/7 monitoring and support for our networking solutions. Our team provides real-time network health monitoring with proactive issue detection and resolution to minimize downtime.',
  },
  {
    question: 'Can you develop custom software for our business?',
    answer: 'Absolutely! We specialize in custom software development, including web and mobile applications, enterprise software, API development, and system integration. Our solutions are tailored to your specific business needs and workflows.',
  },
  {
    question: 'What types of hardware do you sell and support?',
    answer: 'We provide a wide range of hardware solutions, from desktops and laptops to enterprise-grade servers and networking equipment. We handle procurement, installation, configuration, maintenance, and repairs for all hardware needs.',
  },
  {
    question: 'Do you offer IT training for corporate teams?',
    answer: 'Yes, we provide professional IT training programs including custom training programs tailored to your team\'s roles and objectives, certification courses, and flexible on-site or remote training formats with ongoing support.',
  },
  {
    question: 'How can I get a quote for your services?',
    answer: 'You can contact us through our contact form on the website, email us at info@africait.co.mz, or call us at +258 86 108 5811 8. Our team will discuss your requirements and provide a customized quote.',
  },
  {
    question: 'What are your business hours?',
    answer: 'Our business hours are Monday through Friday from 8:00 AM to 6:00 PM, Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays. For urgent matters, please contact us and we\'ll do our best to assist.',
  },
  {
    question: 'Do you work with businesses of all sizes?',
    answer: 'Yes, we work with organizations of all sizes—from small businesses to large enterprises. We believe every organization should have access to world-class technology solutions, and we tailor our services to meet your specific needs and budget.',
  },
  {
    question: 'Can you integrate new systems with our existing legacy systems?',
    answer: 'Yes, system integration is one of our core capabilities. We specialize in seamlessly integrating new applications with legacy systems to enhance efficiency without disrupting your current operations.',
  },
  {
    question: 'What makes Africa IT Solutions different from other IT providers?',
    answer: 'We combine localized understanding with global-standard technology practices. Our team brings deep technical expertise, strategic insight, and a client-centric approach to every engagement. We focus on delivering long-term value and measurable impact for our clients.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

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

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our IT services and solutions
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-400"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <span className="text-lg font-semibold text-black pr-8 group-hover:text-gray-700">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-black flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-5 text-gray-700 leading-relaxed border-t border-gray-200 bg-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-gray-900 to-black rounded-xl p-12 text-white">
          <p className="text-lg text-gray-300 mb-6">
            Still have questions? We're here to help!
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

