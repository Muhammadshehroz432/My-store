import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "../Styles/Collection.css";

import { MdArrowForwardIos } from "react-icons/md";
import Product from "../Components/Product";

const Collection = () => {
  // search val
  const ToggleSearch = useSelector((store) => store.search);
  let Search = ToggleSearch.searchval;
  const ProductCollection = useSelector((store) => store.items);
  const [showfilter, setShowfilter] = useState(false);

  const [Category, setCategory] = useState([]);
  const [Type, setType] = useState([]);
  const [SortType, setSortType] = useState("");
  const [Filterproducts, setFilterProducts] = useState([]);

  // FILTER TOGGLE

  const FilterToggle = () => {
    setShowfilter(!showfilter);
  };

  // TOGGLE TYPE
  const ToggleType = (e) => {
    if (Type.includes(e.target.value)) {
      setType(Type.filter((item) => item !== e.target.value));
    } else {
      setType((prev) => [...prev, e.target.value]);
    }
  };

  // CATEGORY TOGGLE

  const ToggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory(Category.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // FILTER ON THE BASIS OF CATEGORY AND type

  const ApplyFilter = () => {
    let ProductCopy = ProductCollection.slice();

    setFilterProducts(ProductCopy);

    if (Category.length > 0) {
      let FilterCategory = ProductCopy.filter((product) =>
        Category.includes(product.category)
      );
      setFilterProducts(FilterCategory);
    }
    if (Type.length > 0) {
      let FilterType = ProductCopy.filter((product) =>
        Type.includes(product.subCategory)
      );
      setFilterProducts(FilterType);
    }
  };

  // SORT PRODUCT ON THE BASIS OF PRICES

  const SortProduct = () => {
    // Ensure Filterproducts is defined and slice is invoked correctly
    let filterproduct = Filterproducts.slice();

    switch (SortType) {
      case "low-high":
        setFilterProducts(filterproduct.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterproduct.sort((a, b) => b.price - a.price));
        break;
      default:
        ApplyFilter();
    }
  };

  const SearchFilter = () => {
    let ProductCopy = ProductCollection.slice();
    let search = Search.toLowerCase();
    let searchProduct = ProductCopy.filter((product) => {
      return product.name.toLowerCase().includes(search);
    });
    setFilterProducts(searchProduct);
  };

  useEffect(() => {
    ApplyFilter();
  }, [Category, Type]);

  useEffect(() => {
    SortProduct();
  }, [SortType]);
  useEffect(() => {
    SearchFilter();
  }, [Search]);

  return (
    <>
      <div className="container">
        <div className="row ">
          {/* FILTER SECTION */}
          <div className="col-lg-2 col-md-12 col-sm-12 filter-wrapper p-3">
            <div className="filter-heading mb-4 d-flex align-items-center justify-content-between">
              <h2 className="text-uppercase m-0">Filters</h2>
              <div
                onClick={FilterToggle}
                className={`fs-3 d-lg-none d-md-block d-sm-block filter-icons ${
                  showfilter ? "rotate-down" : ""
                }`}
              >
                <MdArrowForwardIos />
              </div>
            </div>
            <div
              className={`both-filter-wrapper  d-lg-block ${
                showfilter ? "d-block" : "d-none"
              }`}
            >
              {/* CATEGORIES */}
              <div className="categories-wrapper p-3 mb-3">
                <h5 className="text-uppercase">Categories </h5>
                <div className="categories">
                  <div className="men mb-1">
                    <input
                      type="checkbox"
                      name="category"
                      value="Men"
                      onChange={ToggleCategory}
                    />
                    <label className="ms-2 fs-5">Men</label>
                  </div>
                  <div className="women mb-1">
                    <input
                      type="checkbox"
                      name="category"
                      value="Women"
                      onChange={ToggleCategory}
                    />
                    <label className="ms-2 fs-5">Women</label>
                  </div>
                  <div className="kids mb-1">
                    <input
                      type="checkbox"
                      name="category"
                      value="Kids"
                      onChange={ToggleCategory}
                    />
                    <label className="ms-2 fs-5">Kids</label>
                  </div>
                </div>
              </div>
              {/* TYPE */}
              <div className="type-wrapper p-3">
                <h5 className="text-uppercase">Type </h5>
                <div className="types">
                  <div className="topwear mb-1">
                    <input
                      type="checkbox"
                      name="type"
                      value="Topwear"
                      onChange={ToggleType}
                    />
                    <label className="ms-2 fs-5">Topwear</label>
                  </div>
                  <div className="bottomwear mb-1">
                    <input
                      type="checkbox"
                      name="type"
                      value="Bottomwear"
                      onChange={ToggleType}
                    />
                    <label className="ms-2 fs-5">Bottomwear</label>
                  </div>
                  <div className="Winterwear mb-1">
                    <input
                      type="checkbox"
                      name="type"
                      value="Winterwear"
                      onChange={ToggleType}
                    />
                    <label className="ms-2 fs-5">Winterwear</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* COLLECTION SECTION */}

          <div className="col-lg-10 col-md-12 col-sm-12 p-3">
            <select
              onChange={(e) => {
                setSortType(e.target.value);
              }}
              className="form-select product-sort"
              aria-label="Default select example"
            >
              <option value="relevant">Sort By: Relevant</option>
              <option value="low-high">Sort By: Low to High</option>
              <option value="high-low">Sort By: High to Low</option>
            </select>
            <div className="row collection-wrapper  ">
              {Filterproducts.map((item, index) => (
                <div
                  className="col-lg-3 col-md-5 col-sm-12 mt-4 product"
                  key={index}
                >
                  <Product item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
