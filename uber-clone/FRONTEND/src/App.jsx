import React from 'react'
import {Route, Routes } from 'react-router-dom'
import CaptainLogin from './pages/CaptainLogin'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import CaptainSignUp from './pages/CaptainSignUp'
import UserSignup from './pages/UserSignup'
import First from './pages/First'
import Opt from './pages/Opt'
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div>
      <Routes> 
        <Route path="/f" element={<Home />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/opt" element={<Opt />} />
       <Route path="/" element={<First />} />
      </Routes>
      
    </div>
  )
}

export default App
