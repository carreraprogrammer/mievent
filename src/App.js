import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Country from './Pages/Country';
import Home from './Pages/Home';
import EventInfo from './Pages/EventInfo';
import About from './Pages/About';
import Profile from './Pages/Profile';
import './App.css'

const App = () => {

  return(
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/" > 
          <Route path=":id" element={<Country />} />
        </Route>
        <Route path="/country/event" element={<EventInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App