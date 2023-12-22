import { useState } from 'react'
import './App.css'
import Questionpage from './component/questionpage'
import Resultpage from './component/Resultpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
  
    <Questionpage/>
    </>
  )
}

export default App
