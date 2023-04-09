import React, { Fragment, useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutUsIndex from "./pages/AboutUs/Index";
import HomeIndex from "./pages/Home/Index";
import BlogIndex from "./pages/Blog/Index";
//authtentication
import Login from "./pages/auth/Login";

import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import AddBlog from "./pages/Blog/Components/AddBlog";
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "./states/auth/authSlice";
import { fetchAllBlogs } from "./states/blog/blogSlice";
import PrivateRoute from './components/PrivateRoute';

const App = () => {

  const dispatch = useDispatch();

  const authenicated = useSelector(state => state.auth);
  const { isAuthenticated, token, loading } = authenicated;

  let location = useLocation();

  useEffect(() => {
    dispatch(fetchUserDetail());
    dispatch(fetchAllBlogs());
  }, []);

  return (
    <Fragment>
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
        <Route path="/addblog" element={<PrivateRoute isSignedIn={isAuthenticated && token !== null && !loading ? true : false}><AddBlog /></PrivateRoute>} />
      </Routes>
      {location.pathname.split('/').pop() === 'login' ? null : <Footer />}
    </Fragment>
  );
}

export default App;
