import React from "react";
//import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">
              <a href="https://www.linkedin.com/in/karen-derkach">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/KarenDerkach">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.instagram.com/derkachkaren">
              <i className="fa fa-instagram"></i>
            </a>
              </div>
           
          </div>
          <div className="profile-details-name" >
              <span className="primary-text">
                  Hola, soy <span className="highlighted-tex"> Karen</span> 
              </span >

          </div>
          <div className="profile-details-role">
              <span className='primary-text' >
                {/* <h1>
                    <Typical
                    loop={Infinity}
                    steps={[
                        'Contador Público Nacional ',
                        1000,
                        'and..',
                        1000,
                        'Full Stack Developer',
                        1000,
                    ]}/>
                </h1> */}
                <span className="profile-role-tagline">
                    Descripcion corta de mi
                </span>
              </span>

          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me</button>
            <a href='CV_DERKACH KAREN-.pdf' download='KD_CV.pdf'> 
             <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}
