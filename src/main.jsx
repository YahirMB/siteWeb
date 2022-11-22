import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/styles.css'

//import './index.css'
import { MainApp } from './components/Home/MainApp'
import { BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <MainApp />
  {/* </React.StrictMode> */}
  </BrowserRouter>
)
