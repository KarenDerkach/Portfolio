import React from "react";
import { Link } from 'react-router-dom'
import AboutMe from '../AboutMe/AboutMe'


export default function NavBar() {
    return (
        <div>
            <nav>
                <div>
                <Link to='/aboutMe' > About Me <AboutMe/>
               </Link>
               </div>
            </nav>

        </div>
    )

}