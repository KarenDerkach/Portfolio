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

    menuIcon.classList.toggle('change');
    menuItems.classList.toggle('show');
  }

  function closeMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const menuItems = document.getElementById('menu-items');

    menuIcon.classList.remove('change');
    menuItems.classList.remove('show');
  }

  useEffect(() => {
    function handleScroll() {
      const nav = document.querySelector("nav");
      nav.classList.toggle("sticky", window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function observeSections() {
      const sections = document.querySelectorAll("section");
      const nav = document.querySelector("nav");
      const navList = document.querySelectorAll(".menu-items li");

      const options = {
        threshold: 0.6,
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
        observer.observe(section);
      });
    }

    observeSections();
  }, []);

  return (
    <nav>
      <div className="menu-icon" id="menu-icon" onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul className="menu-items" id="menu-items">
        <li data-nav="main" onClick={closeMenu}>
          <a href="#main" className="i-link">{language === "EN" ? "HOME" : "INICIO"}</a>
        </li>
        <li data-nav="aboutme" onClick={closeMenu}>
          <a href="#aboutme" className="i-link">{language === "EN" ? "ABOUT ME" : "SOBRE MI"}</a>
        </li>
        <li data-nav="education" onClick={closeMenu}>
          <a href="#education" className="i-link">{language === "EN" ? "EDUCATION" : "EDUCACIÓN"}</a>
        </li>
        <li data-nav="projects" onClick={closeMenu}>
          <a href="#projects" className="i-link">{language === "EN" ? "PROJECTS" : "PROYECTOS"}</a>
        </li>
        <li data-nav="contact" onClick={closeMenu}>
          <a href="#contact" className="i-link">{language === "EN" ? "CONTACT" : "CONTACTO"}</a>
        </li>
      </ul>

      <div className="menu-lang">
        {language === "ES" ? (
          <button onClick={handleChangeLang} className="buttonLang">ES</button>
        ) : (
          <button onClick={handleChangeLang} className="buttonLang">EN</button>
        )}
      </div>
    </nav>
  );
}
