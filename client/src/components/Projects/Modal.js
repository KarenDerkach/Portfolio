import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import close from '../../assets/Projects/close-modal-grey.svg';
import './modal.css';

export default function Projects({ project, openModal, setOpenModal, language }) {

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
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
            }
          },
        }}
      >
        <Fade in={openModal} timeout={600}>
          <Box className="enhanced-modal-box">
            {/* Header Section with Close Button */}
            <div className="modal-header">
              <div className="modal-close-btn" onClick={() => setOpenModal(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Main Content */}
            <div className="modal-content">
              {/* Title Section */}
              <div className="modal-title-section">
                <h1 className="enhanced-modal-title">{project.title}</h1>
                
              </div>

              {/* Description Section */}
              <div className="modal-description-section">
                <p className="enhanced-modal-description">{project.description}</p>
              </div>

              {/* Tech Stack Section */}
              <div className="tech-stack-section">
                <h2 className="tech-stack-title">
                  <span className="tech-icon">⚡</span>
                  {language === 'EN' ? 'Tech Stack' : 'Stack Tecnológico'}
                </h2>
                
                <div className="tech-containers">
                  {/* Frontend */}
                  <div className="tech-category">
                    <div className="tech-category-header">
                      <div className="tech-category-icon">🎨</div>
                      <h3 className="tech-category-title">Frontend</h3>
                    </div>
                    <div className="tech-icons-grid">
                      {project.tools.front.map((elem, index) => (
                        <div className="tech-skill-item" key={elem.name || index}>
                          <div className="skill-icon-container">
                            <img className="enhanced-skill-icon" src={elem.img} alt={elem.name} />
                            <div className="skill-glow"></div>
                          </div>
                          <p className="skill-name">{elem.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  {project.tools.back && (
                    <div className="tech-category">
                      <div className="tech-category-header">
                        <div className="tech-category-icon">⚙️</div>
                        <h3 className="tech-category-title">Backend</h3>
                      </div>
                      <div className="tech-icons-grid">
                        {project.tools.back.map((elem, index) => (
                          <div className="tech-skill-item" key={elem.name || index}>
                            <div className="skill-icon-container">
                              <img className="enhanced-skill-icon" src={elem.img} alt={elem.name} />
                              <div className="skill-glow"></div>
                            </div>
                            <p className="skill-name">{elem.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="modal-actions">
                <button className="action-btn primary-btn">
                  <a href={project.code} target="_blank" rel="noreferrer">
                    <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 22.027L23.027 15M23.027 15L16 8M23.027 15H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{language === 'EN' ? 'View Code' : 'Ver Código'}</span>
                  </a>
                </button>
                
                {project.link && (
                  <button className="action-btn secondary-btn">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="m14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{language === 'EN' ? 'Live Demo' : 'Demo en Vivo'}</span>
                    </a>
                  </button>
                )}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="modal-decoration">
              <div className="floating-orb orb-1"></div>
              <div className="floating-orb orb-2"></div>
              <div className="floating-orb orb-3"></div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}










