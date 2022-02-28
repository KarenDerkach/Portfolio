import React from "react";
import { useSelector } from "react-redux";
import "./AboutMe.css";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import data from '../../data/about'
import photo from "../../assets/Home/profilephoto-.webp";
import Skills from "./Skills";
import logoArg from "../../assets/About/argentina.png";
const data = require('../../data/about.json')

function goDown() {
  window.scrollTo({ top: window.innerHeight + 50, behavior: "smooth" });
}

export default function AboutMe() {
  const language = useSelector((state) => state.language);

  return (
    <div>
      <div className="a">
        <div className="a-left">
          <div className="a-card"></div>
          <div className="a-card-bg">
            <img src={photo} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">
            {language === "EN" ? "Why program?" : "¿Por qué programar?"}{" "}
          </h1>
          <p className="a-sub">
            <img src={logoArg} alt="arg" className="imgArg" />{language === "EN" ? data.EN.sub1 : data.ES.sub1}  <br /> {language === "EN" ? data.EN.sub2 : data.ES.sub2}
          </p>
          <p className="a-desc">
            {language === "EN" ? data.EN.description : data.ES.description}
            <br />
           {language === "EN" ? data.EN.description2 : data.ES.description2}
           <br />
            {language === "EN" ? data.EN.description3 : data.ES.description3}
          </p>
          <div className="resume">
            <a href="CV_DERKACH KAREN-.pdf" download="KD_CV.pdf">
              <button className="btn-get-resume">
                {language === "EN" ? "Get Resume" : "Mi CV"}
              </button>
            </a>
          </div>
          <p className="a-footer">
            {language === "EN"
              ? "I bet on new challenges. Can you help me to specify them?"
              : "Apuesto a nuevos desafíos. ¿Me ayudas a concretarlos?"}
          </p>

          <div className="a-down">
            <span className="a-Skill">
              {language === "EN" ? "Skills" : "Habilidades"}
            </span>
            <IconButton onClick={goDown}>
              <KeyboardArrowDownIcon
                className="icon-arrow"
                sx={{
                  fontSize: "6vh",
                  position: "relative",
                  bottom: 5,
                  backgroundColor: "#e76f51",
                  borderRadius: "100%",
                  border: "none",

                  "&:hover": { backgroundColor: "#f4a261" },
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="c-skills">
        <Skills />
      </div>
    </div>
  );
}
