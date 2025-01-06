import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import "../Styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

import { searchActions } from "../Store/Search";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  //  product data slcie
  const productdataSlice = useSelector((store) => store.productdata);

  // product data

  const productdata = productdataSlice.productData;

  const UpdateCartcount = () => {
    let count = 0;
    for (const items in productdata) {
      for (const size in productdata[items]) {
        if (productdata[items][size] > 0) {
          count += productdata[items][size];
        }
      }
    }
    return count;
  };

  // dispatch
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-transparent p-4">
        <div className="container d-flex align-items-center">
          {/* Nav-icons for mobile view */}
          <div className="nav-icons order-lg-2 order-1 me-2 d-lg-none">
            <div className="search">
              <span
                onClick={() => {
                  dispatch(searchActions.OpenSearch());
                }}
              >
                <CiSearch />
              </span>
            </div>
            <div className="user">
              <div className="dropdown">
                <span
                  className="fs-2 dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <CiUser />
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <NavLink
                      to="/orders"
                      className="dropdown-item"
                      onClick={closeNav}
                    >
                      My Orders
                    </NavLink>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cart position-relative">
              <span>
                <NavLink to="/cart">
                  <CiShoppingCart />
                </NavLink>
              </span>
              <span className="badge bg-dark text-white position-absolute top-0 start-100 translate-middle fs-6 cart-badge">
                {UpdateCartcount()}
              </span>
            </div>
          </div>

          {/* Brand Name */}
          <NavLink to="/" className="navbar-brand text-dark">
            MY STORE
          </NavLink>

          {/* Toggle button */}
          <button
            className="navbar-toggler order-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div
            className={`collapse navbar-collapse order-4 ${
              isNavOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-routes">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active " : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                  onClick={closeNav}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/collection"
                  onClick={closeNav}
                >
                  Collection
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/about"
                  onClick={closeNav}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/contact"
                  onClick={closeNav}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            {/* Nav-icons for desktop view */}
            <div className="nav-icons order-3 ms-auto d-none d-lg-flex">
              <div className="search">
                <span
                  onClick={() => {
                    dispatch(searchActions.OpenSearch());
                  }}
                >
                  <CiSearch />
                </span>
              </div>
              <div className="user">
                <div className="dropdown">
                  <span
                    className="fs-2 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <CiUser />
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        My Profile
                      </a>
                    </li>
                    <li>
                      <NavLink to="/orders" className="dropdown-item">
                        My Orders
                      </NavLink>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cart position-relative">
                <span>
                  <NavLink to="/cart">
                    <CiShoppingCart />
                  </NavLink>
                </span>
                <span className="badge bg-dark text-white position-absolute top-0 start-100 translate-middle fs-6 cart-badge">
                  {UpdateCartcount()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
