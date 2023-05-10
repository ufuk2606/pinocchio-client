import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Speisekarten from "./pages/Speisekarten";
import Gallery from "./pages/Gallery";
import Reservation from "./pages/Reservation";
import OnlineBestellung from "./pages/OnlineBestellung";
import Kontakt from "./pages/Kontakt";
import UberUns from "./pages/UberUns";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "speisekarten",
        element: <Speisekarten />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "onlineBestellung",
        element: <OnlineBestellung />,
      },
      {
        path: "kontakt",
        element: <Kontakt />,
      },
      {
        path: "uberUns",
        element: <UberUns />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
