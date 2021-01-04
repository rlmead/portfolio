import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";
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

  const slides = projectsData.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.img_src}
      >
        <img
          className="d-block w-100"
          src={item.img_src}
          alt={item.img_alt} />
        <div
          className="text-primary carousel-caption d-none d-md-block">
          <h3>{item.title}</h3>
          <p>{item.date}</p>
          <FontAwesomeIcon icon={faQuestion} className="m-3" />
          <a href={item.href} target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="m-3" />
          </a>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="mb-5"
    >
      <CarouselIndicators items={projectsData} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default ProjectDisplay;
