import React from 'react'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Process from './Components/Process/Process'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      
      
      <section id="home">
      <Hero/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="portfolio">
        <Portfolio/>
      </section>
      <section id="process">
        <Process/>
      </section>
      <section id="testimonial">
        <Testimonial/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer/>
    </div>
  )
}

export default App