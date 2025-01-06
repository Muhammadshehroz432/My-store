import React from "react";
import "../Styles/About.css";
const About = () => {
  return (
    <>
      <div className="container  ">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12 image-wrapper ">
            <img src="/assets/about_img.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-wrapper p-5  ">
            <h1 className="fw-bold ">About us </h1>
            <p className="text-start ">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes. Since our inception, we've worked
              tirelessly to curate a diverse selection of high-quality products
              that cater to every taste and preference. From fashion and beauty
              to electronics and home essentials, we offer an extensive
              collection sourced from trusted brands and suppliers.
            </p>
            <h2 className="fw-bold ">Our Mission </h2>
            <p className="text-start ">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
        <div className="why-choose-wrapper p-5 ">
          <h1>Why Choose Us ?</h1>
          <div className="row  choose-us-wrapper p-3   ">
            <div className="col-lg-4 col-md-4 col-sm-12 why-choose-card  ">
              <h5 className="fw-bold text-start">Quality Assurance:</h5>
              <p className="text-start">
                We ensure that every product we offer meets the highest
                standards of quality, safety, and performance.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 why-choose-card  ">
              <h5 className="fw-bold text-start">Convenience:</h5>
              <p className="text-start">
                With our user-friendly interface and hassle-free ordering
                process, shopping has never been easier.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 why-choose-card ">
              <h5 className="fw-bold text-start">
                Exceptional Customer Service:
              </h5>
              <p className="text-start">
                Our team of dedicated professionals is here to assist you the
                way, ensuring your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
