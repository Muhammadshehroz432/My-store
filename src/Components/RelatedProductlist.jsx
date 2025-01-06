import React from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/SingleProduct.css";

const RelatedProductlist = ({ product }) => {
  const ProductCollection = useSelector((store) => store.items);
  let RelatedProducts = ProductCollection.filter(
    (item) => item.name === product.name
  );
  let FinalRelatedProducts = RelatedProducts.slice(0, 5);

  // when i click on the single realted product it will take me back on teh screen

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="row Related-product-wrapper p-4 ">
        {FinalRelatedProducts.map((item, index) => (
          <div
            onClick={scrollToTop}
            className="col-lg-2 col-md-4 col-sm-12 mt-3"
            key={index}
          >
            <Product item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProductlist;
