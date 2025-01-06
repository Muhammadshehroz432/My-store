import React from "react";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="container-fluid ">
        <footer className="row footer-wrapper  mt-5 p-5">
          <div className="col-lg-5 col-md-8 col-sm-12  footer-logo">
            <h1>My Store</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-lg-2  col-md-2 col-sm-12 bg company">
            <ul>
              <h5>Company</h5>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4   get-in">
            <ul>
              <h5>GET IN TOUCH</h5>
              <li>+1-000-000-0000</li>
              <li>MyEmail@gmail.com</li>
              <li>instagram</li>
            </ul>
          </div>
        </footer>
        <div className="row">
          <div className="col-lg-12  footer-rights p-2">
            <p>Copyright 2024@MuhammadShehroz - All Right Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
