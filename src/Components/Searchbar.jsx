import React, { useEffect, useState } from "react";
import "../Styles/Searchbar.css";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../Store/Search";
import { useLocation } from "react-router-dom";
const Searchbar = () => {
  const ToggleSearch = useSelector((store) => store.search);

  const ToggleSearchbar = ToggleSearch.showSearch;
  const Location = useLocation();
  const dispatch = useDispatch();
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    if (Location.pathname.includes("collection")) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  }, [Location]);

  return (
    <>
      <div
        className={`search-wrapper ${
          ToggleSearchbar && visible ? `d-block` : `d-none`
        } `}
      >
        <div className=" search-input p-4">
          <input
            onChange={(e) => {
              console.log(dispatch(searchActions.setSearch(e.target.value)));
            }}
            type="text"
            className="search-bar"
            placeholder="Search"
          />
          <span className="search-icon fs-3">
            <IoSearch />
          </span>
          <div className="close-icons">
            <span
              className="fs-3"
              onClick={() => {
                dispatch(searchActions.CloseSearch());
              }}
            >
              <IoMdClose />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
