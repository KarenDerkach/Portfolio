import React from 'react'
import ModalDetails from './ModalDetails';
import './Projects.css'
// import foodarity from '../../assets/Projects/foodarity.jpg'





export default function Projects({project}) {
    



    return (
        
        <div class="card" style={{width: 400 }}>
        <button type="button" className='buttonModal' data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src={project.image} class="card-img-top" alt="imagen"/>
            </button>
                {/* <div class="card-body">
                    <h5 class="card-title"><b>{project.title}</b></h5>
                    <p class="card-text">{project.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Tools:</b> {project.tools}</li>
                    <li class="list-group-item"><b>Project deploy:</b> <a href={project.link}>HERE!</a></li>
                </ul> */}
        
              <ModalDetails  project={project}/>
            
        </div>

    
    )
}
