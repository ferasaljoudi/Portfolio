import React, { useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { TbSortDescending, TbSortAscending } from "react-icons/tb";
import './HorizontalPanel.css';

const projects = [
    {
        name: "Movie Theatre",
        link: "https://github.com/ferasaljoudi/MovieTheatre",
        description: "Developed a movie subscription platform with user authentication, movie details via API, and admin management capabilities.",
        hostedLink: "https://movie-theatre.aljoudi.ca/",
    },
    {
        name: "Top Languages Service",
        link: "https://github.com/ferasaljoudi/TopLanguages",
        description: "Developed a web service that generates a language usage image for GitHub users, customizable through API parameters.",
    },
    {
        name: "BMI Calculator",
        link: "https://github.com/ferasaljoudi/BMI-Calculator",
        description: "The 'BMI Calculator' is an application built using Flutter. This app allows users to easily calculate their Body Mass Index (BMI) by entering their height and weight.",
        hostedLink: "https://bmi-calculator.aljoudi.ca/",
    },
    {
        name: "FIA-Local-Service-Finder",
        link: "https://github.com/ferasaljoudi/FIA-Local-Service-Finder",
        description: "Collaboratively created a platform that boosts local business visibility by allowing users to list and request services, addressing competition and SEO challenges.",
        hostedLink: "https://fia.csproject.org/",
    },
    {
        name: "Aljoudi Parking System",
        link: "https://github.com/ferasaljoudi/AljoudiParkingSystem",
        description: "Developed a smart parking system using STM32F103RB microcontroller, designed to automate vehicle management and enhance parking efficiency and safety.",
    },
    {
        name: "Driver Drowsiness Detection",
        link: "https://github.com/ferasaljoudi/DriverDrowsinessDetection",
        description: "Developed a system that enhances road safety by detecting driver fatigue through image analysis using machine learning and deep learning techniques.",
        hostedLink: "#",
    },
    {
        name: "Vue Resume",
        link: "https://github.com/ferasaljoudi/VirtualResume-Vue",
        description: "Developed a virtual resume using Vue.js to showcase my skills and expertise in the framework, and deployed on RPi5.",
        hostedLink: "https://resume.aljoudi.ca/",
    },
    {
        name: "React Resume",
        link: "https://github.com/ferasaljoudi/FerasResume",
        description: "Created an interactive online resume using React, Bootstrap, and Chakra UI, showcasing skills and projects, and deployed on GitHub Pages.",
        hostedLink: "https://ferasaljoudi.github.io/FerasResume/",
    },
    {
        name: "Class Schedules",
        link: "https://github.com/ferasaljoudi/ClassesSchedule",
        description: "Designed a synchronous circuit for class schedules using VHDL, Vivado, and the BASYS-3 FPGA board, meeting specific complexity requirements.",
    },
    {
        name: "Simon Game",
        link: "https://github.com/ferasaljoudi/SimonGame",
        description: "Developed a Simon game on an STM32F103 Nucleo Board, featuring LED sequences, push-button interactions, and 10 levels of increasing difficulty.",
    },
    {
        name: "Sophia Portfolio",
        link: "https://github.com/ferasaljoudi/SophiaPortfolio",
        description: "Built a WordPress website for a job-hunting persona created in Figma, as part of a lab assignment for ENSE271.",
        hostedLink: "https://sophia-portfolio.aljoudi.ca/",
    },
    {
        name: "SKCDA Webpage Design",
        link: "https://github.com/ferasaljoudi/SKCDA---Webpage---Design",
        description: "Collaboratively designed and developed a website for the Saskatchewan Career Development Association, supporting career development, networking, and professional growth for members.",
        hostedLink: "https://www.skcda.ca/",
    },
];

const HorizontalPanel = () => {
    const scrollRef = useRef(null);
    const [activeProject, setActiveProject] = useState(0);

    const scrollLeft = () => {
        if (activeProject > 0) {
            setActiveProject((prev) => prev - 1);
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (activeProject < projects.length - 1) {
            setActiveProject((prev) => prev + 1);
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleClick = (index) => {
        setActiveProject(index);
    };

    return (
        <div className="panel-container">
            <div className="projects-wrapper" ref={scrollRef}>
                <div className="by-date">
                    <div className="project-name">Descending by Date</div>
                    <div><TbSortDescending size={55} /></div>
                </div>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project ${activeProject === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        <div className="project-name">{project.name}</div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-link">
                            <FaExternalLinkAlt />
                        </a>
                        <div className="project-description">{project.description}</div>
                        {project.hostedLink && (
                            <div className="project-description">
                                The application is hosted at: <a href={project.hostedLink} target="_blank" rel="noopener noreferrer">{project.hostedLink}</a>
                            </div>
                        )}
                        <div className="project-description">To view full details press the external link icon.</div>
                    </div>
                ))}
                <div className="by-date">
                    <div className="project-name">Ascending by Date</div>
                    <div><TbSortAscending size={55} /></div>
                </div>
            </div>
            <div className="scroll-btn-container">
                <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
                <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
            </div>
        </div>
    );
};

export default HorizontalPanel;
