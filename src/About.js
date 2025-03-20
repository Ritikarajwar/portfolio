import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './CSS/About.css';

const About = () => {
  return (
    <Container className="about-section" id="about">
      <Row className="text-center mb-5">
        <Col>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A passionate developer with a love for learning and building impactful projects.</p>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col>
          <Card className="about-card shadow-lg">
            <Card.Body>
              <Card.Text>
                Hello! I'm <strong>Ritika Rajwar</strong>, a <strong>full stack developer</strong> with expertise in <strong>HTML</strong>, <strong>CSS</strong>, the <strong>MERN stack</strong> (MongoDB, Express.js, React, and Node.js), along with <strong>Python</strong> and <strong>Django</strong>. I have a strong background in building end-to-end web applications, managing databases, and ensuring seamless data flow between the front end and back end.
              </Card.Text>
              <Card.Text>
                On the front end, I create dynamic and responsive user interfaces using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>React.js</strong>, ensuring smooth and intuitive user experiences. On the back end, I develop efficient APIs and server-side logic with <strong>Node.js</strong> and <strong>Express</strong>, while handling data operations with <strong>MongoDB</strong>. Additionally, I build powerful and scalable web applications using <strong>Python</strong> and <strong>Django</strong>, creating RESTful APIs and managing relational databases.
              </Card.Text>
              <Card.Text>
                I am always eager to solve complex problems, optimize application performance, and develop efficient data management systems. Whether working with <strong>HTML</strong>, <strong>CSS</strong>, <strong>MERN</strong>, <strong>Python</strong>, or <strong>Django</strong>, I focus on writing clean, maintainable code that adheres to industry best practices, ensuring the applications I build are secure, scalable, and user-friendly.
              </Card.Text>
              <Card.Text>
                If you're looking for a full stack developer with expertise in <strong>HTML</strong>, <strong>CSS</strong>, <strong>MERN</strong>, <strong>Python</strong>, and <strong>Django</strong>, feel free to reach out. Let's collaborate to create high-performance, end-to-end web applications that make an impact!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
