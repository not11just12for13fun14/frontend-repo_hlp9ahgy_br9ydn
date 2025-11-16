import React from 'react'
import Hero from '../components/Hero'
import FeaturedPastries from '../components/FeaturedPastries'
import AboutSection from '../components/AboutSection'
import HoursLocation from '../components/HoursLocation'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedPastries />
      <AboutSection />
      <Testimonials />
      <HoursLocation />
    </main>
  )
}
