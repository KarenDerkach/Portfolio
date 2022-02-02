import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {changeLanguage} from '../../react-redux/action'
import { Link} from 'react-router-dom'
import './NavBar.css';



export default function NavBar() {

    const language = useSelector((state) => state.language);
    const dispatch = useDispatch();
  
    useEffect(() => {
          if (language === 'EN') {
              document.title = 'Karen Derkach | Portfolio';
          } else {
              document.title = 'Karen Derkach | Portafolio';
          }
      }, [language]);

      function handleChangeLang(e) {
		e.preventDefault();
		dispatch(changeLanguage());
	}

    return (
        <div >
            <div>
            <button onClick={(e) => handleChangeLang(e)} className="buttonLang">
					{language === 'ES' ? 'EN' : 'ES'}
				</button>
            </div>
            <nav className="navbar">
                <Link to='/' className='i-home' textDecoration="none" >{language === 'EN' ? 'Home' : 'Principal' }</Link> 
                <Link to='/AboutMe' className='i-about'  > {language === 'EN' ? 'About Me' : 'Acerca de Mi' }</Link> 
                <Link to='/Portfolio' className='i-portfolio'  > {language === 'EN' ? 'Projects' : 'Proyectos' } </Link> 
                <Link to='/Contact' className='i-contact' > {language === 'EN' ? 'Contact' : 'Contacto' } </Link>
            </nav>
   
        </div>

    )

}