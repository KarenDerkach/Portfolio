import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import projects from '../../data/projects';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../assets/Projects/agenda.png';
import slide_image_2 from '../../assets/Projects/dog.png';
import slide_image_3 from '../../assets/Projects/foodarity.jpg';
import slide_image_5 from '../../assets/Projects/portfolio.png';
import 'swiper/swiper.min.css';

import 'swiper/swiper-bundle.min.css'
import './index.css' 
import Modal from './Modal';

function Portfolio({language}) {

const [openModal1, setOpenModal1] = useState(false)
const [openModal2, setOpenModal2] = useState(false)
const [openModal3, setOpenModal3] = useState(false)
const [openModal4, setOpenModal4] = useState(false)

  return (
    
    <div className="p-container" >
      <h1 className="p-title">{language === 'EN' ? 'Projects' : 'Proyectos'}</h1>

      <div id="carouselExampleControls" class="carousel slide custom-carousel" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active"data-bs-interval="10000">
    <div className='p-card' >
            <img className='image'src={slide_image_1} alt="slide_image" />
           <div className='p-content'>
            <button className='btn-view' onClick={()=>{setOpenModal1(true)}} >
              View More
              </button>
              </div>
            </div>
          {openModal1 && <Modal project={projects[0]} openModal={openModal1} setOpenModal={setOpenModal1} />}
    </div>
    <div class="carousel-item">
    <div className='p-card' >
        <img src={slide_image_2} alt="slide_image" />
           <div className='p-content'>
            <button className='btn-view' onClick={()=>{setOpenModal2(true)}} >
              View More
              </button>
              </div>
            </div>
          {openModal2 && <Modal project={projects[2]} openModal={openModal2} setOpenModal={setOpenModal2} />}
    </div>
    <div class="carousel-item">
    <div className='p-card' >
        <img src={slide_image_3} alt="slide_image" />
           <div className='p-content'>
            <button className='btn-view' onClick={()=>{setOpenModal3(true)}} >
              View More
              </button>
              </div>
            </div>
          {openModal3 && <Modal project={projects[1]} openModal={openModal3} setOpenModal={setOpenModal3} />}
    </div>
    <div class="carousel-item">
    <div className='p-card' >
        <img src={slide_image_5} alt="slide_image" />
           <div className='p-content'>
            <button className='btn-view' onClick={()=>{setOpenModal4(true)}} >
              View More
              </button>
              </div>
            </div>
          {openModal4 && <Modal project={projects[3]} openModal={openModal4} setOpenModal={setOpenModal4} />}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  )

  
}

export default Portfolio;