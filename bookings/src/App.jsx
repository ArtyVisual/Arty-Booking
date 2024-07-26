import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes, HashRouter } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Dash from './Components/Dash'
import Hotel from './Components/Hotel';
import Flight from './Components/Flight';
import Train from './Components/Train';
import Bus from './Components/Bus';
import Events from './Components/Events';

function App() {
 
  return (
    <>
      <div className='' >
      <HashRouter>
      <Routes>
        <Route path="/" element={<><Dash /></>} />
        <Route path="/Hotel" element={<><Navbar /> <Hotel/></>} />
        <Route path="/Flight" element={<><Navbar /> <Flight/></>} />
        <Route path="/Train" element={<><Navbar /> <Train/></>} />
        <Route path="/Bus" element={<><Navbar /> <Bus/></>} />
        <Route path="/Events" element={<><Navbar /> <Events/></>} />
       
      </Routes>
    </HashRouter>
    
      </div> 
    </>
  )
}

export default App
