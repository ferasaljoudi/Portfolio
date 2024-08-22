import React from 'react';
import './Experience.css';
import ExperienceModule from './ExperienceModule';

const experiences = [
  {
    companyName: "Bioinformatic Programmer",
    dateRange: "Sep. 2022-Apr. 2023",
    description: "During my coop term with Agriculture & Agri-Food Canada, I gained hands-on experience in bioinformatics, working remotely from Ontario. This role allowed me to apply my software engineering skills to real-world problems, particularly in genetic variant identification and advanced data analysis. It was a valuable experience that closely aligned with my studies and helped me enhance my programming skills and understanding of data visualization tools like Gnuplot and version control with Git.",
    technologies: ["Python (Django & Flask)", "React (Redux & Hooks)"]
  },
  {
    companyName: "Electrical Engineering Intern",
    dateRange: "Jan. 2022-Aug. 2022",
    description: "During my coop term as an Electrical Engineering Intern at SaskPower in Regina, I gained valuable experience in both office and field settings. This role provided me with practical insights into project management, vendor communication, and hands-on electrical equipment handling. The combination of preparing documents, coordinating with contractors, and engaging in fieldwork allowed me to apply my engineering skills in real-world scenarios, making it a well-rounded and enriching experience related to my studies.",
    technologies: ["Python (Django & Flask)", "React (Redux & Hooks)"]
  },
  {
    companyName: "Store Manager",
    dateRange: "Nov. 2018-Dec. 2022",
    description: "During my time as a Store Manager at YM Inc Urban Planet in Regina, I developed strong leadership and business management skills. This role involved managing staff schedules, meeting sales targets, analyzing business performance, and ensuring customer satisfaction. It provided me with valuable experience in team leadership, sales analysis, and customer service, all of which have been instrumental in my professional growth outside of my academic journey.",
    technologies: ["Python (Django & Flask)", "React (Redux & Hooks)"]
  },
  {
    companyName: "Project Coordinator",
    dateRange: "Jan. 2018-May 2018",
    description: "During my time as a Project Coordinator at ZGEMI in Regina, I was responsible for supervising laborers, ensuring task completion, and measuring areas for project accuracy. I also managed employee hours and wages using Microsoft Excel, which honed my skills in project management and reporting. This experience provided me with practical knowledge in managing on-site operations and creating detailed reports, contributing to my overall professional development outside of my academic background.",
    technologies: ["Python (Django & Flask)", "React (Redux & Hooks)"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h1>Experience</h1>
      <div className="the-module">
        <ExperienceModule experiences={experiences} />
      </div>
    
    </section>
  );
};

export default Experience;
