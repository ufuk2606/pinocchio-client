import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from "./App";
import "./index.css";
import 'animate.css';
import 'animate.css/animate.min.css';
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import Home from "./pages/Home";
import Speisekarten from "./pages/Speisekarten";
import Gallery from "./pages/Gallery";
import Reservation from "./pages/Reservation";
import OnlineBestellung from "./pages/OnlineBestellung";
import Kontakt from "./pages/Kontakt";
import UberUns from "./pages/UberUns";
import WelcomePage from './pages/WelcomePage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

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
        element: <ProtectedRoute><Speisekarten /></ProtectedRoute> ,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "reservation",
        element: <ProtectedRoute><Reservation /></ProtectedRoute> ,
      },
      {
        path: "onlineBestellung",
        element: <ProtectedRoute> <OnlineBestellung /></ProtectedRoute> ,
      },
      {
        path: "onlineBestellung/:id",
        element: <ProtectedRoute> <OnlineBestellung /></ProtectedRoute> ,
      },
      {
        path: "kontakt",
        element: <ProtectedRoute> <Kontakt /></ProtectedRoute> ,
      },
      {
        path: "uberUns",
        element: <UberUns />,
      },
      {
        path: "welcome",
        element:
          <ProtectedRoute>
            <WelcomePage />
          </ProtectedRoute>
      },
      {
        path: "dashboard",
        element:
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-nl5gkw2aker4eggh.us.auth0.com"
      clientId="dbEhLnZK782uNiYJRKUuNgjGbJZ4qPLk"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
