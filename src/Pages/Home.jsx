import React from "react";
import "../Styles/Home.css";
import Productlist from "../Components/Productlist";
import { useSelector } from "react-redux";
import LatestCollection from "../Components/LatestCollection";
import BestSeller from "../Components/BestSeller";
import { assets } from "../Data/assets";
import Subscribe from "../Components/Subscribe";
const Home = () => {
  return (
    <>
      <div className="container">
        {/* HERO SECTION */}
        <div className="row hero-wrapper ">
          <div className="col-lg-6 col-md-6 col-sm-12  hero-text ">
            <div className="hero-text-wrapper">
              <div className="our-bestseller">
                <p className="hero-text-line"></p>
                <p>OUR BESTSELLERS</p>
              </div>
              <h1 className="text-center ">LATEST ARRIVAL</h1>
              <div className="shop-now">
                <p className="fw-bold ">SHOP NOW</p>
                <p className="hero-text-line"></p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12  hero-image p-0">
            {" "}
            <img className="img-fluid" src="/assets/hero_img.png" alt="" />{" "}
          </div>
        </div>
        {/* LATEST COLLECTION  */}
        <div className="row  p-5 mt-5">
          <div className="latest-text">
            <div className="latest-heading">
              <h2>
                LATEST <span className="fw-semibold">COLLECTION</span>{" "}
              </h2>

              <p className="hero-text-line"></p>
            </div>
            <p className="text-center latest-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the.
            </p>
          </div>
          <LatestCollection />
        </div>
        {/* SELLER  COLLECTION  */}
        <div className="row p-5 mt-5 best-seller-wrapper">
          <div className="bestseller-heading">
            <h2>
              BEST <span className="fw-semibold">SELLER</span>{" "}
            </h2>

            <p className="hero-text-line"></p>
          </div>
          <p className="text-center latest-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
          <div className="Best-seller-products mt-5">
            <BestSeller />
          </div>
        </div>
        {/* POLICY SECTION */}
        <div className="row policy-wrapper mt-2">
          <div className="col-lg-4 col-md-4 col-sm-12  Exchange-Policy p-5">
            <img src={assets.exchange_icon} className="img-fluid" alt="" />
            <h5 className="fw-bold">Easy Exchange Policy</h5>
            <p>We offer hassle free exchange policy</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12  return-Policy p-5">
            <img src={assets.quality_icon} className="img-fluid" alt="" />
            <h5 className="fw-bold">7 Days Return Policy</h5>
            <p>We provide 7 days free return policy</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12   support-Policy p-5">
            <img src={assets.support_img} className="img-fluid" alt="" />
            <h5 className="fw-bold">Best customer support</h5>
            <p>we provide 24/7 customer support</p>
          </div>
        </div>
        {/* SUBSCRIBE SECTION  */}
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
