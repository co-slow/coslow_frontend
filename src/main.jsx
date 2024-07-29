import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Coslow_banner from './Components/mainpage/Coslow_banner'
import './index.css'
import Record_main from './Components/myrecord/Record_main';
import Record_detail from './Components/myrecord/Record_detail';
import Record_write from './Components/myrecord/Record_write';
import Coslow_main from './Components/mainpage/Coslow_main';
import AddExplain from './Components/mainpage/AddExplain'
import Footer from './Components/mainpage/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<div><Coslow_banner /><AddExplain /><Footer /></div>}/>
        <Route path='/afterlogin' element={<div><Coslow_main /><AddExplain /><Footer /></div>}/>
        <Route path='/record' element={<Record_main/>}/>
        <Route path='/recordDetail' element={<Record_detail/>}/>
        <Route path='/recordWrite' element={<Record_write/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
