import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";
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

  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBodyText, setModalBodyText] = useState([""]);

  const toggle = (title, bodyText) => {
    setModal(!modal);
    setModalTitle(title);
    setModalBodyText(bodyText);
  };

  const slides = projectsData.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <div
          className="text-left text-primary carousel-caption d-md-block ml-4"
          style={{ position: "relative", top: "0", bottom: "auto" }}>
          <h3>{item.title}</h3>
          <p className="mb-0">{item.date}</p>
          <FontAwesomeIcon icon={faQuestion} className="mr-4" onClick={() => toggle(item.title, item.about)} />
          <a
            href={item.href}
            target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
        <img
          className="d-block w-100"
          src={item.img_src}
          alt={item.img_alt} />
        <div
          className="carousel-caption d-md-block mt-2"
          style={{ position: "relative", top: "0", bottom: "auto" }}>
        </div>
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="m-3 mb-5 p-0"
      >
        <CarouselIndicators
          items={projectsData}
          activeIndex={activeIndex}
          onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <Modal isOpen={modal} toggle={() => toggle("", [""])}>
        <ModalHeader toggle={() => toggle("", [""])}>{modalTitle}</ModalHeader>
        <ModalBody>
          {
            modalBodyText.map((item, index) => {
              return (
                <p key={index}>{item}</p>
              );
            })
          }
        </ModalBody>
      </Modal>
    </>
  );
}

export default ProjectDisplay;
