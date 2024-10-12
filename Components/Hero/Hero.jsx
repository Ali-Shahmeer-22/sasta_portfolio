import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
import logo from './pro.jpg';

const Hero = () => {
  const texts = ["Software Engineer", "Frontend Developer"];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCurrentText(texts[(index + 1) % texts.length]);
    }, 1000); // Change text every 1 second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [index, texts]);

  return (
    <div id="home" className="hero">
      <img src={logo} alt="profile" />
      <h1>
        Hey, <span>my name is Ali Shahmeer</span>, 🎓Software Engineer based in Pakistan
      </h1>
      <p>{currentText === texts[0] ? "Software Engineer" : "Developer👨‍💻"}</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
