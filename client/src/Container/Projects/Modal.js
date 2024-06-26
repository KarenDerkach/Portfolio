import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import close from '../../assets/Projects/close-modal-grey.svg'
import './modal.css' 


export default function Projects({ project, openModal, setOpenModal, language }) {

  if(language === 'ES'){
    return (
      <div>
  
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openModal}
          onClose={()=> setOpenModal(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={openModal}>
            <Box className="style-box">
            <div className='closeButton' onClick={()=> setOpenModal(false)}><img src={close} alt='close icon'/></div>
             <h1 className='m-title'>{project.ES.title}</h1>
             <p className='m-description'>{project.ES.description}</p>
             <div className='m-sub' >Tech Skills</div>
             <section className='m-box'>
             
             <div className='m-container'>
             <h3 className='m-text'>Frontend</h3>
             <div className='m-icons'>
             {project.ES.tools.front.map(elem =>{
              return (
                <div className='m-element'>
                <img className='skill-icon' src={elem.img} alt='icon'/>
                <p className='m-name'>{elem.name}</p>
                </div>
              )
            }
             
             )} 
             </div>
             </div>
            {project?.ES?.tools?.back?  <div className='m-container'>
             <h3 className='m-text'>Backend</h3>
             <div className='m-icons'>
             {project?.ES?.tools?.back?.map(elem =>{
              return (
                <div className='m-element'>
                <img className='skill-icon' src={elem.img} alt='icon'/>
                <p className='m-name'>{elem.name}</p>
                </div>
              )
            }
             
             )} 
             </div>
             </div>: null}
             </section>
             <div className='m-buttons'>
              <button> <a href={project.ES.code} target='_blank' rel='noreferrer'>CÓDIGO</a></button>
              <button> <a href={project.ES.link}target='_blank' rel='noreferrer'>SITIO WEB</a></button>
             </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }else{
    return (
    <div>
  
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={()=> setOpenModal(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModal}>
        <Box className="style-box">
        <div className='closeButton' onClick={()=> setOpenModal(false)}><img src={close} alt='close icon'/></div>
         <h1 className='m-title'>{project.EN.title}</h1>
         <p className='m-description'>{project.EN.description}</p>
         <div className='m-sub' >Tech Skills</div>
         <section className='m-box'>
         
         <div className='m-container'>
         <h3 className='m-text'>Frontend</h3>
         <div className='m-icons'>
         {project.EN.tools.front.map(elem =>{
          return (
            <div className='m-element'>
            <img className='skill-icon' src={elem.img} alt='icon'/>
            <p className='m-name'>{elem.name}</p>
            </div>
          )
        }
         
         )} 
         </div>
         </div>
        {project?.EN?.tools?.back?  <div className='m-container'>
         <h3 className='m-text'>Backend</h3>
         <div className='m-icons'>
         {project?.EN?.tools?.back?.map(elem =>{
          return (
            <div className='m-element'>
            <img className='skill-icon' src={elem.img} alt='icon'/>
            <p className='m-name'>{elem.name}</p>
            </div>
          )
        }
         
         )} 
         </div>
         </div>: null}
         </section>
         <div className='m-buttons'>
          <button> <a href={project.EN.code} target='_blank' rel='noreferrer'>CODE</a></button>
          <button> <a href={project.EN.link}target='_blank' rel='noreferrer'>WEB SITE</a></button>
         </div>
        </Box>
      </Fade>
    </Modal>
  </div>
    )
  }
 
}








 
