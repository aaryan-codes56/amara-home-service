import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Booking from './Components/Booking/Booking'
import Track from './Components/Track/Track'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Booking/>
      <Track/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App