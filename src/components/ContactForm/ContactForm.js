import {
  faClock,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Form } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Container className="d-flex justify-content-between my-5">
      {/* contact us */}
      <div>
        <h3>Contact Us</h3>

        {/* call us div */}
        <div className="d-flex align-items-center justify-content-evenly my-3">
          <div className="fs-4">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div>
            <h5>Call Us</h5>
            <p className="text-secondary">+12 34 5689</p>
          </div>
        </div>

        {/* active hours */}
        <div className="d-flex align-items-center justify-content-evenly my-3">
          <div className="fs-4 w-50">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div>
            <h5>Active Hours</h5>
            <p className="text-secondary">Sat - Fri 6 AM - 5 PM</p>
          </div>
        </div>

        {/* location  */}
        <div className="d-flex align-items-center justify-content-evenly my-3">
          <div className="fs-4 w-50">
            <FontAwesomeIcon icon={faLocationArrow} />
          </div>
          <div>
            <h5>Location</h5>
            <p className="text-secondary">Franklin St, Greenpoint Ave</p>
          </div>
        </div>
      </div>

      {/* send a message */}
      <div>
        <h3>Send a Message</h3>

        {/* contact form */}
        <Form>
          <div className="d-flex">
            <Form.Group className="mb-3 me-2" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Your E-mail" />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Your Message" />
          </Form.Group>

          <Button
            className="primary-btn w-100 py-1"
            variant="secondary"
            type="submit"
          >
            Send a Message
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default ContactForm;
