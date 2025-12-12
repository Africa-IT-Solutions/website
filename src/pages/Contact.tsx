import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Address',
      value: 'Av. Vladimir Lenine, 1 Floor, Millenium Park Building, Maputo',
      link: '#',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '+258 86 108 5811 8',
      link: 'tel:+2588610858118',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'info@africait.co.mz',
      link: 'mailto:info@africait.co.mz',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-black text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Business with Technology?
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            We're here to help you navigate the complexities of digital transformation and make technology work for your business.
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 opacity-0 animate-fade-in-up">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Contact Information
              </h2>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.link}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="p-2 bg-white text-black rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                <p>Saturday: 9:00 AM – 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="opacity-0 animate-fade-in-up delay-200">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900 p-8 rounded-lg space-y-6"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-300 mb-6">
                Tell us about your project or inquiry and our team will be in touch.
              </p>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                  placeholder="+258 XX XXX XXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

