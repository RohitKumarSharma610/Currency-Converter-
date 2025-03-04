import { useState } from 'react'
import './App.css'
import CurrencyConvertor from "./mainScreen"

function App() {
 

  return (
    <>
     <div className='bgimg min-h-screen bg-gray-100 flex flex-col items-center justify-center'> 
      <div className='container'>
      <CurrencyConvertor/>
      </div>
     </div>

     
    </>
  )
}

export default App
