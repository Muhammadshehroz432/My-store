import React from "react";
import "../Styles/Home.css";
const Subscribe = () => {
  return (
    <>
      <div className="container">
        <div className="row subscribe-wrapper mt-5">
          <div className="subscribe-heading">
            <h3 className="text-center">Subscribe now and get 20% off</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="subscribe-input">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
            />

            <button type="submit" className=" subscribe-btn ">
              Submit
            </button>
          </div>
          <center></center>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
