import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import linksData from "../data/links";

function Footer() {
  return (
    <Navbar
      className="fixed-bottom text-light bg-success">
      <Nav
        className="mx-auto">
        {
          linksData.map((item, index) => {
            return (
              <NavItem
                style={{ padding: "7px", fontSize: "1.5em" }}
                key={index}>
                <a
                  className="text-light"
                  href={item.href}
                  target='_blank'>
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              </NavItem>
            )
          })
        }
      </Nav>
    </Navbar>

  );
}

export default Footer;