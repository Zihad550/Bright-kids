import React from "react";
import { Card, Col } from "react-bootstrap";
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowClasses = (props) => {
  const { className, cost, educator, img, time, duration } = props.class;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fs-3">{className}</Card.Title>

          <div className="d-flex align-items-center w-75 justify-content-between mx-auto mb-2 fs-5">
            <Card.Text className="mb-0">Educator: {educator}</Card.Text>
            <Card.Text>Cost: ${cost}</Card.Text>
          </div>

          <div className="d-flex align-items-center w-75 justify-content-between mx-auto mb-2 fs-5">
            <Card.Text className="mb-0">
              <FontAwesomeIcon icon={faCalendarAlt} /> {time}
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faClock} /> {duration}
            </Card.Text>
          </div>

          <button className="primary-btn fs-5 ">Enroll Class</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShowClasses;
