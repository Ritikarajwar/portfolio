import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaStar, FaEnvelope } from "react-icons/fa";  // Using react-icons
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/HireMe.css';

// Star Rating Component
const StarRating = ({ stars }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <FaStar 
          key={i} 
          className={i < stars ? "filled" : "unfilled"} 
        />
      ))}
    </div>
  );
};

const HireMe = () => {
  return (
    <Container className="hire-me-section" id="hire-me">
      <Row className="text-center mb-5">
        <Col>
          <h2 className="section-title">Hire Me</h2>
          <p className="section-subtitle">Let’s collaborate and bring your vision to life with a blend of creativity and technology!</p>
        </Col>
      </Row>

      {/* Full Stack Development Section */}
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <Card className="skills-card shadow-lg backend-card">
            <Card.Body>
              <Card.Title className="text-center">Full Stack Development</Card.Title>
              <Card.Text>
                As a full stack developer, I specialize in building dynamic and efficient web applications. My expertise includes working with MERN stack for both front-end and back-end development, along with Python and Django for robust server-side applications. I ensure optimal performance, scalability, and reliability in every project.
              </Card.Text>

              <div className="skills-section">
                <div className="skill">
                  <p>React.js</p>
                  <StarRating stars={4} />
                </div>
                <div className="skill">
                  <p>Node.js</p>
                  <StarRating stars={4} />
                </div>
                <div className="skill">
                  <p>Express.js</p>
                  <StarRating stars={4} />
                </div>
                <div className="skill">
                  <p>MongoDB</p>
                  <StarRating stars={4} />
                </div>
                <div className="skill">
                  <p>MySQL</p>
                  <StarRating stars={4} />
                </div>
                <div className="skill">
                  <p>Python</p>
                  <StarRating stars={4} />
                </div>
                <div className="skill">
                  <p>Django</p>
                  <StarRating stars={4} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center mt-5">
        <Col>
          <Button 
            href="mailto:adityakamodiya@gmail.com" 
            className="hire-me-button"
          >
            <FaEnvelope /> Contact Me
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HireMe;
