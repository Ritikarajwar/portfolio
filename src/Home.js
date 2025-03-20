import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaBriefcase } from 'react-icons/fa';  // Import icons
import profile from './Images/profile.JPG';
import resume from './Images/RITIKA RAJWAR (2).pdf';
import './CSS/Home.css';  // Import the CSS file for the styles

function Home() {
  return (
    <>
      <div id="wrapper">
        <div className="left-right">
          <img src={profile} alt="Ritika Rajwar" />
          
          <div className="right">
            <div className="name">
              <h1>Ritika Rajwar</h1>
              <p>Full Stack Developer</p>
            </div>

            <div className="buttons">
              <button>
                <a href={resume} download="Ritika_Resume">
                  <FaDownload /> Resume
                </a>
              </button>

              <button>
                <Link to="/hire-me">
                  <FaBriefcase /> Hire Me
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
