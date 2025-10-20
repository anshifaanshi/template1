import React from 'react'
import HeroSection from './HomeComponents/HeroSection'
import AboutSection from './HomeComponents/AboutSection'
import CounterItem from './HomeComponents/CounterItem'
// Corrected the typo: 'BuisnessServiceSection' should likely be 'BusinessServicesSection'
import ServicesSection from './HomeComponents/ServicesSection'
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <CounterItem/>
      <ServicesSection/>
    </div>
  )
}

export default Home