import React from 'react';
// import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import NavBar from './Container/NavBar/NavBar';
import Home from './Container/Home/Profile';
import AboutMe from './Container/AboutMe/AboutMe';
import Portfolio from './Container/Portfolio/Portfolio';
import Contact from './Container/Contact/Contact';


function App() {
  return (
   <BrowserRouter>
    <Routes> 
     <Route path='/' element={<NavBar/>}>
      <Route index element={<Home/>}/>
      <Route path='/aboutMe' element={<AboutMe/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contactMe' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
