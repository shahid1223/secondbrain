import React,{useState, useEffect} from "react";
import secondBrainContext from "./Context";
import { postData, getData } from '../utils/api';
import { toast } from 'react-toastify';

const SecondBrainState = (props) => {

    const [isAuthenticated , setIsAuthenticated] = useState({
        isLoading:true,
        token:null
    });
    
    const [loginIfo, setLoginInfo] = useState({
        email:"",
        password:""
    });
    
    const [blogs , setBlogs] = useState([]);

    const [blogsData, setBlogsData] = useState();

    const { email, password } = loginIfo;

    const onChange = event => {
        setLoginInfo({...loginIfo , [event.target.name] : event.target.value});
    };

    const fetchBlogs = () => {
        const results = getData('/blog')
        setBlogs(results);
    }

    const login = () => {
        if(!password || !email) {
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
        const result = postData('/auth/login', loginIfo);
        setIsAuthenticated({
            isLoading:false,
            token:result.token
        })
        fetchBlogs();
    };

    useEffect(() => {
        fetchBlogs();
    },[blogsData])

    return (
        <secondBrainContext.Provider value={{email, password, blogs, isAuthenticated, blogsData, onChange, login}}>
            {props.children}
        </secondBrainContext.Provider>
    )
}

export default SecondBrainState;