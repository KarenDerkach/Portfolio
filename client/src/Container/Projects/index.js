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
console.log(projects[3])
  return (
    
    <div className="p-container" >
      <h1 className="p-title">{language === 'EN' ? 'Projects' : 'Proyectos'}</h1>
      <section className="p-swiper">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {/* AGENDA */}
        <SwiperSlide>
          <div className='p-card' >
            <img className='image'src={slide_image_1} alt="slide_image" />
           <div className='p-content'>
            <button className='btn-view' onClick={()=>{setOpenModal1(true)}} >
              View More
              </button>
              </div>
            </div>
          {openModal1 && <Modal project={projects[0]} openModal={openModal1} setOpenModal={setOpenModal1} />}
        </SwiperSlide>
        {/* MUNDO PERROS */}
        <SwiperSlide>
        <div className='p-card' >
        <img src={slide_image_2} alt="slide_image" />
           <div className='p-content'>
            <button className='btn-view' onClick={()=>{setOpenModal2(true)}} >
              View More
              </button>
              </div>
            </div>
          {openModal2 && <Modal project={projects[2]} openModal={openModal2} setOpenModal={setOpenModal2} />}

        </SwiperSlide>
        {/* FOODARITY */}
        <SwiperSlide>
        <div className='p-card' >
        <img src={slide_image_3} alt="slide_image" />
           <div className='p-content'>
            <button className='btn-view' onClick={()=>{setOpenModal3(true)}} >
              View More
              </button>
              </div>
            </div>
          {openModal3 && <Modal project={projects[1]} openModal={openModal3} setOpenModal={setOpenModal3} />}
        </SwiperSlide>  
         {/* FOODARITY */}
       
        {/* PORTFOLIO */}
        <SwiperSlide>
        <div className='p-card' >
        
        <img src={slide_image_5} alt="slide_image" />
           <div className='p-content'>
            <button className='btn-view' onClick={()=>{setOpenModal4(true)}} >
              View More
              </button>
              </div>
            </div>
          {openModal4 && <Modal project={projects[3]} openModal={openModal4} setOpenModal={setOpenModal4} />}

        </SwiperSlide>
      </Swiper>
      </section>
    </div>
  );
}

export default Portfolio;