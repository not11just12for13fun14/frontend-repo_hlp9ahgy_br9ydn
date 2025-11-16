import React from 'react'

export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900">Our Story</h2>
          <p className="mt-3 text-amber-800/90 leading-relaxed">
            Inspired by classic Parisian cafés, Bonjour Putney brings the warmth of French baking to the heart of London. Each morning, our bakers craft tartes, viennoiseries, and cakes by hand using family recipes and seasonal ingredients.
          </p>
          <p className="mt-3 text-amber-800/90 leading-relaxed">
            From buttery croissants to delicate fruit tartes, everything is baked fresh. Settle into our cozy space with a café au lait and a slice of carrot cake.
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            <li className="bg-amber-50 border border-amber-100 rounded-md p-3">Handmade daily</li>
            <li className="bg-amber-50 border border-amber-100 rounded-md p-3">Locally sourced ingredients</li>
            <li className="bg-amber-50 border border-amber-100 rounded-md p-3">Authentic French recipes</li>
            <li className="bg-amber-50 border border-amber-100 rounded-md p-3">Cozy café atmosphere</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img className="rounded-xl shadow-md object-cover h-48 md:h-64 w-full" src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop" alt="Pastry" />
          <img className="rounded-xl shadow-md object-cover h-48 md:h-64 w-full" src="https://images.unsplash.com/photo-1623334044303-241021148842?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYXN0cnl8ZW58MHwwfHx8MTc2MzMyNTM5NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Pastry" />
          <img className="rounded-xl shadow-md object-cover h-48 md:h-64 w-full" src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop" alt="Pastry" />
          <img className="rounded-xl shadow-md object-cover h-48 md:h-64 w-full" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop" alt="Coffee" />
        </div>
      </div>
    </section>
  )
}
