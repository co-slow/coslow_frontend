import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Coslow_banner from './Components/mainpage/Coslow_banner'
import './index.css'
import Challenge_main from './Components/challenge/Challenge_main';
import Coslow_main from './Components/mainpage/Coslow_main';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Coslow_banner />}/>
        <Route path='/afterlogin' element={<Coslow_main />}/>
        <Route path='/challenge' element={<Challenge_main/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
