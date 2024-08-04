import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Coslow_banner from './Components/mainpage/Coslow_banner'
import './index.css'
import Record_main from './Components/myrecord/Record_main';
import Record_mydiet from './Components/myrecord/Record_mydiet';
import Record_detail from './Components/myrecord/Record_detail';
import Record_write from './Components/myrecord/Record_write';
import Coslow_main from './Components/mainpage/Coslow_main';
import AddExplain from './Components/mainpage/AddExplain'
import Footer from './Components/mainpage/Footer'
import Loginredirect from './Components/mainpage/loginredirect';
import CoslowChallenge_main from './Components/challenge/CoslowChallenge_main';
import ChallengeDetail from './Components/challenge/ChallengeDetail';
import Mypage_main from './Components/mypage/Mypage_main';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<div><Coslow_banner /><AddExplain /><Footer /></div>}/>
        <Route path='/Loginredirect' element={<Loginredirect/>}/>
        <Route path='/afterlogin' element={<div><Coslow_main /><AddExplain /><Footer /></div>}/>
        <Route path='/record' element={<Record_main/>}/>
        <Route path='/recordmydiet' element={<Record_mydiet/>}/>
        <Route path='/recordDetail' element={<Record_detail/>}/>
        <Route path='/recordWrite' element={<Record_write/>}/>
        <Route path='/coslowchallenge_main' element={<CoslowChallenge_main/>}/>
        <Route path='/challenge/:challengeType' element={<ChallengeDetail/>}/>
        <Route path="/Mypage_main" element={<Mypage_main/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
