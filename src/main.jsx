import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './componets/Header.jsx'
import Saludo from './componets/Saludo.jsx'
import './index_old.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <App />
    
    <Saludo/> 
    
  </React.StrictMode>,
)
