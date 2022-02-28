import React from "react";
import { useSelector } from "react-redux";
import photo from '../../assets/Home/profilephoto-.webp'

import './Profile.css';
import 'animate.css'


export default function Profile() {

  const language = useSelector((state) => state.language);

  return (
    <div className='i'>
    
      <div className='i-left'>
     
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>{language === 'EN' ? 'Hi, My name is' : 'Hola, mi nombre es'}</h2>
          <h1 className='i-name'>Karen Derkach</h1>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'> {language === 'EN' ? 'Web Developer' : 'Desarrollador Web' }</div>
              <div className='i-title-item'> Front End </div>
              <div className='i-title-item'> Back End </div>
              <div className='i-title-item'> {language === 'EN' ? 'Accountant': 'Contador'} </div>
            </div>
          </div>
          <p className='i-desc'>
            {language === 'EN' ? 'Welcome to my profile, here you can find a description of my academic background, work experience and projects': 'Bienvenido a mi perfil, aquí podrás encontrar una descripción de mi formación académica, experiencia laboral y proyectos'}
          </p>
        </div>
  
      </div>

      <div className='i-right'>
        <div className='i-bg'></div>
        <img src={photo} alt='' className='i-img' />
      
      </div>
    
    </div>
  )
}
