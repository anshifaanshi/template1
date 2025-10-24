import React from 'react'
import HeroSection from './HomeComponents/HeroSection'
import AboutSection from './HomeComponents/AboutSection'
import CounterItem from './HomeComponents/CounterItem'
// Corrected the typo: 'BuisnessServiceSection' should likely be 'BusinessServicesSection'
import ServicesSection from './HomeComponents/ServicesSection'
import ContactSection from './HomeComponents/ContactSection'
import Footer from './HomeComponents/Footer'
import TestimonialCarousel from './HomeComponents/TestimonialCarousel'

import AboutUsSection from './HomeComponents/AboutUsSection'
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <CounterItem/>
      <ServicesSection/>
   
      <AboutUsSection/>
   <TestimonialCarousel/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home