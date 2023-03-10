import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Landing from './components/pages/Landing';
import UserLoggedIn from './components/pages/UserLoggedIn';
import Qrscreen from './components/pages/Qrscreen';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/landing' element={<Landing/>} />
          <Route path='/loggedin' element={<UserLoggedIn/>} />
          <Route path='/qrscreen' element={<Qrscreen/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
