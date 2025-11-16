import React, { useState } from 'react'
import { pastries } from '../data/menu'
import { useCart } from '../context/CartContext'

export default function FeaturedPastries() {
  const { addItem } = useCart()
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="featured" className="bg-[#FFF9EF]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900">Featured Pastries</h2>
        <p className="text-amber-800/80 mt-2">A selection of our customer favorites.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastries.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden group">
              <div className="relative">
                <img src={p.img} alt={p.name} onClick={() => setLightbox(p.img)} className="h-48 w-full object-cover cursor-zoom-in group-hover:scale-[1.02] transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-amber-900">{p.name}</h3>
                  <span className="text-amber-700 font-medium">£{p.price.toFixed(2)}</span>
                </div>
                <p className="text-amber-800/80 text-sm mt-1">{p.desc}</p>
                <button onClick={() => addItem({ id: p.id, name: p.name, price: p.price })} className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md shadow">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 bg-black/70 z-50 grid place-items-center p-6" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Pastry" className="max-h-[85vh] rounded-lg shadow-2xl" />
        </div>
      )}
    </section>
  )
}
