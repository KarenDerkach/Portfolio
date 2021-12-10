import React from "react";
import { NavLink, Outlet} from 'react-router-dom'
import './NavBar.css';



export default function NavBar() {
    return (
        <main>
            <nav>
                <NavLink activeClassName="current" to='/' >Home </NavLink> |
                <NavLink activeClassName="current" to='/aboutMe'  > About Me</NavLink> |
                <NavLink activeClassName="current" to='/portfolio'  > Portfolio  </NavLink> |
                <NavLink activeClassName="current" to='/contactMe' > Contact Me  </NavLink>
            </nav>
        <section><Outlet/></section>
        </main>

    )

}