import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import projectsData from "../data/projects";

function ProjectDisplay() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  function next() {
    if (animating) return;
    const nextIndex = activeIndex === projectsData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  function previous() {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? projectsData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = projectsData.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <div
          className="text-primary text-left carousel-caption d-md-block"
          style={{ position: "relative", top: "0", bottom: "auto" }}>
          <Row>
            <Col md="6">
              <h3>{item.title}</h3>
              <p className="mb-0">{item.date}</p>
            </Col>
            <Col md="6" className="mt-2">
              <FontAwesomeIcon icon={faQuestion} className="mr-4" />
              <a
                href={item.href}
                target="_blank">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </Col>
          </Row>
        </div>
        <img
          className="d-block w-100"
          src={item.img_src}
          alt={item.img_alt} />
      </CarouselItem>
    );
  });

  return (
    <Container>
      <Row>
        <Col md={{ size: 10, offset: 1 }}>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="mb-5 carousel-fade"
          >
            <CarouselIndicators items={projectsData} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectDisplay;
