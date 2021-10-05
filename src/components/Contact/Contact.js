import React from "react";
import { Container } from "react-bootstrap";
import JoinUs from "../JoinUs/JoinUs";
import Social from "../Social/Social";
import Subscribe from "../Subscribe/Subscribe";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <h2 className="primary-title">Contacts</h2>
      <ContactForm></ContactForm>

      {/* join us section start */}
      <Container className="my-5">
        <JoinUs></JoinUs>
      </Container>

      {/* Social section */}
      <Container className="my-5">
        <Social></Social>
      </Container>

      {/* subscribe section */}
      <Container>
        <Subscribe></Subscribe>
      </Container>
    </>
  );
};

export default Contact;
