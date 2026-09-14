import Link from 'next/link'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative bg-dark-bg overflow-hidden py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="neon-glow">Charles n Charge</span>
            <br />
            <span className="gradient-neon text-5xl md:text-6xl">Property Maintenance</span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Professional lawn care, pressure washing, handyman services, tree trimming, pest control, and more. Serving Grant County and surrounding areas in Indiana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="btn-neon inline-block text-center">
              Get Free Quote
            </Link>
            <Link href="/invoice-maker" className="btn-outline-neon inline-block text-center">
              View Invoice Maker
            </Link>
          </div>
          
          <div className="space-y-3 pt-6">
            <div className="flex items-center gap-3 text-lg">
              <FaPhone className="text-neon-green text-2xl" />
              <a href="tel:7656616867" className="hover:text-neon-green">765-661-6867</a>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FaEnvelope className="text-neon-green text-2xl" />
              <a href="mailto:finedeals765@gmail.com" className="hover:text-neon-green">finedeals765@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-green-light opacity-20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-dark-secondary border-2 border-neon-green rounded-3xl p-12 neon-glow-box">
              <div className="text-6xl font-bold text-neon-green text-center">7 SERVICES</div>
              <div className="mt-6 space-y-3 text-center text-gray-300">
                <p>✓ Lawn Maintenance</p>
                <p>✓ Pressure Washing</p>
                <p>✓ Handyman Services</p>
                <p>✓ Moving & Hauling</p>
                <p>✓ Pest Control</p>
                <p>✓ Tree Trimming</p>
                <p>✓ Stump Grinding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
