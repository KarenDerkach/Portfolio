import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import close from '../../assets/Projects/close-modal-grey.svg';
import './modal.css';

export default function Projects({ project, openModal, setOpenModal, language }) {

  console.log(project);


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={() => setOpenModal(false)}
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
            <div className='closeButton' onClick={() => setOpenModal(false)}>
              <img src={close} alt='close icon' />
            </div>
            <h1 className='m-title'>{project.title}</h1>
            <p className='m-description'>{project.description}</p>
            <div className='m-sub'>Tech Skills</div>
            <section className='m-box'>
              <div className='m-container'>
                <h3 className='m-text'>Frontend</h3>
                <div className='m-icons'>
                  {project.tools.front.map((elem) => (
                    <div className='m-element' key={elem.id}>
                      <img className='skill-icon' src={elem.img} alt='icon' />
                      <p className='m-name'>{elem.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              {project.tools.back && (
                <div className='m-container'>
                  <h3 className='m-text'>Backend</h3>
                  <div className='m-icons'>
                    {project.tools.back.map((elem) => (
                      <div className='m-element' key={elem.id}>
                        <img className='skill-icon' src={elem.img} alt='icon' />
                        <p className='m-name'>{elem.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
            <div className='m-buttons'>
              <button>
                <a href={project.code} target='_blank' rel='noreferrer'>
                  {language === 'EN' ? 'CODE' : 'CÓDIGO'}
                </a>
              </button>
              <button>
                <a href={project.link} target='_blank' rel='noreferrer'>
                  {language === 'EN' ? 'WEB SITE' : 'SITIO WEB'}
                </a>
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}










