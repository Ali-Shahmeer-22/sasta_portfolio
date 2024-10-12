import React from "react";
import "./Footer.css";
import logo from "./logo.png";
import { FaUserEdit } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={logo} alt="" />
            <p>
              As a front-end developer and graduated software engineer, I
              specialize in crafting seamless and engaging user experiences.
              With a passion for innovation and a strong foundation in web
              technologies, I aim to bring ideas to life through code.
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <span>
                <FaUserEdit />
              </span>
              <input type="text " placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            &copy; Ali Shahmeer.All rights reserved
          </p>
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy</p>
          <p>Connect with me😊</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
