import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import AboutUsIndex from "./pages/AboutUs/Index";
import HomeIndex from "./pages/Home/Index"
import BlogIndex from "./pages/Blog/Index";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeIndex/>,
    },
    {
      path: "/aboutus",
      element: <AboutUsIndex/>,
    },
    {
      path: "/blog",
      element: <BlogIndex/>,
    }
  ]);

  return (
    <Fragment>
      <Navbar/>
      <RouterProvider router={router} />
   </Fragment>
  );
}

export default App;
