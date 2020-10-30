import React from 'react';
import { Col, Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

function ProjectButton(props) {
  return (
    <Col
      md='4'
    >
      <Card
        className='mb-4'>
        <a href={props.data.href} style={{color: 'black', textDecoration: 'none'}} target='_blank' rel='noopener noreferrer'>
          <CardBody>
            <CardImg
              src={props.data.img_src}
              alt={props.data.img_alt}
              style={{ border: '2px solid #93B5C6' }}
            />
            <CardText>{props.data.date}</CardText>
            <CardTitle>{props.data.title}</CardTitle>
          </CardBody>
        </a>
      </Card>
    </Col>
  );
}

export default ProjectButton;