import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Coslow_banner from './Components/mainpage/Coslow_banner'
import './index.css'
import UserChallenge_main from './Components/challenge/UserChallenge_main';
import CoslowChallenge_main from './Components/challenge/CoslowChallenge_main';
import Coslow_main from './Components/mainpage/Coslow_main';
import AddExplain from './Components/mainpage/AddExplain'
import Footer from './Components/mainpage/Footer'
import DietRecord_write from './Components/record/DietRecord_write';
import FirstStep_detail from './Components/challenge/FirstStep_detail';
import Egg_detail from './Components/challenge/Egg_detail';
import FullVegetable_detail from './Components/challenge/FullVegetable_detail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<div><Coslow_banner /><AddExplain /><Footer /></div>}/>
        <Route path='/afterlogin' element={<div><Coslow_main /><AddExplain /><Footer /></div>}/>
        <Route path='/userchallenge_main' element={<UserChallenge_main/>}/>
        <Route path='/coslowchallenge_main' element={<CoslowChallenge_main/>}/>
        <Route path='/DietRecord_write' element={<DietRecord_write/>}/>
        <Route path='/FirstStep' element={<FirstStep_detail/>}/>
        <Route path='/egg' element={<Egg_detail/>}/>
        <Route path='/fullvegetable' element={<FullVegetable_detail/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
