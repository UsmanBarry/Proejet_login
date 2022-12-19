import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import Question from './pages/Question';
import Questions from './pages/Questions';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Questions' element={<Questions />} />
        <Route path='/question:id' element={<Question />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
