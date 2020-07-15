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
<h1>CONTACT ME</h1>
<h4> I would love to hear from you.  You can get in contact via </h4>
<a href = "https://github.com/clairevandeneberg"  role = "button" aria-disabled="true">
<h5> GitHub</h5> 
</a>

<a href = "https://www.linkedin.com/in/claire-vandenberg-849b8ab3/"  role = "button" aria-disabled="true">
<h5> LinkedIn</h5> 
</a>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default About;
