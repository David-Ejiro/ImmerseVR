import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/homePage/Home.jsx'
import Watch from './Components/watchPage/Watch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <Home/> */}
  <Watch/>
  </React.StrictMode>,
)
