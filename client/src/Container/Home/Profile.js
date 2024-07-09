import React, { useEffect, useRef } from "react";
import photo from "../../assets/Home/profilephoto-.webp";

import "./Profile.css";
import "animate.css";

export default function Profile({ language }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const handleScroll = () => {
      const rect = sectionElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const threshold = 0.5;

      if (rect.top <= windowHeight * (1 - threshold)) {
        sectionElement.classList.add("animate__animated", "animate__fadeIn");
      } else {
        sectionElement.classList.remove("animate__animated", "animate__fadeOut");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="container" >
      <div className="section-left">
        <section className="introduction" id="main" ref={sectionRef}>
          <h2 className="i-intro">
            {language === "EN" ? "Hi there, I'm" : "Hola, soy"}
          </h2>
          <h1 className="i-name">Karen Derkach</h1>
          <span className="i-mobile">
            {language === "EN" ? "- Web Developer -" : "- Desarrolladora Web -"}
          </span>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">
                {" "}
                {language === "EN" ? "Web Developer" : "Desarrolladora Web"}
              </div>
              <div className="i-title-item"> Front End </div>
              <div className="i-title-item"> Back End </div>
            </div>
          </div>
          <div className="i-social">
            <a
              href="https://wa.me/5493764653483?text=Hola!,%20He%20visto%20tu%20portfolio..."
              target="_blank"
              rel="noreferrer"
            >
              <div className="wp-icon" />
            </a>
            <a href="mailto:derkach.m.karen@gmail.com?body=Hola Karen!">
              <div className="gmail-icon" />
            </a>
            <a
              href="https://github.com/KarenDerkach"
              target="_blank"
              rel="noreferrer"
            >
              <div className="git-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/karen-derkach/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="linkedin-icon" />
            </a>
          </div>
        </section>
        <section className="presentation" id="aboutme" ref={sectionRef}>
          <h1 className="title">
            {language === "EN"
              ? "From Argentina to the 🌎🚀"
              : "De Argentina al 🌎🚀"}
          </h1>

          <div className="purposes-section">
            {language === "EN" ? (
              <div>
              <p>             
              Welcome and thank you for your interest in my profile!
              </p>
              <p>
              I'm Karen, web developer a with a passion that has grown over 3 years of experience in the field. 
              <br/>
               My journey began in the accounting world, where I studied and earned my degree as a public accountant. 
              <br/>
              My interest in automating repetitive tasks led me to discover the fascinating world of web development, and I haven't looked back since.
              </p>
              </div>
            ) : (
              <div>
              <p>
                ¡Bienvenido y gracias por tu interés en mi perfil!
              </p>
              <p>
             Soy Karen, desarrolladora web con una pasión que se ha cultivado a lo largo de 3 años de experiencia en el sector.
             <br/>
             Mi trayectoria comenzó en el mundo contable, donde estudié y me titulé como contadora pública.
             <br/>
             Mi interés por automatizar tareas repetitivas me llevó a descubrir el fascinante mundo del desarrollo web, y desde entonces no he mirado atrás.
              </p>
              
              </div>
            )}
          </div>

          <div className="cards-section">
           <div className="card">
            <div className="face front">
           
              <h3> {language === "EN" ? "Goal" : "Objetivo"}</h3>
            </div>
            <div className="face back">
              <p> {language === "EN" ? "Create scalable and efficient applications that offer an exceptional user experience." : "Crear aplicaciones escalables y eficientes que ofrezcan una experiencia de usuario excepcional."}</p>
            </div>
            </div>

         
           <div className="card">
            <div className="face front">
           
              <h3> {language === "EN" ? "Philosophy" : "Filosofía"}</h3>
            </div>
            <div className="face back">
              <p> {language === "EN" ? "Adding value by developing flexible and clean software, always based on best practices and constant learning." : "Aportar valor desarrollando software flexible y limpio, siempre fundamentado en buenas prácticas y actualización constante."}</p>
            </div>
            </div>
           </div>

          <div className="resume">
            {language === "EN" ? (
              <a
                href="Karen Derkach - CV EN.pdf"
                download="KD_CV.pdf"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <div className="button">
                  <div className="button-wrapper">
                    <div className="text">Resume</div>
                    <span className="icon">Download</span>
                  </div>
                </div>
              </a>
            ) : (
              <a
                href="Karen Derkach - CV ES.pdf"
                download="KD_CV.pdf"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <div class="button">
                  <div class="button-wrapper">
                    <div class="text">Mi CV</div>
                    <span class="icon">Descargar</span>
                  </div>
                </div>
              </a>
            )}
          </div>

          <p className="gretting">
            {language === "EN"
              ? "I hope you enjoy exploring my portfolio!"
              : "¡Espero que disfrutes explorando mi portafolio!"}
          </p>
           </section>
      </div>
      <div className="section-right" >
        <div className="i-bg">
          <img src={photo} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
}
