import React, { useState } from 'react'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!values.name.trim()) e.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Valid email required'
    if (values.message.trim().length < 10) e.message = 'Please write at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setTimeout(() => setSent(true), 500)
  }

  if (sent) {
    return (
      <main className="bg-[#FFF9EF]">
        <div className="max-w-xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-amber-900">Merci!</h1>
          <p className="mt-2 text-amber-800">Your message has been received. We will get back to you shortly.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#FFF9EF]">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl font-bold text-amber-900">Contact Us</h1>
          <p className="text-amber-800 mt-2">We love hearing from you. Drop us a note for catering, custom cakes, or any questions.</p>
          <div className="mt-6">
            <p className="text-amber-900 font-medium">Bonjour Putney</p>
            <p className="text-amber-800">64 Lower Richmond Rd., London SW15 1LL, United Kingdom</p>
            <p className="text-amber-800 mt-2">Phone: +44 20 0000 0000</p>
            <p className="text-amber-800">Email: hello@bonjourputney.co.uk</p>
            <div className="mt-6 aspect-video rounded-xl overflow-hidden shadow-md border border-amber-100">
              <iframe title="Bonjour Putney Map" src="https://www.google.com/maps?q=64%20Lower%20Richmond%20Rd,%20London%20SW15%201LL&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <form onSubmit={submit} className="bg-white rounded-xl shadow-sm border border-amber-100 p-6">
          <div>
            <label className="block text-sm font-medium text-amber-900">Name</label>
            <input value={values.name} onChange={(e)=>setValues(v=>({...v,name:e.target.value}))} className="mt-1 w-full rounded-md border-amber-200 focus:ring-amber-300 focus:border-amber-300" placeholder="Your name" />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-amber-900">Email</label>
            <input type="email" value={values.email} onChange={(e)=>setValues(v=>({...v,email:e.target.value}))} className="mt-1 w-full rounded-md border-amber-200 focus:ring-amber-300 focus:border-amber-300" placeholder="you@example.com" />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-amber-900">Message</label>
            <textarea rows="5" value={values.message} onChange={(e)=>setValues(v=>({...v,message:e.target.value}))} className="mt-1 w-full rounded-md border-amber-200 focus:ring-amber-300 focus:border-amber-300" placeholder="Tell us how we can help" />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
          </div>
          <button className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md shadow">Send Message</button>
        </form>
      </div>
    </main>
  )
}
