import React, { useRef } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './HorizontalPanel.css';

const HorizontalPanel = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="panel-container">
        <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
        <div className="projects-wrapper" ref={scrollRef}>
            <div className="project">
                <div className="project-name">Movie Theatre</div>
                <a href="https://github.com/ferasaljoudi/MovieTheatre" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                </a>
                <div className="project-description">Developed a movie subscription platform with user authentication, movie details via API, and admin management capabilities.</div>
                <div className="project-description">The platform is hosted at: <a href="https://movie-theatre.aljoudi.ca/" target="_blank" rel="noopener noreferrer" >https://movie-theatre.aljoudi.ca/</a></div>
                <div className="project-description">To view full details press the external link icon.</div>
            </div>
            <div className="project">
                <div className="project-name">Top Languages Service</div>
                <a href="https://github.com/ferasaljoudi/TopLanguages" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                </a>
                <div className="project-description">Developed a web service that generates a language usage image for GitHub users, customizable through API parameters.</div>
                <div className="project-description">To view full details press the external link icon.</div>
            </div>
            <div className="project">
                <div className="project-name">BMI Calculator</div>
                <a href="https://github.com/ferasaljoudi/BMI-Calculator" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                </a>
                <div className="project-description">The "BMI Calculator" is a application built using Flutter. This app allows users to easily calculate their Body Mass Index (BMI) by entering their height and weight.</div>
                <div className="project-description">The application is hosted at: <a href="https://bmi-calculator.aljoudi.ca/" target="_blank" rel="noopener noreferrer" >https://bmi-calculator.aljoudi.ca/</a></div>
                <div className="project-description">To view full details press the external link icon.</div>
            </div>
            <div className="project">
                <div className="project-name">FIA-Local-Service-Finder</div>
                <a href="https://github.com/ferasaljoudi/FIA-Local-Service-Finder" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                </a>
                <div className="project-description">Collaboratively created a platform that boosts local business visibility by allowing users to list and request services, addressing competition and SEO challenges.</div>
                <div className="project-description">The application is hosted at: <a href="https://fia.csproject.org/" target="_blank" rel="noopener noreferrer" >https://fia.csproject.org/</a></div>
                <div className="project-description">To view full details press the external link icon.</div>
            </div>
            <div className="project">
                <div className="project-name">Aljoudi Parking System</div>
                <a href="https://github.com/ferasaljoudi/AljoudiParkingSystem" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                </a>
                <div className="project-description">Developed a smart parking system using STM32F103RB microcontroller, designed to automate vehicle management and enhance parking efficiency and safety.</div>
                <div className="project-description">To view full details press the external link icon.</div>
            </div>

            <div className="project">
                <div className="project-name">Driver Drowsiness Detection</div>
                <a href="https://github.com/ferasaljoudi/DriverDrowsinessDetection" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                </a>
                <div className="project-description">Developed a system that enhances road safety by detecting driver fatigue through image analysis using machine learning and deep learning techniques.</div>
                <div className="project-description">To view full details press the external link icon.</div>
            </div>
            <div className="project">
                <div className="project-name">React Resume</div>
                <a href="https://github.com/ferasaljoudi/FerasResume" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                </a>
                <div className="project-description">Created an interactive online resume using React, Bootstrap, and Chakra UI, showcasing skills and projects, and deployed on GitHub Pages.</div>
                <div className="project-description">The resume is hosted at: <a href="https://ferasaljoudi.github.io/FerasResume/" target="_blank" rel="noopener noreferrer" >https://ferasaljoudi.github.io/FerasResume/</a></div>
                <div className="project-description">To view full details press the external link icon.</div>
            </div>
            <div className="project">
                <div className="project-name">Vue Resume</div>
                <a href="https://github.com/ferasaljoudi/VirtualResume-Vue" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                </a>
                <div className="project-description">Developed a virtual resume using Vue.js to showcase my skills and expertise in the framework, and deployed on RPi5.</div>
                <div className="project-description">The resume is hosted at: <a href="https://resume.aljoudi.ca/" target="_blank" rel="noopener noreferrer" >https://resume.aljoudi.ca/</a></div>
                <div className="project-description">To view full details press the external link icon.</div>
            </div>
            <div className="project">
                <div className="project-name">Class Schedules</div>
                <a href="https://github.com/ferasaljoudi/ClassesSchedule" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                </a>
                <div className="project-description">Designed a synchronous circuit for class schedules using VHDL, Vivado, and the BASYS-3 FPGA board, meeting specific complexity requirements.</div>
                <div className="project-description">To view full details press the external link icon.</div>
            </div>
            <div className="project">
                <div className="project-name">Simon Game</div>
                <a href="https://github.com/ferasaljoudi/SimonGame" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                </a>
                <div className="project-description">Developed a Simon game on an STM32F103 Nucleo Board, featuring LED sequences, push-button interactions, and 10 levels of increasing difficulty.</div>
                <div className="project-description">To view full details press the external link icon.</div>
            </div>
            <div className="project">
                <div className="project-name">Sophia Portfolio</div>
                <a href="https://github.com/ferasaljoudi/SophiaPortfolio" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                </a>
                <div className="project-description">Built a WordPress website for a job-hunting persona created in Figma, as part of a lab assignment for ENSE271.</div>
                <div className="project-description">The website is hosted at: <a href="https://sophia-portfolio.aljoudi.ca/" target="_blank" rel="noopener noreferrer" >https://sophia-portfolio.aljoudi.ca/</a></div>
                <div className="project-description">To view full details press the external link icon.</div>
            </div>
            <div className="project">
                <div className="project-name">SKCDA Webpage Design</div>
                <a href="https://github.com/ferasaljoudi/SKCDA---Webpage---Design" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                </a>
                <div className="project-description">Collaboratively designed and developed a website for the Saskatchewan Career Development Association, supporting career development, networking, and professional growth for members.</div>
                <div className="project-description">The website is hosted at: <a href="https://www.skcda.ca/" target="_blank" rel="noopener noreferrer" >https://www.skcda.ca/</a></div>
                <div className="project-description">To view full details press the external link icon.</div>
            </div>
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
        </div>
    );
};

export default HorizontalPanel;
