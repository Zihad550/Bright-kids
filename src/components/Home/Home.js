import React, { useEffect, useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import banner1 from "../../images/banner-1.jpg";
import banner2 from "../../images/banner-2.jpg";
import banner3 from "../../images/banner-3.jpg";
import ShowClasses from "../ShowClasses/ShowClasses";
import "./Home.css";
const Home = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100 " src={banner1} alt="First slide" />
          <Carousel.Caption className="d-flex justify-content-center align-items-center flex-column h-100">
            <h2 className="third-title">BRIGHT KIDS</h2>
            <h3>WE'RE MAKING EVERY CHILD'S WORLD BETTER</h3>
            <button className="primary-btn rounded-pill">Contact</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="d-flex justify-content-center align-items-center flex-column h-100">
            <h2 className="third-title">BRIGHT KIDS</h2>
            <h3>BEST GIFT FOR A CHILD IS A GREAT EDUCATION</h3>
            <button className="primary-btn rounded-pill">Enroll Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="d-flex justify-content-center align-items-center flex-column h-100">
            <h2 className="third-title">BRIGHT KIDS</h2>
            <h3>GIVING STUDENTS A WIDE VARIETY</h3>
            <button className="primary-btn rounded-pill">About</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h3 className="fs-1 fw-bold primary-title mt-5">Classes</h3>
      <Container className="mb-5">
        <Row xs={1} md={4} className="g-4">
          {classes.map((course) => (
            <ShowClasses
              key={course.id}
              from={true}
              class={course}
            ></ShowClasses>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
