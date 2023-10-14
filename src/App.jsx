import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './componets/Saludo'
import Diccionario from './componets/Diccionario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Diccionario/>
        
    </>
  )
}

export default App
