import React from 'react'

export default function HoursLocation() {
  return (
    <section className="bg-[#FFF9EF]">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold text-amber-900">Opening Hours</h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-amber-100 bg-white shadow-sm">
            <table className="w-full text-amber-900">
              <tbody>
                <tr className="border-b border-amber-100"><td className="p-3">Mon–Fri</td><td className="p-3 text-right">7:30–17:00</td></tr>
                <tr className="border-b border-amber-100"><td className="p-3">Sat–Sun</td><td className="p-3 text-right">8:00–17:00</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-amber-900">Contact</h3>
            <p className="text-amber-800/90 mt-2">Bonjour Putney<br/>64 Lower Richmond Rd., London SW15 1LL, United Kingdom</p>
            <p className="text-amber-800/90 mt-1">Phone: +44 20 0000 0000</p>
            <p className="text-amber-800/90">Email: hello@bonjourputney.co.uk</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-amber-900">Find Us</h3>
          <div className="mt-4 aspect-video rounded-xl overflow-hidden shadow-md border border-amber-100">
            <iframe title="Bonjour Putney Map" src="https://www.google.com/maps?q=64%20Lower%20Richmond%20Rd,%20London%20SW15%201LL&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
