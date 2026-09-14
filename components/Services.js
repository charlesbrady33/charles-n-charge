import { FaTree, FaSprayCan, FaTools, FaTruck, FaBug, FaLeaf, FaAnchor } from 'react-icons/fa'

const services = [
  { icon: FaLeaf, title: 'Lawn Maintenance', desc: 'Professional lawn care, mowing, edging, and landscaping' },
  { icon: FaSprayCan, title: 'Pressure Washing', desc: 'Deep cleaning for driveways, decks, and exterior surfaces' },
  { icon: FaTools, title: 'Handyman Services', desc: 'General repairs, maintenance, and home improvement' },
  { icon: FaTruck, title: 'Moving & Hauling', desc: 'Efficient moving and junk removal services' },
  { icon: FaBug, title: 'Pest Control', desc: 'Professional pest management and prevention' },
  { icon: FaTree, title: 'Tree Trimming', desc: 'Safe and professional tree care and trimming' },
  { icon: FaAnchor, title: 'Stump Grinding', desc: 'Complete stump removal and grinding services' },
]

export default function Services() {
  return (
    <section id="services" className="bg-dark-bg py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 neon-glow">Our Services</h2>
          <p className="text-xl text-gray-300">Complete property maintenance solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="service-card p-8 rounded-lg border-2 border-transparent hover:border-neon-green">
                <Icon className="text-5xl text-neon-green mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
