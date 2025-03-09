import axios from "axios";
import { toast } from "react-toastify";

let authorizedAxiosInstance = axios.create();

authorizedAxiosInstance.defaults.timeout = 1000 * 60 * 10;
authorizedAxiosInstance.defaults.withCredentials=true


authorizedAxiosInstance.interceptors.request.use(
  function (config) {
    
    const accessToken= localStorage.getItem('accessToken')
    if (accessToken){
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
  },
  function (error) {
    
    return Promise.reject(error);
  }
);


authorizedAxiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response?.status !== 410){
        toast.error(error.response?.data?.message || error?.message)
    }
    return Promise.reject(error);
  }
);

export default authorizedAxiosInstance;
