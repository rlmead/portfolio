import React from "react";
import { Jumbotron, Container } from "reactstrap";
import Footer from "./components/Footer";
import ProjectDisplay from "./components/ProjectDisplay";

function App() {
  return (
    <div className="bg-secondary">
      <Jumbotron
        fluid
        className="bg-primary text-white p-3 sticky-top">
        <Container fluid>
          <h1>R. L. MEAD</h1>
          <h5>data engineer, full stack developer, linguist, maker</h5>
        </Container>
      </Jumbotron>
      <ProjectDisplay />
      <Footer />
      <Jumbotron
        fluid
        className="bg-danger text-white text-right p-3 mb-5">
        <h2>about me</h2>
        <p>i'm a data engineer and full-stack developer with lots of interests and creative drive. i love making things, and i love learning.</p>
        <p>i'm inspired by sustainability, design, science, creativity, and social cooperation.</p>
      </Jumbotron>
    </div >
  )
}

export default App;