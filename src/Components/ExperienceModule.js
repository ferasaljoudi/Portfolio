import React, { useState, useEffect } from 'react';
import './ExperienceModule.css';

const ExperienceModule = ({ experiences }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [displayedTexts, setDisplayedTexts] = useState(
        experiences.map(() => [])
    );
    const [displayedTechnologies, setDisplayedTechnologies] = useState(
        experiences.map(() => [])
    );
    const [animationIndexes, setAnimationIndexes] = useState(
        experiences.map(() => 0)
    );
    const [techAnimationIndexes, setTechAnimationIndexes] = useState(
        experiences.map(() => 0)
    );
    const [hasAnimated, setHasAnimated] = useState(
        experiences.map(() => false)
    );
    const [techHasAnimated, setTechHasAnimated] = useState(
        experiences.map(() => false)
    );

    const handleToggle = (index) => {
        setActiveIndex(index);
        if (!hasAnimated[index]) {
            setDisplayedTexts((prevTexts) => {
                const updatedTexts = [...prevTexts];
                updatedTexts[index] = [];
                return updatedTexts;
            });
            setAnimationIndexes((prevIndexes) => {
                const updatedIndexes = [...prevIndexes];
                updatedIndexes[index] = 0;
                return updatedIndexes;
            });
        }

        if (!techHasAnimated[index]) {
            setDisplayedTechnologies((prevTechs) => {
                const updatedTechs = [...prevTechs];
                updatedTechs[index] = [];
                return updatedTechs;
            });
            setTechAnimationIndexes((prevIndexes) => {
                const updatedIndexes = [...prevIndexes];
                updatedIndexes[index] = 0;
                return updatedIndexes;
            });
        }
    };

    useEffect(() => {
        const words = experiences[activeIndex].description.split(' ');
        const technologies = experiences[activeIndex].technologies;

        if (!hasAnimated[activeIndex] && animationIndexes[activeIndex] < words.length) {
            const timer = setTimeout(() => {
                setDisplayedTexts((prevTexts) => {
                    const updatedTexts = [...prevTexts];
                    updatedTexts[activeIndex] = [
                        ...updatedTexts[activeIndex],
                        <span key={animationIndexes[activeIndex]}>{words[animationIndexes[activeIndex]]} </span>,
                    ];
                    return updatedTexts;
                });
                setAnimationIndexes((prevIndexes) => {
                    const updatedIndexes = [...prevIndexes];
                    updatedIndexes[activeIndex] += 1;
                    return updatedIndexes;
                });
            }, 200);
            return () => clearTimeout(timer);
        }

        if (animationIndexes[activeIndex] === words.length && !hasAnimated[activeIndex]) {
            setHasAnimated((prevAnimated) => {
                const updatedAnimated = [...prevAnimated];
                updatedAnimated[activeIndex] = true;
                return updatedAnimated;
            });
        }

        if (hasAnimated[activeIndex] && !techHasAnimated[activeIndex] && techAnimationIndexes[activeIndex] < technologies.length) {
            const techTimer = setTimeout(() => {
                setDisplayedTechnologies((prevTechs) => {
                    const updatedTechs = [...prevTechs];
                    updatedTechs[activeIndex] = [
                        ...updatedTechs[activeIndex],
                        <span key={techAnimationIndexes[activeIndex]}>{technologies[techAnimationIndexes[activeIndex]]}{techAnimationIndexes[activeIndex] < technologies.length - 1 ? ', ' : ''}</span>,
                    ];
                    return updatedTechs;
                });
                setTechAnimationIndexes((prevIndexes) => {
                    const updatedIndexes = [...prevIndexes];
                    updatedIndexes[activeIndex] += 1;
                    return updatedIndexes;
                });
            }, 200);
            return () => clearTimeout(techTimer);
        }

        if (techAnimationIndexes[activeIndex] === technologies.length && !techHasAnimated[activeIndex]) {
            setTechHasAnimated((prevAnimated) => {
                const updatedAnimated = [...prevAnimated];
                updatedAnimated[activeIndex] = true;
                return updatedAnimated;
            });
        }
    }, [animationIndexes, techAnimationIndexes, activeIndex, experiences, hasAnimated, techHasAnimated]);

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
                <p className="description">
                    <strong>Description:</strong> {displayedTexts[activeIndex]}
                </p>
                <p className="technologies-used">
                    <strong>Skills and Tools Used:</strong> {displayedTechnologies[activeIndex]}
                </p>
            </div>
        </div>
    );
};

export default ExperienceModule;
