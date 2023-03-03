import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import AboutUsIndex from "./pages/AboutUs/Index";
import HomeIndex from "./pages/Home/Index"
import BlogIndex from "./pages/Blog/Index";
import {
  Route,
  Routes
} from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeIndex/>}/>
        <Route path="/aboutus" element={<AboutUsIndex/>}/>
        <Route path="/blog" element={<BlogIndex/>}/>
      </Routes>
      <Footer/>
   </Fragment>
  );
}

export default App;
