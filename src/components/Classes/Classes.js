import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowClasses from "../ShowClasses/ShowClasses";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("./classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <>
      <h2 className="primary-title">Classes</h2>
      <Container className="mb-5">
        <Row xs={1} md={2} className="g-4 ">
          {classes.map((course) => (
            <ShowClasses key={course.id} class={course}></ShowClasses>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Classes;
