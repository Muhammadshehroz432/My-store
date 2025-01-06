import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "../Styles/Singleproduct.css";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

import RelatedProductlist from "../Components/RelatedProductlist";
import { toast } from "react-toastify";

import { ProductDataSliceActions } from "../Store/Productdata";

const SingleProduct = () => {
  const { productId } = useParams();
  // item store
  const productcollection = useSelector((store) => store.items);

  // Filtering on the basis of product id
  const product = productcollection.find((item) => item._id === productId);

  // State for storing and updating the current image
  const [currentImage, setCurrentImage] = useState("");

  // State for storing and updating the current size
  const [currentSize, setCurrentSize] = useState("");

  // Dispatch function

  const dispatch = useDispatch();

  // NOTIFICATION
  const notify = () => {
    toast.error("Please select the size");
  };

  const productDataSlice = useSelector((store) => store.productdata);

  const productData = productDataSlice.productData;

  const handleAddToCart = (id) => {
    if (!currentSize) {
      notify();
      return;
    }

    let tempProductdata = structuredClone(productData);

    if (tempProductdata[id]) {
      if (tempProductdata[id][currentSize]) {
        tempProductdata[id][currentSize] += 1;
      } else {
        tempProductdata[id][currentSize] = 1;
      }
    } else {
      tempProductdata[id] = {};
      tempProductdata[id][currentSize] = 1;
    }

    dispatch(ProductDataSliceActions.setProductData(tempProductdata));
  };

  // executing product data

  const Filterimage = () => {
    productcollection.map((item) => {
      if (item._id === productId) {
        setCurrentImage(item.image[0]);
      }
    });
  };

  // executing the filter image function

  useEffect(() => {
    Filterimage();
  }, [productId]);

  return (
    <>
      <div className="container-fluid">
        <div className="row product-wrapper">
          {/* product image */}
          <div className="col-lg-6 col-md-6 col-sm-12 p-2 ">
            <div className="main-image">
              <img src={currentImage} alt="main-product-image" />
            </div>

            <div className="list-of-image">
              {product.image.map((image, index) => {
                return (
                  <img
                    key={index}
                    onClick={() => {
                      setCurrentImage(image);
                    }}
                    src={image}
                    alt="product-image"
                  />
                );
              })}
            </div>
          </div>
          {/* product details */}
          <div className="col-lg-6 col-md-6 col-sm-12 product-details-wrapper p-4 ">
            <div className="detail-wrapper">
              <h2>{product.name}</h2>
              <div className="product-reviews">
                <div className="product-star">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStarHalf />
                  </span>
                  <p className="product-reviews-count text-muted ">(122)</p>
                </div>
              </div>
              <h2 className="product-price text-start mt-2 fw-bold ">
                Rs {product.price}
              </h2>
              <h6 className="product-description">{product.description}</h6>
              {/* product sizes */}
              <div className="product-size   p-2 mt-4">
                <p className="product-size-heading text-start fw-bold">
                  Select Size
                </p>
                <div className="sizes">
                  {product.sizes.map((size, index) => (
                    <div
                      onClick={() => {
                        setCurrentSize(size);
                      }}
                      key={index}
                      className={`product-size-list ${
                        currentSize == size
                          ? `size-active`
                          : "border border-dark"
                      } `}
                    >
                      <p>{size}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  handleAddToCart(productId);
                }}
                type="button"
                className="btn  btn-lg Add-to-cart-btn "
              >
                Add to Cart
              </button>
              <div className="about-product">
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </div>
        </div>
        {/* DESCRIPTION AND REVIEW  */}
        <div className="row description-and-review-wrapper ">
          <div className="col-lg-12 p-3">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Description
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="description-text text-start">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Reviews
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RELATED PRODUCTS */}
        <div className="row related-products-wrapper ">
          <div className="related-products-heading ">
            <h2>RELATED PRODUCTS</h2>
            <div className="heading-line"></div>
          </div>
          <RelatedProductlist product={product} />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
