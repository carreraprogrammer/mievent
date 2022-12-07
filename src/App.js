import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Country from './Pages/Country';
import Home from './Pages/Home';
import EventInfo from './Pages/EventInfo';
import './App.css'

const App = () => {
  return(
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />} />
        <Route path="/Country/event" element={<EventInfo />} />
      </Routes>
    </div>
  )
}

export default App