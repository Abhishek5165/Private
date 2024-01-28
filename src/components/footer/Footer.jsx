import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../Content_Wrapper/ContentWrapper";

import "./style.scss";

const openGithub = () => {
  window.open("https://github.com/Abhishek5165");
};
const openInstagram = () => {
  window.open("https://www.instagram.com/abhishek_v13/");
};
const openTwitter = () => {
  window.open("https://twitter.com/Abhishek_13107");
};
const openLinkedin = () => {
  window.open("https://www.linkedin.com/in/abhishek-verma-600899247/");
};

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          "Welcome to our cinematic universe, where the magic of storytelling comes alive on the silver screen.
          At <p className="bold"> Abhishek's ReelReflections</p> we are your
          dedicated companions in the world of movies, bringing you the latest
          updates, reviews, and insider insights. Immerse yourself in the art of
          filmmaking as we guide you through a kaleidoscope of genres, from
          heartwarming dramas to pulse-pounding thrillers. Join us on this
          cinematic journey, where every frame tells a story and every plot
          twist keeps you on the edge of your seat.
          <br />
          <p className="bold">
            Lights, camera, action – let the show begin!"
          </p>
        </div>
        <div className="socialIcons">
          <span className="icon" onClick={openGithub}>
            <FaGithub />
          </span>
          <span className="icon" onClick={openInstagram}>
            <FaInstagram />
          </span>
          <span className="icon" onClick={openTwitter}>
            <FaTwitter />
          </span>
          <span className="icon" onClick={openLinkedin}>
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
