import React from "react";
import styled from "styled-components";
import Sunrise from "../../Assets/LanternSunrise.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faGlobeAmericas,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <ContactStyle>
      <div className="titleContainer">
        <h1 className="title">Contact Info</h1>
      </div>
      <div className="contactContainer">
        <h1>Let's Connect!</h1>
        <div className="contactInfo">
        <h4>You Can Reach Me At:</h4>
          {/* First Column */}
          <ul className="social">
            <li>
              <FontAwesomeIcon icon={faUser} size="3x" color="whitesmoke" />
              <span>Jasper Abarquez</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faMobileAlt}
                size="3x"
                color="whitesmoke"
              />
              <span>(908)-472-2099</span>
            </li>
            <li>
              <a
                href="mailto:abarquezj1@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="3x"
                  color="whitesmoke"
                />
                <span>abarquezj1@gmail.com</span>

              </a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGlobeAmericas}
                size="3x"
                color="whitesmoke"
              />
              <span>Edison, New Jersey</span>
            </li>

            {/* SecondColumn */}
          </ul>
          <ul className="social2">
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/jasper-abarquez/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" color="blue" />
              </a>
              <span>LinkedIn</span>
            </li>
            <li>
              <a
                className="github"
                href="https://github.com/KuyaJasper"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="3x"
                  color="rgb(220,20,60)"
                />
              </a>
              <span>KuyaJasper</span>
            </li>
            <li>
              <a
                className="github"
                href="https://drive.google.com/file/d/1FqT6SwR3VUuAjfcKzZZHwo-WnJyAXLPz/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFile} size="3x" color="whitesmoke" />
                <span>View Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ContactStyle>
  );
};
export default ContactSection;

const ContactStyle = styled.div`
  color: whitesmoke;

  .linkStyle {
    padding-left: 1rem;
  }
  a {
    text-decoration: none;
    color: whitesmoke;
  }
  span {
    padding: 1rem;
  }
  ul {
    list-style: none;
  }
  li {
    padding-top: 1rem;
  }
  .titleContainer {
    background-image: url(${Sunrise});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    max-height: 100%;
  }
  .title {
    display: flex;
    justify-content: flex-end;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
      0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.3);
  }

  .contactContainer {
    height: 100vh;
    display: flex;
    background: black;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h1{font-size: 10vh;
  }
  }
  .contactInfo {
    background-color: RGBA(23, 23, 23);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 60%;
    height: 70%;
  }


  //SmortPhones
  @media only screen 
and (min-device-width : 200px) 
and (max-device-width : 720px) {
        .contactInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;}
    text-align: center;
  }

  .title{
    display: flex;
    font-size: 5rem;
  }
`;
