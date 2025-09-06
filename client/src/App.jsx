import React from 'react'
import Landing from './components/Landing'
import  { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <>
    <Toaster/>
    <main>          
          <Landing/>     
    </main>
    </>
  )
}

export default App