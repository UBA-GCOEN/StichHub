import React, { useState } from "react";
import {
  ContactUsVector,
  EmailIcon,
  AvatarIcon,
  PhoneIcon,
  describe,
  SendVector,
} from "../../assets/MainLandingPage/Icons";
import validate from "../../common/validation";
import AuthErrorMessage from "../AuthError";

const initialForm = {
  name: "",
  email: "",
  phoneno: "",
  message: "",
};

const ContactUs = () => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(validate.contactInitialVal);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    const validationMessage = validate[e.target.name](e.target.value);
    setError((prev) => {
      return { ...prev, ...validationMessage };
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  return (
    <div
      id="contactus"
      className="h-[100%] relative mt-10 lg:mt-0 p-10 lg:p-20 lg:ml-20 lg:mr-20"
    >
      <div className="relative z-[5] flex items-center justify-center">
        {/* left-Side */}
        <div id="leftside" className="lg:block hidden mb-[20px] bottom-[20p]">
          <img src={ContactUsVector} className="" />
        </div>

        {/* Right-Side */}
        <div id="rightSide" className="lg:mt-12">
          {/* Title */}
          <div id="Headings" className="text-left">
            <h1 id="title" className="text-xl lg:text-4xl font-medium pb-4">
              GET IN TOUCH
            </h1>
            <span id="subTitle" className="text-lg lg:text-xl text-slate-300">
            Have a question? We're here to help! Send us a message.
            </span>
          </div>

          {/* Form */}
          <form id="form-Container" className="" action="https://formsubmit.co/uba.gcoen@gmail.com" method="POST">
            <div id="yourName" className="py-2">
              <img
                src={AvatarIcon}
                alt="N"
                id="icon"
                className="absolute ml-[10px] mt-[16px] h-7"
              />
              <input
                autoComplete="on"
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="mt-[10px] h-10 block w-full py-[16px] pl-[55px] bg-transparent border-2 rounded-md text-xl shadow-sm placeholder-slate-400 text-white focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              ></input>
              {error.name && error.nameError ? (
                <AuthErrorMessage message={error.nameError} />
              ) : null}
            </div>
            <div id="Email" className="py-2">
              <img
                src={EmailIcon}
                alt="E"
                id="icon"
                className="absolute ml-[10px] mt-[16px] h-7"
              />
              <input
                autoComplete="on"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="mt-[10px] h-10 block w-full py-[16px] pl-[55px] bg-transparent border-2 rounded-md text-xl shadow-sm placeholder-slate-400 text-white focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              ></input>
              {error.email && error.emailError ? (
                <AuthErrorMessage message={error.emailError} />
              ) : null}
            </div>
            <div id="Phone no." className="py-2">
              <img
                src={PhoneIcon}
                alt="P"
                id="icon"
                className="absolute ml-[10px] mt-[16px] h-7"
              />
              <input
                type="tel"
                placeholder="Phone no."
                name="phoneno"
                id="phoneno"
                value={form.phoneno}
                onChange={handleChange}
                className="mt-[10px] h-10 block w-full py-[16px] pl-[55px] bg-transparent border-2 rounded-md text-xl shadow-sm placeholder-slate-400 text-white focus:font-medium
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              ></input>
              {error.phoneno && error.phonenoError ? (
                <AuthErrorMessage message={error.phonenoError} />
              ) : null}
            </div>
            <div>
              <img src={describe} className="absolute ml-[10px] mt-[16px] h-7" />
            <textarea
              style={{paddingLeft:"3.35rem"}}
              placeholder="Describe your issue here"
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={form.message}
              onChange={handleChange}
              className="mt-[20px] h-40 block w-full p-2 bg-transparent border-2 rounded-md text-xl shadow-sm placeholder-slate-400 text-white focus:font-medium
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                resize-none"
            ></textarea>
            </div>
               {error.message && error.messageError ? (
                  <AuthErrorMessage message={error.messageError} />
                ) : null}
            <button 
              type="submit"
              className="bg-gradient-to-b from-cyan-500 to-blue-500 text-white mt-[25px] w-full flex items-center p-2 duration-300 hover:scale-110 rounded-md font-semibold"
              disabled={Object.values(error).includes(true)}>
                  <span className="mx-auto">
                   Send
                 </span>
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
