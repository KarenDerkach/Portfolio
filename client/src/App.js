import React from 'react';
// import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import NavBar from './Container/NavBar/NavBar';
import Home from './Container/Home/Profile';
import AboutMe from './Container/AboutMe/AboutMe';
import Portfolio from './Container/Portfolio/Portfolio';
import Contact from './Container/Contact/Contact';
import Footer from './Container/Footer/Footer';



function App() {
  return (
   <BrowserRouter>
    <Routes> 
     <Route path='*' element={<NavBar/>}/>
    </Routes>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Portfolio' element={<Portfolio/>}/>
      <Route path='/AboutMe' element={<AboutMe/>}/>
      <Route path='/Contact' element={<Contact/>}/>
   
    </Routes>
    <Routes> 
     <Route path='*' element={<Footer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
