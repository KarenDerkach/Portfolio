
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'

export default function Footer({language}) {
   
  
    return (
        <footer class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <ul class="social-icon">
          <li class="social-icon__item"><a class="social-icon__link"  href='mailto:derkach.m.karen@gmail.com?body=Hola Karen!' >
             < MailOutlineIcon />
            </a></li>
          <li class="social-icon__item"><a class="social-icon__link" href="https://wa.me/5493764653483?text=Hola!,%20eh%20visto%20tu%20portfolio..." target='_blank' rel='noreferrer'>
              <WhatsAppIcon/>
            </a></li>
          <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com/in/karen-derkach/" target='_blank' rel='noreferrer'>
              <LinkedInIcon/>
            </a></li>
          <li class="social-icon__item"><a class="social-icon__link" href="https://github.com/KarenDerkach" target='_blank' rel='noreferrer'>
              < GitHubIcon/>
            </a></li>
        </ul>
        <ul class="menu">
          <li class="menu__item"><a class="menu__link" href="#main">{language === 'EN' ?'Home' : 'Inicio'}</a></li>
          <li class="menu__item"><a class="menu__link" href="#aboutme">{language === 'EN' ? 'About': 'Sobre Mi'}</a></li>
          <li class="menu__item"><a class="menu__link" href="#education">{language === 'EN' ? 'Education':'Educación'}</a></li>
          <li class="menu__item"><a class="menu__link" href="#projects">{language === 'EN' ?'Projects':'Proyectos'}</a></li>
    
        </ul>
        <p>&copy; {language === 'EN' ? '2023 Karen Derkach | All Rights Reserved' : '2023 Karen Derkach | Todos los derechos reservados' }</p>
      </footer>
    )

}
