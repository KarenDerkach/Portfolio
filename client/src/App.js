import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';


import { useSelector } from "react-redux";

function App() {
  const language = useSelector((state) => state.language);
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Routes>
            <Route path='*' element={<NavBar language={language} />} />
          </Routes>
        </header>
        
        <Routes>
          <Route path='/' element={<Home language={language} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
