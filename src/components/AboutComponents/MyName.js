import React from 'react';
import styled from 'styled-components';
import Lantern from '../../Assets/LanternNight.jpg'

const NameStyle= styled.div`
background-image: url(${Lantern});
height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{
    color: whitesmoke;
    font-size: 50px;


}

.Jasper{
    display: flex;
    justify-content: center;
    font-family: "Kaushan Script", cursive;
  font-size: 200px;
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

`;

const MyName = () => {
    return (
        <div>
            <NameStyle>
        <h1>My name is</h1>
        <h2 className="Jasper">Jasper</h2>
        <br />
        <h1>I'm a Front End Developer</h1>
        </NameStyle>
    </div>
    )

}

export default MyName ;