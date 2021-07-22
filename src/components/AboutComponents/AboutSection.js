import React from "react";
import Selfie from "../../Assets/HawaiianSelfie.jpg";
import styled from "styled-components";

const AboutMeStyle = styled.div`
  background: #000400;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .description {
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 200px;
    margin-left: 20%;
  }

  .HawaiianSelfie {
    height: 75%;
    width: 75%;
    margin-top: 1rem;
    margin-left: 20%;
  }

  button {
    width: 20%;
  }
`;


const downLoadFile= () => {
  window.location.href = {Resume}
}
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
