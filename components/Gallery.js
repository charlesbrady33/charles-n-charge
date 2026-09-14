import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const galleryItems = [
  { id: 1, title: 'Before & After - Lawn Care', category: 'Lawn', before: 'Before', after: 'After' },
  { id: 2, title: 'Pressure Washing Results', category: 'Pressure Washing', before: 'Before', after: 'After' },
  { id: 3, title: 'Tree Trimming', category: 'Tree Service', before: 'Before', after: 'After' },
  { id: 4, title: 'Handyman Work', category: 'Handyman', before: 'Before', after: 'After' },
  { id: 5, title: 'Stump Grinding', category: 'Stump Removal', before: 'Before', after: 'After' },
  { id: 6, title: 'Pest Control Service', category: 'Pest Control', before: 'Before', after: 'After' },
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % galleryItems.length)
  const prev = () => setCurrent((current - 1 + galleryItems.length) % galleryItems.length)

  return (
    <section id="gallery" className="bg-dark-bg py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 neon-glow">Before & After</h2>
          <p className="text-xl text-gray-300">See the transformation of our work</p>
        </div>
        
        <div className="relative">
          <div className="bg-dark-secondary rounded-2xl overflow-hidden border-2 border-neon-green neon-glow-box">
            <div className="grid md:grid-cols-2 min-h-96">
              <div className="bg-gray-800 flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-gray-400 mb-4">BEFORE</p>
                  <p className="text-3xl font-bold text-neon-green">{galleryItems[current].before}</p>
                </div>
              </div>
              <div className="bg-gray-900 flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-gray-400 mb-4">AFTER</p>
                  <p className="text-3xl font-bold text-neon-green">{galleryItems[current].after}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold mb-2">{galleryItems[current].title}</h3>
            <p className="text-gray-400 mb-6">{galleryItems[current].category}</p>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="btn-neon">
              <FaChevronLeft /> Previous
            </button>
            <button onClick={next} className="btn-neon">
              Next <FaChevronRight />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  idx === current ? 'bg-neon-green' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
