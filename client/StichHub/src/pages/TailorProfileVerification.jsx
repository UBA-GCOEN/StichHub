import React from "react";
import Navbardark from "../components/Navbardark";
import { useState, useEffect, useCallback } from "react";
import New from "../assets/img/new.png";
import "react-phone-number-input/style.css";
import N from "../assets/img/n.png";
import Profileveri from "../assets/img/profileverify.png";
import Speciality from "../assets/img/speciality.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Verified from "../assets/img/verified.png";
import V from "../assets/img/v.png";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import axios from "../axios.js";
import { Player } from "@lottiefiles/react-lottie-player";

//steps list
const steps = [
  {
    label: "home",
    step: 1,
  },
  {
    label: "email",
    step: 2,
  },
  {
    label: "address",
    step: 3,
  },
  {
    label: "profileveri",
    step: 4,
  },
  {
    label: "Portfilio",
    step: 5,
  },
  {
    label: "Completed",
    step: 6,
  },
];

const initialForm = {
  contact: "",
  country: "",
  state: "",
  city: "",
  pincode: "",
  passport: "",
  aadhar: "",
  proffesionalDoc: "",
  address: "",
  address2: "",
  bio: "",
  prizerange: [],
  types: [],
};

//Main Implementation from here
const TailorProfileVerification = () => {
  const [country, setCountry] = useState("");
  const [activeStep, setActiveStep] = useState(1);
  const [step, setStep] = useState(1);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("tailorProfile"))
  );
  const [form, setForm] = useState(initialForm);
  const location = useLocation();
  const navigateTo = useNavigate();
  const [minValue, set_minValue] = useState(500);
  const [maxValue, set_maxValue] = useState(5000);
  const [isLoading, setIsLoading] = useState(false);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("tailorProfile")));
  }, [location]);

  useEffect(() => {
    const isFirstLogin = localStorage.getItem("tailorFirstLogin");

    if (!isFirstLogin) navigateTo("/TailorDashboard");

    if (!user) navigateTo("/auth/tailor");
  }, []);

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedItems((prevValues) => [...prevValues, value]);
    } else {
      setCheckedItems((prevValues) =>
        prevValues.filter((val) => val !== value)
      );
    }
  };

  const [telephone, setTelephone] = useState("");

  const handletelChange = (event) => {
    const { value } = event.target;
    const telRegex = /^\d{0,10}$/; // allow up to 10 digits
    if (telRegex.test(value)) {
      setTelephone(value);
    }

    setForm({ ...form, contact: telephone });
  };

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (upload) {
      const uploadedImage = upload.target.result;

      // Set the state variables to the uploaded image URLs
      if (event.target.name === "passport") {
        setImage1(uploadedImage);
        setForm({ ...form, passport: uploadedImage });
      } else if (event.target.name === "aadhar") {
        setImage2(uploadedImage);
        setForm({ ...form, aadhar: uploadedImage });
      } else if (event.target.name === "proffesionalDoc") {
        setImage3(uploadedImage);
        setForm({ ...form, proffesionalDoc: uploadedImage });
      }
    };

    reader.readAsDataURL(file);
  };

  const stepFormSubmit = () => {
    setForm({ ...form, country: country });
    setForm({ ...form, prizerange: [minValue, maxValue] });
    setForm({ ...form, types: checkedItems });
    // console.log(form);
  };

  useEffect(() => {
    setForm({ ...form, prizerange: [minValue, maxValue] });
  }, [minValue, maxValue]);

  useEffect(() => {
    setForm({ ...form, types: checkedItems });
  }, [checkedItems]);

  const handleNext = () => {
    setStep(step + 1);
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
    setActiveStep(activeStep - 1);
  };

  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [disabled, setDisabled] = useState(false);

  //button handlers
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

  //progressbar function code
  const ProgressBar = ({ progressPercentage }) => {
    return (
      <div className="bg-[#130F26] ">
        <div className="fixed bottom-11 h-1 w-full bg-gray-300  ">
          <div
            style={{ width: `${progressPercentage}%` }}
            className={` h-full   ${
              progressPercentage <= 40
                ? "bg-red-600"
                : progressPercentage > 40 && progressPercentage < 100
                ? "bg-orange-600 "
                : "bg-green-500"
            }`}
          ></div>
        </div>
        {/* progressbar status for each page */}
        {step == 1 ? (
          <div className="font-semibold fixed bottom-0 m-[1%] text-gray-400">
            {" "}
            Let's Go.......
          </div>
        ) : step == 2 ? (
          <div className="font-semibold fixed bottom-0 m-[0.5%] flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-gray-400 text-sm text-black">
            1
          </div>
        ) : step == 3 ? (
          <div className="font-semibold fixed bottom-0 m-[0.5%] flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-gray-400 text-sm text-black">
            2
          </div>
        ) : step == 4 ? (
          <div className="font-semibold fixed bottom-0 m-[0.5%] flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-gray-400 text-sm text-black">
            3
          </div>
        ) : step == 5 ? (
          <div className="font-semibold fixed bottom-0 m-[0.5%] flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-gray-400 text-sm text-black">
            4
          </div>
        ) : (
          <div className="font-semibold fixed bottom-0 m-[0.5%] flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-gray-400 text-sm text-black">
            5
          </div>
        )}
      </div>
    );
  };

  const handleChangeFinal = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post("/tailors/list", form);
      setIsLoading(false);
      localStorage.removeItem("tailorFirstLogin");
      navigateTo("/TailorDashboard");
    } catch (error) {
      console.log(error.response.data.message);
      setIsLoading(false);
    }
  };

  // Step1 page/ Here Page
  const Step1 = () => {
    return (
      <div className="h-[100vh]">
        <div className="grid grid-cols-3 text-whie ml-[15%] mt-[20%] lg:mt-[5%] font-poppins">
          <div className="col-start-1 col-end-3 ">
            {/* Text hello username */}
            <h1 className="text-white text-3xl font-bold mb-5">
              Hi {user?.result.name},
            </h1>
            <h1 className="select-none	 text-white text-5xl font-bold tracking-wider  lg:mr-[20%]	">
              Complete these few steps for your verification
            </h1>
            <div className="grid gird-col-3 text-white mt-10">
              <div className="flex col-start-1 col-end-2">
                <label class="p-5 my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-blue-500 text-lg font-medium text-white">
                  1
                </label>
                <label className="text-white font font-semibold text-xl lg:text-2xl m-3 ">
                  Confirm Email/ Mobile
                </label>
              </div>
              <div className="flex col-start-2 col-end-3">
                <label class="p-5 my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-blue-500 text-lg font-medium text-white">
                  2
                </label>
                <label className="text-white font font-semibold text-xl lg:text-2xl mt-3 ml-3">
                  Confirm Address
                </label>
              </div>
              <div className="flex col-start-1 col-end-2 lg:col-start-3 lg:col-end-4">
                <label class="p-5 my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-blue-500 text-lg font-medium text-white">
                  3
                </label>
                <label className="text-white font font-semibold text-xl lg:text-2xl m-3">
                  Perosnal Identity Verification
                </label>
              </div>

              <div className="flex col-start-2 col-end-3 lg:col-start-1 lg:col-end-2">
                <label class="p-5 my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-blue-500 text-lg font-medium text-white">
                  4
                </label>
                <label className="text-white font font-semibold text-xl lg:text-2xl m-3 ">
                  Set Up your Profile
                </label>
              </div>

              {/* image with list */}
              <div className="flex col-start-1 col-end-2 lg:col-start-2 lg:col-end-3">
                <label class="my-6 mr-2 flex h-[2.638rem] w-[2.638rem] items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                  <img
                    src="https://img.icons8.com/external-bearicons-flat-bearicons/256/external-verified-reputation-bearicons-flat-bearicons.png"
                    className="w-[70%]"
                  ></img>
                </label>
                <label className="text-white font font-semibold text-xl lg:text-2xl m-3 mt-7 ">
                  Verified
                </label>
              </div>
            </div>

            {/* Button */}
            <button
              className="bg-blue-500 rounded-xl text-white font-semibold tracking-wide p-3 mt-5 lg:mb-[20%]"
              onClick={handleNext}
            >
              Get Started
            </button>
          </div>
          {/* hero image */}
          <div className="hidden lg:block col-start-3 col-end-4">
            <img src={New} className="w-50% ml-[-40%] mr-20" />
          </div>
        </div>
        {/* progress bar with 0% progress */}
        <ProgressBar progressPercentage={0} />
      </div>
    );
  };

  const [value, setValue] = useState();

  const [file, setFile] = useState(null);
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setForm({ ...form, passport: file });
    // console.log(form);
  }

  const [file2, setFile2] = useState("");
  function handleChange2(e) {
    setFile2(URL.createObjectURL(e.target.files[0]));
    setForm({ ...form, aadhar: file2 });
  }

  const [file3, setFile3] = useState("");
  function handleChange3(e) {
    setFile3(URL.createObjectURL(e.target.files[0]));
    setForm({ ...form, proffesionalDoc: file3 });
  }

  const handleChange1 = (value) => {
    setSpecial(value);
  };
  const [isClearable, setIsClearable] = useState(true);
  const [value1, setValue1] = useState(null);
  const [isMultiple, setIsMultiple] = useState(true);
  // type of actions field accepting
  const dispatch = useCallback(
    (type = null, action, valueData = null) => {
      switch (type) {
        case "isClearable":
          if (action === "set") setIsClearable(valueData);
          if (action === "get") return isClearable;
          break;

        case "isMultiple":
          if (action === "set") {
            if (value1 !== null) {
              setValue1(null);
            }
            setIsMultiple(valueData);
          }
          if (action === "get") return isMultiple;
          break;

        default:
          break;
      }
    },
    [isMultiple, value1]
  );

  const handleCheck = useCallback(
    (value, item) => {
      dispatch(item, "set", value);
    },
    [dispatch]
  );

  // final page step7
  const Step6 = () => (
    <div className="h-[100vh]">
      <img
        src={Verified}
        className="hidden lg:block right-24 absolute w-[30%] h-[60%] "
      />
      <img
        src={Verified}
        className="opacity-20 right-0 bottom-[300px] w-[55%] h-[35%] lg:opacity-100 lg:right-24 absolute lg:w-[30%] lg:h-[60%] lg:hidden"
      />

      <div className="  text-whie ml-[15%] mt-[25%] lg:mt-[10%] font-poppins">
        <div className="mr-[15%] lg:mr-[30%]">
          <h1 className="text-[rgb(127,255,0)] text-4xl font-bold mb-3">
            Congrats {user?.result.name},
          </h1>
          <h1 className="select-none	 text-white text-5xl font-bold tracking-wider lg:mr-[20%]	">
            Now you are completely registered & verified on our website.
          </h1>
          <p className="text-right font-semibold text-white lg:mr-[180px] mt-5 tracking-tighter">
            <p className="text-gray-500 italic">
              "The intellect always cuts and divides like a pair of scissors.
              The heart sews things together and unites like a needle. The
              tailor uses both."
            </p>
            - Mata Amritanandamayi -
          </p>
        </div>
      </div>
      <button
        className="bg-gray-300 ml-[15%] mt-[2%]  px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
        onClick={handleBack}
      >
        Previous
      </button>

      <button
        className="px-6 py-1.5 rounded-lg ml-5 text-white bg-[#009415] hover:bg-green-600 top-0"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {/* progressbar 100% status green */}
      <ProgressBar progressPercentage={100} />
    </div>
  );

  // Main Start from here
  return (
    <div className="bg-[#130F26] h-fit">
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
      {/* Navbar */}
      <Navbardark />

      {/* body */}
      <div className="flex items-center justify-center h-auto  ">
        <div className="bg-transparent rounded-lg w-full ">
          {/* page display conditional */}
          {step === 1 ? (
            <Step1 />
          ) : step == 2 ? (
            <div className=" mt-[20%] lg:mt-[5%] bg-[#130F26] h-[100vh]">
              <div className="grid grid-cols-4">
                <div className="col-start-1 col-end-5">
                  <div className="flex ml-[15%] ">
                    <label class="my-6 mr-2 flex h-[2.638rem] w-[2.638rem] items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                      1
                    </label>
                    <h1 className="flex text-white text-2xl font-bold ml-2 mt-6 mb-5">
                      Confirm Email/ Mobile No.
                    </h1>
                  </div>

                  {/* Email verification section */}
                  <div className="ml-[15%] w-[70%] lg:w-[50%] h-auto bg-opacity-10 bg-white rounded-xl p-[2%] grid grid-col-1 lg:grid-cols-2 gap-3">
                    <form>
                      <div className="mb-2">
                        <label>
                          <span className="text-white mb-3">
                            Email address *
                          </span>
                          <input
                            name="email"
                            type="email"
                            value={user?.result.email}
                            className="bg-white border box-border text-gray-400 w-full justify-around mb-[10px] p-2.5 rounded-[10px] border-solid border-white "
                            placeholder="abc@example.com"
                            required="true"
                            disabled
                          />
                          <button
                            className="hidden px-6 py-1.5 rounded-lg text-white bg-[#3E00FF] hover:bg-blue-600 top-0"
                            onClick={handleClick}
                          >
                            Get OTP
                          </button>
                        </label>
                        {/* Email OTP */}
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
                              class="flex flex-row  text-center px- mt-2 mb-3"
                            >
                              <input
                                class="mr-2 border h-10 w-10 text-center form-control rounded "
                                type="text"
                                id="first"
                                maxlength="1"
                              />
                              <input
                                class="mr-2 border h-10 w-10 text-center form-control rounded"
                                type="text"
                                id="second"
                                maxlength="1"
                              />
                              <input
                                class="mr-2 border h-10 w-10 text-center form-control rounded"
                                type="text"
                                id="third"
                                maxlength="1"
                              />
                              <input
                                class="mr-2 border h-10 w-10 text-center form-control rounded"
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

                    {/* Contact Verification */}
                    <div className="">
                      <form>
                        <label>
                          <span className="text-white mb-3">
                            Contact Number *
                          </span>
                          <div>
                            <input
                              type="tel"
                              name="contact"
                              id="contact"
                              onChange={handletelChange}
                              value={telephone}
                              className="bg-white border box-border w-full justify-around gap-3 mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                              placeholder="Enter phone number"
                            />
                          </div>
                          <button
                            className="hidden mt-1 px-6 py-1.5 rounded-lg text-white bg-[#3E00FF] hover:bg-blue-600 top-0"
                            onClick={handleClick1}
                          >
                            Get OTP
                          </button>
                        </label>
                      </form>
                      {/* Contact OTP verification */}
                      {isShown1 && (
                        <div className="mt-3">
                          <p className="text-white semibold font-sm mt-8">
                            Please Check Your Mobile
                          </p>
                          <p className="text-gray-500 semibold font-xs">
                            We've just sent a verification code.
                          </p>
                          <span className="text-white mb-3 mt-2">
                            Enter OTP
                          </span>
                          <div
                            id="otp"
                            class="flex flex-row  text-center px- mt-2 mb-3"
                          >
                            <input
                              class="mr-2 border h-10 w-10 text-center form-control rounded "
                              type="text"
                              id="first"
                              maxlength="1"
                            />
                            <input
                              class="mr-2 border h-10 w-10 text-center form-control rounded"
                              type="text"
                              id="second"
                              maxlength="1"
                            />
                            <input
                              class="mr-2 border h-10 w-10 text-center form-control rounded"
                              type="text"
                              id="third"
                              maxlength="1"
                            />
                            <input
                              class="mr-2 border h-10 w-10 text-center form-control rounded"
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
                <div className="bottom-0 right-0 w-[40%] lg:right-0 lg:top-24 absolute col-start-4 col-end-5 opacity-20 lg:opacity-100 ">
                  <img src={N} />
                </div>
              </div>

              <button
                className="bg-gray-300   ml-[15%] mt-[1%] mr-5  px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
                onClick={handleBack}
              >
                Previous
              </button>
              <button
                className="relative z-[100] px-6 py-1.5 rounded-lg text-white bg-blue-500 hover:bg-blue-600 top-0"
                onClick={() => {
                  handleNext();
                  stepFormSubmit();
                }}
              >
                Proceed
              </button>
              <ProgressBar progressPercentage={20}></ProgressBar>
            </div>
          ) : step == 3 ? (
            <div className="mt-[20%] lg:mt-[5%] bg-[#130F26] h-[100vh]">
              <div className="flex ml-[15%] ">
                <label class="my-6 mr-2 flex h-[2.638rem] w-[2.638rem] items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                  2
                </label>
                <h1 className="flex text-white text-2xl font-bold ml-2 mt-6 mb-5">
                  Confirm Address Details
                </h1>
              </div>
              <div className="lg:hidden bottom-0 right-0 w-[50%] lg:right-0 absolute opacity-20 lg:opacity-100">
                <img src={V} />
              </div>
              <div className="hidden lg:block  w-[35%] right-0 absolute lg:opacity-100">
                <img src={V} />
              </div>

              {/* address detail form */}
              <div className="ml-[15%] w-[75%] lg:w-[50%] h-auto bg-white bg-opacity-10 rounded-xl p-[2%] grid grid-cols-1 gap-3 pl-[5%] pr-5 lg:pr-40">
                <form>
                  <div className="text-white">
                    <span>Country/ Region</span>
                    <br />
                    <input
                      type="text"
                      class="country"
                      value={form.country}
                      onChange={handleChangeFinal}
                      name="country"
                      id="country"
                      className="border box-border text-black w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-white bg-white"
                    />
                  </div>

                  <div className="mb-2">
                    <label>
                      <span className="text-white">Street address</span>
                      <br />
                      <input
                        name="address"
                        id="address"
                        type="address"
                        onChange={handleChangeFinal}
                        value={form.address}
                        className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-white bg-white"
                        placeholder="House number and street name"
                        required
                      />{" "}
                      <input
                        name="address2"
                        type="address"
                        onChange={handleChangeFinal}
                        value={form.address2}
                        className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-white bg-white"
                        placeholder="Appartment, suite, landmark, etc. (optional)"
                        required
                      />{" "}
                    </label>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div xs={5}>
                      <div className="mb-2">
                        <label>
                          <span className="text-white">Town/ City</span>
                          <br />
                          <input
                            name="city"
                            type="city"
                            onChange={handleChangeFinal}
                            value={form.city}
                            className="bg-white border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-white"
                            placeholder="enter city"
                            required
                          />{" "}
                        </label>
                      </div>
                    </div>
                    <div xs={7}>
                      <div className="mb-2">
                        <label>
                          <span className="text-white">State</span>
                          <br />
                          <input
                            type="state"
                            className="bg-white border box-border text-black w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                            placeholder="enter state"
                            name="state"
                            id="state"
                            onChange={handleChangeFinal}
                            value={form.state}
                            required
                          />{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className="grid grid-cols-1 lg:grid-cols-2">
                      <span className="text-white">Pincode</span>
                      <br />
                      <input
                        name="pincode"
                        type="pincode"
                        onChange={handleChangeFinal}
                        value={form.pincode}
                        className="z-[5] bg-white border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                        placeholder=""
                        required
                      />{" "}
                    </label>
                  </div>
                </form>
              </div>
              <button
                className="bg-gray-300 mr-5  ml-[15%] mt-[1%] px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
                onClick={handleBack}
              >
                Previous
              </button>
              <button
                className="z-[100] relative px-6 py-1.5 rounded-lg text-white bg-blue-500 hover:bg-blue-600 top-0"
                onClick={() => {
                  handleNext();
                  stepFormSubmit();
                }}
              >
                Proceed
              </button>
              {/* progress bar with 40% progress */}
              <ProgressBar progressPercentage={40}></ProgressBar>
            </div>
          ) : step == 4 ? (
            <div className=" mt-[20%] lg:mt-[3%] bg-[#130F26] h-[100vh]">
              <div className="flex ml-[15%] ">
                <label class="my-6 mr-2 flex h-[2.638rem] w-[2.638rem] items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                  3
                </label>
                <h1 className="flex text-white text-2xl font-bold ml-2 mt-6 mb-5">
                  Personal Identity Verification
                </h1>
              </div>
              <div className="mt-[-5%] right-0  bottom-[300px] w-[60%] h-[30%] lg:right-20 absolute opacity-20 lg:opacity-100 lg:hidden">
                <img src={Profileveri} />
              </div>
              <div className="hidden lg:block left-[60%] absolute lg:opacity-100">
                <img src={Profileveri} />
              </div>

              {/* photo upload */}
              <div className="ml-[15%] w-[75%] lg:w-[50%] h-auto bg-white bg-opacity-10 rounded-xl p-[2%] grid grid-cols-1 lg:grid-cols-2 gap-3 pl-[5%] pr-30 ">
                <div className="text-white  ">
                  <label className="text-2xl font-bold">
                    1. Passport Size Photo
                  </label>
                  <br />

                  <label className="text-lg font-semibold text-gray-400 ml-7">
                    (.jpg,.png)
                  </label>
                  <div className="flex z-[5] relative">
                    <img
                      src={image1}
                      className="w-[100px] h-[100px] mt-5 rounded-lg border border-white"
                    ></img>
                    <input
                      className=" rounded-xl mt-5 flex ml-[] pl-5"
                      type="file"
                      name="passport"
                      accept="image/*"
                      onChange={handleImageChange}
                      multiple
                    />
                  </div>
                </div>

                {/* aadhar upload */}
                <div className="text-white  col-span-1 mt-5 lg:mt-0 ">
                  <label className="text-2xl font-bold">
                    2. Aadhar Card (UIDAI)
                  </label>
                  <br />

                  <label className="text-lg font-semibold text-gray-400 ml-7">
                    (.jpg,.png,.pdf)
                  </label>
                  <div className="flex">
                    <input
                      className="rounded-xl mt-5 flex ml-[] pl-5"
                      name="aadhar"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      multiple
                    />
                  </div>
                </div>

                {/* document upload */}
                <div className="text-white col-span-1 lg:col-span-2 mt-5 ">
                  <label className="text-2xl font-bold">
                    3. Profession Verification Document
                  </label>
                  <br />
                  <label className="text-xs text-white font-semibold">
                    (Any type of document/ image describing that you are working
                    as a tailor){" "}
                  </label>
                  <br />

                  <label className="text-lg font-semibold text-gray-400 ml-7">
                    (.jpg,.png,.pdf)
                  </label>
                  <div className="flex">
                    <input
                      className="rounded-xl mt-3 flex mb-5"
                      type="file"
                      name="proffesionalDoc"
                      accept="image/*"
                      onChange={handleImageChange}
                      multiple
                    />
                  </div>
                </div>
              </div>
              <button
                className="bg-gray-300 mr-5  ml-[15%] mt-[1%] px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
                onClick={handleBack}
              >
                Previous
              </button>
              <button
                className="   px-6 py-1.5 rounded-lg text-white bg-blue-500 hover:bg-blue-600 top-0"
                onClick={() => {
                  handleNext();
                  stepFormSubmit();
                }}
              >
                Proceed
              </button>
              {/* progressbar 70% progress */}
              <ProgressBar progressPercentage={70}></ProgressBar>
            </div>
          ) : step == 5 ? (
            <div className="mt-[20%] lg:mt-[5%] bg-[#130F26] mb-20 h-[100%]">
              <div className="flex ml-[15%] ">
                <label class="my-6 mr-2 flex h-[2.638rem] w-[2.638rem] items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                  4
                </label>
                <h1 className="flex text-white text-2xl font-bold ml-2 mt-6 mb-5">
                  Set up your profile
                </h1>
              </div>
              <div className="mt-[-5%] bottom-14 lg:gright-20 absolute opacity-20  lg:opacity-100 lg:hidden">
                <img src={Speciality} />
              </div>
              <div className="hidden lg:block left-[60%] absolute opacity-20  lg:opacity-100">
                <img src={Speciality} />
              </div>

              <div className="ml-[15%] w-[70%] lg:w-[50%] h-auto bg-white bg-opacity-10 rounded-xl p-[2%] grid grid-cols-1 gap-3 pl-[5%] pr-30 ">
                <div className="flex flex-col">
                  <label className="text-2xl font-bold mb-2 text-white ">
                    Add your Description or bio{" "}
                  </label>
                  <div xs={7}>
                    <div className="z-[5] relative mb-2 col-start-2 mt-5 col-end-3 lg:mr-14">
                      <label>
                        <textarea
                          name="bio"
                          onChange={handleChangeFinal}
                          value={form.bio}
                          className=" border box-border w-full text-sm justify-around mb-[5px] p-2 rounded-[10px] border-solid border-[#cecece]"
                          placeholder="Enter your decription here..."
                          required
                          rows="7"
                        />
                      </label>
                    </div>
                  </div>
                  <label className="z-[5] relative text-2xl font-bold mb-2 text-white ">
                    Confirm Specialities{" "}
                  </label>

                  <label className="z-[5] relative text-lg font-semibold text-gray-400 ml-2 mt-1">
                    (choose multiple if applicable)
                  </label>
                </div>
                {/* selection field with option selection view and close */}
                <div className="z-[100]">
                  <label className="text-white text-xl py-5">
                    <input
                      type="checkbox"
                      name="mensShirt"
                      value="mensShirt"
                      className="mx-2"
                      checked={checkedItems.includes("mensShirt")}
                      onChange={handleCheckboxChange}
                    />
                    Men's Shirt
                  </label>{" "}
                  <br />
                  <label className="text-white text-xl">
                    <input
                      type="checkbox"
                      name="womensShirt"
                      value="womensShirt"
                      className="mx-2"
                      checked={checkedItems.includes("womensShirt")}
                      onChange={handleCheckboxChange}
                    />
                    Women's Shirt
                  </label>{" "}
                  <br />
                  <label className="text-white text-xl">
                    <input
                      type="checkbox"
                      name="mensBlazer"
                      value="mensBlazer"
                      className="mx-2"
                      checked={checkedItems.includes("mensBlazer")}
                      onChange={handleCheckboxChange}
                    />
                    Men's Blazer
                  </label>{" "}
                  <br />
                  <label className="text-white text-xl">
                    <input
                      type="checkbox"
                      name="womensBlazer"
                      value="womensBlazer"
                      className="mx-2"
                      checked={checkedItems.includes("womensBlazer")}
                      onChange={handleCheckboxChange}
                    />
                    Women's Blazer
                  </label>
                </div>

                <label className="text-2xl font-bold my-4 text-white ">
                  Select your Price Range{" "}
                </label>
                <div className="multi-range-slider-container  lg:mr-14 bg-white p-2 rounded-lg">
                  <b className="text-lg  ">Pricing Range</b>
                  <br />
                  <b className="text-sm font-normal">
                    (All given Ranges are in rupees(₹))
                  </b>

                  <hr />
                  <MultiRangeSlider
                    min={100}
                    max={10000}
                    step={500}
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e) => {
                      handleInput(e);
                    }}
                    className="border border-white"
                    // onInput={(e: ChangeResult) => {
                    // 	setMinValue(minValue);
                    // 	setMaxValue(maxValue);
                    // }}
                  ></MultiRangeSlider>
                  <div
                    className=""
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="font-semibold" style={{ margin: "10px" }}>
                      Your Selected Range:
                    </div>
                    <div className="font-bold" style={{ margin: "10px" }}>
                      ₹{minValue}
                    </div>
                    <div className="font-bold" style={{ margin: "10px" }}>
                      ₹{maxValue}
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="z-[90] relative bg-gray-300 ml-[15%] mt-[1%] mr-5  px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
                onClick={handleBack}
              >
                Previous
              </button>
              <button
                className="z-[90] relative px-6 py-1.5 rounded-lg text-white bg-blue-500 hover:bg-blue-600 top-0"
                onClick={() => {
                  handleNext();
                  stepFormSubmit();
                }}
              >
                Proceed
              </button>
              <ProgressBar progressPercentage={85} />
            </div>
          ) : (
            <Step6 />
          )}
        </div>
      </div>
    </div>
  );
};

export default TailorProfileVerification;
