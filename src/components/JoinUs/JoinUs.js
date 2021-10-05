import React from "react";
import "./JoinUs.css";

const JoinUs = () => {
  return (
    <div className="join-us-section py-5 text-white d-flex justify-content-evenly align-items-center my-5 ">
      <div>
        <h2>
          Join us <br /> and stay tuned
        </h2>
        <button className="btn-primary rounded-pill p-2">Enroll Now</button>
      </div>
      <div>
        <h1>349</h1>
        <p>Graduated</p>
      </div>
      <div>
        <h1>17</h1>
        <p>Teachers</p>
      </div>
      <div>
        <h1>8</h1>
        <p>Awards</p>
      </div>
    </div>
  );
};

export default JoinUs;
