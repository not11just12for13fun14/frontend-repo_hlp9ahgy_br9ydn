import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2100&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,16,5,0.45)] to-[rgba(255,252,245,0.85)]"></div>
      <div className="max-w-6xl mx-auto px-4 py-24 md:py-36 relative">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Authentic French Pastries in the Heart of Putney
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="mt-4 text-lg md:text-xl text-amber-50 max-w-2xl">
          Handmade daily with the finest ingredients. Cozy, elegant, and irresistibly delicious.
        </motion.p>
        <motion.a href="#featured" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="inline-block mt-8 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full shadow-lg">
          Order Now
        </motion.a>
      </div>
    </section>
  )
}
