import React, { useState } from 'react';
import './About.css';
import FerasAljoudi from '../Assets/FerasAljoudi.jpg';

const About = () => {
    const [transform, setTransform] = useState('none');

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        const rotateX = ((y / rect.height) - 0.5) * 30;
        const rotateY = ((x / rect.width) - 0.5) * -30;
    
        setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    const handleMouseLeave = () => {
        setTransform('none');
    };

return (
    <section id="about" className="about-section">
        <h1>About Me</h1>
        <div className="about-content">
            <div className="about-image">
                <img
                src={FerasAljoudi}
                alt="Feras Aljoudi"
                style={{ transform  }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                />
            </div>
            <div className="about-details">
                <h3>I'm Feras Aljoudi</h3>
                <p>A passionate software engineering student at the University of Regina, currently in my final year and eagerly anticipating my graduation in April 2025. Throughout my journey in software engineering, I’ve developed a deep love for coding and problem-solving, always striving to enhance my skills and tackle new challenges.</p>
                <p>Currently, I’m focused on advanced software engineering projects, applying everything I’ve learned and pushing my technical boundaries as I complete my degree. When I’m not coding, you’ll often find me behind a camera, capturing the world with the same attention to detail that I bring to my coding.</p>
                <ul className="about-info">
                    <li>Address: Regina, SK, Canada</li>
                    <li><a href="mailto:feras.aljoudi@gmail.com">feras.aljoudi@gmail.com</a></li>
                    <li>Nationality: Arab</li>
                    <li><a href="https://ferasaljoudi.github.io/FerasResume/" target="_blank" rel="noopener noreferrer">React Resume</a></li>
                    <li>Spoken Languages: English, Arabic</li>
                    <li><a href="https://github.com/ferasaljoudi" target="_blank" rel="noopener noreferrer">Vue Resume</a></li>
                </ul>
            </div>
        </div>
    </section>
);
};

export default About;
