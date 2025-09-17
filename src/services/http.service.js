import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { config as configs } from "./../config/config";
import signInReducer from "src/redux/slices/auth/signinSlice";

const CancelToken = axios.CancelToken;

let source = CancelToken.source();

axios.defaults.baseURL = configs.API_URL;

axios.interceptors.request.use(
    (config) => {
        const deviceId = uuidv4();
        return {
            ...config,
            cancelToken: source.token,
            headers: {
                ...config.headers,
                 locale: "US", 
                 lan: "en", 
                 deviceId: deviceId
            }
        };
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (res) => {
        const { config } = res;
        const { url, method } = config;
        const { data, message } = res.data;


        return res;
    },
    (err) => {
        const { config, message: msg, response } = err;
        const message = response?.data?.message;
        const { url, method } = config;

        // ToasterService.showError(message || msg);

        if (!response) throw err;

        const { code } = response.data;

        if (
            code === 401 &&
            (message === "Unauthorized" ||
                message === "Password has been changed, Login again" ||
                message === "Login session has been expired, Login again")
        ) {
            signInReducer.logout();
            source.cancel(message);

            setTimeout(() => {
                source = CancelToken.source();

                if (window.location.pathname !== "/") window.location.assign("/");
            }, 300);
        }

        throw err;
    }
);

const http = {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    patch: axios.patch,
    delete: axios.delete,
    getUserBaseUrl: () => configs.USER_API_URL,
    setJWT: () => {
        axios.defaults.headers.common["Authorization"] =
            localStorage.getItem("token") || "";
    },

};

export default http;