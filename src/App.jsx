import React from 'react'
import './App.css'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Contact from './pages/contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './pages/about';

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App
