import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="bg-dark-bg py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 neon-glow">Get in Touch</h2>
          <p className="text-xl text-gray-300">Contact us for a free quote</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <FaPhone className="text-neon-green text-3xl flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Phone</h3>
                <a href="tel:7656616867" className="text-lg text-gray-300 hover:text-neon-green">765-661-6867</a>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <FaEnvelope className="text-neon-green text-3xl flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Email</h3>
                <a href="mailto:finedeals765@gmail.com" className="text-lg text-gray-300 hover:text-neon-green">finedeals765@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <FaMapMarkerAlt className="text-neon-green text-3xl flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Address</h3>
                <p className="text-lg text-gray-300">1708 W Euclid Ave<br />Marion, IN 46952</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitted && (
              <div className="bg-neon-green text-black p-4 rounded-lg font-bold text-center">
                Thank you! We'll be in touch soon.
              </div>
            )}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 bg-dark-secondary border-2 border-neon-green rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 bg-dark-secondary border-2 border-neon-green rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-6 py-3 bg-dark-secondary border-2 border-neon-green rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 bg-dark-secondary border-2 border-neon-green rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-green"
            />
            <button type="submit" className="btn-neon w-full text-lg font-bold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
