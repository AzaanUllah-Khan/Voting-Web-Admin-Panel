import React from 'react'
import Main from './Pages/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/poppins";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
