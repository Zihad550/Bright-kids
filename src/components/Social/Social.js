import React from "react";
import "./Social.css";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = () => {
  return (
    <div className="social-container d-flex align-items-center justify-content-evenly my-5 fs-3 ">
      <div>
        <FontAwesomeIcon icon={faFacebookF} />
      </div>
      <div>
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <div>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
      <div>
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div>
        <FontAwesomeIcon icon={faSkype} />
      </div>
    </div>
  );
};

export default Social;
