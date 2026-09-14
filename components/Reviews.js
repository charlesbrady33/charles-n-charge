import { FaStar } from 'react-icons/fa'

const reviews = [
  { name: 'John Smith', rating: 5, text: 'Excellent service! Professional and on time. Highly recommend!', service: 'Lawn Maintenance' },
  { name: 'Sarah Johnson', rating: 5, text: 'Best pressure washing job I\'ve seen. Very thorough and fair pricing.', service: 'Pressure Washing' },
  { name: 'Mike Davis', rating: 5, text: 'Fixed multiple issues around my house. Great handyman work!', service: 'Handyman Services' },
  { name: 'Linda Wilson', rating: 5, text: 'They removed a huge stump effortlessly. Amazing results!', service: 'Stump Grinding' },
  { name: 'Robert Brown', rating: 5, text: 'Professional tree trimming. They cleaned up everything too!', service: 'Tree Trimming' },
  { name: 'Jennifer Miller', rating: 5, text: 'Quick, reliable, and honest pricing. Will use again!', service: 'Moving & Hauling' },
]

export default function Reviews() {
  return (
    <section id="reviews" className="bg-dark-secondary py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 neon-glow">Customer Reviews</h2>
          <p className="text-xl text-gray-300">See what our happy customers say</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-dark-bg p-8 rounded-lg border-2 border-neon-green neon-glow-box">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-neon-green text-lg" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">\"{ review.text }\"</p>
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-neon-green">{review.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
