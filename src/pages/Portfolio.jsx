import React, { useState } from 'react';
import SideBar from '../components/SideBar.jsx';
import Card from '../components/Card.tsx';
import ScrollTo from '../components/ScrollTo.tsx';
import DiagonalSlideGrid from '../components/grid.jsx';
import { IoContrast } from "react-icons/io5";
import './MeStyle.css';

function Portfolio() {
  // unique darkmode button to change palette
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode
  };
  ;
  return (
    <div className={`portfolio-page ${darkMode ? 'dark-mode' : ''}`}>
      <div className='side-bar-column'>
        <section className='fixed-section'>
          <React.Fragment>
            <SideBar />
          </React.Fragment>
        </section>
      </div>
      <div className='main-column-A'>
        <section id='fixed-section'>
          <button id='dark-mode-button' onClick={toggleDarkMode}><IoContrast /></button>
          <h2>Luke McGovern</h2>
          <p>luke.mcgovern18@gmail.com</p>
          <p>Fullstack developer, Robotics enthusiast, Seeker of the cutting-edge</p>
          <ul className='scroll-list'>
            <ScrollTo ariaLabel='scroll to about me' id='about-scroll' className='scroll-to'
              content='About Me' sectionID='about-me' />
            <ScrollTo ariaLabel='scroll to work experience' id='work-exp-scroll' className='scroll-to'
              content='Work Experience' sectionID='work-experience' />
            <ScrollTo ariaLabel='scroll to languages and skills' id='skills-scroll' className='scroll-to'
              content='Languages & Skills' sectionID='languages-and-skills' />
            <ScrollTo ariaLabel='scroll to projects' id='projects-scroll' className='scroll-to'
              content='Projects' sectionID='projects' />
          </ul>
        </section>
        <div>
          <DiagonalSlideGrid />
        </div>
      </div>
      <div className='main-column-B'>
        <section id='about-me'>
          <h2>About Me</h2>
          <p>Since recently graduating from my hometown school, UVM, I've been passionately expanding my skillset to take on new challenges in our ever-evolving tech landscape. I am driven to continuously grow my coding expertise from a desire to solve complex problems.</p>
          <p>Recently, I have become proficient in robotics software architecture, and fullstack-developing accessible web applications.  Accomplishing these personal projects has vastly improved my ability to solve obstacles independently.</p>
        </section>
        <section id='languages-and-skills'>
          <h2>Languages & Skills</h2>
          <h4>Languages</h4>
          <p className='skills'>Python  |  C  |  C++  |  JavaScript  |  Swift  |  React  |  HTML  |  CSS  |  MySQL  |  R</p>
          <h4>Skills</h4>
          <p className='skills'>Fullstack Dev  |  FastAPI  |  Linux CLI  |  Git  |  ROS Robotics  |  IOS Dev  |  PC Building          </p>
        </section>
        <section id='projects'>
          <h2>Projects</h2>
          <p>Fullstack project:  <a href='http://localhost:3000/home'>Tarkov App</a></p>
          <ul>
            <li>Program autonomous navigation software for a drone in a virtual environment (using LiDAR, Odometry, and GPS)</li>
          </ul>
          <p>Autonomous Drone project: <a target="_blank" rel="noopener noreferrer" href='https://github.com/McGovern7/ardupilot-nav-scripts'>Ardupilot Script Nav</a></p>
        </section>
        <section id='work-experience'>
          <h2>Work Experience</h2>
          <Card ariaLabel='Work experience, Donahue and Associates' id='D-and-A-job'
            title={<p className='card-title'><b>Donahue and Associates</b> May 2023 - Aug 2023</p>}
            content={<ul className='card-content'>
              <li>Manage website and help implement new tech endeavors</li>
              <li>Teach realtors how to get aerial shots of properties with a drone</li>
              <li>Set up computer equipment when moving office spaces</li></ul>} />
          <Card ariaLabel='Work experience, Bordeaux Constuction' id='construction-job'
            title={<p className='card-title'><b>Bordeaux Construction</b> 2020 - Present</p>}
            content={<ul className='card-content'>
              <li>Renovate commercial and residential properties</li>
              <li>Assist contractor with full apartment renovations, at each stage of the process</li>
              <li>Flip large returns for property owners</li>
              <li>Build planning and communication skills dealing with potentially dangerous environments</li></ul>} />
        </section>
        <section id='class-work'>
          <h2>Notable Class Work</h2>
          <Card ariaLabel='Class, Web app development' id='web-dev-class'
            title={<p className='card-title'><b>Web App Development</b>Fall 2023</p>}
            content={<p className='card-content'>Develop an IOS app which streamlines flight scheduling between pilots. Uses Apple’s AirTag feature. 3 member semester long project. JSON data exchanges through a REST API</p>} />
          <Card ariaLabel='Class, data privacy' id='data-priv-class'
            title={<p className='card-title'><b>Data Privacy</b>Fall 2023</p>}
            content={<p className='card-content'>Solo Project-based Learning: Adding privacy mechanisms to create secure and accurate coordinate data. Plot data on a world map with GeoPandas.</p>} />
          <Card ariaLabel='Class, software engineering' id='software-eng-class'
            title={<p className='card-title'><b>Software Engineering</b>Spring 2023</p>}
            content={<p className='card-content'>Using Agile Development in a group of 4, code a simulated monopoly game using PyGame. Sharing code through GitLab for this semester-long project.</p>} />
          <Card ariaLabel='Class, cybersecurity' id='cybersecurity-class'
            title={<p className='card-title'><b>Cybersecurity Principles</b>Summer 2022</p>}
            content={<p className='card-content'>Infiltrate my professor’s (fake) online bank using cryptographic hashing to secure computer networks. Newfound understanding of network threat vectors allows me to build more secure software.</p>} />
        </section>
      </div>
    </div>
  )
}

export default Portfolio;