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
        <h2>CLAIRE VANDENBERG</h2>
        <p>Full Stack Developer  ||  Adelaide, Australia</p>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default About;
