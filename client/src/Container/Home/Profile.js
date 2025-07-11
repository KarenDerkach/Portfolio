import React, { useState, useEffect } from "react";
import photo from "../../assets/Home/profilephoto-.webp";
import "./Profile.css";

export default function Profile({ language }) {
  // Dynamically load animate.css only on mount (performance)
  useEffect(() => {
    import("animate.css");
  }, []);

  // Typewriter effect
  const titles = React.useMemo(() => [
    language === "EN" ? "Web Developer" : "Desarrolladora Web",
    "Front End",
    "Back End",
  ], [language]);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitle];
    let typeSpeed = isDeleting ? 100 : 120;

    if (!isDeleting && typedText === fullText) {
      typeSpeed = 1000;
      const timeout = setTimeout(() => setIsDeleting(true), typeSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setTypedText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentTitle, titles]);

  // Social links data
  const socials = [
    {
      href: "https://wa.me/5493764653483?text=Hola!,%20He%20visto%20tu%20portfolio...",
      className: "wp-icon",
      label: "WhatsApp",
    },
    {
      href: "mailto:derkach.m.karen@gmail.com?body=Hola Karen!",
      className: "gmail-icon",
      label: "Gmail",
    },
    {
      href: "https://github.com/KarenDerkach",
      className: "git-icon",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/karen-derkach/",
      className: "linkedin-icon",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="container">
      <div className="section-left">
        <section className="introduction" id="main">
          <h2 className="i-intro">
            {language === "EN" ? "Hi there, I'm" : "Hola, soy"}
          </h2>
          <h1 className="i-name">Karen Derkach</h1>
          <span className="i-mobile">
            {language === "EN" ? "- Web Developer -" : "- Desarrolladora Web -"}
          </span>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item typewriter">
                {typedText}
                <span className="typewriter-cursor" aria-hidden="true">
                  |
                </span>
              </div>
            </div>
          </div>
          <div className="i-social" aria-label="Social links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                <div className={s.className} />
              </a>
            ))}
          </div>
        </section>
        <section className="presentation" id="aboutme">
          <h1 className="title">
            {language === "EN"
              ? "From Argentina to the 🌎🚀"
              : "De Argentina al 🌎🚀"}
          </h1>
          <div className="purposes-section">
            {language === "EN" ? (
              <div>
                <p>Welcome and thank you for your interest in my profile!</p>
                <p>
                  I'm Karen, web developer with a passion that has grown over 3 years of experience in the field.
                  <br />
                  My journey began in the accounting world, where I studied and earned my degree as a public accountant.
                  <br />
                  My interest in automating repetitive tasks led me to discover the fascinating world of web development, and I haven't looked back since.
                </p>
              </div>
            ) : (
              <div>
                <p>¡Bienvenido y gracias por tu interés en mi perfil!</p>
                <p>
                  Soy Karen, desarrolladora web con una pasión que se ha cultivado a lo largo de 3 años de experiencia en el sector.
                  <br />
                  Comencé mi trayectoria profesional en el ámbito contable, donde estudié y me titulé como contadora pública.
                  <br />
                  Mi interés por automatizar tareas repetitivas me llevó a descubrir el fascinante mundo del desarrollo web, y desde entonces no he mirado atrás.
                </p>
              </div>
            )}
          </div>
          <div className="cards-section">
            <div className="card">
              <div className="face front">
                <h3>{language === "EN" ? "Goal" : "Objetivo"}</h3>
              </div>
              <div className="face back">
                <p>
                  {language === "EN"
                    ? "Create scalable and efficient applications that offer an exceptional user experience."
                    : "Crear aplicaciones escalables y eficientes que ofrezcan una experiencia de usuario excepcional."}
                </p>
              </div>
            </div>
            <div className="card">
              <div className="face front">
                <h3>{language === "EN" ? "Philosophy" : "Filosofía"}</h3>
              </div>
              <div className="face back">
                <p>
                  {language === "EN"
                    ? "Adding value by developing flexible and clean software, always based on best practices and constant learning."
                    : "Aportar valor desarrollando software flexible y limpio, siempre fundamentado en buenas prácticas y actualización constante."}
                </p>
              </div>
            </div>
          </div>
          <div className="resume">
            <a
              href="CV KD nf.pdf"
              download="KD_CV.pdf"
              style={{ textDecoration: "none" }}
            >
              <div className="button">
                <div className="button-wrapper">
                  <div className="text">
                    {language === "EN" ? "Resume" : "Curriculum"}
                  </div>
                  <span className="icon">
                    {language === "EN" ? "Download" : "Descargar"}
                  </span>
                </div>
              </div>
            </a>
          </div>
          <p className="gretting">
            {language === "EN"
              ? "I hope you enjoy exploring my portfolio!"
              : "¡Espero que disfrutes explorando mi portafolio!"}
          </p>
        </section>
      </div>
      <div className="section-right">
        <div className="i-bg">
          <img src={photo} alt="Karen Derkach" className="i-img" />
        </div>
      </div>
    </div>
  );
}