import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)

  const navItem = 'px-3 py-2 rounded-md text-[15px] font-medium hover:bg-amber-100/60 transition'
  const active = ({ isActive }) => (isActive ? 'bg-amber-200/60 text-amber-900 ' + navItem : navItem)

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[rgba(255,252,245,0.8)] border-b border-amber-100/70 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Bonjour Putney" className="h-8 w-8" />
            <span className="font-semibold text-amber-900 tracking-wide">Bonjour Putney</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2 text-amber-900">
            <NavLink to="/" className={active}>Home</NavLink>
            <NavLink to="/menu" className={active}>Menu</NavLink>
            <NavLink to="/about" className={active}>About</NavLink>
            <NavLink to="/contact" className={active}>Contact</NavLink>
            <NavLink to="/order" className={active}>Order</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/order" className="relative inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-md shadow-md transition">
              <ShoppingCart className="h-4 w-4" />
              <span className="text-sm">Cart</span>
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 grid place-items-center shadow">{count}</span>
              )}
            </Link>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-amber-100">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2 text-amber-900">
              <NavLink onClick={() => setOpen(false)} to="/" className={active}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/menu" className={active}>Menu</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about" className={active}>About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className={active}>Contact</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/order" className={active}>Order</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
