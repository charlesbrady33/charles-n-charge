import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t-2 border-neon-green">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold neon-glow mb-4">Charles n Charge</h3>
            <p className="text-gray-400">Professional property maintenance services for Grant County and beyond.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#services">Lawn Maintenance</Link></li>
              <li><Link href="#services">Pressure Washing</Link></li>
              <li><Link href="#services">Handyman Services</Link></li>
              <li><Link href="#services">Tree Trimming</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/invoice-maker">Invoice Maker</Link></li>
              <li><Link href="/calculator">Calculator</Link></li>
              <li><Link href="#contact">Contact</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">&copy; 2024 Charles n Charge. All rights reserved.</p>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-neon-green"><FaFacebook /></a>
              <a href="#" className="hover:text-neon-green"><FaInstagram /></a>
              <a href="#" className="hover:text-neon-green"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
