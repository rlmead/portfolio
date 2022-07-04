import React from "react";
import { Container, Row, Col } from "reactstrap";
import knitwearData from "../data/knitwear";

function KnitwearDisplay() {
  var itemsPerCol = knitwearData.length / 3;
  return (
    <Container className="mb-5">
      <Row>
        <Col sm="4">
          {
            knitwearData.slice(0, itemsPerCol).map((item, index) => {
              return (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
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
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid p-3" alt={item.img_alt} src={item.img_src} key={index} />
                </a>
              )
            })
          }
        </Col>
        <Col sm="4" className="mb-3">
          {
            knitwearData.slice(itemsPerCol * 2).map((item, index) => {
              return (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid p-3" alt={item.img_alt} src={item.img_src} key={index} />
                </a>
              )
            })
          }
        </Col>
      </Row>
    </Container>
  )
}

export default KnitwearDisplay;