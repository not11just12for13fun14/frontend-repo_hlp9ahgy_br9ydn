import React, { useMemo, useState } from 'react'
import { pastries, drinks } from '../data/menu'
import { useCart } from '../context/CartContext'

function ProductCard({ item, onAdd }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-amber-100 p-4 flex items-start gap-4">
      {item.img && <img src={item.img} alt={item.name} className="h-16 w-16 object-cover rounded-md" />}
      <div className="flex-1">
        <h4 className="font-semibold text-amber-900">{item.name}</h4>
        <p className="text-sm text-amber-800/80">£{item.price.toFixed(2)}</p>
      </div>
      <button onClick={() => onAdd(item)} className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-md">Add</button>
    </div>
  )
}

export default function Order() {
  const { items, addItem, decreaseQty, removeItem, total, clear } = useCart()
  const [checkout, setCheckout] = useState(false)

  const products = useMemo(() => ([...pastries, ...drinks]), [])

  const placeOrder = (ev) => {
    ev.preventDefault()
    setCheckout(true)
    clear()
  }

  if (checkout) {
    return (
      <main className="bg-[#FFF9EF]">
        <div className="max-w-xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-amber-900">Order Confirmed</h1>
          <p className="mt-2 text-amber-800">Merci! Your delicious treats are being prepared.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#FFF9EF]">
      <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-amber-900">Order</h1>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {products.map((p) => (
              <ProductCard key={p.id} item={p} onAdd={(it)=>addItem({ id: it.id, name: it.name, price: it.price })} />
            ))}
          </div>
        </div>
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-amber-100 p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-amber-900">Your Cart</h2>
            <ul className="mt-4 space-y-3">
              {items.length === 0 && <p className="text-amber-800/80">Your cart is empty.</p>}
              {items.map((i) => (
                <li key={i.id} className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-amber-900 font-medium">{i.name}</p>
                    <p className="text-sm text-amber-800/80">£{i.price.toFixed(2)} × {i.qty}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => decreaseQty(i.id)} className="px-2 py-1 rounded-md bg-amber-50 border border-amber-200">-</button>
                    <button onClick={() => addItem(i)} className="px-2 py-1 rounded-md bg-amber-50 border border-amber-200">+</button>
                    <button onClick={() => removeItem(i.id)} className="px-2 py-1 rounded-md bg-red-50 border border-red-200 text-red-700">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-amber-900 font-semibold">Total</span>
              <span className="text-amber-900 font-bold">£{total.toFixed(2)}</span>
            </div>
            <form onSubmit={placeOrder} className="mt-4 space-y-3">
              <input required placeholder="Name" className="w-full rounded-md border-amber-200 focus:ring-amber-300 focus:border-amber-300" />
              <input required type="email" placeholder="Email" className="w-full rounded-md border-amber-200 focus:ring-amber-300 focus:border-amber-300" />
              <input required placeholder="Phone" className="w-full rounded-md border-amber-200 focus:ring-amber-300 focus:border-amber-300" />
              <button disabled={items.length===0} className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md disabled:opacity-50">Checkout</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
