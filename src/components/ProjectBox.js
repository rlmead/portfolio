import React, { useState } from "react";
import { Card, CardBody, CardImg, CardImgOverlay } from "reactstrap";

function ProjectBox(props) {
  const [hidden, setHidden] = useState(true);

  return (
      <Card
        className="border-0 mb-4"
        onMouseOver={() => setHidden(false)}
        onMouseOut={() => setHidden(true)}>
        <a
          href={props.data.href}
          style={{ color: "black", textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer">
          <CardBody className="p-0">
            <CardImg
              src={props.data.img_src}
              alt={props.data.img_alt}
            />
            <div className={hidden ? "d-none" : ""}>
              <CardImgOverlay
                className="text-center bg-white d-flex"
                style={{ opacity: "0.9", flexWrap: "wrap" }}>
                <h2
                  style={{ minWidth: "100%" }}
                  className="align-self-center mx-auto text-primary">
                  {props.data.title}
                </h2>
                <h4
                  className="mx-auto text-primary">
                  {props.data.date}
                </h4>
              </CardImgOverlay>
            </div>
          </CardBody>
        </a>
      </Card>
  );
}

export default ProjectBox;