import React from 'react'
import styled from 'styled-components';
import Sunset from '../../Assets/LanternSunset.jpg';
import ProjectCards from './ProjectCards';



const ProjectSection = () => {
    return (
        <ProjectStyle>
            <div className="titleContainer">
                <h1 className="title" >Projects</h1>
            </div>
            <ProjectCards/>
        </ProjectStyle>
    )
  };
  export default ProjectSection;




  const ProjectStyle = styled.div `

  .titleContainer{
    background-image: url(${Sunset});
    background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
max-height: 100%;
    height: 100vh;
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
    //SmortPhones
  @media only screen 
and (min-device-width : 200px) 
and (max-device-width : 720px) {
        .titleContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;}
    text-align: center;
  }

  .title{
    display: flex;
    font-size: 10rem;
  }

  
  `;