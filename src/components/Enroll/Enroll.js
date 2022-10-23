import {
faCalendarAlt,
faCartPlus,
faClock
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Enroll = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const { className, cost, educator, img, time, duration } = course;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/classes/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);
  console.log(id);
  return (
    <Container className="d-flex my-5">
      <Row sm={1} md={2} className="align-items-center">
        <Col>
          <Card className="h-100  flex-row align-items-center">
            <div>
              <Card.Img
                style={{ height: "auto", width: "100%" }}
                variant="top"
                src={img}
              />
            </div>

            <Card.Body className="d-flex flex-column ">
              <Card.Title className="me-auto">{className}</Card.Title>

              <div>
                <Card.Text className=" text-start">
                  Educator: {educator}
                </Card.Text>
              </div>

              <div>
                <Card.Text className="mb-0 mt-3">
                  <FontAwesomeIcon icon={faCalendarAlt} /> {time}
                </Card.Text>
                <Card.Text className="mb-0">
                  <FontAwesomeIcon icon={faClock} /> {duration}
                </Card.Text>
                <Card.Text className="fw-bold text-primary mt-3 fs-5">
                  Cost: ${cost}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Control placeholder="Address" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Division</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Barisal</option>
                  <option>Khulna</option>
                  <option>Rajshahi</option>
                  <option>Rangpur</option>
                  <option>Mymensingh</option>
                  <option>Sylhet</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Button className="w-100" variant="primary" type="submit">
              <FontAwesomeIcon icon={faCartPlus} /> Purchase
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Enroll;
