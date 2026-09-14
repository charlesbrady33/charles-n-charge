import { FaCheckCircle } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="bg-dark-secondary py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-6 neon-glow">About Charles n Charge</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Based in Marion, Indiana, Charles n Charge is your trusted partner for all property maintenance needs. We serve Grant County and surrounding areas with professional, reliable service.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <FaCheckCircle className="text-neon-green text-2xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Professional Service</h4>
                <p className="text-gray-400">Experienced team with years of industry expertise</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <FaCheckCircle className="text-neon-green text-2xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Reliable & Trustworthy</h4>
                <p className="text-gray-400">We show up on time and deliver quality results</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <FaCheckCircle className="text-neon-green text-2xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Competitive Pricing</h4>
                <p className="text-gray-400">Fair rates without compromising on quality</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <FaCheckCircle className="text-neon-green text-2xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">7 Services in One</h4>
                <p className="text-gray-400">Your complete property maintenance solution</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-dark-bg border-2 border-neon-green rounded-2xl p-10 neon-glow-box">
            <h3 className="text-3xl font-bold mb-6 neon-glow">Contact Info</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 mb-2">Business Name</p>
                <p className="text-xl font-bold">Charles n Charge</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Phone</p>
                <p className="text-xl font-bold"><a href="tel:7656616867">765-661-6867</a></p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Email</p>
                <p className="text-xl font-bold break-all"><a href="mailto:finedeals765@gmail.com">finedeals765@gmail.com</a></p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Address</p>
                <p className="text-xl font-bold">1708 W Euclid Ave<br />Marion, IN 46952</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Service Area</p>
                <p className="text-xl font-bold">Grant County & Surrounding Areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
