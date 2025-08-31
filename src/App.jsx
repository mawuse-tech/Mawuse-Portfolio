
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Expertise from './components/Expertise'
import HodlAndEarn from './components/Projects'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
    <Navbar/>
     <Hero/>
     <Aboutme/>
     <Expertise/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App