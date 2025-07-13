// App.jsx
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './routes/Home';
import About from './routes/About/About';
import Services from './routes/Services/Services';
import Booking from './routes/Booking/Booking';
import Contact from './routes/Contact/Contact';
import SignUp from './routes/Signup';
import Login from './routes/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="services" element={<Services />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
