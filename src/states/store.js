import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import blogSlice from "./blog/blogSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        blog: blogSlice
    }
});

export default store;