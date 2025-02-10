import React from 'react'
import {Route, Routes } from 'react-router-dom'
import CaptainLogin from './pages/CaptainLogin'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import CaptainSignUp from './pages/CaptainSignUp'
import UserSignup from './pages/UserSignup'
const App = () => {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
      </Routes>
      
    </div>
  )
}

export default App
