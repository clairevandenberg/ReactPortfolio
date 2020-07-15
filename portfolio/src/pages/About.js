import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function About() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
           
            <h1>ABOUT ME</h1>
      <h6 class="text">Full Stack Web Developer with a background in Marketing and Design. I recently earned a Certificate in Full Stack Development from the University of Adelaide Coding Bootcamp, acquiring skills in computer science applied to JavaScript, BootStrap, Node.js, jQuery etc. and responsive web design, along with Deployment experience in Heroku, Git & Github Pages.</h6>
      <h6 class="text">I am experienced and passionate about developing apps and websites with great focus on creative functionality and responsive deployment. My eagerness to learn and resourcefulness accommodates me to further develop my skills. Known as an innovative thinker and problem solver with a proven ability to break down problems piece-by-piece in order to find a solution. My main goal when approaching a new project is to establish the project's value through the engagement of its audience. My responsiveness from this feedback allows for higher quality user experience.</h6>
    
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default About;
