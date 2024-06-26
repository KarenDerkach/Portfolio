import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BiMenu } from "react-icons/bi";
import { changeLanguage } from "../../react-redux/action";
import ES from "../../assets/Home/ES.png";
import EN from "../../assets/Home/EN.png";
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

  function handleShowMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const menuItems = document.getElementById('menu-items');
    
    menuIcon.addEventListener('click', () => {
              menuIcon.classList.toggle('change');
              menuItems.classList.toggle('show');
          });
  }
//   document.addEventListener('DOMContentLoaded', () => {
//     const menuIcon = document.getElementById('menu-icon');
//     const menuItems = document.getElementById('menu-items');

//     menuIcon.addEventListener('click', () => {
//         menuIcon.classList.toggle('change');
//         menuItems.classList.toggle('show');
//     });
// });

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
     
      <div class="menu-icon" id="menu-icon" onClick={()=>{handleShowMenu()}}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
     

      <ul class="menu-items"id="menu-items">
        <li data-nav="main">
          <a href="#main" className="i-link">{language === "EN" ? "HOME" : "PRINCIPAL"}</a>
        </li>
        <li data-nav="aboutme">
          <a href="#aboutme" className="i-link">{language === "EN" ? "ABOUT ME" : "SOBRE MI"}</a>
        </li>
        <li data-nav="education">
          <a href="#education" className="i-link">{language === "EN" ? "EDUCATION" : "EDUCACIÓN"}</a>
        </li>
        <li data-nav="projects">
          <a href="#projects" className="i-link">{language === "EN" ? "PROJECTS" : "PROYECTOS"}</a>
        </li>
        <li data-nav="contact">
          <a href="#contact" className="i-link">{language === "EN" ? "CONTACT" : "CONTACTO"}</a>
        </li>
      </ul>
      
      <div className="menu-lang">
        <button onClick={handleChangeLang} className="buttonLang">
          <img src={language === "ES" ? EN : ES} alt={language === "ES" ? "U.S" : "ES"} className="flat" />
        </button>
      </div>
    </nav>
  );
}
