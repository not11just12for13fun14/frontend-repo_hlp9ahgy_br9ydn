import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#FCF4E6] border-t border-amber-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-amber-900">
        <div>
          <p className="font-semibold">Bonjour Putney</p>
          <p className="text-sm mt-2 text-amber-800/90">Authentic French pastries and coffee in a cozy neighborhood café.</p>
        </div>
        <div>
          <p className="font-semibold">Visit</p>
          <p className="text-sm mt-2">64 Lower Richmond Rd., London SW15 1LL</p>
        </div>
        <div>
          <p className="font-semibold">Hours</p>
          <p className="text-sm mt-2">Mon–Fri: 7:30–17:00</p>
          <p className="text-sm">Sat–Sun: 8:00–17:00</p>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="text-sm mt-2">hello@bonjourputney.co.uk</p>
          <p className="text-sm">+44 20 0000 0000</p>
        </div>
      </div>
      <div className="text-center text-amber-800/70 text-sm pb-6">© {new Date().getFullYear()} Bonjour Putney. All rights reserved.</div>
    </footer>
  )
}
