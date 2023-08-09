import React, { useRef, useState } from "react";
import logo from "../../assets/logo/Long - Logo Transparent (White).png";
import shortlogo from "../../assets/logo/Short-Logo Transparent (Black).png";
import customerimg from "../../assets/loginsignup/customerimg.webp";
import tailorimg from "../../assets/loginsignup/tailorimg.webp";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axios.js";
import { Player } from "@lottiefiles/react-lottie-player";


const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigateTo = useNavigate();
  const {userType} = useParams();
  
  const emailRef = useRef();

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
  };


  const handleContinue = async () => {
    setIsLoading(true);
    
    try {
      const  data = {email, "model" : userType}
      const res = await axios.post("/forgotpassword", data)
      if(res.status===200){
          alert("email verified");
        }  
        else{
          alert("email not registered!!");
        }         
      setIsLoading(false);
    //   navigateTo("/home");
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false);
    }
  };



  return (
    <div className="bg-gray-800 h-[105vh] flex justify-between overflow-hidden">
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
      ):null}
      {/* left Side */}
      <div className="relative bg-primary w-full lg:w-[49vw] my-10 rounded-3xl lg:rounded-r-3xl">
        <div className="relative z-[5]">
          {/* logo */}
          <a href="/" className="flex justify-center mt-6">
            <img src={logo} className="w-[240px]" alt="logo with text that says StichHub stitch your way" loading="lazy"/>
          </a>
          {/* title */}
          <div className="flex justify-center my-1">
            <div>
              {/* <img loading="lazy" src={customerimg} alt="" className="w-[50px] mr-5" /> */}
            </div>
            <div className="mt-3 text-center">
              <span className="text-white text-3xl font-semibold">
                Forgot Password
              </span>
            </div>
          </div>

          {/* Auth Error */}
          <div className="flex justify-center">
            <p className="text-red-500 m-2 text-center">{error}</p>
          </div>

          {/* form */}
          <div className="flex justify-center">
            <form>
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
                  value={email}
                  ref={emailRef}
                  onChange={handleEmailChange}
                  className="mt-[30px] block w-[400px] py-2 pl-[45px] bg-white border border-slate-300 rounded-xl text-xl shadow-sm drop-shadow-lg placeholder-slate-400 text-black focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  aria-label="Enter you email"
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="flex justify-center">
                <input type="button"
                  className="mt-[55px] block w-[120px] py-2 mr-2 bg-blue-500 text-white rounded-xl font-regular text-xl"
                onClick={()=>{navigateTo(`/auth/${userType}`)}}
                value="Back"
                />
                  
                {/* </input> */}
                <input type="button"
                  className="mt-[55px] block w-[140px] py-2 ml-2 bg-blue-500 text-white rounded-xl font-regular text-xl"
                  onClick={handleContinue}
                  value = "Continue"
                />
                  
                {/* </input> */}
              </div>
            </form>
          </div>
        </div>

        {/* BG-Gradients */}
        <div className="absolute circleGradient-blue w-[300px] h-[300px] top-[-10px] left-[-100px] z-0 blur-2xl"></div>
        <div className="absolute circleGradient-peach w-[300px] h-[300px] bottom-[0px] left-[-100px] z-0 blur-2xl"></div>
      </div>

      {/* Right Side (img)*/}
      <div className="hidden lg:flex bg-[url('../src/assets/loginsignupbg.webp')] bg-contain bg-no-repeat bg-[#BADDF1] bg-center w-[49vw] my-10 rounded-l-3xl">
        <img loading="lazy"
          src={shortlogo}
          className="w-[5vw] absolute bottom-14 right-5"  alt="a black and blue letters S and H"
        ></img>
      </div>
    </div>
  );
};

export default ForgotPassword;


