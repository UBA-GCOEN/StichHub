import React, { useState } from "react";
import logo from "../../assets/logo/Long - Logo Transparent (White).png";
import shortlogo from "../../assets/logo/Short-Logo Transparent (Black).png";
import customerimg from "../../assets/loginsignup/customerimg.png";
import tailorimg from "../../assets/loginsignup/tailorimg.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const CustomerAuth = () => {
  const [isregister, setIsRegister] = useState(true);
  const [form, setForm] = useState(initialForm);
  const navigateTo = useNavigate();

  const switchMode = () => {
    setForm(initialForm);
    setIsRegister((prevIsregister) => !prevIsregister);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSumbmit = (e) => {
    e.preventDefault();
  };

  const googleSuccess = async (res) => {
    const result = jwt_decode(res?.credential);
    
    try {
    navigateTo('/ClothesCategory');
    } catch (error) {
      console.log(error);
    }
  }

  const googleError = () => {
    alert('Google Sign In was unsuccessful. Try again later')
  }


  return (
    <div className="bg-gray-800 h-[100vh] flex justify-between overflow-hidden">
      {/* left Side */}
      <div className="relative bg-primary w-[49vw] my-10 rounded-r-3xl">
        <div className="relative z-[5]">
          {/* logo */}
          <div className="flex justify-center mt-10">
            <img src={logo} className="w-[240px]" />
          </div>
          {/* title */}
          <div className="flex justify-center my-4">
            <div>
              <img src={customerimg} alt="" className="w-[60px] mr-5" />
            </div>
            <div className="mt-3 text-center">
              <span className="text-white text-3xl font-semibold">
                Customer {isregister ? "Register" : "Sign in"}
              </span>
            </div>
          </div>

          {/* form */}
          <div className="flex justify-center">
            <form onSubmit={handleSumbmit}>
              {isregister && (
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  className="mt-[10px] block w-[25vw] py-2 pl-[40px] bg-white border rounded-xl text-xl shadow-sm drop-shadow-lg placeholder-slate-400 text-black focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                "
                />
              )}
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                onChange={handleChange}
                className="mt-[10px] block w-[25vw] py-2 pl-[40px] bg-white border border-slate-300 rounded-xl text-xl shadow-sm drop-shadow-lg placeholder-slate-400 text-black focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={handleChange}
                className="mt-[10px] block w-[25vw] py-2 pl-[40px] bg-white border border-slate-300 rounded-xl text-xl shadow-sm drop-shadow-lg placeholder-slate-400 text-black focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                "
              />
              {isregister && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handleChange}
                  className="mt-[10px] block w-[25vw] py-2 pl-[40px] bg-white border border-slate-300 rounded-xl text-xl shadow-sm drop-shadow-lg placeholder-slate-400 text-black focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                "
                />
              )}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-[15px] block w-[25vw] py-2 bg-blue-500 text-white rounded-xl font-regular text-xl"
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
        <div className="absolute circleGradient-blue w-[300px] h-[300px] top-[-10px] left-[-100px] z-0 blur-2xl"></div>
        <div className="absolute circleGradient-peach w-[300px] h-[300px] bottom-[0px] left-[-100px] z-0 blur-2xl"></div>
      </div>

      {/* Right Side (img)*/}
      <div className="bg-[url('../src/assets/registrationbg.png')] bg-contain bg-no-repeat bg-[#BADDF1] bg-center w-[49vw] my-10 rounded-l-3xl">
        <img
          src={shortlogo}
          className="w-[5vw] absolute bottom-14 right-5"
        ></img>
      </div>
    </div>
  );
};

export default CustomerAuth;
