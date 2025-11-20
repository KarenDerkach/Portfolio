import EducationMain from '../Education/EducationMain';
import Projects from '../Projects';
import Profile from './Profile'
import Footer from '../Footer';
//import Waves from '../Waves';
import './index.css'




export default function Main({ language }) {


  return (
    <main role="main">
      <section id='main' aria-label={language === 'EN' ? 'Introduction' : 'Introducción'}>
        <div className='profile'><Profile language={language} /></div>
      </section>
      <section id='education' aria-label={language === 'EN' ? 'Education and Experience' : 'Educación y Experiencia'} style={{position: 'relative'}}>
        <EducationMain language={language} />
      </section>
      <section id='projects' aria-label={language === 'EN' ? 'Projects' : 'Proyectos'} style={{position: 'relative'}}>
        <Projects language={language} />
      </section>
      <section id='contact' aria-label={language === 'EN' ? 'Contact Information' : 'Información de Contacto'} style={{position: 'relative'}}>
        {/* <Waves position="top" /> */}
        <Footer language={language} />
      </section>
    </main>
  )
}
