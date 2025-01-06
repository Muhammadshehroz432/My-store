import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductDataSliceActions } from "../Store/Productdata";
import { RiDeleteBin5Line } from "react-icons/ri";
import "../Styles/Cart.css";
import TotalCart from "../Components/TotalCart";
import { NavLink } from "react-router-dom";

const Cart = () => {
  // items slice
  const productdatabase = useSelector((store) => store.items);

  // product data slcie
  const productdataSlice = useSelector((store) => store.productdata);
  // product data
  const productData = productdataSlice.productData;

  // dispatch
  const dispatch = useDispatch();

  const Removeproduct = (id) => {
    dispatch(ProductDataSliceActions.RemoveproductData(id));
  };

  const [Cartdata, setCartdata] = useState([]);

  useEffect(() => {
    let tempdata = [];
    for (const items in productData) {
      for (const size in productData[items]) {
        tempdata.push({
          id: items,
          size: size,
          quantity: productData[items][size],
        });
      }
    }
    setCartdata(tempdata);
  }, [productData]);

  return (
    <>
      <div className="container-fluid ">
        <div className="cart-heading">
          <h1>Your Cart</h1>
          <p className="cart-line"></p>
        </div>
        <div className="cart-wrapper p-lg-2 p-md-4 p-sm-0">
          {Cartdata.length === 0 ? (
            <p className="fw-bold text-center fs-2 mt-2">No Items in Cart</p>
          ) : (
            Cartdata.map((data) => {
              const product = productdatabase.find(
                (item) => item._id === data.id
              );
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
                      <RiDeleteBin5Line />
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <TotalCart />
        <button className="proceed-checkout mt-4">
          <NavLink to="/place-order" className="text-white">
            Proceed Checkout
          </NavLink>
        </button>
      </div>
    </>
  );
};

export default Cart;
