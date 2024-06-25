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
    // Use template literals for dynamic title
    document.title = `Karen Derkach | ${
      language === "EN" ? "Portfolio" : "Portafolio"
    }`;
  }, [language]);

  function handleChangeLang(e) {
    e.preventDefault();
    dispatch(changeLanguage());
  }

  function handleShowMenu() {
    const menu_items = document.querySelector(".menu-items");
    menu_items.classList.toggle("show");
  }

  useEffect(() => {
    // Use a separate function for scroll event handling
    function handleScroll() {
      const nav = document.querySelector("nav");
      nav.classList.toggle("sticky", window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Use a function to observe the sections for IntersectionObserver
    function observeSections() {
      const sections = document.querySelectorAll("section")
        ? document.querySelectorAll("section")
        : undefined;
      console.log("SECTION :", sections);
      const nav = document.querySelector("nav");
      const navList = document.querySelectorAll(".menu-items li");

      const options = {
        threshold: 0.6,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Changing navbar style on scroll to next section
            if (entry.target.id !== "main") {
              nav.classList.add("active");
            } else {
              nav.classList.remove("active");
            }

            // Section Indicator
            navList.forEach((link) => {
              link.classList.remove("active");
              if (entry.target.id === link.dataset.nav) {
                link.classList.add("active");
              }
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
      <div className="btn-menu-mobile" onClick={handleShowMenu}>
        <BiMenu />
      </div>

      <ul className="menu-items">
        <li data-nav="main">
          <a href="#main" className="i-link">
            {language === "EN" ? "HOME" : "PRINCIPAL"}
          </a>{" "}
        </li>
        <li data-nav="aboutme">
          {" "}
          <a href="#aboutme" className="i-link">
            {" "}
            {language === "EN" ? "ABOUT ME" : "SOBRE MI"}
          </a>{" "}
        </li>
        <li data-nav="education">
          {" "}
          <a href="#education" className="i-link">
            {" "}
            {language === "EN" ? "EDUCATION" : "EDUCACIÓN"}{" "}
          </a>
        </li>
        <li data-nav="projects">
          {" "}
          <a href="#projects" className="i-link">
            {" "}
            {language === "EN" ? "PROJECTS" : "PROYECTOS"}{" "}
          </a>{" "}
        </li>
        <li data-nav="contact">
          {" "}
          <a href="#contact" className="i-link">
            {" "}
            {language === "EN" ? "CONTACT" : "CONTACTO"}{" "}
          </a>{" "}
        </li>
      </ul>
      <div className="menu-lang">
        <button onClick={(e) => handleChangeLang(e)} className="buttonLang">
          {language === "ES" ? (
            <img src={EN} alt="U.S" className="flat" />
          ) : (
            <img src={ES} alt="ES" className="flat" />
          )}
        </button>
      </div>
    </nav>
  );
}
