import EducationMain from '../Education/EducationMain';
import Projects from '../Projects';
import Profile from './Profile'
import Footer from '../Footer';
import './index.css'




export default function Main({ language }) {


  return (
    <main>
      <div className='profile'><Profile language={language} /></div>
      <section id='education'><EducationMain language={language} /></section>
      <section id='projects'><Projects language={language} /></section>
      <section id='contact'><Footer language={language} /></section>
    </main>
  )
}
