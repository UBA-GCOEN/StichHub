import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("profile")
    )}`;
  }
  else if (localStorage.getItem("tailorProfile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("tailorProfile")
    )}`;
  }

  return req;
});

export default instance;
