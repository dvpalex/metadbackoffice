import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

export const Authenticated = () => {
  return <RouterProvider router={router} />;
};
