import React from 'react';
import './Contact.css';
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall } from "react-icons/md";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0add919f-49ba-4dd7-84c0-185faf5244a7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset(); // Reset form fields after submission
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>What are you looking at? Let's talk...</h1>
          <p>
            I'm currently available to take on new projects and ready for an interview. 
            Feel free to contact me — I would love to hear from you!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <span><CiMail /></span>
              <p>alishahmeeer88@gmail.com</p>
            </div>
            <div className="contact-detail">
              <span><IoLocationOutline /></span>
              <p>Lahore, Punjab, Pakistan</p>
            </div>
            <div className="contact-detail">
              <span><MdOutlineAddIcCall /></span>
              <p>+92-320-7858785</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="jane123@gmail.com" name="email" required />

          <label htmlFor="message">🙎🏻</label>
          <textarea name="message" rows="8" placeholder="Ask me..." required></textarea>

          <button className="contact-submit" type="submit">
            Send it
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
