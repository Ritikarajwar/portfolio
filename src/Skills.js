import React from 'react';
import './CSS/Skills.css'; // Import the CSS file

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1>Skills</h1>
      
      <section className="technicalSkills">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> JavaScript, Python , Java(core)</li>
          <li><strong>Front-End:</strong> HTML, CSS, React.js</li>
          <li><strong>Back-End:</strong> Node.js, Express.js, Python, Django</li>
          <li><strong>Databases:</strong> MongoDB, MySQL</li>
          <li><strong>Tools & Technologies:</strong> Postman, Cloudinary, Firebase</li>
        </ul>
      </section>
    </div>
  );
}; 

export default Skills;
