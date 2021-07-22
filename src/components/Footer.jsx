import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
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
          <li>
            <FontAwesomeIcon icon={faMobileAlt} size="2x" color="whitesmoke" />{" "}
            (908)472-2099
          </li>
          <li>
            <a
              href="mailto:abarquezj1@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" color="whitesmoke" />{" "}
              abarquezj1@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="socialContainer">
        <ul className="social">
          <li>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/jasper-abarquez/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" color="blue" />
            </a>
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
          </li>
        </ul>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.div`
  background-color: RGBA(23, 23, 23);
  display: flex;
  justify-content: flex-end;
  color: whitesmoke;
  width: 100%;

  h4 {
    font-family: "Kaushan Script", cursive;

  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  li {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
  }
  a {
    text-decoration: none;
    color: whitesmoke;
  }

  .navigation {
    margin-left: 1rem;
    display: flex;
    align-items: center;
  }

  .contact {
    margin-left: 1rem;
    display: flex;
    align-items: center;
  }
  .social {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;
