import React from "react";
import Selfie from "../../Assets/HawaiianSelfie.jpg";
import styled from "styled-components";


const AboutSection = () => {
  return (
    <div>
      <AboutMeStyle>
        <div className="description">
          <h2>About Me</h2>
          <p>
            I am a 30 year old currently living in New Jersey. With over 10
            years of experience in restaurant hospitality. I am looking to change careers.
            Recently finished a Full stack web development bootcamp through
            Rutgers University.
          </p>
        </div>
        <div className="image">
          <img
            className="HawaiianSelfie"
            src={Selfie}
            alt="Pictue of Jasper in a Hawaiian shirt"
          />
        </div>
      </AboutMeStyle>
    </div>
  );
};

export default AboutSection;

const AboutMeStyle = styled.div`
  background: rgb(0,4,0);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  color: whitesmoke;
  padding-left: 10%;

  .description {
    background-color:RGBA(23, 23, 23); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    min-width: 50%;
    
    
  }

  .image{
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    
  }
  .HawaiianSelfie {
    height: 60%;
    width: 60%;
    border-radius: 1rem;
  }

  p{
    padding-left: 1rem;
    display: flex;
    align-items: center;
    text-align: center;
  }


  @media only screen 
and (min-device-width : 200px) 
and (max-device-width : 1024px) {
display: flex;
justify-content: center;
flex-wrap: wrap;
flex-direction: inherit;
align-items: center;
height: 100%;
padding-left: 0%;

.description{
  flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 2rem;
width: 60%;
}

.image{
  display: flex;
justify-content: center;
align-items: center;
margin-left: 0;

}

}
`;




