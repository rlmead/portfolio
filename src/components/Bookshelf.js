import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, CardDeck, Card, CardBody, CardTitle, CardSubtitle, CardText, Row } from "reactstrap";
import booksData from "../data/books";

function Bookshelf() {
  const [booksView, setBooksView] = useState("currently reading");

  useEffect(() => {
    const storedBooksView = JSON.parse(window.localStorage.getItem('booksView'));
    if (storedBooksView) {
      setBooksView(storedBooksView);
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('booksView',JSON.stringify(booksView));
  }, [booksView])

  return (
    <>
      <Nav
        justified
        tabs
        className="bg-success text-white" >
        {
          Object.keys(booksData).map((item, index) => {
            return (
              <NavItem
                key={index}>
                <NavLink
                  className={(booksView === item) ? "active" : ""}
                  id={item}
                  onClick={() => setBooksView(item)}>
                  <h5>{item}</h5>
                </NavLink>
              </NavItem>
            )
          })
        }
      </Nav>
      <CardDeck
        className="row row-cols-1 row-cols-sm-3 m-2 mb-5" >
        {
          booksData[booksView].map((item, index) => {
            return (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#FFFCF9" }}>
                <Card
                  className="m-2 text-secondary border-primary bg-info"
                  key={index} >
                  <CardBody>
                    <CardTitle tag="h5">{item.title}</CardTitle>
                    <CardSubtitle tag="h6">{item.subtitle}</CardSubtitle>
                    <CardText>{"by " + item.by}</CardText>
                  </CardBody>
                </Card>
              </a>
            )
          })
        }
      </CardDeck>
      <Row className="mb-5 p-2"></Row>
    </>
  )
}

export default Bookshelf;