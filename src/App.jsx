import React from 'react'
import Main from './Pages/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/poppins";
import './App.css'
import Admin from './Pages/Admin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
