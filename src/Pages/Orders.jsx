import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../Styles/Order.css";

const Orders = () => {
  const productdabase = useSelector((store) => store.items);
  const productdataslice = useSelector((store) => store.productdata);
  const productdata = productdataslice.productData;

  const [orderdata, setorderdata] = useState([]);

  useEffect(() => {
    let temporderdata = [];
    for (const items in productdata) {
      for (const size in productdata[items]) {
        temporderdata.push({
          id: items,
          size: size,
          quantity: productdata[items][size],
        });
      }
    }

    setorderdata(temporderdata);
  }, [productdata]);

  return (
    <>
      {orderdata.length === 0 ? (
        <p className="fw-bold fs-1 mt-2">There is no order placed</p>
      ) : (
        orderdata.map((order, index) => {
          const product = productdabase.find((item) => item._id === order.id);
          return (
            <div key={index} className="container-fluid">
              <div className="row order-product-wrapper p-2">
                <div className="wrapper">
                  <div className="image-detail-wrapper">
                    <div className="product-image">
                      <img
                        className="order-image"
                        src={product?.image[0] || ""}
                        alt="product-image"
                      />
                    </div>
                    <div className="order-details">
                      <h6>Order ID: {order.id}</h6>
                      <h6>Rs {product?.price || "0"}</h6>
                      <h6>Quantity: {order.quantity}</h6>
                      <h6>Size: {order.size}</h6>
                      <h6>Date: 25/12/2024</h6>
                      <h6>Payment: COD</h6>
                    </div>
                  </div>

                  <div className="order-placed-wrapper">
                    <div className="order-placed">
                      <div className="green-dot"></div>
                      <h6>Order Placed</h6>
                    </div>
                  </div>
                  <div className="track-order p-1">
                    <h6 className="mt-2">Track Order</h6>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Orders;
