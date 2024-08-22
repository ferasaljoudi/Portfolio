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
            <p className="technologies-used">
                <strong>Skills and Tools Used:</strong> {experiences[activeIndex].technologies.join(', ').replace(/, ([^,]*)$/, ' and $1')}
            </p>
        </div>
        </div>
    );
};

export default ExperienceModule;
