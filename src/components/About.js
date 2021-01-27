import React from "react";
import { Container, Row, Col } from "reactstrap";

function About() {
  return (
    <Container>
      <Row className= "mt-2">
        <Col md={{ size: 6, offset: 3 }}>
          <p>i'm a data engineer and full stack developer with lots of interests and creative drive.</p>
          <p>i love making things, and i love learning. when introduced to a new system, i enjoy thinking of ways to improve it. when possible, i take the initiative to make those improvements myself.</p>
          <p>i live for creative collaboration. i'm motivated and inspired by social justice, sustainability, design, and science.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About;