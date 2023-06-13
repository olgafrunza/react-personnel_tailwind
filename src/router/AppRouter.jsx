import React from 'react'
import Navbar from '../components/navbar/Navbar.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx';
import Home from '../pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </Router>

  )
}

export default AppRouter