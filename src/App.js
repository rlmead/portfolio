import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Jumbotron, Row, Col } from "reactstrap";
import Footer from "./components/Footer";
import ProjectDisplay from "./components/ProjectDisplay";
import KnitwearDisplay from "./components/KnitwearDisplay";
import Bookshelf from "./components/Bookshelf";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [view, setView] = useState("web projects");

  console.log(view);

  let sections = ["web projects", "knitwear design", "bookshelf", "about me"];

  return (
    <div className="bg-secondary">
      <Navbar
        expand="md"
        light
        className="navbar-default navbar-dark sticky-top text-secondary bg-danger">
        <h1>R. L. Mead</h1>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar >
          <Nav
            style={{ display: "flex", flexFlow: "row nowrap" }}
            navbar >
            {
              sections.map((item, index) => {
                return (
                  <NavItem
                    className="mx-auto"
                    key={index}
                    onClick={() => setView(item)} >
                    <NavLink
                      className={item !== view && "text-secondary"} >
                      {item}
                    </NavLink>
                  </NavItem>
                )
              })
            }
          </Nav>
        </Collapse>
      </Navbar>

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