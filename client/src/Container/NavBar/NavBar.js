import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiMenu} from 'react-icons/bi';
import {changeLanguage} from '../../react-redux/action'
// import { Link} from 'react-router-dom'

import ES from '../../assets/Home/ES.png'
import EN from '../../assets/Home/EN.png'
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
					{language === 'ES' ? <img src={EN} alt='U.S' className="flat"/> : <img src={ES} alt='ES' className="flat"/>}
				</button>
            </div>
            <nav className="navbar">
                <ul className="menu-items">
                <li><a href='/' className='i-home'  >{language === 'EN' ? 'Home' : 'Principal' }</a> </li>
                <li> <a href='/AboutMe' className='i-about'  > {language === 'EN' ? 'About Me' : 'Acerca de Mi' }</a> </li>
                <li> <a href='/Portfolio' className='i-portfolio'  > {language === 'EN' ? 'Projects' : 'Proyectos' } </a> </li>
                <li>  <a href='/Contact' className='i-contact' > {language === 'EN' ? 'Contact' : 'Contacto' } </a></li>
                </ul>
                <div className="btn-menu-mobile">
                    <BiMenu />
                </div>
             
            </nav>
            {/* <nav className="navbar" class="navbar navbar-light ">
  <div  class="container-fluid">
    <Link to='/'  class="navbar-brand"className='i-home' >{language === 'EN' ? 'Home' : 'Principal' }</Link>
    <Link to='/AboutMe' class="navbar-brand" className='i-about'  > {language === 'EN' ? 'About Me' : 'Acerca de Mi' }</Link> 
    <Link to='/Portfolio' class="navbar-brand" className='i-portfolio'  > {language === 'EN' ? 'Projects' : 'Proyectos' } </Link> 
    <Link to='/Contact'  class="navbar-brand" className='i-contact' > {language === 'EN' ? 'Contact' : 'Contacto' } </Link>

  </div>
</nav> */}
   
        </div>

    )

}