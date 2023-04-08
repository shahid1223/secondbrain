import React, { useState, useEffect } from "react";
import secondBrainContext from "./Context";
import { postData, getData } from '../utils/api';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";
import showToast from "../utils/ShowAlert";


const SecondBrainState = (props) => {

    const redirect = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState({
        isLoading: localStorage.getItem('token') !== null ? false : true,
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

    const fetchBlogs = async () => {
        const results = await getData('/blog')
        setBlogs(results?.allBlogs);
    }

    const login = async () => {
        if (!password || !email) {
            showToast('error', 'Please enter email and password');
            setLoginInfo({
                email: "",
                password: ""
            });
        } else {
            const result = await postData('/auth/login', loginIfo);
            if (result?.code === 200) {
                localStorage.setItem('token', result.token)
                setIsAuthenticated({ ...isAuthenticated, isLoading: false })
                redirect('/blog');
                showToast('success', [result]);
                fetchBlogs();
                setLoginInfo({
                    email: "",
                    password: ""
                });
            } else {
                showToast('error', result.message)
                setLoginInfo({
                    email: "",
                    password: ""
                });
            }
        }
    };

    const uploadBlogs = async (blogData) => {
        console.log(blogData.replace(/"/g , "'"));
        // return;
        if (!blogData) {
            showToast('error', 'Please provide a blog data');
        } else {
            let obj = {
                draft : blogData.replace(/"/g , "'")
            }
            console.log(obj)
            const result = await postData('/blog', obj);
            if (result?.code === 200 || result?.code === 201) {
                redirect('/blog');
                showToast('success', [result]);
                fetchBlogs();
            } else {
                showToast('error', result.message)
            }
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [blogsData])

    return (
        <secondBrainContext.Provider value={{ email, password, blogs, isAuthenticated, blogsData, onChange, login , uploadBlogs,fetchBlogs}}>
            {props.children}
        </secondBrainContext.Provider>
    )
}

export default SecondBrainState;
