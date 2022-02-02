import React from "react";
import { useSelector } from "react-redux";
import './Portfolio.css';
import Projects from "../Projects/Projects";
import projects from '../../data/projects'

export default function Portfolio() {

    const language = useSelector((state) => state.language);

    return (
        <div className="pl">
           <div className="heading">
               <h1 className="heading">{language === 'EN' ? 'My Projects' : 'Mis Proyectos'}</h1>
               <p className="heading-p">{language === 'EN' ? 'Below I present recently developed projects' : 'A continuacion presento los proyectos desarrollados recientemente'}</p>
           </div>
             <div className="pl-list">
                 {
                     language === 'EN' ? 
                     <Projects project={projects[0].EN} />:
                     <Projects project={projects[0].ES} />

                 }
                 {
                    language === 'EN' ?
                    <Projects project={projects[1].EN}/> :
                    <Projects project={projects[1].ES} />
                 }
                
                
             </div>

        </div>
    )

}