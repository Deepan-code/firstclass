import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from './components/sections/Header';
import Home from './components/pages/Home';
import Footer from './components/sections/Footer';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='About' element= {<About/>} />
        <Route path='Contact' element={<Contact /> } />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
