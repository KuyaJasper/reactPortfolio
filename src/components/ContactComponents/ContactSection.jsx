import React from 'react'
import styled from 'styled-components';
import Sunrise from '../../Assets/LanternSunrise.jpg'

const ContactSection = () => {
    return (
        <ContactStyle>
            <div className="titleContainer">
                <h1 className="title" >Contact Info</h1>
            </div>
        <div className="projectContainer" >
            <h1>Projects Go Here</h1>
        </div>
        </ContactStyle>
    )
  };
  export default ContactSection;




  const ContactStyle = styled.div `
  .titleContainer{
    background-image: url(${Sunrise});
    height: 100vh;
    background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
max-height: 100%;
  }
  .title{
    display: flex;
    justify-content: flex-end;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 150px;
  padding-right: 1rem;
  color: whitesmoke;

  /* 3d effect */
  top: 35%;
  width: 100%;

  text-shadow: 0 1px 0 hsl(174, 5%, 80%), 0 2px 0 hsl(174, 5%, 75%),
    0 3px 0 hsl(174, 5%, 70%), 0 4px 0 hsl(174, 5%, 66%),
    0 5px 0 hsl(174, 5%, 64%), 0 6px 0 hsl(174, 5%, 62%),
    0 7px 0 hsl(174, 5%, 61%), 0 8px 0 hsl(174, 5%, 60%),
    0 0 5px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.2),
    0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2),
    0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.3);}

    .projectContainer{
        display: flex;
        height: 100vh;
        background: black;
    }


  
  `