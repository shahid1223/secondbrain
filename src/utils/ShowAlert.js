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

const Alert = (type, msg, code) => {
    if (code === 200 || code === 201) {
        toast.success(msg, toastConfig);
    } else {
        toast.error(msg, toastConfig);
    }

}

const showToast = (type, msg, code) => {
    if (typeof msg === 'object') {
        msg.map((data) => {
            let alertNeMsg = data.message || data.msg || "Something went wrong";
            return Alert(type, alertNeMsg, code)
        })
    } else {
        Alert(type, msg, code)
    }
};

export default showToast;

