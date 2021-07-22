import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = ()=> {
    return (
        <NavStyle>
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
        </NavStyle>
    )
}

export default Nav;


const NavStyle = styled.div `
background-color:RGBA(23, 23, 23); 
display: flex;
justify-content: space-between;
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
    color: whitesmoke;
}
h1{
    padding-left: 1rem;
    color: whitesmoke;
    font-family: "Kaushan Script", cursive;
}
.links{
    
}
`