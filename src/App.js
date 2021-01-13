import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import Footer from "./components/Footer";
import ProjectDisplay from "./components/ProjectDisplay";

function App() {
  return (
    <div className="bg-secondary">
      <Jumbotron
        fluid
        className="bg-primary sticky-top text-secondary p-3 m-0">
        <Container fluid>
          <h1>R. L. MEAD</h1>
          <h5>data engineer, full stack developer, linguist, maker</h5>
        </Container>
      </Jumbotron>
      <ProjectDisplay />
      <Footer />
      <Jumbotron
        fluid
        className="bg-danger text-white p-3 mb-5">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h2 className="text-center">about me</h2>
            <p>i'm a generalist with lots of interests and creative drive.</p>
            <p>i love making things, and i love learning. when introduced to a new system, i enjoy thinking of ways to improve it. when possible, i take the initiative to make those improvements myself.</p>
            <p>i live for creative collaboration. i'm also inspired by sustainability, design, science, and social cooperation.</p>
          </Col>
        </Row>
      </Jumbotron>
    </div >
  )
}

export default App;