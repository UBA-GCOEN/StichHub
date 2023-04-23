import axios from "axios";

const instance = axios.create({
  baseURL: "https://stichhub-backend-iiu6lb9i1-siddhant-patil0203.vercel.app",
});

instance.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  } else if (localStorage.getItem("tailorProfile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("tailorProfile")).token
    }`;
  }

  return req;
});

export default instance;
