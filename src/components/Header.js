import React, { useState } from "react";
import { Navbar, Nav, NavItem, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import linksData from "../data/links";

function Header() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <Navbar
        light
        className="navbar-default navbar-light sticky-top text-primary bg-light">
          <Nav
            style={{ display: "flex", flexFlow: "row nowrap" }} className="ml-auto">
            <NavItem style={{ padding: "7px" }}>
              <FontAwesomeIcon
                icon={faQuestion}
                onClick={() => toggleModal()} />
            </NavItem>
            {
              linksData.map((item, index) => {
                return (
                  <NavItem
                    style={{ padding: "7px" }}
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
      </Navbar>
      <div>
        <Modal isOpen={modal} toggle={toggleModal} className="text-primary">
          <ModalHeader toggle={toggleModal}><h4>about</h4></ModalHeader>
          <ModalBody>
            <p>i'm a data engineer and full-stack developer with lots of interests and creative drive. i love making things, and i love learning.</p>
            <p>here are some things that inspire me:</p>
            <ul>
              <li>sustainability</li>
              <li>design</li>
              <li>science</li>
              <li>creativity</li>
              <li>social cooperation</li>
            </ul>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}

export default Header;