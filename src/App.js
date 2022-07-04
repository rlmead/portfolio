import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";
import Footer from "./components/Footer";
import ProjectDisplay from "./components/ProjectDisplay";
import KnitwearDisplay from "./components/KnitwearDisplay";
import Bookshelf from "./components/Bookshelf";
import About from "./components/About";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [view, setView] = useState("knitwear design");

  let sections = {
    "knitwear design": <KnitwearDisplay />,
    "book shelf": <Bookshelf />,
    "web projects": <ProjectDisplay />,
    "about me": <About />
  };

  return (
    <>
      <Navbar
        expand="md"
        light
        className="navbar-default navbar-dark sticky-top text-secondary bg-success">
        <h1>Rebecca Mead</h1>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar >
          <Nav
            style={{ display: "flex", flexFlow: "row nowrap" }}
            navbar >
            {
              Object.keys(sections).map((item, index) => {
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
      {
        sections[view]
      }
      <Footer />
    </>
  )
}

export default App;