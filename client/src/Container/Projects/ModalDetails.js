import React from 'react';
import { useSelector } from "react-redux";
import './ModalDetail.css' 

function ModalDetails({project}) {

    const language = useSelector((state) => state.language);

  return (
    <div class="modal fade" id="exampleModal" tabIndex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{project.title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div><b>{language === 'EN'? 'What is? ' : '¿De que se trata? '} </b> </div>
         <div> {project.description} </div>
          <br/>
         <div><b>{language === 'EN'? 'Tools: ' : 'Herramientas: '} </b> </div>
         <div>{project.tools}</div>
        </div>
        
        <div className='containerButtons'> 
          <button type="button"  data-bs-dismiss="modal" className='buttonHref'><a href={project.code} className='href'>{language === 'EN'? 'Code' : 'Codigo'}</a></button>
          <button type="button"  data-bs-dismiss="modal"className='buttonHref' ><a href={project.link === ''? null : project.link} className='href' >{language === 'EN'? 'Page' : 'Página'}</a></button>
          </div>  
          <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalDetails;
