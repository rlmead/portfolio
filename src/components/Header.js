import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      expand="md"
      light
      className="navbar-default navbar-dark sticky-top text-secondary bg-primary">
      <h1>R. L. Mead</h1>
      <NavbarToggler onClick={toggle} />
      <Collapse
        isOpen={isOpen}
        navbar >
        <Nav tabs style={{ display: "flex", flexFlow: "row nowrap" }} navbar>
          {
            props.sections.map((item, index) => {
              return (
                <NavItem className="mx-auto" key={index}>
                  <NavLink className="text-secondary" href={item.href}>{item.text}</NavLink>
                </NavItem>
              )
            })
          }
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header;