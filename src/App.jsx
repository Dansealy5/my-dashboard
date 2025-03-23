import { useState } from 'react'
import './App.css'
import mockTransactions from './components/Data'
import Dashboard from './components/Primarydash'
import { Routes, Route, Link } from "react-router-dom"

// import ScrollRestoration from './components/Transaction'

function App() {

  return (
    <>
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App
