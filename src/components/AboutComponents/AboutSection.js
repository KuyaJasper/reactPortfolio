import React from 'react'
import Selfie from '../../Assets/HawaiianSelfie.jpg'
import styled from 'styled-components'


const AboutMeStyle = styled.div `
background: blue;
display: flex;
align-items: center;
justify-content: center;
height:50vh;
padding-left: 30%;
padding-right: 30%;

.description{
    background:red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
}

.HawaiianSelfie{
height: 70%;
width: 70%;
margin-top: 1rem;
margin-left: 20%;

}

button{
    width: 50%;
}

`

const AboutSection = () => {

    return (
        <div>
            <AboutMeStyle>
            <div className="description">
                <h2>About Me</h2>
                <p>Contact us for any ideas</p>
                <button>View My Resume</button>
            </div>
            <div className="image">
                <img className="HawaiianSelfie" src={Selfie} alt="Pictue of Jasper in a Hawaiian shirt" />
            </div>
            </AboutMeStyle>
        </div>

    )
}

export default AboutSection;