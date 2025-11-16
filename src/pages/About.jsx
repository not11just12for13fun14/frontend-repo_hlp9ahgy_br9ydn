import React from 'react'
import AboutSection from '../components/AboutSection'

export default function About() {
  return (
    <main>
      <div className="bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="bg-[rgba(26,16,5,0.55)]">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">About Bonjour Putney</h1>
            <p className="text-amber-50 mt-2 max-w-3xl">A neighborhood bakery with Parisian soul — handcrafted pastries, aromatic coffee, and warm hospitality.</p>
          </div>
        </div>
      </div>
      <AboutSection />
    </main>
  )
}
