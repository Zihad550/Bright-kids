import React from "react";
import { Card, Col } from "react-bootstrap";

const ShowTeacher = (props) => {
  const { name, position, about, img } = props.teacher;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{position}</Card.Title>
          <Card.Text>{about}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShowTeacher;
