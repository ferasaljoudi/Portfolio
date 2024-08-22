import React from 'react';
import './InfoTicker.css';

const InfoTicker = () => {
    return (
        <div className="ticker-container">
            <div className="ticker-text">
            This Portfolio, built with React, showcases my skills and provides a brief introduction to who I am. For a detailed resume, please visit: <a href="https://resume.aljoudi.ca" target="_blank" rel="noopener noreferrer">https://resume.aljoudi.ca.</a>
            </div>
        </div>
    );
};

export default InfoTicker;