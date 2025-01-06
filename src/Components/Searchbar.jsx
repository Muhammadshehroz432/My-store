import React, { useEffect, useState } from "react";
import "../Styles/Searchbar.css";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../Store/Search";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(false);

  // Toggle Searchbar
  const searchbarSlice = useSelector((store) => store.search);
  const toggleSearchbar = searchbarSlice.showSearch;

  const dispatch = useDispatch();

  // SearchVal
  const [SearchVal, setSearchVal] = useState("");

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [location]);

  return (
    <div
      className={`${
        toggleSearchbar && isVisible ? "d-block" : "d-none"
      } search-wrapper`}
    >
      <div className="search-input p-4">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          onChange={(e) => {
            const value = e.target.value;
            setSearchVal(value);
          }}
        />
        <span
          className="search-icon fs-3"
          onClick={() => {
            dispatch(searchActions.setSearch(SearchVal));
          }}
        >
          <IoSearch />
        </span>
        <div className="close-icons">
          <span
            onClick={() => dispatch(searchActions.CloseSearch())}
            className="fs-3"
          >
            <IoMdClose />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
