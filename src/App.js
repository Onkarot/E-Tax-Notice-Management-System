import React from 'react';
import { BrowserRouter as Router, Route, useLocation, Routes } from 'react-router-dom';
import './App.css';
import '../src/style/style.css'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Careers from './components/Careers.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Getstart from './components/Getstart.jsx';
import Dashboard from './components/Dashboard.jsx'
import Otpvalidate from './components/Otpvalidate.jsx';

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

const AppContent = () => {
  const location = useLocation();
  
  const hideFooterRoutes = ['/login', '/signup', '/getstart', '/dashboard', '/otpvalidate'];
  
  
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/otpvalidate' element={<Otpvalidate />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/getstart' element={<Getstart />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;