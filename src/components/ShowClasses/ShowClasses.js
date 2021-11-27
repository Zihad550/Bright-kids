import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./ShowClass.css";

const ShowClasses = (props) => {
  const { className, cost, educator, img, time, duration, _id } = props.class;

  const history = useHistory();
  const commonCardStyle = `${
    props.from && "w-100 fs-6"
  } d-flex align-items-center w-75 justify-content-between mx-auto mb-2 fs-5`;
  const handleClick = (id) => {
    history.push(`/enroll/${id}`);
  };
  return (
    <Col>
      <Card className="h-100">
        {props.from ? (
          <Card.Img
            className="classImage"
            style={{ height: "275px" }}
            // style={props.from ? { height: "275px" } : { height: "222px" }}
            variant="top"
            src={img}
          />
        ) : (
          <Card.Img
            className="classImage"
            style={{ height: "422px" }}
            // style={props.from ? { height: "275px" } : { height: "222px" }}
            variant="top"
            src={img}
          />
        )}
        <Card.Body className="d-flex flex-column justify-content-end">
          <Card.Title className={`${props.from && "fs-4"} fs-3`}>
            {className}
          </Card.Title>

          <div className={commonCardStyle}>
            <Card.Text className="mb-0 text-start">
              Educator: {educator}
            </Card.Text>
            <Card.Text>Cost: ${cost}</Card.Text>
          </div>

          <div className={commonCardStyle}>
            <Card.Text className="mb-0">
              <FontAwesomeIcon icon={faCalendarAlt} /> {time}
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faClock} /> {duration}
            </Card.Text>
          </div>

          <button
            onClick={() => handleClick(_id)}
            className="primary-btn fs-5 "
          >
            Enroll Class
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShowClasses;
