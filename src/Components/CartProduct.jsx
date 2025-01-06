import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { ProductDataSliceActions } from "../Store/Productdata";

const CartProduct = ({ cartdata }) => {
  // items slice
  const productdatabase = useSelector((store) => store.items);

  const dispatch = useDispatch();

  const Removeproduct = (id) => {
    dispatch(ProductDataSliceActions.RemoveproductData(id));
  };

  return (
    <>
      {cartdata.length === 0 ? (
        <p className="fw-bold text-center fs-2 mt-2">No Items in Cart</p>
      ) : (
        cartdata.map((data) => {
          const product = productdatabase.find((item) => item._id === data.id);
          return (
            <div
              key={data.id}
              className="cart-product-wrapper mt-4 mb-sm-4 mb-md-4"
            >
              <div className="cart-detail">
                <div className="cart-image">
                  <img
                    src={product?.image[0] || ""}
                    alt="product-image"
                    className="cart-image"
                  />
                </div>
                <div className="cart-name ms-2">
                  <h5 className="text-start">
                    {product?.name || "Unknown Product"}
                  </h5>
                </div>
                <div className="cart-price-size">
                  <p className="text-start">Rs {product?.price || "0"}</p>
                  <div className="size">
                    <span>{data.size}</span>
                  </div>
                </div>
              </div>
              <div className="cart-quantity">
                <span>{data.quantity}</span>
              </div>
              <div className="cart-icon">
                <span onClick={() => Removeproduct(data.id)}>
                  <RiDeleteBin6Line />
                </span>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default CartProduct;
