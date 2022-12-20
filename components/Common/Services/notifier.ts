
import { ToastContainer, toast } from 'react-toastify';

class NotifierService {
    constructor() {
    }

    info(message, timeOut?) {
        toast.info(message, {
            position: "top-right",
            autoClose: timeOut || 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    error(message, timeOut?) {
        toast.error(message, {
            position: "top-right",
            autoClose: timeOut || 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    warn(message, timeOut?) {
        toast.warn(message, {
            position: "top-right",
            autoClose: timeOut || 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    success(message, timeOut?) {
        toast.success(message, {
            position: "top-right",
            autoClose: timeOut || 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}

export default NotifierService;

