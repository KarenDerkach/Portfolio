import React from "react";
import { useSelector } from "react-redux";
import './AboutMe.css'
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import photo from '../../assets/Home/profilephoto-.png'
import Skills from "./Skills";
import logoArg from '../../assets/About/argentina.png'

function goDown() {
    window.scrollTo({ top: window.innerHeight + 50, behavior: 'smooth' });
  }


export default function AboutMe() {

  const language = useSelector((state) => state.language);

    return (
        <div>
        <div className='a'>
            <div className='a-left' >
                <div className='a-card'></div>
                <div className='a-card-bg'>
                    <img src={photo} alt='' className='a-img' />
                </div>
            </div>
            <div className='a-right' >
                <h1 className='a-title'>{language === 'EN'? 'My history': 'Mi historia' } </h1>
                <p className='a-sub'>
                <img src={logoArg} alt="arg" className="imgArg"/>  correntina viendo en Buenos Aires, <br/> dispuesta a conocer el 🌎
                </p>
                <p className='a-desc'>
                Considero que la tecnología es un mundo infinito el cual me permite volcar conocimientos y satisfacer necesidades del ser humano actual. <br/>Es la razón de mi elección a este mundo sin fronteras y en constante crecimiento✨, <br/> ya que, en armonía con mi profesión contable, busco poder brindar soluciones a problemáticas cotidianas y rutinarias.
                </p>
                <div className="resume">
                    <a href='CV_DERKACH KAREN-.pdf' download='KD_CV.pdf'>
                        <button className="btn-get-resume">{language === 'EN' ? 'Get Resume' : 'Mi CV'}</button>
                    </a>
                </div>
                <p className="a-footer">Apuesto a nuevos desafíos. ¿Me ayudas a concretarlos?</p>
           
            <div className="a-down">
            <span className="a-Skill">{language === 'EN' ? 'Skills' : 'Habilidades'}</span>
              <IconButton onClick={goDown}>
                <KeyboardArrowDownIcon
                  className='icon-arrow'
                  sx={{
                    fontSize: "6vh",
                    position: 'relative',
                    bottom: 5,
                    backgroundColor: '#e76f51',
                    borderRadius: '100%',
                    border: 'none',

                    '&:hover': { backgroundColor: '#f4a261' },
                  }}
                />
              </IconButton>
              </div>
               </div>
        </div>
         <div className='c-skills'>
         <Skills/>
     </div>
     </div>
    )

}