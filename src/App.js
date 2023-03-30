import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import AboutUsIndex from "./pages/AboutUs/Index";
import HomeIndex from "./pages/Home/Index";
import BlogIndex from "./pages/Blog/Index";
//authtentication
import Login from "./pages/auth/Login";

import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  let location = useLocation();
  return (
    <Fragment>
      {location.pathname.split('/').pop() === 'login' ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/aboutus" element={<AboutUsIndex />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {location.pathname.split('/').pop() === 'login' ? null : <Footer />}
    </Fragment>
  );
}

export default App;
