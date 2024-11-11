import React from "react";
import "./Hero.css";
import profile_img from "../../assets/omar-hero2.jpg";
import Resume from "../../assets/Omar_Samim.pdf";

function Hero() {
  return (
    <div id="home" className="hero">
      <img
        src={profile_img}
        style={{ borderRadius: "50%" }}
        alt="profile img"
      />
      <h1>
        <span>I'm Omar Samim</span> Frontend Developer
      </h1>
      <p>Frontend-end Web Developer, Freelancer, UI Developer</p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact" offset={50}>
            Connect with me
          </a>
        </div>
        <div className="hero-resume">
          {" "}
          <a href={Resume} target="_blank" rel="noreferrer" download={true}>
            My resume
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Hero;
