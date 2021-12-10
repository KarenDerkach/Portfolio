import React from "react";
import './AboutMe.css'
import photo from '../../assets/Home/profilephoto-.png'

export default function AboutMe() {
    return (
        <div className='a'>
        <div className='a-left' >
            <div className='a-card'></div>
            <div className='a-card-bg'>
                <img src={photo} alt='' className='a-img'/>
            </div>
        </div>
        <div className='a-right' >
            <h1 className='a-title'> About Me</h1>
            <p className='a-sub'>
                dfndsfodkj´fdsj´vkfgfdplgfdghflfdlvdfghfhnfghgh
                gfhfhfgthfx
            </p>
            <p className='a-desc'>
            gfddddddddfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            hhhhhhhhhhhhhhhhhhhhhhh
            </p>
        </div>
        </div>
    )

}