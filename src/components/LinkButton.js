import React from 'react';
import { Col, Card, CardBody, CardTitle } from 'reactstrap';

function LinkButton(props) {
    return (
        <Col
            md='3'>
            <Card>
                <CardBody>
                    <CardTitle>
                        {props.data.icon}
                    </CardTitle>
                </CardBody>
            </Card>
        </Col>
    )
}

export default LinkButton;