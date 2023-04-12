import React, { useState, useEffect, useCallback } from "react";
import Navbardark from "../Navbardark";
import LeftView from "./LeftView";
import styled from "styled-components";
import "react-phone-number-input/style.css";
import Phoneinput from "react-phone-number-input";
import Select from "react-tailwindcss-select";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import imr from "../../assets/img/imr.png";
import { FileUploader } from "react-drag-drop-files";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { TimePicker } from "react-ios-time-picker";

const fileTypes = ["JPG", "PNG", "GIF"];

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { Country, State, City } from "country-state-city";

// Main container style
const MainContainer = styled.div`
  width: 50%;

  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
  @media (min-width: 992px) {
    //This should work for Normal desktops(15 to 18 inch) only.
    width: 20%;
  }
`;

// stepcontainer circle styling
const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    background: #cfe2f3;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: "";
    position: absolute;
    background: gray;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

// on completed step style
const StepStyle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid
    ${({ step }) => (step === "completed" ? "black" : "lightgray")};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepCount = styled.span`
  font-size: 19px;
  color: black;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 19px;
  color: #4ea5f4;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 30px;
`;

const ButtonStyle = styled.button`
  @apply rounded text-white cursor-pointer w-[90px] p-2 border-0;
  background: lightgray;
  :active {
    @apply scale-[0.98];
  }
  :disabled {
    @apply text-black cursor-not-allowed;
    background: #black;
  }
`;

//list for defining no of steps pages required
const steps = [
  {
    label: "profile",
    step: 1,
  },
  {
    label: "portfolio",
    step: 2,
  },
];

// preview component
const Preview = ({ meta }) => {
  const { name, percent, status, previewUrl } = meta;
  return (
    <div className="preview-box">
      <img src={previewUrl} /> <span className="name">{name}</span> -{" "}
      <span className="status">{status}</span>
      {status !== "done" && (
        <span className="percent">&nbsp;({Math.round(percent)}%)</span>
      )}
    </div>
  );
};

const Drag = () => {
  // handle the status of the file upload
  const handleChangeStatus = ({ xhr }) => {
    if (xhr) {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          const result = JSON.parse(xhr.response);
          console.log(result);
        }
      };
    }
  };

  return (
    <>
      <div className="lg:mx-[5%] ">
        <Dropzone
          styles={{
            dropzone: { overflow: "auto", background: "#f5f5f5" },
            inputLabelWithFiles: { margin: "20px 3%" },
          }}
          classNames="rounded-lg shadow-gray-400 text-sm"
          canRemove={true}
          PreviewComponent={Preview}
          accept="image/*"
        />
      </div>
    </>
  );
};

