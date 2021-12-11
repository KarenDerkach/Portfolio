import React from "react";
import './Portfolio.css';
import Projects from "../Projects/Projects";

export default function Portfolio() {
    return (
        <div className="pl">
           <div className="heading">
               <h1 className="heading">My Projects</h1>
               <p className="heading-p">vnfdvsjpvnsdñnvsdvsdñvcsvsdssd
               vsfvsvosmvasfvdfvdfvfrfr</p>
           </div>
             <div className="pl-list">
                 <Projects/>
                 <Projects/>
                 <Projects/>
                 <Projects/>
             </div>

        </div>
    )

}