import { useState } from 'react'
import './App.css'
import mockTransactions from './components/Data'
import DashboardLayoutBasic from './components/Primarydash'

// import ScrollRestoration from './components/Transaction'

function App() {

  return (
    <>
      <DashboardLayoutBasic />
      {console.log(mockTransactions)}
    </>
  )
}

export default App
