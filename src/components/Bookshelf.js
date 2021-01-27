import React, { useState } from "react";
import { Nav, NavItem, NavLink, CardDeck, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import booksData from "../data/books";

function Bookshelf() {
  const [booksView, setBooksView] = useState("currently reading");

  return (
    <>
      <Nav
        justified
        tabs
        className="bg-danger text-white" >
        {
          Object.keys(booksData).map((item, index) => {
            return (
              <NavItem
                key={index}>
                <NavLink
                  className={(booksView === item) ? "active" : ""}
                  id={item}
                  onClick={() => setBooksView(item)}>
                  <h4>{item}</h4>
                </NavLink>
              </NavItem>
            )
          })
        }
      </Nav>
      <CardDeck
        className="row row-cols-1 row-cols-sm-3 m-2" >
        {
          booksData[booksView].map((item, index) => {
            return (
              <a href={item.href} target="_blank">
                <Card
                  className={"m-2 text-white " + (index % 2 === 0 ? "bg-primary" : "bg-info")}
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
    </>
  )
}

export default Bookshelf;