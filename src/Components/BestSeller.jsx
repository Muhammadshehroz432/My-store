import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "../Styles/Bestseller.css";

const BestSeller = () => {
  const Productitems = useSelector((store) => store.items);

  const BestSeller = Productitems.slice(0, 5);

  return (
    <>
      <div className="row BestSeller-products">
        {BestSeller.map((item, index) => (
          <div className="col-lg-2 ms-3 col-md-3 col-sm-12 " key={index}>
            <Product item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BestSeller;
