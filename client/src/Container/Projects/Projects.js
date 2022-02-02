import React from 'react'
import './Projects.css'
// import foodarity from '../../assets/Projects/foodarity.jpg'





export default function Projects({project}) {
    console.log("COMPONENTE PADRE",  project)
    return (
        <div class="card" style={{width: 500 , margin: 10}}>
            <img src={project.image} class="card-img-top" alt="imagen"/>
                <div class="card-body">
                    <h5 class="card-title"><b>{project.title}</b></h5>
                    <p class="card-text">{project.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Tools:</b> {project.tools}</li>
                    <li class="list-group-item"><b>Project deploy:</b> <a href={project.link}>HERE!</a></li>
                </ul>
             
        </div>
    )
}
