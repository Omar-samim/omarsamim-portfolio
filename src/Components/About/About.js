import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-para">
            <p>
              I am a passionate and skilled <span>Frontend Web Developer</span>{" "}
              with extensive experience in transforming ideas into engaging,
              user-centered web experiences. Specializing in modern frontend
              frameworks like <span>React</span>, I’m adept at creating
              responsive, high-performance applications that meet user needs and
              business goals.
            </p>
            <p>
              With a strong foundation in <span>HTML,</span> <span>CSS,</span>{" "}
              <span>JavaScript,</span> and <span>Bootstrap</span>, I focus on
              delivering clean, maintainable code and visually appealing
              interfaces. My recent projects include complex platforms such as
              e-commerce sites, game hubs, and multi-page web applications,
              where I've consistently implemented best practices for performance
              and accessibility.
            </p>
            <p>
              I prioritize performance, accessibility, and user experience in
              every project, from e-commerce sites to interactive platforms. My
              goal is to build web experiences that are not only functional but
              also visually appealing and intuitive.
            </p>
            <p>
              {" "}
              Always eager to learn and grow, I’m open to new opportunities and
              collaborations. Let’s create something amazing together!
            </p>
          </div>
        </div>
        <div className="about-skills">
          <h3
            style={{ color: "orange", fontSize: "3rem" }}
            className="about-skills-title"
          >
            Skills
          </h3>
          <div className="about-skill-icon">
            <i className="devicon-html5-plain-wordmark"></i>
            <i className="devicon-css3-plain-wordmark"></i>
            <i className="devicon-javascript-plain colored"></i>

            <i class="devicon-bootstrap-plain-wordmark colored"></i>

            <i class="devicon-sass-original colored"></i>

            <i class="devicon-react-original-wordmark colored"></i>

            <i class="devicon-nodejs-plain-wordmark colored"></i>
            <i class="devicon-express-original-wordmark"></i>

            <i class="devicon-mongodb-plain-wordmark colored"></i>

            <i class="devicon-mongoose-original-wordmark colored"></i>

            <i class="devicon-git-plain-wordmark colored"></i>

            <i class="devicon-github-original-wordmark"></i>

            <i class="devicon-mysql-plain-wordmark colored"></i>

            <i class="devicon-npm-original-wordmark colored"></i>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>8+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </>
  );
};

export default About;
