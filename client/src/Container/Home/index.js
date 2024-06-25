import React from 'react'

import EducationMain from '../Education/EducationMain';
import Projects from '../Projects';
import Profile from './Profile'
import Footer from '../Footer';
import './index.css'




export default function Main({language}) {


  return (
    <main>
        <section className='profile'><Profile language={language} /></section>
        <section  id='education'className='education'><EducationMain language={language}/></section>
        <section id='projects' className='projects'><Projects language={language}/></section>
        <section  id='contact'className='contact'><Footer language={language}/></section>
    </main>
  )
}
