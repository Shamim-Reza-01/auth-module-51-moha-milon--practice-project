import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Route from "./Component/Route";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Home from "./Component/Home";
import AuthProvider from "./Provaider/AuthProvider";
import Order from "./Component/Order";
import PravetRouter from "./PravetRouter/PravetRouter";
import Profile from "./Component/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/order',
        element:<PravetRouter><Order></Order></PravetRouter>
      },
      {
        path: '/profile',
        element : <PravetRouter><Profile></Profile> </PravetRouter>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
