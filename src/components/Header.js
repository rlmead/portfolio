import React, { useState } from "react"
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import linksData from "../data/links"

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar
        expand="md"
        light
        className="navbar-default navbar-light sticky-top text-primary bg-white">
        <h1
          style={{ fontSize: "2em", textShadow: "4px 4px 4px #93B5C6" }}>
          r. l. mead
        </h1>
        <NavbarToggler
          onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar>
          <Nav
            style={{ display: "flex", flexFlow: "row nowrap" }} className="ml-auto">
            {
              linksData.map((item, index) => {
                return (
                  <NavItem
                    className="text-primary"
                    key={index}>
                    <a
                      href={item.href}
                      target='_blank'>
                      <FontAwesomeIcon icon={item.icon} />
                    </a>
                  </NavItem>
                )
              })
            }
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;