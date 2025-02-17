import React, { useState } from 'react';
import { projectsData } from '../../data/projects';

import slide_image_1 from '../../assets/Projects/agenda.png';
import slide_image_2 from '../../assets/Projects/dog.png';
import slide_image_3 from '../../assets/Projects/foodarity.png';
import slide_image_5 from '../../assets/Projects/portfolio.png';
import slide_image_6 from '../../assets/Projects/dercon.png';

import './index.css';
import Modal from './Modal';

const images = [slide_image_1, slide_image_2, slide_image_3, slide_image_5, slide_image_6];

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
      <h1 className="p-title">{language === 'EN' ? 'Projects' : 'Proyectos'}</h1>

      <div id="carouselExampleControls" className="carousel slide custom-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          {projectsData.map((project, index) => (
            <div key={project.id || index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000">
              <div className='p-card'>
                <img className='image' src={images[index]} alt={`slide_image_${index}`} />
                <div className='p-content'>
                  <button className='btn-view' onClick={() => handleOpenModal(index)}>
                    {language === 'EN' ? 'View More' : 'Ver Más'}
                  </button>
                </div>
              </div>
              {openModalIndex === index && (
                <Modal project={language === 'EN' ? getProjectDataByLanguage(project, 'EN') : getProjectDataByLanguage(project, 'ES')} openModal={true} setOpenModal={handleCloseModal} language={language} />
              )}
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
    </div>
  );
}

export default Portfolio;
