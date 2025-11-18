
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'

export default function Footer({ language }) {
const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" href='mailto:derkach.m.karen@gmail.com?body=Hola Karen!' >
          < MailOutlineIcon />
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://wa.me/5493764653483?text=Hola!,%20He%20visto%20tu%20portfolio..." target='_blank' rel='noreferrer'>
          <WhatsAppIcon />
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/karen-derkach/" target='_blank' rel='noreferrer'>
          <LinkedInIcon />
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/KarenDerkach" target='_blank' rel='noreferrer'>
          < GitHubIcon />
        </a></li>
      </ul>
      <ul class="menu">
        <li className="menu__item"><a className="menu__link" href="#main">{language === 'EN' ? 'Home' : 'Inicio'}</a></li>
        <li className="menu__item"><a className="menu__link" href="#aboutme">{language === 'EN' ? 'About' : 'Sobre Mi'}</a></li>
        <li className="menu__item"><a className="menu__link" href="#education">{language === 'EN' ? 'Education' : 'Educación'}</a></li>
        <li className="menu__item"><a className="menu__link" href="#projects">{language === 'EN' ? 'Projects' : 'Proyectos'}</a></li>

      </ul>
      <p>&copy; {language === 'EN' ? `${currentYear} Karen Derkach | All Rights Reserved` : '2024 Karen Derkach | Todos los derechos reservados'}</p>
    </footer>
  )

}
