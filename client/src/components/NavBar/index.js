import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../react-redux/action";
import "./NavBar.css";

export default function NavBar({ language }) {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Karen Derkach | ${language === "EN" ? "Portfolio" : "Portafolio"}`;
  }, [language]);

  function handleChangeLang(e) {
    e.preventDefault();
    dispatch(changeLanguage());
  }

  function toggleMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const menuItems = document.getElementById('menu-items');
    const isOpen = menuItems.classList.contains('show');

    menuIcon.classList.toggle('change');
    menuItems.classList.toggle('show');
    
    // Update aria-expanded for accessibility
    menuIcon.setAttribute('aria-expanded', !isOpen);
  }

  function closeMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const menuItems = document.getElementById('menu-items');

    menuIcon.classList.remove('change');
    menuItems.classList.remove('show');
    
    // Update aria-expanded for accessibility
    menuIcon.setAttribute('aria-expanded', 'false');
  }
  // Navbar scroll effect
  useEffect(() => {
    function handleScroll() {
      const nav = document.querySelector(".navbarContainer");
      nav.classList.toggle("sticky", window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Section observation 

  useEffect(() => {
    function observeSections() {
      const sections = document.querySelectorAll("section");
      const nav = document.querySelector(".navbarContainer");
      const navList = document.querySelectorAll(".menu-items li");

      const options = {
        threshold: 0.2,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nav.classList.toggle("active", entry.target.id !== "main");
            navList.forEach((link) => {
              link.classList.toggle("active", entry.target.id === link.dataset.nav);
            });
          }
        });
      }, options);

      sections.forEach((section) => {
        console.log("SECTION", section);
        observer.observe(section);
      });
    }

    observeSections();
  }, []);


  return (
    <nav className="navbarContainer" role="navigation" aria-label="Main navigation">
      <div className="menu-icon" id="menu-icon" onClick={toggleMenu} role="button" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="menu-items">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul className="menu-items" id="menu-items" role="menubar">
        <li data-nav="main" onClick={closeMenu} role="menuitem">
          <a href="#main" className="i-link">{language === "EN" ? "HOME" : "INICIO"}</a>
        </li>
        <li data-nav="aboutme" onClick={closeMenu} role="menuitem">
          <a href="#aboutme" className="i-link">{language === "EN" ? "ABOUT ME" : "SOBRE MI"}</a>
        </li>
        <li data-nav="education" onClick={closeMenu} role="menuitem">
          <a href="#education" className="i-link">{language === "EN" ? "EDUCATION" : "EDUCACIÓN"}</a>
        </li>
        <li data-nav="projects" onClick={closeMenu} role="menuitem">
          <a href="#projects" className="i-link">{language === "EN" ? "PROJECTS" : "PROYECTOS"}</a>
        </li>
        <li data-nav="contact" onClick={closeMenu} role="menuitem">
          <a href="#contact" className="i-link">{language === "EN" ? "CONTACT" : "CONTACTO"}</a>
        </li>
      </ul>

      <div className="menu-lang">
        {language === "ES" ? (
          <button onClick={handleChangeLang} className="buttonLang" aria-label="Switch to English">ES</button>
        ) : (
          <button onClick={handleChangeLang} className="buttonLang" aria-label="Cambiar a Español">EN</button>
        )}
      </div>
    </nav>
  );
}
