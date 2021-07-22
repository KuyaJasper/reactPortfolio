import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = ()=> {
    return (
        <FooterStyle>
            <div className="navigation">
                <h4>Nav Links</h4>
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
            <div className="contact">
                <h4>Contact</h4>
                <ul>
                    <li>Phone: (908)472-2099</li>
                    <li>Email: abarquezj1@gmail.com</li>
                </ul>

            </div>
            </FooterStyle>

    )
}

export default Footer;


const FooterStyle = styled.div`
background-color:RGBA(23, 23, 23); 
display: flex;
justify-content: space-space-around;
color: whitesmoke;
ul{
    display: flex;
    flex-direction: column;
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

.navigation{
    margin-left: 1rem;
    display: flex;
    align-items: center;
}

.contact{
    margin-left: 1rem;
    display: flex;
    align-items: center;
}

`