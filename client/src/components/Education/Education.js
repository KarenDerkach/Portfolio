
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  timeLineEducation,
  timeLineCourses,
  timeLineWorks,
  timeLineAll,
} from "../../data/education";
import { MdSchool } from "react-icons/md";
import { BsPaperclip } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import "./Education.css";

function Education(props) {


  //styles
  let schoolIconStyles = { background: "var(--light-brown)", color: "#fff" };
  let courseIconStyles = { background: "#fcbf49", color: "#fff" };
  let worksIconStyles = { background: "var(--dark-green)", color: "#fff" };

  return (
    <div >
      <VerticalTimeline>
        {props.language === "EN"
          ? //ENGLISH
          //if botton == both?
          props.selectedRadio === "All"
            ? timeLineAll.map((elem) => {
              return (
                <VerticalTimelineElement
                  key={elem.EN.id}
                  date={elem.EN.years}
                  iconStyle={
                    (elem.EN.icon === "school" && schoolIconStyles) ||
                    (elem.EN.icon === "course" && courseIconStyles) ||
                    (elem.EN.icon === "work" && worksIconStyles)
                  }
                  icon={
                    (elem.EN.icon === "school" && <MdSchool />) ||
                    (elem.EN.icon === "course" && <BsPaperclip />) ||
                    (elem.EN.icon === "work" && <MdWork />)
                  }
                  className="e-structure"
                >
                  {elem.EN.download ? <a href={elem.EN.download} className="e-links">
                    <h3 className="vertical-timeline-element-title">
                      {elem.EN.title}
                    </h3> </a> : <h3 className="vertical-timeline-element-title">
                    {elem.EN.title}
                  </h3>}

                  <h4 className="vertical-timeline-element-subtitle">
                    {elem.EN.university}
                  </h4>
                  <p className="e-description">{elem.EN.description}</p>
                </VerticalTimelineElement>
              );
            })
            : //else botton == Education or Courses
            props.selectedRadio === "Education"
              ? timeLineEducation.map((elem) => {
                if (elem.EN.icon === "school") {
                  return (
                    <VerticalTimelineElement
                      key={elem.EN.id}
                      date={elem.EN.years}
                      iconStyle={schoolIconStyles}
                      icon={<MdSchool />}
                    >
                      <a href={elem.EN.download} className="e-links">
                        <h3 className="vertical-timeline-element-title">
                          {elem.EN.title}
                        </h3>
                      </a>
                      <h4 className="vertical-timeline-element-subtitle">
                        {elem.EN.university}
                      </h4>
                      <p>{elem.EN.description}</p>
                    </VerticalTimelineElement>
                  );
                } else {
                  return null;
                }
              })
              : //button === courses
              props.selectedRadio === "Courses"
                ? timeLineCourses.map((elem) => {
                  if (elem.EN.icon === "course") {
                    return (
                      <VerticalTimelineElement
                        key={elem.EN.id}
                        date={elem.EN.years}
                        iconStyle={courseIconStyles}
                        icon={<BsPaperclip />}
                      >
                        <a href={elem.EN.download} className="e-links">
                          <h3 className="vertical-timeline-element-title">
                            {elem.EN.title}
                          </h3>
                        </a>
                        <h4 className="vertical-timeline-element-subtitle">
                          {elem.EN.university}
                        </h4>
                        <p>{elem.EN.description}</p>
                      </VerticalTimelineElement>
                    );
                  } else {
                    return null;
                  }
                })
                : timeLineWorks.map((elem) => {
                  if (elem.EN.icon === "work") {
                    return (
                      <VerticalTimelineElement
                        key={elem.EN.id}
                        date={elem.EN.years}
                        iconStyle={worksIconStyles}
                        icon={<MdWork />}
                      >
                        {elem.EN.download ? <a href={elem.EN.download} className="e-links">
                          <h3 className="vertical-timeline-element-title">
                            {elem.EN.title}
                          </h3>
                        </a> : <h3 className="vertical-timeline-element-title">
                          {elem.EN.title}
                        </h3>}
                        <h4 className="vertical-timeline-element-subtitle">
                          {elem.EN.university}
                        </h4>
                        <p>{elem.EN.description}</p>
                      </VerticalTimelineElement>
                    );
                  } else {
                    return null;
                  }
                })
          : //ESPAÑOL
          props.selectedRadio === "All"
            ? timeLineAll.map((elem) => {
              return (
                <VerticalTimelineElement
                  key={elem.ES.id}
                  date={elem.ES.years}
                  iconStyle={
                    (elem.ES.icon === "school" && schoolIconStyles) ||
                    (elem.ES.icon === "course" && courseIconStyles) ||
                    (elem.ES.icon === "work" && worksIconStyles)
                  }
                  icon={
                    (elem.ES.icon === "school" && <MdSchool />) ||
                    (elem.ES.icon === "course" && <BsPaperclip />) ||
                    (elem.ES.icon === "work" && <MdWork />)
                  }
                  className="e-structure"
                >
                  {elem.ES.download ? <a href={elem.ES.download} className="e-links">
                    <h3 className="vertical-timeline-element-title">
                      {elem.ES.title}
                    </h3>
                  </a> : <h3 className="vertical-timeline-element-title">
                    {elem.ES.title}
                  </h3>}
                  <h4 className="vertical-timeline-element-subtitle">
                    {elem.ES.university}
                  </h4>
                  <p className="e-description">{elem.ES.description}</p>
                </VerticalTimelineElement>
              );
            })
            : props.selectedRadio === "Education"
              ? timeLineEducation.map((elem) => {
                if (elem.ES.icon === "school") {
                  return (
                    <VerticalTimelineElement
                      key={elem.ES.id}
                      date={elem.ES.years}
                      iconStyle={schoolIconStyles}
                      icon={<MdSchool />}
                    >
                      <a href={elem.ES.download} className="e-links">
                        <h3 className="vertical-timeline-element-title">
                          {elem.ES.title}
                        </h3>
                      </a>
                      <h4 className="vertical-timeline-element-subtitle">
                        {elem.ES.university}
                      </h4>
                      <p>{elem.ES.description}</p>
                    </VerticalTimelineElement>
                  );
                } else {
                  return null;
                }
              })
              : props.selectedRadio === "Courses"
                ? timeLineCourses.map((elem) => {
                  if (elem.ES.icon === "course") {
                    return (
                      <VerticalTimelineElement
                        key={elem.ES.id}
                        date={elem.ES.years}
                        iconStyle={courseIconStyles}
                        icon={<BsPaperclip />}
                      >
                        <a href={elem.ES.download} className="e-links">
                          <h3 className="vertical-timeline-element-title">
                            {elem.ES.title}
                          </h3>
                        </a>
                        <h4 className="vertical-timeline-element-subtitle">
                          {elem.ES.university}
                        </h4>
                        <p>{elem.ES.description}</p>
                      </VerticalTimelineElement>
                    );
                  } else {
                    return null;
                  }
                })
                : timeLineWorks.map((elem) => {
                  if (elem.ES.icon === "work") {
                    return (
                      <VerticalTimelineElement
                        key={elem.ES.id}
                        date={elem.ES.years}
                        iconStyle={worksIconStyles}
                        icon={<MdWork />}
                      >
                        {elem.ES.download ? <a href={elem.ES.download} className="e-links">
                          <h3 className="vertical-timeline-element-title">
                            {elem.ES.title}
                          </h3>
                        </a> : <h3 className="vertical-timeline-element-title">
                          {elem.ES.title}
                        </h3>}
                        <h4 className="vertical-timeline-element-subtitle">
                          {elem.ES.university}
                        </h4>
                        <p>{elem.ES.description}</p>
                      </VerticalTimelineElement>
                    );
                  } else {
                    return null;
                  }
                })}
      </VerticalTimeline>
    </div>
  );
}

export default Education;
