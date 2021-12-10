import React from "react";
import photo from '../../assets/Home/profilephoto-.png'
import './Profile.css';

export default function Profile() {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hi, My name is</h2>
          <h1 className='i-name'>Karen Derkach</h1>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'> Web Developer </div>
              <div className='i-title-item'> Front End </div>
              <div className='i-title-item'> Back End </div>
              <div className='i-title-item'> Accountant </div>
            </div>
          </div>
          <p className='i-desc'>
            descripdfkgjdfgdfgvjfdvvñdfmñdfmg
            vmfdvñfñfdmvvffvdfhtgh
            mkfdgfdgdfgldfl,gf,bf,bfgbfgcion de mi perfil..
          </p>
        </div>
      </div>

      <div className='i-right'>
        <div className='i-bg'></div>
        <img src={photo} alt='' className='i-img'/>
      </div>

    </div>
  )
}
