import React from 'react';
import './CSS/Qualification.css'; // Import the CSS file

const Qualification = () => {
  return (
    <div id='Qualification' className='qualification-wrapper'>
      <div className='qualificationsContainer'>
        <h1 className="qualification-title">Qualifications</h1>
        
        <section id='education' className='qualification-section education'>
          <h2 className="qualification-heading">Educational Background</h2>
          <ul className="qualification-list">
            <li className="qualification-item">
              <strong>B.Tech in Information Technology</strong><br />
              Arya College of Engineering, 2021-Present
            </li>
            <li className="qualification-item">
              <strong>High School</strong><br />
              Air Force School, Jaipur, 2021
            </li>
          </ul>
        </section>
        
        <section id='skills' className='qualification-section skills'>
          <h2 className="qualification-heading">Technical Skills</h2>
          <ul className="qualification-list">
            <li className="qualification-item"><strong>Languages:</strong> JavaScript, Python, Java (core)</li>
            <li className="qualification-item"><strong>Front-End:</strong> HTML, CSS, React.js</li>
            <li className="qualification-item"><strong>Back-End:</strong> Node.js, Express.js, Python, Django</li>
            <li className="qualification-item"><strong>Databases:</strong> MongoDB, MySQL</li>
            <li className="qualification-item"><strong>Tools & Technologies:</strong> Postman, Cloudinary, Firebase</li>
          </ul>
        </section>
        
        <section id='experience' className='qualification-section experience'>
          <h2 className="qualification-heading">Professional Experience</h2>
          <ul className="qualification-list">
            <li className="qualification-item">
              <strong>Backend Developer Intern</strong><br />
              Full Stack Learning, August 2023 - December 2023<br />
              - Worked on the development of web applications, leveraging modern web technologies such as Node.js for back-end services.<br />
              - Designed and implemented RESTful APIs using Node.js and Express, which communicated with MongoDB for database operations.<br />
              - Collaborated with cross-functional teams to ensure seamless integration of back-end components.<br />
              - Participated in code reviews, debugging, and performance optimization to enhance application functionality and user experience.<br />
              - Implemented user authentication and authorization features with Firebase, ensuring secure access to application resources.<br />
              - Utilized Cloudinary for image management and Postman for API testing and documentation.<br />
            </li>
          </ul>
        </section>
        
        <section id='achievements' className='qualification-section achievements'>
          <h2 className="qualification-heading">Achievements and Awards</h2>
          <ul className="qualification-list">
            <li className="qualification-item">
              <strong>HackerRank Problem Solving:</strong> 3 stars and Gold badge in Java. Check my profile 
              <a href="https://www.hackerrank.com/ritikarajwar0" target="_blank" rel="noopener noreferrer"> here</a>.
            </li>
          </ul>
        </section>
        
        <section id='projects' className='qualification-section projects'>
          <h2 className="qualification-heading">Portfolio or Personal Projects</h2>
          <ul className="qualification-list">
            <li className="qualification-item projectItem">
              <strong>Resort API</strong><br />
              <a href="https://github.com/Ritikarajwar" target="_blank" rel="noopener noreferrer">GitHub Link</a><br />
              Developed a RESTful API using Node.js and MongoDB. Integrated Firebase authentication and deployed on Render.
            </li>
            <li className="qualification-item projectItem">
              <strong>File Uploader</strong><br />
              <a href="https://github.com/Ritikarajwar" target="_blank" rel="noopener noreferrer">GitHub Link</a><br />
              Created a form and admin panel with React and MongoDB. Implemented file uploading with Cloudinary.
            </li>
          </ul>
        </section>
        
        <section id='certifications' className='qualification-section certifications'>
          <h2 className="qualification-heading">Certifications and Continuing Education</h2>
          <ul className="qualification-list">
            <li className="qualification-item">
              <strong>Java Certification</strong>, HackerRank, August 2024<br />
              <a href="https://www.hackerrank.com/ritikarajwar0" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </li>
            <li className="qualification-item">
              <strong>MySQL Certification</strong>, HackerRank, August 2024<br />
              <a href="https://www.hackerrank.com/ritikarajwar0" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Qualification;
