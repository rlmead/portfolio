import React, { useState } from "react";
import { Col, Card, CardBody, CardImg, CardImgOverlay } from "reactstrap";

function ProjectBox(props) {
  const [hidden, setHidden] = useState(true);

  return (
    <Col
      md="4"
      className="px-0">
      <Card
        className="border-0 rounded-0"
        onMouseOver={() => setHidden(false)}
        onMouseOut={() => setHidden(true)}>
        <a
          href={props.data.href}
          style={{ color: "black", textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer">
          <CardBody className="p-0">
            <CardImg
              className="rounded-0"
              src={props.data.img_src}
              alt={props.data.img_alt}
            />
            <CardImgOverlay
              className={"text-center bg-secondary rounded-0 " + (hidden && "d-none")}
              style={{opacity: "0.85"}}>
              <h2 className="text-primary bold">{props.data.title}</h2>
              <h4 className="text-primary">{props.data.date}</h4>
            </CardImgOverlay>
          </CardBody>
        </a>
      </Card>
    </Col>
  );
}

export default ProjectBox;