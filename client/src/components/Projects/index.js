import React, { useState } from 'react';
import { projectsData } from '../../data/projects';

import slide_image_1 from '../../assets/Projects/agenda-original.webp';
import slide_image_2 from '../../assets/Projects/dog-original.webp';
import slide_image_3 from '../../assets/Projects/foodarity-original.webp';
//import slide_image_5 from '../../assets/Projects/portfolio.png';
import slide_image_6 from '../../assets/Projects/dercon-original.webp';
import slide_image_7 from '../../assets/Projects/tripSync-original.webp';
import './index.css';
import Modal from './Modal';

//const images = [slide_image_1, slide_image_2, slide_image_3, slide_image_6, slide_image_7];

function Portfolio({ language }) {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleOpenModal = (index) => setOpenModalIndex(index);
  const handleCloseModal = () => setOpenModalIndex(null);

  const getProjectDataByLanguage = (project, lang) => {
    if (!project.title[lang] || !project.description[lang]) {
      throw new Error(`Language "${lang}" not supported`);
    }

    return {
      id: project.id,
      title: project.title[lang],
      description: project.description[lang],
      image: project.image,
      tools: project.tools,
      link: project.link,
      code: project.code,
    };
  };

  return (
    <div className="p-container">
      <h2 className="p-title">{language === 'EN' ? 'Projects' : 'Proyectos'}</h2>

      {/* Grid Desktop */}
      <div className="projects-grid desktop-only">
        {projectsData.map((project, index) => (
          <div key={project.id || index} className="p-card grid-card">
            <img className="image" src={project.image} alt={project.title} />
            <div className="p-content" onClick={() => handleOpenModal(index)}>
              <button className="btn-view" >
                {language === 'EN' ? 'View More' : 'Ver Más'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Mobile */}
      <div id="carouselExampleControls" className="carousel slide custom-carousel mobile-only" data-bs-ride="carousel">
        <div className="carousel-inner">
          {projectsData.map((project, index) => (
            <div key={project.id || index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000">
              <div className="p-card">
                <img className="image" src={project.image} alt={project.image} />
                <div className="p-content">
                  <button className="btn-view" onClick={() => handleOpenModal(index)}>
                    {language === 'EN' ? 'View More' : 'Ver Más'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Modal */}
      {openModalIndex !== null && (
        <Modal
          project={language === 'EN' ? getProjectDataByLanguage(projectsData[openModalIndex], 'EN') : getProjectDataByLanguage(projectsData[openModalIndex], 'ES')}
          openModal={true}
          setOpenModal={handleCloseModal}
          language={language}
        />
      )}
    </div>
  );
}

export default Portfolio;