import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowClasses from "../ShowClasses/ShowClasses";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/classes`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <>
      <h2 className="primary-title">All Classes</h2>
      <Container className="mb-5">
        <Row xs={1} md={2} className="g-4 ">
          {classes.map((course) => (
            <ShowClasses
              from={false}
              key={course.id}
              class={course}
            ></ShowClasses>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Classes;
