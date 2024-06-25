import React from 'react';
import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import NavBar from './Container/NavBar';
import Home from './Container/Home';


import { useSelector } from "react-redux";

function App() {
  const language = useSelector((state) => state.language);
  return (
   <BrowserRouter>
    <Routes> 
     <Route path='*' element={<NavBar language={language}/>}/>
    </Routes>
   
    <Routes>
      <Route path='/' element={<Home language={language} />}/>
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
