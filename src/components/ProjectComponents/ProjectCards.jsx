import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

//Project Images
import Pokemon from "../../Assets/projectPhotos/pokemonProject.png";
import DayPlanner from "../../Assets/projectPhotos/DayPlanner.jpg";
import TechBlog from "../../Assets/projectPhotos/TechBlog.png";
import Weather from "../../Assets/projectPhotos/weatherDashboard.png";
import CodeQuiz from "../../Assets/projectPhotos/CodeQuiz.png";
import MusicPlayer from "../../Assets/projectPhotos/Music Player.png";

const ProjectCards = () => {
  return (
    <CardStyle>
      <div className="projectContainer">
        {/* Project 1 */}
        <div className="projectCard">
          <a href="https://pokemon-deck-builder.herokuapp.com/">
            <img src={Pokemon} alt="Pokemon Project" />
          </a>
          <div className="description">
            <a
              href="https://github.com/thebadams/Pokemon-TCG-App"
              className="cardTitle"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                color="rgb(220,20,60)"
              />
              <span>Pokemon Deck Builder</span>
            </a>
            <p>Search through Pokemon Sets and collect your favorite ones!</p>
          </div>
        </div>

        {/* Project 2  */}

        <div className="projectCard">
          <a href="https://kuyajasper.github.io/Work-Day-Scheduler/">
            <img src={DayPlanner} alt="Day Planner Project" />
          </a>
          <div className="description">
            <a
              href="https://github.com/KuyaJasper/Work-Day-Scheduler"
              className="cardTitle"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                color="rgb(220,20,60)"
              />
              <span>Work Day Scheduler</span>
            </a>
            <p>Plan your week with an easy to use scheduler</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="projectCard">
          <a href="https://github.com/KuyaJasper/Tech-Blog">
            <img src={TechBlog} alt="Tech blog" />
          </a>
          <div className="description">
            <a
              href="https://kuyajasper-techblog.herokuapp.com/"
              className="cardTitle"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                color="rgb(220,20,60)"
              />
              <span>Tech Blog</span>
            </a>
            <p>
              Create your own user name and password to create or delete blogs.
            </p>
          </div>
        </div>

        {/* Project 4        */}
        <div className="projectCard">
          <a href="https://kuyajasper.github.io/weather-dashboard/">
            <img src={Weather} alt="Weather Dashboard Project" />
          </a>
          <div className="description">
            <a
              href="https://github.com/KuyaJasper/weather-dashboard"
              className="cardTitle"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                color="rgb(220,20,60)"
              />
              <span>Weather Dashboard</span>
            </a>
            <p>
              Using an external API, find the current weather for any city in
              the world, as well as a 5 day forecast
            </p>
          </div>
        </div>

        {/* Project 5 */}
        <div className="projectCard">
          <a href="https://kuyajasper.github.io/Code-Quiz/">
            <img src={CodeQuiz} alt="Code Quiz Project" />
          </a>
          <div className="description">
            <a
              href="https://github.com/KuyaJasper/Code-Quiz"
              className="cardTitle"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                color="rgb(220,20,60)"
              />
              <span>Code Quiz</span>
            </a>
            <p>
              Built using Vanilla Javascript and Bootstrap, a quiz that tracks
              the users progress with local storage.
            </p>
          </div>
        </div>

        {/* Project 6 */}
        <div className="projectCard">
          <a href="https://kuyajasper.github.io/react-music-player/">
            <img src={MusicPlayer} alt="Music Player Project" />
          </a>
          <div className="description">
            <a
              href="https://github.com/KuyaJasper/react-music-player"
              className="cardTitle"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                color="rgb(220,20,60)"
              />
              <span>Chill Zone Music Player</span>
            </a>
            <p>
              Built using React.js, a music player sourced with copy right free
              music
            </p>
          </div>
        </div>
      </div>
    </CardStyle>
  );
};

export default ProjectCards;

const CardStyle = styled.div`
  .cardTitle {
    text-decoration: none;
    color: whitesmoke;
    font-size:1.5rem;
    span {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    margin-bottom: 2rem;
  }

  .projectCard {
    background-color: RGBA(23, 23, 23);
    color: whitesmoke;
    border-radius: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 40%;
    height: 60%;
    text-align: center;
    margin-right: 1rem;
    margin-left: 1rem;
    img {
      height: 60%;
      width: 60%;
      border-radius: 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }

  .projectContainer {
    display: flex;
    background: black;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

//SmortPhones
  @media only screen 
and (min-device-width : 200px) 
and (max-device-width : 1024px) {
        .projectContainer {
    display: flex;
    background: black;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .projectCard{
    width: 80%;
    img{
      height: 90%;
      width: 90%;
    }
  }

}
`;
