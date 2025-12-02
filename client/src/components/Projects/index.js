import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/projects';
import './index.css';
import Modal from './Modal';


function Portfolio({ language }) {
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to convert month/year to comparable date for sorting
  const getComparableDate = (dateString) => {
    const monthMap = {
      'January': '01', 'Enero': '01',
      'February': '02', 'Febrero': '02',
      'March': '03', 'Marzo': '03',
      'April': '04', 'Abril': '04',
      'May': '05', 'Mayo': '05',
      'June': '06', 'Junio': '06',
      'July': '07', 'Julio': '07',
      'August': '08', 'Agosto': '08',
      'September': '09', 'Septiembre': '09',
      'October': '10', 'Octubre': '10',
      'November': '11', 'Noviembre': '11',
      'December': '12', 'Diciembre': '12'
    };

    const parts = dateString.split(' ');
    const month = monthMap[parts[0]] || '01';
    const year = parts[1] || '2020';
    
    return new Date(`${year}-${month}-01`);
  };

  // Sort projects by lastUpdate (most recent first)
  const sortedProjects = [...projectsData].sort((a, b) => {
    const dateA = getComparableDate(a.lastUpdate[language] || a.lastUpdate.EN);
    const dateB = getComparableDate(b.lastUpdate[language] || b.lastUpdate.EN);
    return dateB - dateA; // Descending order (newest first)
  });

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
      prev === 0 ? sortedProjects.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => 
      prev === sortedProjects.length - 1 ? 0 : prev + 1
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
      lastUpdate: project.lastUpdate[lang],
    };
  };

  return (
    <div className="p-container">
      <h2 className="p-title">{language === 'EN' ? 'Projects' : 'Proyectos'}</h2>

      {/* Grid Desktop */}
      <div className="projects-grid desktop-only">
        {sortedProjects.map((project, index) => (
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
          {sortedProjects.map((project, index) => (
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
          project={language === 'EN' ? getProjectDataByLanguage(sortedProjects[openModalIndex], 'EN') : getProjectDataByLanguage(sortedProjects[openModalIndex], 'ES')}
          openModal={true}
          setOpenModal={handleCloseModal}
          language={language}
        />
      )}
    </div>
  );
}

export default Portfolio;