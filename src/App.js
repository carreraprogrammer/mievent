import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Components/Navbar';
import Country from './Pages/Country';
import Home from './Pages/Home';
import EventInfo from './Pages/EventInfo';
import About from './Pages/About';
import Profile from './Pages/Profile';
import store from './Redux/store'
import './App.css'

const App = () => {

  return(

    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/" > 
          <Route path=":id" element={<Country />} />
        </Route>
        <Route path="/country/:id/:name" element={<EventInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Provider>
  )
}

export default App