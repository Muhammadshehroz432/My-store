import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import "../Styles/Product.css";

const LatestCollection = () => {
  const Productitems = useSelector((store) => store.items);
  const LatestItems = Productitems.slice(0, 8);

  return (
    <>
      <div className="row latest-products   ">
        {LatestItems.map((item, index) => (
          <div
            className="col-lg-3 col-md-3 col-sm-12  mt-4 product"
            key={index}
          >
            <Product item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestCollection;
