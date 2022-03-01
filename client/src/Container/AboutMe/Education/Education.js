import React from 'react';
import { useSelector } from "react-redux";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from '../../../data/education'
import { MdSchool } from 'react-icons/md';
import { BsPaperclip } from 'react-icons/bs'
//import {MdWork} from 'react-icons/md'
import './Education.css'

function Education(props) {
    const language = useSelector((state) => state.language);

    //styles
    let schoolIconStyles = { background: '#3B707D', color: '#fff' }
    let courseIconStyles = { background: '#FF5412', color: '#fff' }

    return (
        <div>



            <VerticalTimeline >

                {
                    language === 'EN' ?
                        //ENGLISH
                        //if botton == both?
                        props.selectedRadio === "Both" ?
                            timelineElements.map(elem => {
                                let isSchoolIcon = elem.EN.icon === "school"
                                return (
                                    <VerticalTimelineElement
                                        key={elem.EN.id}
                                        date={elem.EN.years}
                                        iconStyle={isSchoolIcon ? schoolIconStyles : courseIconStyles}
                                        icon={isSchoolIcon ? <MdSchool /> : <BsPaperclip />}
                                    >
                                        <a href={elem.EN.dowload} className='e-links'><h3 className="vertical-timeline-element-title">{elem.EN.title}</h3></a>
                                        <h4 className="vertical-timeline-element-subtitle">{elem.EN.university}</h4>
                                        <p className='e-description'>{elem.EN.description}</p>
                                    </VerticalTimelineElement>
                                )
                            })
                            //else botton == Education or Courses
                            :

                            props.selectedRadio === "Education" ?
                                timelineElements.map(elem => {
                                    if (elem.EN.icon === "school") {
                                        return (
                                            <VerticalTimelineElement
                                                // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                                key={elem.EN.id}
                                                date={elem.EN.years}
                                                iconStyle={schoolIconStyles}
                                                icon={<MdSchool />}
                                            >
                                                <a href={elem.EN.dowload} className='e-links'><h3 className="vertical-timeline-element-title">{elem.EN.title}</h3></a>
                                                <h4 className="vertical-timeline-element-subtitle">{elem.EN.university}</h4>
                                                <p>{elem.EN.description}</p>
                                            </VerticalTimelineElement>
                                        )
                                    }

                                }
                                )

                                //button === courses
                                :
                                timelineElements.map(elem => {
                                    if (elem.EN.icon === "course") {
                                        return (
                                            <VerticalTimelineElement
                                                // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                                key={elem.EN.id}
                                                date={elem.EN.years}
                                                iconStyle={courseIconStyles}
                                                icon={<BsPaperclip />}
                                            >
                                                <a href={elem.EN.dowload} className='e-links'><h3 className="vertical-timeline-element-title">{elem.EN.title}</h3></a>
                                                <h4 className="vertical-timeline-element-subtitle">{elem.EN.university}</h4>
                                                <p>{elem.EN.description}</p>
                                            </VerticalTimelineElement>
                                        )
                                    }

                                })

                        :
                        //ESPAÑOL
                        props.selectedRadio === "Both" ?
                            timelineElements.map(elem => {
                                let isSchoolIcon = elem.ES.icon === "school"
                                return (
                                    <VerticalTimelineElement
                                        key={elem.ES.id}
                                        date={elem.ES.years}
                                        iconStyle={isSchoolIcon ? schoolIconStyles : courseIconStyles}
                                        icon={isSchoolIcon ? <MdSchool /> : <BsPaperclip />}
                                        className='e-structure'
                                    >
                                        <a href={elem.ES.dowload} className='e-links'><h3 className="vertical-timeline-element-title">{elem.ES.title}</h3></a>
                                        <h4 className="vertical-timeline-element-subtitle">{elem.ES.university}</h4>
                                        <p className='e-description' >{elem.ES.description}</p>
                                    </VerticalTimelineElement>
                                )
                            })
                            :
                            props.selectedRadio === "Education" ?
                                timelineElements.map(elem => {
                                    if (elem.ES.icon === "school") {
                                        return (
                                            <VerticalTimelineElement
                                                // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                                key={elem.ES.id}
                                                date={elem.ES.years}
                                                iconStyle={schoolIconStyles}
                                                icon={<MdSchool />}
                                            >
                                                <a href={elem.ES.dowload} className='e-links'><h3 className="vertical-timeline-element-title">{elem.ES.title}</h3></a>
                                                <h4 className="vertical-timeline-element-subtitle">{elem.ES.university}</h4>
                                                <p>{elem.ES.description}</p>
                                            </VerticalTimelineElement>
                                        )
                                    }

                                }
                                )
                                :
                                timelineElements.map(elem => {
                                    if (elem.ES.icon === "course") {
                                        return (
                                            <VerticalTimelineElement
                                                // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                                key={elem.ES.id}
                                                date={elem.ES.years}
                                                iconStyle={courseIconStyles}
                                                icon={<BsPaperclip />}
                                            >
                                                <a href={elem.ES.dowload} className='e-links'><h3 className="vertical-timeline-element-title">{elem.ES.title}</h3></a>
                                                <h4 className="vertical-timeline-element-subtitle">{elem.ES.university}</h4>
                                                <p>{elem.ES.description}</p>
                                            </VerticalTimelineElement>
                                        )
                                    }
                                }
                                )

                }
            </VerticalTimeline>
        </div>
    )
}

export default Education;