import React, { useState } from "react";
import Education from "./Education";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import "./EducationMain.css";

function EducationMain({ language }) {
  const [selectedRadio, setSelectedRadio] = useState("All");

  if (language === "EN") {
    return (
      <section id="education" className="Education_Experience" >
        <div data-aos="fade-right" data-aos-easing="ease-in-sine">
          <h1 className="EducationExperienceTitle">Education and experience</h1>
        </div>

        <div className="RadioButtons">
          <FormControl
            component="fieldset"
            value={selectedRadio}
            onChange={(e) => {
              setSelectedRadio(e.target.value);
            }}
            className="e-colorBtn"
          >
            <RadioGroup
              row
              aria-label="options"
              name="options"
              defaultValue="All"
            >
              <FormControlLabel
                value="Courses"
                control={<Radio />}
                label="Courses"
              />
              <FormControlLabel
                value="Education"
                control={<Radio />}
                label="Education"
              />
              <FormControlLabel value="Work" control={<Radio />} label="Work" />
              <FormControlLabel value="All" control={<Radio />} label="All" />
            </RadioGroup>
          </FormControl>
        </div>

        <Education language={language} selectedRadio={selectedRadio}></Education>
      </section>
    );
  } else {
    return (
      <section className="Education_Experience">
        <div data-aos="fade-right" data-aos-easing="ease-in-sine">
          <h1 className="EducationExperienceTitle">Educación y experiencia</h1>
        </div>

        <div className="RadioButtons">
          <FormControl
            component="fieldset"
            value={selectedRadio}
            onChange={(e) => {
              setSelectedRadio(e.target.value);
            }}
          >
            <RadioGroup
              row
              aria-label="options"
              name="options"
              defaultValue="All"
            >
              <FormControlLabel
                value="Courses"
                control={<Radio />}
                label="Cursos"
              />
              <FormControlLabel
                value="Education"
                control={<Radio />}
                label="Educación"
              />
              <FormControlLabel
                value="Work"
                control={<Radio />}
                label="Empleos"
              />
              <FormControlLabel value="All" control={<Radio />} label="Todos" />
            </RadioGroup>
          </FormControl>
        </div>

        <Education language={language} selectedRadio={selectedRadio}></Education>
      </section>
    );
  }
}

export default EducationMain;
