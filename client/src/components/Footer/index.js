
import './Footer.css'
import { Icon } from '@iconify/react';



export default function Footer({ language }) {
const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" href='mailto:derkach.m.karen@gmail.com?body=Hola Karen!' aria-label='Gmail Icon' >
          <Icon icon="mdi:gmail" />
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://wa.me/5493764653483?text=Hola!,%20He%20visto%20tu%20portfolio..." target='_blank' rel='noreferrer' aria-label='WhatsApp Icon'>
          <Icon icon="cib:whatsapp" />
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/karen-derkach/" target='_blank' rel='noreferrer' aria-label='LinkedIn Icon'>
          <Icon icon="uil:linkedin" />
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/KarenDerkach" target='_blank' rel='noreferrer' aria-label='GitHub Icon'>
           <Icon icon="ci:github" />
        </a></li>
      </ul>
      <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="#main">{language === 'EN' ? 'Home' : 'Inicio'}</a></li>
        <li className="menu__item"><a className="menu__link" href="#aboutme">{language === 'EN' ? 'About' : 'Sobre Mi'}</a></li>
        <li className="menu__item"><a className="menu__link" href="#education">{language === 'EN' ? 'Education' : 'Educación'}</a></li>
        <li className="menu__item"><a className="menu__link" href="#projects">{language === 'EN' ? 'Projects' : 'Proyectos'}</a></li>

      </ul>
      <p>&copy; {language === 'EN' ? `${currentYear} Karen Derkach | All Rights Reserved` : `${currentYear} Karen Derkach | Todos los derechos reservados`}</p>
    </footer>
  )

}
