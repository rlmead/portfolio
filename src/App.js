import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectDisplay from "./components/ProjectDisplay";
import KnitwearDisplay from "./components/KnitwearDisplay";
import Bookshelf from "./components/Bookshelf";

function App() {
  let sections = [
    // { href: "web-projects", text: "web projects" },
    // { href: "knitwear-design", text: "knitwear design" },
    // { href: "bookshelf", text: "bookshelf" },
    // { href: "about-me", text: "about me" }
  ];

  return (
    <div className="bg-secondary">
      <Header sections={sections} />
      <Jumbotron
        fluid
        className="text-center text-white bg-danger p-1 m-0" >
        <h2>web projects</h2>
      </Jumbotron>
      <ProjectDisplay />
      <Jumbotron
        fluid
        className="text-center text-white bg-danger p-1 m-0" >
        <h2>knitwear design</h2>
      </Jumbotron>
      <KnitwearDisplay />
      <Jumbotron
        fluid
        className="text-center text-white bg-danger p-1 m-0" >
        <h2>bookshelf</h2>
      </Jumbotron>
      <Bookshelf />
      <Jumbotron
        fluid
        className="bg-danger text-white p-3 mb-5" >
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h2 className="text-center">about me</h2>
            <p>i'm a data engineer and full stack developer with lots of interests and creative drive.</p>
            <p>i love making things, and i love learning. when introduced to a new system, i enjoy thinking of ways to improve it. when possible, i take the initiative to make those improvements myself.</p>
            <p>i live for creative collaboration. i'm motivated and inspired by social justice, sustainability, design, and science.</p>
          </Col>
        </Row>
      </Jumbotron>
      <Footer />
    </div >
  )
}

export default App;