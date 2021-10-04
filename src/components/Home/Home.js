import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import banner1 from '../../images/banner-1.jpg';
import banner2 from '../../images/banner-2.jpg';
import banner3 from '../../images/banner-3.jpg';
import ShowClasses from '../ShowClasses/ShowClasses';
import './Home.css';
const Home = () => {
  const [classes, setClasses] = useState([]);
  useEffect( () => {
    fetch('./homeClasses.json')
    .then(res => res.json())
    .then(data => setClasses(data))
  }, [])
  return (
    <>
    <Carousel className="carousel">
  <Carousel.Item className="carousel-item">
    <img
      className="d-block w-100 "
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className="d-flex justify-content-center align-items-center flex-column h-100">
      <h3 className="secondary-title">Learn More <button className="primary-btn">About Us</button></h3>
      <p className="w-50">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci nisi inventore quidem cum iure voluptatem aliquid, dignissimos perspiciatis labore at officia modi? Fugiat eos distinctio libero assumenda voluptatem atque.
      </p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="carousel-item">
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption className="d-flex justify-content-center align-items-center flex-column h-100">
      <h3>Visit Our <button className="primary-btn">Classes</button></h3>
      <p className="w-50">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci nisi inventore quidem cum iure voluptatem aliquid, dignissimos perspiciatis labore at officia modi? Fugiat eos distinctio libero assumenda voluptatem atque.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

<Carousel.Caption className="d-flex justify-content-center align-items-center flex-column h-100">
      <h3><button className="primary-btn">Contact</button> Us for more information.</h3>
      <p className="w-50">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci nisi inventore quidem cum iure voluptatem aliquid, dignissimos perspiciatis labore at officia modi? Fugiat eos distinctio libero assumenda voluptatem atque.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    
         <h3 className="fs-1 fw-bold primary-title mt-5">Classes</h3>
        <Container className="mb-5">
       
        <Row xs={1} md={2} className="g-4">
         
         {
           classes.map(course => <ShowClasses key={course.id} class={course}></ShowClasses>)
         }
        </Row>
        </Container>
    </>
  );
};

export default Home;