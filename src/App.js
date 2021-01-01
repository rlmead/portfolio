import React from "react";
import { Jumbotron, Container } from "reactstrap";
import Footer from "./components/Footer";
import ProjectDisplay from "./components/ProjectDisplay";

function App() {
  return (
    <div className="text-center">
      <Jumbotron
        fluid
        className="bg-primary text-secondary">
        <Container fluid>
          <h5>
            data engineer, full stack developer, linguist, maker
            </h5>
          <h1>R. L. MEAD</h1>
          <p>interested in sustainability, design, science, creativity, and social cooperation</p>
        </Container>
      </Jumbotron>
      <ProjectDisplay />
      <Footer />
    </div >
  )
}

export default App;