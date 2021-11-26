import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../ContactForm/ContactForm";
import JoinUs from "../JoinUs/JoinUs";
import Subscribe from "../Subscribe/Subscribe";

const Contact = () => {
  return (
    <>
      <h2 className="primary-title">Contacts</h2>
      <ContactForm></ContactForm>

      {/* join us section start */}
      <Container className="my-5">
        <JoinUs></JoinUs>
      </Container>

      {/* subscribe section */}
      <Container>
        <Subscribe></Subscribe>
      </Container>
    </>
  );
};

export default Contact;
