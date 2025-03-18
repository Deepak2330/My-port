import React from "react";
import { RiLinkedinBoxFill, RiInstagramFill, RiGithubFill, RiPhoneFill, RiMailFill } from "react-icons/ri";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="contact__title">Get In Touch</h2>

      <div className="contact__container">
        <div className="contact__buttons">
          <a href="https://www.linkedin.com/in/deepak-m-9370261b4" target="_blank" rel="noreferrer" className="contact__button">
            <RiLinkedinBoxFill className="contact__icon" /> LinkedIn
          </a>
          
          <a href="https://www.instagram.com/mr__deepak__m" target="_blank" rel="noreferrer" className="contact__button">
            <RiInstagramFill className="contact__icon" /> Instagram
          </a>
          
          <a href="https://github.com/Deepak2330" target="_blank" rel="noreferrer" className="contact__button">
            <RiGithubFill className="contact__icon" /> GitHub
          </a>
          
          <a href="tel:+1234567890" className="contact__button">
            <RiPhoneFill className="contact__icon" /> +91 6362893660
          </a>
          
          <a href="mailto:9901845901dk@gmail.com" className="contact__button">
            <RiMailFill className="contact__icon" /> 9901845901dk@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
