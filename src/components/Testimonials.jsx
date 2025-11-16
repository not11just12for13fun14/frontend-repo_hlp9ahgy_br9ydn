import React, { useEffect, useState } from 'react'

const data = [
  { quote: 'The best lemon tart I have ever had. Truly Paris in Putney!', name: 'Emma L.' },
  { quote: 'Cozy vibes, amazing coffee, and perfect brownies.', name: 'James P.' },
  { quote: 'Raspberry tart is a dream. Staff are lovely too!', name: 'Sofia M.' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % data.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h3 className="text-3xl font-bold text-amber-900">What Our Guests Say</h3>
        <div className="mt-8 relative">
          {data.map((t, i) => (
            <blockquote key={i} className={`transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'} absolute inset-0 flex flex-col items-center justify-center px-6`}>
              <p className="text-xl md:text-2xl text-amber-900 max-w-3xl">“{t.quote}”</p>
              <footer className="mt-3 text-amber-700">— {t.name}</footer>
            </blockquote>
          ))}
          <div className="h-24" />
        </div>
      </div>
    </section>
  )
}
