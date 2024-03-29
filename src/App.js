import React, { useEffect, useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";
import Footer from "./components/Footer";
import ProjectDisplay from "./components/ProjectDisplay";
import KnitwearDisplay from "./components/KnitwearDisplay";
import Bookshelf from "./components/Bookshelf";
import About from "./components/About";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [view, setView] = useState("about me");

  useEffect(() => {
    const storedView = JSON.parse(window.localStorage.getItem('appView'));
    if (storedView) {
      setView(storedView);
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('appView',JSON.stringify(view));
  }, [view])

  let sections = {
    "about me": <About />,
    "web projects": <ProjectDisplay />,
    "knitwear design": <KnitwearDisplay />,
    "book shelf": <Bookshelf />
  };

  return (
    <>
      <Navbar
        expand="md"
        light
        className="navbar-default navbar-dark sticky-top text-secondary bg-success">
        <h1
          onClick={() => setView("about me")}>
          Rebecca Mead
        </h1>
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
                      className={item !== view ? "text-secondary" : "text-warning"}>
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