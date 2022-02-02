import React from 'react';
import { useSelector } from "react-redux";
import skills from '../../data/skills'
import './Skills.css'

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
            
            <div className='containerTech'>
                <h3 className='titleSoft'>{language === 'EN' ? 'Technical Skills' : 'Habilidades Tecnicas'}</h3>
                <div className='containerSoft'>
                    {
                        skills.technical.map((item) => (

                            <div key={item} ><img src={item} alt='img' className='itemImg'/></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;
