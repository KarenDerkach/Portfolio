import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/projects';
import './index.css';
import Modal from './Modal';


function Portfolio({ language }) {
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Ensure Bootstrap carousel is initialized
    const initializeCarousel = () => {
      const carouselElement = document.getElementById('carouselExampleControls');
      
      if (carouselElement && window.bootstrap) {
        // Bootstrap is available
        new window.bootstrap.Carousel(carouselElement, {
          interval: 5000,
          ride: 'carousel'
        });
      } else if (carouselElement) {
        // Bootstrap fallback - manual carousel functionality
        console.log('Bootstrap not available, using fallback carousel');
        
        const prevBtn = carouselElement.querySelector('.carousel-control-prev');
        const nextBtn = carouselElement.querySelector('.carousel-control-next');
        
        if (prevBtn && nextBtn) {
          prevBtn.addEventListener('click', () => handlePrevSlide());
          nextBtn.addEventListener('click', () => handleNextSlide());
        }
      }
    };

    // Try to initialize immediately
    initializeCarousel();

    // Also try after a short delay in case Bootstrap loads asynchronously
    const timer = setTimeout(initializeCarousel, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => 
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

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
            <div 
              key={project.id || index} 
              className={`carousel-item ${index === 0 ? 'active' : ''}`} 
              data-bs-interval="10000"
              style={{
                display: index === currentSlide ? 'block' : 'none'
              }}
            >
              <div className="p-card">
                <img className="image" src={project.image} alt={project.title[language]} />
                <div className="p-content">
                  <button className="btn-view" onClick={() => handleOpenModal(index)}>
                    {language === 'EN' ? 'View More' : 'Ver Más'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExampleControls" 
          data-bs-slide="prev"
          onClick={handlePrevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExampleControls" 
          data-bs-slide="next"
          onClick={handleNextSlide}
        >
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