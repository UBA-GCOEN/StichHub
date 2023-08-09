import React, { useCallback, useState } from "react";
import Select from "react-tailwindcss-select";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import imr from "../../assets/img/imr.webp";
import { FileUploader } from "react-drag-drop-files";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { TimePicker } from "react-ios-time-picker";

// preview component
const Preview = ({ meta }) => {
  const { name, percent, status, previewUrl } = meta;
  return (
    <div className="preview-box">
      <img src={previewUrl} alt={name} loading="lazy"/> <span className="name">{name}</span> -{" "}
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
        }
      };
    }
  };

  return (
    <>
      <div className="lg:mx-[5%] ">
        <Dropzone
          styles={{
            dropzone: { overflow: "auto", background: "#f5f5f5"},
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

export const Tabs = ({ color, tailorDetails } ) => {
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

  const options = [
    { value: "men", label: "1. Men's Tailor" },
    { value: "women", label: "2. Women's Tailor" },
    { value: "coat", label: "3. Coat Tailor" },
    { value: "custom", label: "4. Custom Tailor" },
  ];

  const handleCheck = useCallback(
    (value, item) => {
      dispatch(item, "set", value);
    },
    [dispatch]
  );

  const [minValue, set_minValue] = useState(500);
  const [maxValue, set_maxValue] = useState(5000);
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
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
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
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="ml-[4%]">
                    <span className="text-xl font-bold">
                      Change Profile Picture
                    </span>
                    <div className="flex mb-5 justify-center lg:justify-start">
                    <img loading="lazy"
                        // src={file?file:tailorDetails.passport}
                        className={`border border-black w-[100px] m-auto h-[100px] shadow-md mt-5 rounded-[100%]`} alt="profile picture"
                      ></img>
                     
                    </div>
                    <label>
                      <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                        <button
                          type="submit"
                          className="p-1 focus:outline-none focus:shadow-outline"
                        >
                          <span className="bg-green-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300"></span>
                        </button>
                      </span>
                      <input
                        type="file"
                        className="text-sm text-grey-500
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
                      {/* {
                        tailorDetails.types.map((type) => (
                          
                          <div
                            id="alert-1"
                            className="flex w-fit  border border-blue-700 p-2 mb-4 text-blue-800 rounded-lg bg-blue-50"
                            role="alert"
                          >
                        <div className="ml-3 text-sm font-medium">
                          {type}
                        </div>
                        <button
                          type="button"
                          className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg  p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 "
                          data-dismiss-target="#alert-1"
                          aria-label="Close"
                        >
                          <span className="sr-only">Close</span>
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                          )
                        )
                      } */}
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
                            " flex bg-[#ece9e9] text-sm mb-5 pl-5 font-semibold text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400  focus:ring focus:ring-blue-500/20",
                          menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-black",
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
                        // min={tailorDetails.prizerange[0]?tailorDetails.prizerange[0]:500}
                        // max={tailorDetails.prizerange[1]?tailorDetails.prizerange[1]:10000}
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
                    <div className="w-fit mr-14 px-3 mt-3 mb-3 pb-3 font-semibold py-1  bg-blue-50 rounded-2xl border border-black">
                      <h3 className="mb-5 text-lg  text-gray-900 font-bold">
                        Choose Your Week Day of Availability
                      </h3>
                      <ul className="flex flex-row flex-wrap gap-1 w-full justify-center">
                        <li>
                          <input
                            type="checkbox"
                            id="react-option"
                            value=""
                            className="hidden peer"
                            required=""
                          />
                          <label
                            htmlFor="react-option"
                            className="inline-flex items-center justify-between w-fit p-[10px] text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
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
                            className="hidden peer"
                          />
                          <label
                            htmlFor="flowbite-option"
                            className="inline-flex items-center justify-between w-fit p-[10px] text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
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
                            className="hidden peer"
                          />
                          <label
                            htmlFor="angular-option"
                            className="inline-flex items-center justify-between w-fit p-[10px] text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
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
                            className="hidden peer"
                          />
                          <label
                            htmlFor="4th"
                            className="inline-flex items-center justify-between w-fit p-[10px] text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
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
                            className="hidden peer"
                          />
                          <label
                            htmlFor="5th"
                            className="inline-flex items-center justify-between w-fit p-[10px] text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
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
                            className="hidden peer"
                          />
                          <label
                            htmlFor="6th"
                            className="inline-flex items-center justify-between w-fit p-[10px] text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
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
                            className="hidden peer"
                          />
                          <label
                            htmlFor="7th"
                            className="inline-flex items-center justify-between w-fit p-[10px] text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
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
                        <div className="lg:flex lg:flex-row gap-4 justify-center">
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
                          <span >
                            Description/ Bio
                          </span>
                          <br />
                          <textarea
                          placeholder="Write about Yourself"
                            name="state"
                            defaultValue={tailorDetails?tailorDetails.bio:""}
                            className="text-black box-border w-full justify-around my-[8px] p-2.5 rounded-[3px] shadow-[0px_2px-8px_0px_rgba(99,99,99,0.2)] border-[#1f1e1e] disabled:text-gray-500 border-solid border-2"
                            required
                            rows="7"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <center>
                    <Drag />
                    <div className="lg:flex  items-center gap-4 justify-center mt-10">
                      <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2  text-white flex items-end">
                          <div>
                            <div className="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                              <div className="font-bold ">Shirts</div>

                              <div className="opacity-60 text-sm ">
                                Classic Cotton Shirt With Customized Cloth
                                fabric pattern checked
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          alt="colorful fabric shirts neatly arranged on clothes hangers" loading="lazy"
                          className="object-fill w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                          src="https://thumbs.dreamstime.com/b/clothes-hanger-filled-colorful-fabric-shirts-shop-men-s-shirts-shirt-hangers-fashion-store-shopping-182786345.jpg"
                        />
                      </div>
                      <div className="overflow-hidden mt-5 lg:mt-0 aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2  text-white flex items-end">
                          <div>
                            <div className="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                              <div className="font-bold ">Shirts</div>

                              <div className="opacity-60 text-sm ">
                                Classic Cotton Shirt With Customized Cloth
                                fabric pattern checked
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          alt="colorful fabric shirts neatly arranged on clothes hangers" loading="lazy"
                          className="object-fill w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
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
