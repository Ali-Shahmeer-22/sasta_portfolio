import React from 'react';
import './About.css';
import logo from './pro.jpg';

const About = () => {
  return (
    <div id='about' className="about">
      {/* Title Section */}
      <div className="about-title">
        <h1>About Me</h1>
        {/* Optional decorative image */}
        {/* <img src={logo} alt="Decorative" /> */}
      </div>

      {/* About Section */}
      <div className="about-section">
        {/* Left Column (Image) */}
        <div className="about-left">
          <img src={logo} alt="Profile" />
        </div>

        {/* Right Column (Content) */}
        <div className="about-right">
          {/* About Paragraph */}
          <div className="about-para">
            <p>
              I am an experienced frontend developer with strong hands-on experience in the development field.
            </p>
            <p>
              My passion for development is reflected in the enthusiasm and dedication I bring to every project.
            </p>
          </div>

          {/* Skills Section */}
          <div className="about-skills">
            <h1>Skills</h1>
            {[
              'HTML & CSS', 'JavaScript', 'React Js', 'Redux Toolkit', 
              'Python', 'Machine Learning', 'PHP', 'Bootstrap 5'
            ].map((skill, index) => (
              <div key={index} className="about-skill">
                <p>{skill}</p>
                <hr />
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="about-achievments">
            <div className="about-achievment">
              <h1>Journey Continues</h1>
            </div>
            <hr />
            <div className="about-achievment">
              <h1>Projects</h1>
              <p>A good number of projects that I have worked on!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
