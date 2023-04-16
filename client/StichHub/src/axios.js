import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.6:5000",
});

instance.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
  }
  else if (localStorage.getItem("tailorProfile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("tailorProfile")).token}`;
  }

  return req;
});

export default instance;
