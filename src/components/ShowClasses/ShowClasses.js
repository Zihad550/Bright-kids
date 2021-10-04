import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ShowClasses = props => {
  const {className, cost, educator, img} = props.class;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{className}</Card.Title>
          <Card.Text className="mb-0">
           Cost: ${cost}
          </Card.Text>
          <Card.Text>
            Educator: {educator}
          </Card.Text>
          <button className="primary-btn fs-5">Enroll Class</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShowClasses;