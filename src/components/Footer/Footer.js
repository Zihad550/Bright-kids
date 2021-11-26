import React from "react";
import Social from "../Social/Social";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="primary-title px-5 pt-5">
      <div className="d-flex flex-column flex-md-row justify-content-evenly">
        <div className="text-center text-md-start">
          <h4>Contact</h4>
          <p>
            329 Queensberry Street, North Melbourne <br />
            VIC 3051, Australia. <br />
            123 456 7890 <br />
            support@edumy.com
          </p>
        </div>
        <div className="d-flex flex-column text-center text-md-start my-4 my-md-0">
          <h4> COMPANY </h4>
          <a href="#" className="text-warning fs-5 text-decoration-none">
            About Us
          </a>
          <a href="#" className="text-warning fs-5 text-decoration-none">
            Blog
          </a>
          <a href="#" className="text-warning fs-5 text-decoration-none">
            Contact
          </a>
          <a href="#" className="text-warning fs-5 text-decoration-none">
            Become a Teacher
          </a>
        </div>
        <div className="d-flex flex-column text-center text-md-start">
          <h4> SUPPORT </h4>
          <a href="#" className="text-warning fs-5 text-decoration-none">
            Documentation
          </a>
          <a href="#" className="text-warning fs-5 text-decoration-none">
            Forums
          </a>
          <a href="#" className="text-warning fs-5 text-decoration-none">
            Language Packs
          </a>
          <a href="#" className="text-warning fs-5 text-decoration-none">
            Release Status
          </a>
        </div>
      </div>

      {/* copy right and social sextion */}
      <div className="mt-4 d-flex flex-column-reverse flex-md-row justify-content-evenly align-items-center">
        <p className="m-0">&copy;2021 Bright Kids. All rights reserved. </p>
        <Social />
      </div>
    </div>
  );
};

export default Footer;
