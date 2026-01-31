import React from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Login from "./Login.jsx";
import Browse from "./Browse.jsx";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <>
    <div>
      <RouterProvider router={appRouter} />
    </div>
    </>
  );
};

export default Body;
