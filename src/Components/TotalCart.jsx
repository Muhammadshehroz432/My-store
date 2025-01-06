import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const TotalCart = () => {
  const Shippingfee = 10;

  // Selectors for state slices
  const Productadatabase = useSelector((store) => store.items);
  const productdataSlice = useSelector((store) => store.productdata);
  const productData = productdataSlice.productData;

  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tempprice = 0;

    // Iterate through productData correctly
    for (const itemId in productData) {
      const sizes = productData[itemId]; // Object containing sizes and their quantities
      const product = Productadatabase.find(
        (product) => product._id === itemId
      );

      if (product) {
        for (const size in sizes) {
          const quantity = sizes[size]; // Quantity for the specific size
          tempprice += product.price * quantity;
        }
      }
    }

    setPrice(tempprice);
    setTotal(tempprice + Shippingfee);
  }, [productData, Productadatabase]);

  return (
    <div className="cart-total">
      <h1 className="cart-total-heading">Cart Total</h1>
      <div className="sub-total">
        <p className="text-start">Price</p>
        <p className="text-start"> Rs {price}</p>
      </div>
      <div className="shipping-fee">
        <p className="text-start">Shipping fee</p>
        <p className="text-start"> Rs {Shippingfee}</p>
      </div>
      <div className="total">
        <p className="text-start fw-bold">Total</p>
        <p className="text-start fw-bold"> Rs {total}</p>
      </div>
    </div>
  );
};

export default TotalCart;
