import React, { useState } from "react";
import logo from "../../assets/logo/Long - Logo Transparent (White).png";
import shortlogo from "../../assets/logo/Short-Logo Transparent (Black).png";
import tailorimg from "../../assets/loginsignup/tailorimg.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "../../axios.js";
import { Player } from "@lottiefiles/react-lottie-player";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthTailor = () => {
  const [isregister, setIsRegister] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigateTo = useNavigate();

  const switchMode = () => {
    setForm(initialForm);
    setIsRegister((prevIsregister) => !prevIsregister);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSumbmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = isregister
        ? await axios.post("/userTailor/register", form)
        : await axios.post("/userTailor/signin", form);

      const result = res.data;

      if (isregister) localStorage.setItem("tailorFirstLogin", "true");
      localStorage.setItem("tailorProfile", JSON.stringify({ ...result }));

      setIsLoading(false);
      navigateTo("/TailorProfileVerification");
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false);
    }
  };

  const googleSuccess = async (res) => {
    const result = jwt_decode(res?.credential);
    localStorage.setItem("tailorProfile", JSON.stringify({ result }));

    try {
      navigateTo("/TailorProfileVerification");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => {
    alert("Google Sign In was unsuccessful. Try again later");
  };

  return (
    <div className="bg-gray-800 h-[100vh] flex justify-between overflow-hidden">
      {/* Loading Animations */}
      {isLoading ? (
        <div className="relative">
          <div className="absolute z-[100] left-[-10vw] lg:left-[30vw] top-[10vh]">
            <Player
              src="https://assets8.lottiefiles.com/packages/lf20_prjwp0b2.json"
              background="transparent"
              speed="1"
              style={{ height: "500px", width: "500px" }}
              loop
              autoplay
            />
          </div>
        </div>
      ) : null}
      {/* Left Side (img)*/}
      <div className="hidden lg:flex bg-[url('../src/assets/loginsignupbg.png')] bg-contain bg-no-repeat bg-[#BADDF1] bg-center w-[49vw] my-10 rounded-l-3xl">
        <img
          src={shortlogo}
          className="w-[5vw] absolute bottom-14 left-5"
        ></img>
      </div>

      {/* Right Side */}
      <div className="relative bg-primary w-full lg:w-[49vw] my-10 rounded-3xl lg:rounded-r-3xl">
        <div className="relative z-[5]">
          {/* logo */}
          <a href="/" className="flex justify-center mt-10">
            <img src={logo} className="w-[240px]" />
          </a>
          {/* title */}
          <div className="flex justify-center my-4">
            <div>
              <img src={tailorimg} alt="" className="w-[60px] mr-5" />
            </div>
            <div className="mt-3 text-center">
              <span className="text-white text-3xl font-semibold">
                Tailor {isregister ? "Register" : "Sign in"}
              </span>
            </div>
          </div>

          {/* Auth Error */}
          <div className="flex justify-center">
            <p className="text-red-500 m-2">{error}</p>
          </div>

          {/* form */}
          <div className="flex justify-center">
            <form onSubmit={handleSumbmit}>
              {isregister && (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute z-[5] m-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-[10px] block w-[300px] py-2 pl-[45px] bg-white border rounded-xl text-xl shadow-sm drop-shadow-lg placeholder-slate-400 text-black focus:font-medium
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                "
                  />
                </div>
              )}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute z-[5] m-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-[10px] block w-[300px] py-2 pl-[45px] bg-white border border-slate-300 rounded-xl text-xl shadow-sm drop-shadow-lg placeholder-slate-400 text-black focus:font-medium
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 absolute z-[5] m-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={form.password}
                  onChange={handleChange}
                  className="mt-[10px] block w-[300px] py-2 pl-[45px] bg-white border border-slate-300 rounded-xl text-xl shadow-sm drop-shadow-lg placeholder-slate-400 text-black focus:font-medium
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                "
                />
              </div>
              {isregister && (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute z-[5] m-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="mt-[10px] block w-[300px] py-2 pl-[45px] bg-white border border-slate-300 rounded-xl text-xl shadow-sm drop-shadow-lg placeholder-slate-400 text-black focus:font-medium
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                "
                  />
                </div>
              )}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-[15px] block w-[170px] py-2 bg-blue-500 text-white rounded-xl font-regular text-xl"
                >
                  {isregister ? "Register" : "Sign in"}
                </button>
              </div>

              <h1 className="text-center text-white text-xl py-4">or</h1>

              <div className="flex justify-center">
                <GoogleLogin
                  onSuccess={googleSuccess}
                  onFailure={googleError}
                  cookiePolicy="single_host_origin"
                />
              </div>
              <h1 className="text-center text-white text-md pt-6">
                {isregister ? "Already a user?" : "Don't have an account?"}
                <a
                  className="cursor-pointer text-blue-400"
                  onClick={switchMode}
                >
                  &nbsp; {isregister ? "sign in" : "register"}
                </a>
              </h1>
            </form>
          </div>
        </div>

        {/* BG-Gradients */}
        <div className="absolute circleGradient-blue w-[300px] h-[300px] top-[-10px] right-[-100px] z-0 blur-2xl"></div>
        <div className="absolute circleGradient-peach w-[300px] h-[300px] bottom-[0px] right-[-100px] z-0 blur-2xl"></div>
      </div>
    </div>
  );
};

export default AuthTailor;
