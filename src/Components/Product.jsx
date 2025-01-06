import React from "react";
import "../Styles/Product.css";
import { NavLink } from "react-router-dom";
const Product = ({ item }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="card product-card" style={{ width: "16rem" }}>
        {/* Image */}
        <div className="image-wrapper overflow-hidden">
          <NavLink to={`/product/${item?._id}`}>
            <img
              onClick={scrollToTop}
              className="img-fluid"
              src={item?.image?.[0] || "default-image.jpg"}
              alt={`Image of ${item?.name || "Product"}`}
            />
          </NavLink>
        </div>

        {/* Card Body */}
        <div className="card-body">
          <h5 className="card-title">{item?.name || "Unknown Product"}</h5>
          <p className="card-text fw-bold">Rs {item?.price || "N/A"}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
