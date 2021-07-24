import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = ()=> {
    return (
        <NavStyle>
        <h1><Link to="/">Jasper Abarquez</Link></h1>

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

        </NavStyle>
    )
}

export default Nav;


const NavStyle = styled.div `
background-color:RGBA(23, 23, 23);
display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;
text-align: center;
ul{
    display: flex;
    list-style: none;
    margin-right: 2rem;
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

/* Smartphones (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
a{
    font-size: 70%;
}
h1{
    font-size: 2rem;
}


}
`