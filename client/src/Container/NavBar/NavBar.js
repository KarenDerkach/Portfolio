import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiMenu } from "react-icons/bi";
import { changeLanguage } from "../../react-redux/action";

import ES from "../../assets/Home/ES.png";
import EN from "../../assets/Home/EN.png";
import "./NavBar.css";

export default function NavBar() {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    if (language === "EN") {
      document.title = "Karen Derkach | Portfolio";
    } else {
      document.title = "Karen Derkach | Portafolio";
    }
  }, [language]);

  function handleChangeLang(e) {
    e.preventDefault();
    dispatch(changeLanguage());
  }

  function handleShowMenu() {
    const menu_items = document.querySelector(".menu-items");
    menu_items.classList.toggle("show");
  }

  return (
    <div>
      <nav className="navbar">
        
        <div className="menu-lang">
          <button onClick={(e) => handleChangeLang(e)} className="buttonLang">
            {language === "ES" ? (
              <img src={EN} alt="U.S" className="flat" />
            ) : (
              <img src={ES} alt="ES" className="flat" />
            )}
          </button>
        </div>
        <div className="btn-menu-mobile" onClick={handleShowMenu}>
          <BiMenu />
        </div>
      

        <ul className="menu-items">
          <li>
            <a href="/" className="i-link">
              {language === "EN" ? "HOME" : "PRINCIPAL"}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/AboutMe" className="i-link">
              {" "}
              {language === "EN" ? "ABOUT ME" : "SOBRE MI"}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/Portfolio" className="i-link">
              {" "}
              {language === "EN" ? "PROJECTS" : "PROYECTOS"}{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/Contact" className="i-link">
              {" "}
              {language === "EN" ? "CONTACT" : "CONTACTO"}{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
