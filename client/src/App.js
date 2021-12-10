import React from 'react';
// import './App.css';
import { Route, Router } from 'react-router-dom'
import AboutMe from './Container/AboutMe/AboutMe';
import Home from './Container/Home/Profile'
import NavBar from './Container/NavBar/NavBar';

function App() {
  return (
    <React.Fragment>
    <Router> 
     <Route path='/' element={<NavBar/>}/>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/aboutMe' element={<AboutMe/>}/>
    </Router>
    </React.Fragment>
  );
}

export default App;
