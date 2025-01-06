import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Collection from "./Pages/Collection.jsx";
import Contact from "./Pages/Contact.jsx";
import SingleProduct from "./Pages/SingleProduct.jsx";
import Cart from "./Pages/Cart.jsx";
import Login from "./Pages/Login.jsx";
import Placeorder from "./Pages/Placeorder.jsx";
import Orders from "./Pages/Orders.jsx";
import Store from "./Store/Store.js";
import { Provider, useSelector } from "react-redux";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/product/:productId", element: <SingleProduct /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
      { path: "/place-order", element: <Placeorder /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>
);
