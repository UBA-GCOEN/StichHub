import React from "react";
import regbg from "../../assets/registrationbg.png";
import Cus from "../../assets/CustomerImg.png";
import Tail from "../../assets/Tailorimg.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="sm:bg-[url('../src/assets/registrationbg.png')] bg-contain bg-center bg-no-repeat bg-[#BADDF1] w-[100vw] h-[100vh] overflow-hidden">
      <div className="flex justify-center content-center flex-wrap">
        <div className="p-5 text-center sm:mt-[20vh] sm:ml-14">
          {/* Title text */}
          <div className="py-14">
            <h1 className="relative text-3xl text-Black font-bold">
              Select Your Choice
            </h1>
            <p className="relative text-xl text-Black font-semibold">
              Thank you for joining us! <br /> Glad to have you on board!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between flex-wrap gap-12">
            {/* Customer button */}
            <Link to="/auth/customer">
              <button className="w-[160px] h-[160px] bg-[#00456D] relative text-3xl text-white shadow-lg rounded-3xl">
                <div className="flex justify-center">
                  <img src={Cus} className="w-[70px]" />
                </div>
                <p className="text-lg text-center ">
                  I am a <br />
                  <strong className="underline ">Customer</strong>{" "}
                </p>
              </button>
            </Link>

            {/* Tailor button */}
            <Link to="/auth/tailor">
            <button className="w-[160px] h-[160px] bg-white relative text-3xl text-Black shadow-xl rounded-3xl">
              <div className="flex justify-center">
                <img src={Tail} className="m-2 w-[57px]" />
              </div>
              <p className="text-lg text-center text-black">
                I am a <br />
                <strong className="underline ">Tailor</strong>{" "}
              </p>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
