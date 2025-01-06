import React, { useState } from "react";
import "../Styles/Place-order.css";
import TotalCart from "../Components/TotalCart";
import { NavLink } from "react-router-dom";

const Placeorder = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Formhandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
  };

  return (
    <>
      <div className="container">
        <div className="row  p-4">
          {/* Delivery Information */}
          <div className="col-lg-6 ">
            <h1 className="">Delivery Information </h1>
            <div className="information-wrapper  ">
              <form
                onSubmit={Formhandler}
                className="d-flex flex-column gap-3 "
              >
                <div className="name  ">
                  <input
                    className="p-2"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  <input
                    className="p-2"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>

                <input
                  className="p-2"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="p-2"
                  type="text"
                  name="street"
                  placeholder="Street Address"
                  value={formData.street}
                  onChange={handleChange}
                />
                <div className="city-state ">
                  <input
                    className="p-2"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <input
                    className="p-2"
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="zipcode-country">
                  <input
                    className="p-2"
                    type="text"
                    name="zipcode"
                    placeholder="Zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                  />
                  <input
                    className="p-2"
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
                <input
                  className="p-2"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <NavLink
                  to="/orders"
                  className="place-Order text-decoration-none"
                >
                  Place Order
                </NavLink>
              </form>
            </div>
          </div>
          {/* Payment Information */}
          <div className="col-lg-6 ">
            <TotalCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Placeorder;
