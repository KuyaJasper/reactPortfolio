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
            years in the Hopitality business, I am looking to change careers.
            Currently attending a Full stack development coding bootcamp through
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
  background: #000400;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  color: whitesmoke;

  .description {
    background-color:RGBA(23, 23, 23); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10rem;
    border-radius: 1rem;
    min-width: 50%;
    
    
  }

  .image{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .HawaiianSelfie {
    height: 60%;
    width: 60%;
    margin-left: 20%;
    border-radius: 1rem;
  }

  p{
    padding-left: 1rem;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;




