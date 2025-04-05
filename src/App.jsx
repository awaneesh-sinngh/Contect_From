import React from 'react';
import { FaPhoneAlt, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import  './App.css';
function App(props) {
  return (
    <div id="contact" className="section-card contact-container App">
      <h2 className="contact-title">Let's Connect</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+911234567890" className="contact-text">+91 9191091910</a>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:your.email@example.com" className="contact-text">your.email@example.com</a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="contact-text">
            LinkedIn Profile
          </a>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="contact-text">
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;