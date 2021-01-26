import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import knitwearData from "../data/knitwear";

function KnitwearDisplay() {
  var itemsPerCol = knitwearData.length / 3;
  return (
    <>
      <Jumbotron
        fluid
        className="text-center text-white bg-danger p-1 m-0" >
        <h2>knitwear design</h2>
      </Jumbotron>
      <Container>
        <Row>
          <Col sm="4">
            {
              knitwearData.slice(0, itemsPerCol).map((item, index) => {
                return (
                  <a href={item.href} target="_blank">
                    <img className="img-fluid p-3" alt={item.img_alt} src={item.img_src} key={index} />
                  </a>
                )
              })
            }
          </Col>
          <Col sm="4">
            {
              knitwearData.slice(itemsPerCol, itemsPerCol * 2).map((item, index) => {
                return (
                  <a href={item.href} target="_blank">
                    <img className="img-fluid p-3" alt={item.img_alt} src={item.img_src} key={index} />
                  </a>
                )
              })
            }
          </Col>
          <Col sm="4">
            {
              knitwearData.slice(itemsPerCol * 2).map((item, index) => {
                return (
                  <a href={item.href} target="_blank">
                    <img className="img-fluid p-3" alt={item.img_alt} src={item.img_src} key={index} />
                  </a>
                )
              })
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default KnitwearDisplay;