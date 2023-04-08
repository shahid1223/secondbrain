import { toast } from "react-toastify";

let toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }
const showToast = (type, msg) => {
    if(typeof msg === 'object'){
        msg.map((data) => {
            let alertNeMsg = data.message || data.msg || "Something went wrong";
            toast[type](alertNeMsg, toastConfig);
        })
    }else{
        toast[type](msg, toastConfig);

    }
};

export default showToast;

