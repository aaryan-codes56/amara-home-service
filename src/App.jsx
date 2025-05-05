import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Booking from './Components/Booking/Booking'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Booking/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App