import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import class1 from "../../images/class-1.jpg";
import ShowTeacher from "../ShowTeacher/ShowTeacher";
import "./About.css";

const About = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-beach-17507.herokuapp.com/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <>
      <h2 className="primary-title">About</h2>
      <Container>
        <div className="d-lg-flex py-5">
          <div className="d-flex justify-content-center flex-column me-4 align-items-center">
            <h2 className="secondary-title">
              Welcome to <span>Bright Kids</span>
            </h2>
            <p className="text-secondary">
              Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id
              purus urna. Maecenas ultrices ligula a nisi dictum tristique.
            </p>
          </div>
          <img className="about-image" src={class1} alt="" />
        </div>

        {/* teachers container */}
        <h3 className="secondary-title mt-5 mb-3">
          Our Professional <span>Teachers</span>
        </h3>
        <Row xs={1} md={2} lg={4} className="g-4 mb-5">
          {teachers.map((teacher) => (
            <ShowTeacher key={teacher.id} teacher={teacher}></ShowTeacher>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default About;