const Profile = () => {
  //some custom react hooks
  const [value, setValue] = useState();

  const [activeStep, setActiveStep] = useState(1);

  //for handling next step button function
  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  //for handling previous step button function
  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };
  const [step, setStep] = useState(1);

  //for handling Next step page button function
  const handleNext = () => {
    setStep(step + 1);
    setActiveStep(activeStep + 1);
  };

  //for handling Previous step page button function
  const handleBack = () => {
    setStep(step - 1);
    setActiveStep(activeStep - 1);
  };

  //steps length
  const totalSteps = steps.length;

  //page width setter
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  //checkbox on click button enable
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };

  // When the button is clicked
  const btnHandler = () => {
    alert("The buttion is clickable!");
  };
  const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    const [file, setFile] = useState();
    function handleChange(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
    // hooks and related callback components for Step5
    const [speciality, setSpecial] = useState(null);

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

    const [minValue, setMinValue] = useState(500);
    const [maxValue, setMaxValue] = useState(5000);
    const handleInput = (e) => {
      set_minValue(e.minValue);
      set_maxValue(e.maxValue);
    };

    const [value, setValue] = useState("10:00");

    const onChange = (timeValue) => {
      setValue(timeValue);
    };
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 gap-2 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className=" mr-2  last:mr-0 border border-black rounded-lg flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-transparent"
                      : "text-black bg-transparent")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Portfolio
                </a>
              </li>
              <li className="-mb-px mr-2 border border-black rounded-lg last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Previous Collections
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="ml-[4%]">
                      <span className="text-xl font-bold">
                        Change Profile Picture
                      </span>
                      <div className="flex mb-5 justify-center lg:justify-start">
                        <img
                          src={file}
                          className="border border-black w-[100px] h-[100px] shadow-md mt-5 rounded-lg "
                        ></img>
                      </div>
                      <label>
                        <span class="absolute inset-y-0 right-0 flex items-center pl-2">
                          <button
                            type="submit"
                            class="p-1 focus:outline-none focus:shadow-outline"
                          >
                            <span class="bg-green-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300"></span>
                          </button>
                        </span>
                        <input
                          type="file"
                          class="text-sm text-grey-500
              file:mr-5 file:py-2 file:px-10
              file:rounded-lg file:border-0
              file:text-md file:font-semibold  file:text-white
              file:bg-blue-700
              hover:file:cursor-pointer hover:file:opacity-80 mb-5
            "
                          accept="image/png, image/jpeg"
                          onChange={handleChange}
                        />
                      </label>
                      <br />
                      <span className="text-lg font-bold">
                        Choose Specialities
                      </span>
                      <div className="flex flex-col lg:flex-row lg:gap-2 mt-3">
                        <div
                          id="alert-1"
                          class="flex w-fit flex border border-blue-700 p-2 mb-4 text-blue-800 rounded-lg bg-blue-50"
                          role="alert"
                        >
                          <div class="ml-3 text-sm font-medium">
                            Women's tailor
                          </div>
                          <button
                            type="button"
                            class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg  p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 "
                            data-dismiss-target="#alert-1"
                            aria-label="Close"
                          >
                            <span class="sr-only">Close</span>
                            <svg
                              aria-hidden="true"
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div
                          id="alert-1"
                          class=" w-fit flex border border-blue-700 p-2 mb-4 text-blue-800 rounded-lg bg-blue-50"
                          role="alert"
                        >
                          <div class="ml-3 text-sm font-medium">
                            Men's tailor
                          </div>
                          <button
                            type="button"
                            class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 "
                            data-dismiss-target="#alert-1"
                            aria-label="Close"
                          >
                            <span class="sr-only">Close</span>
                            <svg
                              aria-hidden="true"
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div
                          id="alert-1"
                          class=" w-fit flex border border-blue-700 p-2 mb-4 text-blue-800 rounded-lg bg-blue-50"
                          role="alert"
                        >
                          <div class="ml-3 text-sm font-medium">
                            Custom tailor
                          </div>
                          <button
                            type="button"
                            class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 "
                            data-dismiss-target="#alert-1"
                            aria-label="Close"
                          >
                            <span class="sr-only">Close</span>
                            <svg
                              aria-hidden="true"
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      {/* selection field with option selection view and close */}
                      <div className="lg:mr-14 rounded-lg  mb-3">
                        <Select
                          onChange={(value) => setValue1(value)}
                          value={value1}
                          isClearable={isClearable}
                          isMultiple={isMultiple}
                          options={options}
                          className=""
                          classNames={{
                            menuButton: (state) =>
                              " flex text-sm mb-5 pl-5 font-semibold text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20",
                            menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
                            listItem: ({ isSelected }) =>
                              "list-none py-1.5 px-2 hover:bg-blue-500 rounded-md hover:text-white cursor-pointer",
                          }}
                        />
                      </div>
                      <div className="multi-range-slider-container  lg:mr-14">
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
                          <div
                            className="font-semibold"
                            style={{ margin: "10px" }}
                          >
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
                      <div className="w-fit mr-14 px-3 mt-3 mb-3 pb-3 font-semibold py-1  bg-blue-50 rounded-2xl border border-blue-700">
                        <h3 class="mb-5 text-lg  text-gray-900 font-bold">
                          Choose Your Week Day of Availability
                        </h3>
                        <ul class="flex flex-row flex-wrap gap-1 w-full">
                          <li>
                            <input
                              type="checkbox"
                              id="react-option"
                              value=""
                              class="hidden peer"
                              required=""
                            />
                            <label
                              for="react-option"
                              class="inline-flex items-center justify-between w-fit p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                              <div class="block">
                                <div class="w-full text-lg font-semibold">
                                  Monday
                                </div>
                              </div>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="flowbite-option"
                              value=""
                              class="hidden peer"
                            />
                            <label
                              for="flowbite-option"
                              class="inline-flex items-center justify-between w-fit p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                              <div class="block">
                                <div class="w-full text-lg font-semibold">
                                  Tuesday
                                </div>
                              </div>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="angular-option"
                              value=""
                              class="hidden peer"
                            />
                            <label
                              for="angular-option"
                              class="inline-flex items-center justify-between w-fit p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                              <div class="block">
                                <div class="w-full text-lg font-semibold">
                                  Wednesday
                                </div>
                              </div>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="4th"
                              value=""
                              class="hidden peer"
                            />
                            <label
                              for="4th"
                              class="inline-flex items-center justify-between w-fit p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                              <div class="block">
                                <div class="w-full text-lg font-semibold">
                                  Thursday
                                </div>
                              </div>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="5th"
                              value=""
                              class="hidden peer"
                            />
                            <label
                              for="5th"
                              class="inline-flex items-center justify-between w-fit p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                              <div class="block">
                                <div class="w-full text-lg font-semibold">
                                  Friday
                                </div>
                              </div>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="6th"
                              value=""
                              class="hidden peer"
                            />
                            <label
                              for="6th"
                              class="inline-flex items-center justify-between w-fit p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                              <div class="block">
                                <div class="w-full text-lg font-semibold">
                                  Saturday
                                </div>
                              </div>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="7th"
                              value=""
                              class="hidden peer"
                            />
                            <label
                              for="7th"
                              class="inline-flex items-center justify-between w-fit p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                              <div class="block">
                                <div class="w-full text-lg font-semibold">
                                  Sunday
                                </div>
                              </div>
                            </label>
                          </li>
                        </ul>

                        <div className="mt-4">
                          <label className="font-bold text-lg">
                            Choose Availability Timing
                          </label>
                          <div className="lg:flex lg:flex-row gap-4 ">
                            <div>
                              Start Time
                              <TimePicker onChange={onChange} value={value} />
                            </div>
                            <div>
                              End Time
                              <TimePicker onChange={onChange} value={value} />
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                      <div xs={7}>
                        <div className="mb-2 col-start-2 mt-5 col-end-3 lg:mr-14">
                          <label>
                            <span className="text-gray-700">
                              Description/ Bio
                            </span>
                            <br />
                            <textarea
                              name="state"
                              defaultValue="Hello i am blablablablbla"
                              className=" border box-border w-full text-sm justify-around mb-[5px] p-2 rounded-[10px] border-solid border-[#cecece]"
                              placeholder="blablabla"
                              required
                              rows="7"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <center>
                      <Drag />
                      <div class="lg:flex  items-center gap-4 justify-center mt-10">
                        <div class="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                          <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2  text-white flex items-end">
                            <div>
                              <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                <div class="font-bold ">Shirts</div>

                                <div class="opacity-60 text-sm ">
                                  Classic Cotton Shirt With Customized Cloth
                                  fabric pattern checked
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            alt=""
                            class="object-fill w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                            src="https://thumbs.dreamstime.com/b/clothes-hanger-filled-colorful-fabric-shirts-shop-men-s-shirts-shirt-hangers-fashion-store-shopping-182786345.jpg"
                          />
                        </div>
                        <div class="overflow-hidden mt-5 lg:mt-0 aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                          <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2  text-white flex items-end">
                            <div>
                              <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                <div class="font-bold ">Shirts</div>

                                <div class="opacity-60 text-sm ">
                                  Classic Cotton Shirt With Customized Cloth
                                  fabric pattern checked
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            alt=""
                            class="object-fill w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                            src="https://thumbs.dreamstime.com/b/clothes-hanger-filled-colorful-fabric-shirts-shop-men-s-shirts-shirt-hangers-fashion-store-shopping-182786345.jpg"
                          />
                        </div>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Step1 = () => {
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [value, setValue] = useState();
    return (
      <div className="ml-[10%] mt-0 mr-10">
        <div className="mb-5">
          <span className="font-bold text-2xl">Edit Profile</span>
        </div>
        <div class="lg:grid col-start-1 col-end-3 lg:grid-cols-2 ">
          <div xs={5}>
            <div className="mb-2 lg:mr-5">
              <label>
                <span className="text-gray-700">First Name</span>
                <br />
                <input
                  type="text"
                  name="name"
                  defaultValue="Vishal"
                  className="shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                  placeholder="John cooks"
                  required
                />
              </label>
            </div>
          </div>
          <div xs={6}>
            <div className="mb-2 col-start-1 col-end-3">
              <label>
                <span className="text-gray-700">Last Name</span>
                <br />
                <input
                  type="text"
                  name="name"
                  defaultValue="Kesharwani"
                  className="shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                  placeholder="John cooks"
                  required
                />
                <br />
              </label>
            </div>
          </div>

          <div className="mb-2 col-start-1 col-end-3">
            <label>
              <span className="text-gray-700">Email address</span>
              <div class="relative text-gray-600 focus-within:text-gray-400 col-start-1 col-end-3">
                <input
                  type="email"
                  name="email"
                  defaultValue="vsk@gmail.com"
                  placeholder="vsk@gmail.com"
                  className=" text-black shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                />
                <span class="absolute inset-y-0 right-0 flex items-center pl-2">
                  <button
                    type="submit"
                    class="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <span class="bg-green-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300">
                      <svg
                        aria-hidden="true"
                        class="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </div>
            </label>
          </div>
          <div className="mb-2 col-start-1 col-end-3">
            <label>
              <span className="text-gray-700">Address</span>
              <br />
              <input
                name="address"
                type="address"
                defaultValue="Nagpur"
                className="shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                placeholder="House number and street name"
                required
              />{" "}
            </label>
          </div>
          {/* phoneno country selector hooks used here */}
          <div className="col-start-1 col-end-3">
            <span className="text-gray-700">Phone No.</span>
            <br />
            <Phoneinput
              className="shadow-sm shadow-blue-400 pl-2 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
              placeholder="Enter phone number"
              value="8788878786"
              defaultCountry="IN"
              onChange={setValue}
            />
          </div>
          <div xs={5}>
            <div className="mb-2 col-start-1 col-end-3 lg:col-start-1 lg:col-end-2 lg:mr-5">
              <label>
                <span className="text-gray-700">City</span>
                <br />
                <input
                  name="city"
                  type="city"
                  defaultValue="Nagpur"
                  className="shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                  placeholder="Nagpur"
                  required
                />{" "}
              </label>
            </div>
          </div>
          <div>
            <div className="mb-2 col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
              <label>
                <span className="text-gray-700">State</span>
                <br />
                <input
                  name="state"
                  type="state"
                  defaultValue="Maharashtra"
                  className="shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                  placeholder="Maharashtra"
                  required
                />{" "}
              </label>
            </div>
          </div>
          <div className="mb-2 col-start-1 col-end-3">
            <label>
              <span className="text-gray-700">Password</span>
              <br />
            </label>
          </div>
          <div class="relative text-gray-600 focus-within:text-gray-400 col-start-1 col-end-3 mb-5">
            <input
              type="password"
              name="q"
              placeholder="**********"
              defaultValue="Vskvishal"
              className=" text-black shadow-sm shadow-blue-400 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
            />
            <span class="absolute inset-y-0 right-0 flex items-center pl-2">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <span class="bg-green-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300">
                  <svg
                    aria-hidden="true"
                    class="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </span>
          </div>
        </div>
        <button className="bg-gray-300  w-fit mr-5  px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0">
          Save
        </button>
        <button
          className="bg-blue-500 w-fit px-6 py-1.5 rounded-lg text-white hover:bg-blue-600 top-0"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    );
  };
  const options = [
    { value: "men", label: "1. Men's Tailor" },
    { value: "women", label: "2. Women's Tailor" },
    { value: "coat", label: "3. Coat Tailor" },
    { value: "custom", label: "4. Custom Tailor" },
  ];
  const Step2 = () => {
    return (
      <div className="justify-center">
        <Tabs color="pink" />

        <button
          className="bg-gray-300 w-fit ml-5 mr-5 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
          onClick={handleBack}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 w-fit px-6 py-1.5 rounded-lg text-white hover:bg-blue-600"
          onClick={handleNext}
          disabled={activeStep === totalSteps}
        >
          Submit
        </button>
      </div>
    );
  };

  return (
    <div className="bg-primary h-full">
      <div className="bg-white rounded-xl h-fit w-[90%] mr-[5%] lg:mr-[0%] lg:w-[70%]   ml-[5%] lg:ml-[20%] pt-1">
        {/* Stepper Definition  */}
        <MainContainer>
          <StepContainer width={width}>
            {steps.map(({ step, label }) => (
              <StepWrapper key={step}>
                <StepStyle
                  step={activeStep >= step ? "completed" : "incomplete"}
                >
                  <StepCount>{step}</StepCount>
                </StepStyle>
              </StepWrapper>
            ))}
          </StepContainer>
        </MainContainer>

        {/* Stepper Buttons Display and onclick handler definition */}
        <div className="flex items-center justify-center h-auto pt-[10px] ">
          <div className="bg-white p-6 rounded-lg w-full lg:max-w-5xl">
            {/* pages displaying as per current state of stepper  */}
            {step === 1 ? <Step1 /> : <Step2 />}

            {/* Conditions for displaying buttons on each page of stepper */}
            <div className="flex justify-center gap-10  mt-6">
              {/* button for 4th page */}
            </div>
          </div>
          <br />

          {/* {step==2? <div>
             </div> : <div></div>} */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
