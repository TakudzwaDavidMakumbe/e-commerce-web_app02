import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import FeatureSectionFruits from './components/FeatureSectionFruits'
import FeatureSectionBreakfast from './components/FeatureSectionBreakfast'


function App() {
 

  return (
    <>
      <main>
        <Navbar/>
        <Hero/>
        <Category />
        <FeatureSectionFruits/>
        <FeatureSectionBreakfast/>
      </main>
    </>
  )
}

export default App
