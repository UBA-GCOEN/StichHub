import React from "react";
import {
  ContactUsVector,
  EmailIcon,
  AvatarIcon,
  PhoneIcon,
  SendVector,
} from "../../assets/MainLandingPage/Icons";

const ContactUs = () => {
  return (
    <div className="h-[100%] relative p-20 ml-20 mr-20">
      <div className="relative z-[5] flex justify-evenly">
        {/* left-Side */}
        <div id="leftside" className="mb-[20px] bottom-[20p]">
          <img src={ContactUsVector} className="" />
          <p className="text-left text-xl w-[900px]"></p>
        </div>

        {/* Right-Side */}
        <div id="rightSide" className="">
          {/* Title */}
          <div id="Headings" className="text-left">
            <h1 id="title" className="text-5xl font-medium pb-4">
              GET IN TOUCH
            </h1>
            <span id="subTitle" className="text-slate-300">
              We will answer your every questions and problems
            </span>
          </div>

          {/* Form */}
          <form id="form-Container" className="">
            <div id="yourName" className="">
              <img
                src={AvatarIcon}
                alt=""
                id="icon"
                className="absolute ml-[5px] mt-[2px]"
              />
              <input
                type="text"
                placeholder="Your Name"
                className="mt-[30px] block w-full py-[16px] pl-[80px] bg-white border border-slate-300 rounded-2xl text-xl shadow-sm placeholder-slate-400 text-black focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              ></input>
            </div>
            <div id="Email" className="">
              <img
                src={EmailIcon}
                alt=""
                id="icon"
                className="absolute ml-[5px] mt-[2px]"
              />
              <input
                type="email"
                placeholder="Email"
                className="mt-[30px] block w-full py-[16px] pl-[80px] bg-white border border-slate-300 rounded-2xl text-xl shadow-sm placeholder-slate-400 text-black focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              ></input>
            </div>
            <div id="Phone no." className="">
              <img
                src={PhoneIcon}
                alt=""
                id="icon"
                className="absolute ml-[5px] mt-[2px]"
              />
              <input
                type="tel"
                placeholder="Phone no."
                className="mt-[30px] block w-full py-[16px] pl-[80px] bg-white border border-slate-300 rounded-2xl text-xl shadow-sm placeholder-slate-400 text-black focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              ></input>
            </div>
            <textarea
              placeholder="Describe your issue here"
              name=""
              id=""
              cols="30"
              rows="6"
              className="mt-[30px] block w-full py-[16px] pl-[40px] bg-white border border-slate-300 rounded-2xl text-xl shadow-sm placeholder-slate-400 text-black focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            ></textarea>
            <button type="submit" className="mt-[30px] block w-full bg-[#0074FD] py-[16px] rounded-2xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Send</button>
          </form>
          <img src={SendVector} alt="" className="absolute right-[-120px] bottom-[1px]"/>
        </div>
      </div>

      {/* BG-Gradients */}
      <div className="absolute circleGradient-blue w-[670px] h-[570px] bottom-[-40px] left-[-200px] z-0 blur-xl"></div>
      <div className="absolute circleGradient-peach w-[370px] h-[370px] top-[40px] left-[700px] z-0 blur-xl"></div>
      
    </div>
  );
};

export default ContactUs;
