import React from "react";
import { Link, Outlet} from 'react-router-dom'
import './NavBar.css';



export default function NavBar() {
    return (
        <div >
            <nav className="navbar">
                <Link activeClassName="current" to='/' className='i-home' >Home </Link> |
                <Link activeClassName="current" to='/aboutMe' className='i-about'  > About Me</Link> |
                <Link activeClassName="current" to='/portfolio' className='i-portfolio'  > Portfolio  </Link> |
                <Link activeClassName="current" to='/contactMe' className='i-contact' > Contact Me  </Link>
            </nav>
        <section><Outlet/></section>
        </div>

    )

}