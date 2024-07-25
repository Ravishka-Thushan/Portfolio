import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className='bg-black'> 
     
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
      
    </div>
    </>
  )
}

export default App