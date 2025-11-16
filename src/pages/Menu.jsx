import React from 'react'
import { pastries, drinks } from '../data/menu'
import { useCart } from '../context/CartContext'

export default function Menu() {
  const { addItem } = useCart()
  return (
    <main className="bg-[#FFF9EF]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-amber-900">Menu</h1>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-amber-900">Pastries</h2>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastries.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
                <img src={p.img} alt={p.name} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-semibold text-amber-900">{p.name}</h3>
                    <span className="text-amber-700">£{p.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-amber-800/80 mt-1">{p.desc}</p>
                  <button onClick={() => addItem({ id: p.id, name: p.name, price: p.price })} className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-amber-900">Drinks</h2>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {drinks.map((d) => (
              <div key={d.id} className="bg-white rounded-xl shadow-sm border border-amber-100 p-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-amber-900">{d.name}{d.addon ? ' (+)' : ''}</h3>
                  <span className="text-amber-700">£{d.price.toFixed(2)}</span>
                </div>
                {!d.addon && (
                  <button onClick={() => addItem({ id: d.id, name: d.name, price: d.price })} className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md">Add to Cart</button>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
