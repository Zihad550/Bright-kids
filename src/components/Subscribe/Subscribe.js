import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-center subscribe-container py-5 my-5 text-white flex-column flex-md-row">
      <div>
        <p className="mb-1 ">SUBSCRIBE NEW AND GO PREMIUM FOR ONE MONTH</p>
        <h1 className="">Subscribe to our newsletter.</h1>
        <h2 className="third-title">Get updates to news and events.</h2>
      </div>

      <div>
        <InputGroup className="mb-3 d-flex flex-column">
          <FormControl
            className="w-100"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Your E-mail Address"
          />
          <button className="secondary-btn py-2">Subscribe</button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Subscribe;
