import React, { useRef } from 'react';
import './Contact.css';
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';
import facebookicon from '../../assets/facebook-icon.png';
import twittericon from '../../assets/twitter.png';
import youtubeicon from '../../assets/youtube.png';
import instagramicon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
import { Link } from 'react-scroll';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Sending the form data to EmailJS
    emailjs
      .sendForm('service_v5ct9qr', 'template_d98q1js', form.current, {
        publicKey: 'nJtW-zMUgaABLwllo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email has been sent!');
          e.target.reset(); // Reset the form fields after submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contactpage">
      <div id="clients">
        <h1 className="contactpagetitle">My Projects</h1>
        <p className="clientdescription">
         Here are some mini Projects which I have worked on.
        </p>
        <div className="clientimgs">
          <img src={walmart} className="clientimg" alt="Walmart" />
          <img src={adobe} className="clientimg" alt="Adobe" />
          <img src={microsoft} className="clientimg" alt="Microsoft" />
          <img src={facebook} className="clientimg" alt="Facebook" />
        </div>
      </div>
      <div id="contactpage">
        <h1 className="contactpagetitle">Contact Me</h1>
        <span className="contactdescription">You can contact me using the form below</span>

        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
            required
          ></textarea>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
        <div className="links">
        <a href='https://leetcode.com/u/varsha_710/' target="_blank" rel="noopener noreferrer"> <img src={facebookicon} className="link" alt="Facebook" /></a> 
        <a href='https://github.com/varsha7104' target="_blank" rel="noopener noreferrer">  <img src={twittericon} className="link" alt="Twitter" /></a>
        <a href='https://www.linkedin.com/in/sri-hima-varsha-16888a26b/' target="_blank" rel="noopener noreferrer">  <img src={instagramicon} className="link" alt="Instagram" /></a>
        <a href='https://github.com/varsha7104' target="_blank" rel="noopener noreferrer"> <img src={youtubeicon} className="link" alt="YouTube" /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
