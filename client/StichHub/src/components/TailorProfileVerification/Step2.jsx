import React from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const Step2 = () => {
   // button handlers
   const [value, setValue] = useState();
   const [isShown, setIsShown] = useState(false);
   const [isShown1, setIsShown1] = useState(false);
   const [disabled, setDisabled] = useState(false);
 
   const handleClick = (event) => {
     // 👇️ toggle shown state
     setIsShown((current) => !current);
 
     // 👇️ or simply set it to true
     // setIsShown(true);
   };
   const handleClick1 = (event) => {
     // 👇️ toggle shown state
     setIsShown1((current) => !current);
 
     // 👇️ or simply set it to true
     // setIsShown(true);
   };
 
  return (
    <div className="mt-[20%] lg:mt-[5%] bg-[#130F26] h-full">
      <div className="grid grid-cols-4">
        <div className="col-start-1 col-end-5">
          <div className="flex ml-[15%] ">
            <label className="my-6 mr-2 flex h-[2.638rem] w-[2.638rem] items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
              1
            </label>
            <h1 className="flex text-white text-2xl font-bold ml-2 mt-6 mb-5">
              Confirm Email/ Mobile No.
            </h1>
          </div>
          <div className="ml-[15%] w-[70%] lg:w-[50%] h-auto bg-opacity-10 bg-[#130F26] rounded-xl p-[2%] grid grid-col-1 lg:grid-cols-2 gap-3 ">
            <form>
              <div className="mb-2">
                <label>
                  <span className="text-white mb-3">Email address *</span>
                  <input
                    name="email"
                    type="email"
                    className="border box-border w-full justify-around mb-[10px] p-2.5 rounded-[10px] border-solid text-white border-white"
                    placeholder="abc@example.com"
                    required="true"
                  />
                  <button
                    className="   px-6 py-1.5 rounded-lg text-white bg-[#3E00FF] hover:bg-blue-600 top-0"
                    onClick={handleClick}
                  >
                    Get OTP
                  </button>
                </label>

                {isShown && (
                  <div className="mt-3">
                    <p className="text-white semibold font-sm mt-8">
                      Please Check Your Email
                    </p>
                    <p className="text-gray-500 semibold font-xs mb-3">
                      We've just sent a verification code.
                    </p>
                    <span className="text-white mb-3">Enter OTP</span>
                    <div
                      id="otp"
                      className="flex flex-row  text-center px- mt-2 mb-3"
                    >
                      <input
                        className="mr-2 border h-10 w-10 text-center form-control rounded "
                        type="text"
                        id="first"
                        maxlength="1"
                      />
                      <input
                        className="mr-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="second"
                        maxlength="1"
                      />
                      <input
                        className="mr-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="third"
                        maxlength="1"
                      />
                      <input
                        className="mr-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="fourth"
                        maxlength="1"
                      />
                    </div>
                    <p className="text-white mb-2">
                      Didn't Get Code?{" "}
                      <a
                        href="#"
                        className="underline text-blue-400 hover:text-blue-900"
                      >
                        {" "}
                        Click Here
                      </a>{" "}
                    </p>
                    <button className="   px-6 py-1.5 rounded-lg text-white bg-[#137C00] hover:bg-green-500 top-0">
                      Verify
                    </button>
                  </div>
                )}
              </div>
            </form>
            <div className="mb-2">
              <label>
                <span className="text-white mb-3">Contact Number *</span>
                <div>
                  <PhoneInput
                    country={"in"}
                    countryCodeEditable={false}
                    className="bg-white border box-border w-full justify-around gap-3 mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    inputStyle={{
                  border: "none",
                  backgroundColor: "transparent",
                  padding: "5px",
                  width: "auto",
                  left: "40px",
                 letterSpacing: "normal"
                }}
                  />
                </div>
                <button
                  className="mt-1 px-6 py-1.5 rounded-lg text-white bg-[#3E00FF] hover:bg-blue-600 top-0"
                  onClick={handleClick1}
                >
                  Get OTP
                </button>
              </label>

              {isShown1 && (
                <div className="mt-3">
                  <p className="text-white semibold font-sm mt-8">
                    Please Check Your Mobile
                  </p>
                  <p className="text-gray-500 semibold font-xs">
                    We've just sent a verification code.
                  </p>
                  <span className="text-white mb-3 mt-2">Enter OTP</span>
                  <div
                    id="otp"
                    className="flex flex-row  text-center px- mt-2 mb-3"
                  >
                    <input
                      className="mr-2 border h-10 w-10 text-center form-control rounded "
                      type="text"
                      id="first"
                      maxlength="1"
                    />
                    <input
                      className="mr-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="second"
                      maxlength="1"
                    />
                    <input
                      className="mr-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="third"
                      maxlength="1"
                    />
                    <input
                      className="mr-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="fourth"
                      maxlength="1"
                    />
                  </div>
                  <p className="text-white mb-2">
                    Didn't Get Code?{" "}
                    <a
                      href="#"
                      className="underline text-blue-400 hover:text-blue-900"
                    >
                      {" "}
                      Click Here
                    </a>{" "}
                  </p>
                  <button
                    className="   px-6 py-1.5 rounded-lg text-white bg-[#137C00] hover:bg-green-500 top-0"
                    onClick={handleClick1}
                  >
                    Verify
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bottom-0 right-0 w-[40%] lg:right-0 absolute col-start-4 col-end-5 opacity-20">
          <img loading="lazy" src={N} />
        </div>
      </div>

      <button
        className="bg-gray-300   ml-[15%] mt-[1%] mr-5  px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
        onClick={handleBack}
      >
        Previous
      </button>
      <button
        className="  px-6 py-1.5 rounded-lg text-white bg-blue-500 hover:bg-blue-600 top-0"
        onClick={handleNext}
      >
        Proceed
      </button>
      <ProgressBar progressPercentage={20}></ProgressBar>
    </div>
  );
};

export default Step2;
