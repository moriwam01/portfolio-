import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Moriwam Mimi</span>
        </h1>
        <p>
          By profession a ReactJs developer. Currently a student of CSE at the
          World University of Bangladesh as well as a Front End developer in a
          startup company. Was a web development intern at 'Interactive Cares'.
          Highly interested in Machine Learning.
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/moriwam.01/"
            className="icon i-facebook"
            target="_blank"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://github.com/Moriwam"
            className="icon i-github"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/moriwam-ol/"
            className="icon i-linkedin"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
