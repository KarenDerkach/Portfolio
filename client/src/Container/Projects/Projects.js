import React from "react";
import { useSelector } from "react-redux";
import "./Projects.css";


export default function Projects({ project }) {

  const language = useSelector((state) => state.language);

  return (

    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={project.image} alt="imgProject" />
            <h3>{project.title}</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>{project.description}</p>
            {/* <p>{project.tools}</p> */}
            <a href={project.code} className='btn'>{ language === 'EN'? 'view code':'ver codigo'} </a>
            <a href={project.link} className='btn'>{ language === 'EN'? 'view page':'ver página'}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
