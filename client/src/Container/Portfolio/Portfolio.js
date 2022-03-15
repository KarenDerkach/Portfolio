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
               <p className="heading-p">{language === 'EN' ? 'In this section you can see some of my most recent projects, any feedback is fully received': 'En esta sección podrás ver algunos de mis proyectos más recientes, cualquier feedback es completamente recibido'}</p>
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
                 
                 {
                    language === 'EN' ?
                    <Projects project={projects[2].EN}/> :
                    <Projects project={projects[2].ES} />
                 }
                 {
                    language === 'EN' ?
                    <Projects project={projects[3].EN}/> :
                    <Projects project={projects[3].ES} />
                 }
               
                
             </div>

        </div>
    )

}