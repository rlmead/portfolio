import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LinkButton(props) {
  return (
    <Col
      md='3'>
      <Card className='mb-4'>
        <a href={props.data.href} style={{color: 'black'}} target='_blank'>
          <CardBody className='text-center'>
            <FontAwesomeIcon icon={props.data.icon} size='4x' />
          </CardBody>
        </a>
      </Card>
    </Col>
  )
}

export default LinkButton;