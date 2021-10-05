import React from "react";
import "./Subscribe.css";
import { FormControl, InputGroup } from "react-bootstrap";

const Subscribe = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-center subscribe-container py-5 my-5 text-white">
      <div>
        <p className="mb-1 ">SUBSCRIBE NEW AND GO PREMIUM FOR ONE MONTH</p>
        <h1 className="">Subscribe to our newsletter.</h1>
        <h2 className="third-title">Get updates to news and events.</h2>
      </div>

      <div>
        <InputGroup className="mb-3 ">
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Your E-mail Address"
          />
          <button className="secondary-btn">Subscribe</button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Subscribe;
