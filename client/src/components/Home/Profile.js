import React, { useState, useEffect } from "react";
import photo from "../../assets/Home/profilephoto-.webp";
import "./Profile.css";

export default function Profile({ language }) {
  // Preload image for instant animation start
  useEffect(() => {
    const img = new Image();
    img.src = photo;
    
    // Load animate.css only if needed (for fallback animations)
    const loadAnimateCSS = async () => {
      try {
        await import("animate.css");
      } catch (error) {
        console.warn("Failed to load animate.css:", error);
      }
    };
    
    loadAnimateCSS();
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
                <p className="welcome-text">Welcome! I'm thrilled you're here to explore my journey.</p>
                <p className="intro-text">
                  I'm Karen, a passionate full-stack developer with 3+ years of expertise crafting digital solutions that matter.
                  <br />
                  My unique journey began in accounting, where I developed analytical thinking and attention to detail—skills that now drive my code quality.
                  <br />
                  What started as curiosity about automation evolved into a deep passion for creating intuitive, scalable applications that solve real-world problems.
                </p>
              </div>
            ) : (
              <div>
                <p className="welcome-text">¡Bienvenido! Me emociona que estés aquí para conocer mi trayectoria.</p>
                <p className="intro-text">
                  Soy Karen, desarrolladora full-stack apasionada con más de 3 años de experiencia creando soluciones digitales que importan.
                  <br />
                  Mi viaje único comenzó en contabilidad, donde desarrollé pensamiento analítico y atención al detalle—habilidades que ahora impulsan la calidad de mi código.
                  <br />
                  Lo que empezó como curiosidad por la automatización evolucionó hacia una pasión profunda por crear aplicaciones intuitivas y escalables que resuelven problemas reales.
                </p>
              </div>
            )}
          </div>
          <div className="modern-cards-section">
            <div className="modern-card expertise-card">
              <div className="card-icon">
                <span className="icon-symbol">🎯</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  {language === "EN" ? "My Mission" : "Mi Misión"}
                </h3>
                <p className="card-description">
                  {language === "EN"
                    ? "Transform complex business challenges into elegant, user-centric digital solutions that drive measurable impact and exceptional experiences."
                    : "Transformar desafíos empresariales complejos en soluciones digitales elegantes y centradas en el usuario que generen impacto medible y experiencias excepcionales."}
                </p>
              </div>
              <div className="card-gradient-overlay"></div>
            </div>
            
            <div className="modern-card values-card">
              <div className="card-icon">
                <span className="icon-symbol">⚡</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  {language === "EN" ? "Core Values" : "Valores Fundamentales"}
                </h3>
                <p className="card-description">
                  {language === "EN"
                    ? "Continuous learning, clean architecture, and collaborative innovation. I believe in code that not only works today, but evolves gracefully tomorrow."
                    : "Aprendizaje continuo, arquitectura limpia e innovación colaborativa. Creo en código que no solo funciona hoy, sino que evoluciona elegantemente mañana."}
                </p>
              </div>
              <div className="card-gradient-overlay"></div>
            </div>
            
            <div className="modern-card impact-card">
              <div className="card-icon">
                <span className="icon-symbol">🚀</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  {language === "EN" ? "What Drives Me" : "Lo que me Impulsa"}
                </h3>
                <p className="card-description">
                  {language === "EN"
                    ? "Creating digital experiences that empower users and businesses alike. Every line of code is an opportunity to make someone's day better."
                    : "Crear experiencias digitales que empoderen tanto a usuarios como empresas. Cada línea de código es una oportunidad para mejorar el día de alguien."}
                </p>
              </div>
              <div className="card-gradient-overlay"></div>
            </div>
          </div>
          <div className="resume-section">
            <div className="cv-download-container">
              <a
                href="CV Karen Derkach.pdf"
                download="CV Karen Derkach.pdf"
                className="premium-cv-button"
                aria-label={language === "EN" ? "Download Karen's Resume" : "Descargar CV de Karen"}
              >
                <div className="button-background">
                  <div className="button-border"></div>
                  <div className="button-ripple"></div>
                </div>
                <div className="button-content">
                  <div className="icon-container">
                    <svg className="download-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V16M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="text-container">
                    <span className="button-main-text">
                      {language === "EN" ? "Download Resume" : "Descargar CV"}
                    </span>
                    <span className="button-sub-text">
                      {language === "EN" ? "PDF • Updated 2025" : "PDF • Actualizado 2025"}
                    </span>
                  </div>
                </div>
                <div className="success-overlay">
                  <svg className="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{language === "EN" ? "Downloaded!" : "¡Descargado!"}</span>
                </div>
              </a>
            </div>
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
          <img 
            src={photo} 
            alt="Karen Derkach" 
            className="i-img"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  );
}