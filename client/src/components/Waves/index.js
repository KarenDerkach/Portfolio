import React from 'react';
import './Waves.css';

export default function Waves({ position = "top" }) {
  return (
    <div className={`waves-container ${position}`}>
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
  );
}