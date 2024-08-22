import React, { useState } from 'react';
import './ExperienceModule.css';

const ExperienceModule = ({ experiences }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="experience-module">
        <div className="company-list">
            {experiences.map((experience, index) => (
            <h3
                key={index}
                className={`company-name ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleToggle(index)}
            >
                {experience.companyName}
            </h3>
            ))}
        </div>
        <div className="details">
            <p className="date-range">{experiences[activeIndex].dateRange}</p>
            <p className="description">{experiences[activeIndex].description}</p>
            <ul className="technologies">
            {experiences[activeIndex].technologies.map((tech, techIndex) => (
                <li key={techIndex}>+ {tech}</li>
            ))}
            </ul>
        </div>
        </div>
    );
};

export default ExperienceModule;
