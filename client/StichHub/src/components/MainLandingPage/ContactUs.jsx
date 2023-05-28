import React, { useState } from "react";
import {
  ContactUsVector,
  EmailIcon,
  AvatarIcon,
  PhoneIcon,
  SendVector,
} from "../../assets/MainLandingPage/Icons";

const initialForm = {
  name: "",
  email: "",
  phoneno: "",
  message: "",
};

const ContactUs = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  return (
    <div
      id="contactus"
      className="h-[100%] relative mt-10 lg:mt-0 p-10 lg:p-20 lg:ml-20 lg:mr-20"
    >
      <div className="relative z-[5] flex justify-evenly">
        {/* left-Side */}
        <div id="leftside" className="lg:block hidden mb-[20px] bottom-[20p]">
          <img src={ContactUsVector} className="" />
          <p className="text-left text-xl w-[500px]"></p>
        </div>

        {/* Right-Side */}
        <div id="rightSide" className="">
          {/* Title */}
          <div id="Headings" className="text-left">
            <h1 id="title" className="lg:text-5xl font-medium pb-4">
              GET IN TOUCH
            </h1>
            <span id="subTitle" className="text-lg lg:text-3xl text-slate-300">
              We will answer your every questions and problems
            </span>
          </div>

          {/* Form */}
          <form id="form-Container" className="" action="https://formsubmit.co/uba.gcoen@gmail.com" method="POST">
            <div id="yourName" className="">
              <img
                src={AvatarIcon}
                alt="N"
                id="icon"
                className="absolute ml-[10px] mt-[12px] h-9"
              />
              <input
                autoComplete="on"
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
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
                alt="E"
                id="icon"
                className="absolute ml-[10px] mt-[12px] h-9"
              />
              <input
                autoComplete="on"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
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
                alt="P"
                id="icon"
                className="absolute ml-[10px] mt-[12px] h-9"
              />
              <input
                type="tel"
                placeholder="Phone no."
                name="phoneno"
                id="phoneno"
                value={form.phoneno}
                onChange={handleChange}
                className="mt-[30px] block w-full py-[16px] pl-[80px] bg-white border border-slate-300 rounded-2xl text-xl shadow-sm placeholder-slate-400 text-black focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              ></input>
            </div>
            <textarea
              placeholder="Describe your issue here"
              name="message"
              id="message"
              cols="30"
              rows="6"
              value={form.message}
              onChange={handleChange}
              className="mt-[30px] block w-full py-[16px] pl-[40px] bg-white border border-slate-300 rounded-2xl text-xl shadow-sm placeholder-slate-400 text-black focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                resize-none"
            ></textarea>
            <button
              type="submit"
              className="mt-[30px] block w-full bg-[#0054B8] py-3 lg:py-[16px] rounded-2xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 lg:text-3xl text-lg"
            >
              Send
            </button>
          </form>
          <img
            src={SendVector}
            alt="send"
            className="hidden lg:block absolute right-[-120px] bottom-[1px]"
          />
        </div>
      </div>

      {/* BG-Gradients */}
      <div className="absolute circleGradient-blue w-[670px] h-[570px] bottom-[-40px] left-[-200px] z-0 blur-xl"></div>
      <div className="absolute circleGradient-peach w-[370px] h-[370px] top-[40px] left-[700px] z-0 blur-xl"></div>
    </div>
  );
};

export default ContactUs;
