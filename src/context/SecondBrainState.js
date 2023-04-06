import React, { useState, useEffect } from "react";
import secondBrainContext from "./Context";
import { postData, getData } from '../utils/api';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";


const SecondBrainState = (props) => {

    const redirect = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState({
        isLoading: true,
        token: localStorage.getItem('token') !== null ? localStorage.getItem('token') : null
    });

    const [loginIfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });

    const [blogs, setBlogs] = useState([]);

    const [blogsData, setBlogsData] = useState();

    const { email, password } = loginIfo;

    const onChange = event => {
        setLoginInfo({ ...loginIfo, [event.target.name]: event.target.value });
    };

    const fetchBlogs = () => {
        const results = getData('/blog')
        setBlogs(results);
    }

    const login = async () => {
        if (!password || !email) {
            toast.error('Please enter email and password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        };
        const result = await postData('/auth/login', loginIfo);
        localStorage.setItem('token', result.token)
        setIsAuthenticated({ ...isAuthenticated, isLoading: false })
        console.log("result", result)
        if(result?.code === 200){
            redirect('/blog')
            fetchBlogs();
        }else{
            toast.error(result.message || "hello", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, [blogsData])

    return (
        <secondBrainContext.Provider value={{ email, password, blogs, isAuthenticated, blogsData, onChange, login }}>
            {props.children}
        </secondBrainContext.Provider>
    )
}

export default SecondBrainState;
