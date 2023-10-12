import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export const UnAuthenticated = () => {
  return <RouterProvider router={router} />;
};
