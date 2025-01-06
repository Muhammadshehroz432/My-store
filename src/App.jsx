import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Searchbar from "./Components/Searchbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Searchbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
