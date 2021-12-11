import React from "react";
import { NavLink, Outlet} from 'react-router-dom'
import './NavBar.css';



export default function NavBar() {
    return (
        <div >
            <nav className="navbar">
                <NavLink activeClassName="current" to='/' className='i-home' >Home </NavLink> |
                <NavLink activeClassName="current" to='/aboutMe' className='i-about'  > About Me</NavLink> |
                <NavLink activeClassName="current" to='/portfolio' className='i-portfolio'  > Portfolio  </NavLink> |
                <NavLink activeClassName="current" to='/contactMe' className='i-contact' > Contact Me  </NavLink>
            </nav>
        <section><Outlet/></section>
        </div>

    )

}