import React, { useState } from "react";
import Education from "./Education";
import "./EducationMain.css";

// Custom Radio Button Component
const CustomRadio = ({ value, checked, onChange, label, name }) => (
  <label className="custom-radio-label">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="custom-radio-input"
    />
    <span className="custom-radio-button"></span>
    <span className="custom-radio-text">{label}</span>
  </label>
);

function EducationMain({ language }) {
  const [selectedRadio, setSelectedRadio] = useState("All");

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  if (language === "EN") {
    return (
      <div >
        <div data-aos="fade-right" data-aos-easing="ease-in-sine">
          <h2 className="educationExperienceTitle">Education and experience</h2>
        </div>

        <div className="radioButtons">
          <div className="custom-radio-group">
            <CustomRadio
              value="Courses"
              checked={selectedRadio === "Courses"}
              onChange={handleRadioChange}
              label="Courses"
              name="education-options"
            />
            <CustomRadio
              value="Education"
              checked={selectedRadio === "Education"}
              onChange={handleRadioChange}
              label="Education"
              name="education-options"
            />
            <CustomRadio
              value="Work"
              checked={selectedRadio === "Work"}
              onChange={handleRadioChange}
              label="Work"
              name="education-options"
            />
            <CustomRadio
              value="All"
              checked={selectedRadio === "All"}
              onChange={handleRadioChange}
              label="All"
              name="education-options"
            />
          </div>
        </div>

        <Education language={language} selectedRadio={selectedRadio}></Education>
      </div>
    );
  } else {
    return (
      <div>
        <div data-aos="fade-right" data-aos-easing="ease-in-sine">
          <h2 className="educationExperienceTitle">Educación y experiencia</h2>
        </div>

        <div className="radioButtons">
          <div className="custom-radio-group">
            <CustomRadio
              value="Courses"
              checked={selectedRadio === "Courses"}
              onChange={handleRadioChange}
              label="Cursos"
              name="education-options"
            />
            <CustomRadio
              value="Education"
              checked={selectedRadio === "Education"}
              onChange={handleRadioChange}
              label="Educación"
              name="education-options"
            />
            <CustomRadio
              value="Work"
              checked={selectedRadio === "Work"}
              onChange={handleRadioChange}
              label="Empleos"
              name="education-options"
            />
            <CustomRadio
              value="All"
              checked={selectedRadio === "All"}
              onChange={handleRadioChange}
              label="Todos"
              name="education-options"
            />
          </div>
        </div>

        <Education language={language} selectedRadio={selectedRadio}></Education>
      </div>
    );
  }
}

export default EducationMain;
