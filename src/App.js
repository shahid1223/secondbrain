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
import AddBlog from "./pages/Blog/Components/AddBlog";
import SecondBrainState from "./context/SecondBrainState";
import { ToastContainer } from 'react-toastify';

const App = () => {
  let location = useLocation();
  return (
    <Fragment>
      <SecondBrainState>
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          <ToastContainer />
          {location.pathname.split('/').pop() === 'login' ? null : <Navbar />}
          <Routes>
            <Route path="/" element={<HomeIndex />} />
            <Route path="/aboutus" element={<AboutUsIndex />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addblog" element={<AddBlog />} />
          </Routes>
          {location.pathname.split('/').pop() === 'login' ? null : <Footer />}
      </SecondBrainState>
    </Fragment>
  );
}

export default App;
