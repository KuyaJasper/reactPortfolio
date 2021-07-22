import React from 'react'
import { Link } from 'react-router-dom';

const Nav = ()=> {
    return (
        <div>
            <h1>Nav Bar</h1>
            <div className= "links">
               <ul>
                   <li>
                       <Link to="/">About Me</Link>
                   </li>
                   <li>
                       <Link to="/projects">Projects</Link>
                   </li>
                   <li>
                       <Link to="/contact">Contact</Link>
                   </li>
               </ul>
            </div>
        </div>
    )
}

export default Nav;