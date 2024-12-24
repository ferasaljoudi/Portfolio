import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact</h1>
      <div className="contact-info">
        <p>
          <a href="https://www.google.com/maps/place/Regina,+SK,+Canada" target="_blank" rel="noopener noreferrer" title="My Location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Regina, SK, Canada
          </a>
        </p>
        <p>
          <a href="mailto:feras.aljoudi@gmail.com" title="My email">
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> feras.aljoudi@gmail.com
          </a>
        </p>
        <p>
          <a href="https://resume.aljoudi.ca" target="_blank" rel="noopener noreferrer" title="My Resume">
            <FontAwesomeIcon icon={faIdCard} className="icon" />Virtual Resume</a>
        </p>
        <p>
          <a href="https://ca.linkedin.com/in/feras-aljoudi-539727242" target="_blank" rel="noopener noreferrer" title="My LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="icon" /> LinkedIn
          </a>
        </p>
        <p>
          <a href="https://github.com/ferasaljoudi" target="_blank" rel="noopener noreferrer" title="My GitHub">
            <FontAwesomeIcon icon={faGithub} className="icon" /> GitHub
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
