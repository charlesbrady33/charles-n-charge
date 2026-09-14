import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-dark-secondary border-b-2 border-neon-green sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="text-3xl font-bold neon-glow cursor-pointer">
            Charles n Charge
          </div>
        </Link>
        
        <button 
          className="md:hidden text-neon-green text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`hidden md:flex gap-8 items-center`}>
          <Link href="#services" className="hover:text-neon-green transition">Services</Link>
          <Link href="#about" className="hover:text-neon-green transition">About</Link>
          <Link href="#gallery" className="hover:text-neon-green transition">Gallery</Link>
          <Link href="#reviews" className="hover:text-neon-green transition">Reviews</Link>
          <Link href="/invoice-maker" className="btn-neon text-sm">Invoice Maker</Link>
          <Link href="/calculator" className="btn-neon text-sm">Calculator</Link>
          <Link href="#contact" className="btn-outline-neon text-sm">Contact</Link>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-dark-bg border-t border-neon-green p-6 space-y-4">
          <Link href="#services" className="block hover:text-neon-green">Services</Link>
          <Link href="#about" className="block hover:text-neon-green">About</Link>
          <Link href="#gallery" className="block hover:text-neon-green">Gallery</Link>
          <Link href="#reviews" className="block hover:text-neon-green">Reviews</Link>
          <Link href="/invoice-maker" className="block btn-neon">Invoice Maker</Link>
          <Link href="/calculator" className="block btn-neon">Calculator</Link>
          <Link href="#contact" className="block btn-outline-neon">Contact</Link>
        </div>
      )}
    </header>
  )
}
