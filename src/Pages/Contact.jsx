import React from "react";
import "../Styles/Contact.css";
import Subscribe from "../Components/Subscribe";
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row  p-3 ">
          <div className="col-lg-6 col-md-6 col-sm-12 image-wrapper ">
            <img src="/assets/contact_img.png" alt="contact-png" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-wrapper p-5   ">
            <h1 className="fw-bold ">Contact us </h1>
            <div className="contact-details mt-4">
              <h4 className="text-start fw-bold ">Our Store</h4>
              <p className="text-start fs-6">
                54709 Willms Station Suite 350, Washington, USA
              </p>
              <p className="text-start fs-6">Tel: (415) 555-0132</p>
              <p className="text-start fs-6">Email: admin@forever.com</p>
              <h4 className="text-start fw-bold mt-3">Careers at Forever </h4>
              <p className="text-start fs-6">
                Learn more about our teams and job openings.
              </p>
              <button className="exlopre-job">Explore job</button>
            </div>
          </div>
          <Subscribe />
        </div>
      </div>
    </>
  );
};

export default Contact;
