import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact</h1>
      <div className="contact-info">
        <p>
          <a href="https://www.google.com/maps/place/Regina,+SK,+Canada" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Regina, SK, Canada
          </a>
        </p>
        <p>
          <a href="mailto:feras.aljoudi@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> feras.aljoudi@gmail.com
          </a>
        </p>
        <p>
          <a href="tel:+13062091033">
            <FontAwesomeIcon icon={faPhone} className="icon" /> 306-209-1033
          </a>
        </p>
        <p>
          <a href="https://ca.linkedin.com/in/feras-aljoudi-539727242" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" /> LinkedIn
          </a>
        </p>
        <p>
          <a href="https://github.com/ferasaljoudi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" /> Github
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
