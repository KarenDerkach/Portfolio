import React from 'react';
import { useSelector } from "react-redux";
import { useState } from "react";
import Education from "./Education";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import './EducationMain.css'


function EducationMain() {
  const [selectedRadio, setSelectedRadio] = useState("Both");
  const language = useSelector((state) => state.language);

  if (language === "EN") {
    return (
      <div className="Education_Experience1">
        <div data-aos="fade-right" data-aos-easing="ease-in-sine">
          <h1 className="EducationExperienceTitle">
            Education and Experience
          </h1>
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
              defaultValue="Both"
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
              <FormControlLabel value="Both" control={<Radio />} label="Both" />
            </RadioGroup>
          </FormControl>
        </div>

        <Education
          selectedRadio={selectedRadio}
        ></Education>
      </div>
    )
        }
        else{
            return(
                <div className="Education_Experience1">
                  <div data-aos="fade-right" data-aos-easing="ease-in-sine">
                    <h1 className="EducationExperienceTitle" >
                      Educación y experiencia
                    </h1>
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
                        defaultValue="Both"
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
                        <FormControlLabel value="Both" control={<Radio />} label="Ambos" />
                      </RadioGroup>
                    </FormControl>
                  </div>
          
                  <Education
                    selectedRadio={selectedRadio}
                  ></Education>
                </div>
            )
        }
    }

    export default EducationMain;