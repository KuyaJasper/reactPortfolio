import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = ()=> {
    return (
        <NavStyle>
        <div className="Name">
        <h1>Jasper Abarquez</h1>
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
        </NavStyle>
    )
}

export default Nav;


const NavStyle = styled.div `
background:grey;
z-index: 2;
ul{
    display: flex;
    list-style: none;
}
li{
    padding-left: 1rem;
    padding-right: 1rem;   
    padding-top : 1rem;
}
a{
    text-decoration: none;
    color: white;
}
.links{
    display: flex;
    flex-direction: row;
    align-items: center;
    
    
}
.Name{
    display: flex;
    justify-content: flex-start;
}
`