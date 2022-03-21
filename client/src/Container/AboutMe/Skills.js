import React from 'react';
import { useSelector } from "react-redux";
import {skills }from '../../data/skills'
import './Skills.css'
import TechSkills from './TechSkills';

function Skills() {

    const language = useSelector((state) => state.language);

    return (
        <div className='containerSkill'>

            
                <h3 className='titleSoft'> {language === 'EN' ? 'Soft Skills' : 'Habilidades Blandas'}</h3>
                <div className='containerSoft'>
                    {
                        language === 'EN' ? skills.soft.EN.map((item) => (

                            <div key={item} className='itemSkill'>{item}</div>
                        ))
                        :
                        skills.soft.ES.map((item) => (
                            <div key={item} className='itemSkill'>{item}</div>
                        ))
                    }
                </div>
            
                <h3 className='titleTech'>{language === 'EN' ? 'Technical Skills' : 'Habilidades Técnicas'}</h3>
            <div className='containerTech'>
               
                    <TechSkills language={language}/>  
            </div>
            <hr/>
        </div>
    )
}

export default Skills;
