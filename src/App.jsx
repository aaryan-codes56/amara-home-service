import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './routes/home/home'
import About from './routes/About/About'
import Services from './routes/Services/Services'
import Booking from './routes/Booking/Booking'
import Contact from './routes/Contact/Contact'
import Footer from './Components/Footer/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {


  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar/>} >
            <Route index element={<Home/>} />  
            <Route path="/services" element={<Services/>} />
            <Route path="/booking" element={<Booking/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App