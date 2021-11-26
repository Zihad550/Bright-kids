import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <div className="social-container d-flex align-items-center justify-content-evenly  fs-5 ">
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
