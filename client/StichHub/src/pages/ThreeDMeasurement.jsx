import React, { useState } from "react";
// import Profile from "../components/TailorDashboard/Profile";
// import NewTailor from "../components/TailorDashboard/NewTailor";
// import Graphs from "../components/TailorDashboard/Graphs";
import Navbardark from "../components/Navbardark";
import { Link } from "react-router-dom";

const ThreeDMeasurement = () => {
  return (
    <div className="bg-primary">
      <Navbardark />
      <Mainpage />
      <SizeCalculator />
    </div>
  );
};

export default ThreeDMeasurement;

const Mainpage = () => {
  return (
    <div className="bg-primary justify-center text-center h-screen">
      <div className="text-white font-bold text-center justify-center mt-20 text-3xl mx-5 ">
        Choose Your Measurements
      </div>
      <div className="ml-[32%]">
        <select
          id="profile"
          class="bg-gray-800 border text-gray-400 ml-10 mt-5 w-[80%] lg:w-[45%] text-center  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>--choose profile</option>
          <option value="new">m1</option>
          <option value="new">m2</option>
        </select>
      </div>
      <div className="flex lg:block  mx-10 mt-5 gap-4">
        <button className="bg-purple-500 w-1/2 lg:w-1/4 rounded-xl px-5 py-3 text-white text-xl">
          Edit
        </button>
        <Link to="/FabricModel">
          <button className="bg-blue-400 lg:ml-10 w-1/2 lg:w-1/4 rounded-xl px-5 py-3 text-white text-xl">
            Continue
          </button>
        </Link>
      </div>
      <div className="text-3xl mt-14 font-bold text-center justify-center text-white">
        or
      </div>
      <div className="text-3xl mt-3 font-bold text-center justify-center text-white">
        Create Your New Measurement
      </div>
      <div>
        <button className="bg-blue-500 shadow-inner-md drop-shadow-md ml-0 mt-5  w-1/2 lg:w-1/4 rounded-xl px-5 py-3 text-white text-xl">
          Create
        </button>
      </div>
    </div>
  );
};

const SizeCalculator = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [shoeSize, setShoeSize] = useState(0);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [neckSize, setNeckSize] = useState(0);
  const [chestSize, setChestSize] = useState(0);
  const [shoulderSize, setShoulderSize] = useState(0);
  const [waistSize, setWaistSize] = useState(0);
  const [armLength, setArmLength] = useState(0);
  const [inseam, setInseam] = useState(0);
  const handleOptionChange = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  const handleCalculate = () => {
    // Convert shoe size from US to cm
    const shoeSizeCm = shoeSize * 2.54;
    const heightm = height / 100;
    const bmi = (weight / (height * height)) * 10000;
    console.log(bmi);
    const bmis = [20, 22.5, 25, 27.5, 30, 32.5, 35, 37.5, 40];
    const neckm = [14.8, 15.5, 16.1, 16.7, 17.2, 17.6, 18.0, 18.5, 18.9];
    const neckf = [13.0, 13.5, 13.9, 14.3, 14.8, 15.2, 15.6, 15.9, 16.3];
    const heightmf = [
      5.5, 5.6, 5.7, 5.8, 5.9, 5.1, 5.11, 5.12, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5,
    ];
    // const finalheight = heightmf * 30.48;
    const waist = [
      29.9, 30.4, 30.8, 31.3, 31.7, 32.7, 33.1, 33.6, 34, 34.5, 35, 35.4, 36,
      37, 38,
    ];
    const shoulders = [
      48.38, 49.1, 49.9, 50.6, 51.4, 52.1, 52.8, 53.6, 54.3, 55.1, 55.8, 56.6,
      57.3, 58, 60, 61,
    ];
    const Arms = [];
    const chest = [
      40.9, 41.4, 41.8, 42.3, 42.7, 43, 43.7, 44.1, 44.6, 45, 45.5, 46, 46.4,
    ];
    const inseam = [];

    const heightFeet = Math.floor(height / 30.48);
    console.log(heightFeet);
    const heightInches = Math.round((height % 30.48) / 2.54);
    // Find index of closest height in heightmf array
    const heightIndex = heightmf.findIndex((height) => height >= heightFeet);
    // Get corresponding values from other arrays
    const waistValue = waist[heightIndex];
    const shouldersValue = shoulders[heightIndex];
    const armsValue = Arms[heightIndex]; // Note: Arms array is currently empty in your provided code
    const chestValue = chest[heightIndex];
    const inseamValue = inseam[heightIndex];
    console.log(waistValue, shouldersValue, armsValue, chestValue, inseamValue);

    if (gender === "male") {
      // Calculate sizes for males
      const chestSizeCm = (height * 0.5 + weight / 5.0 - age / 10.0) / 2.54;
      const shoulderSizeCm = height / 5.5 / 2.54;
      const neckSizeCm = weight / 23.0 / 2.54;
      const waistSizeCm = weight / 18.0 / 2.54;
      const armLengthCm = height / 2.5 / 2.54;
      const inseamCm = (height * 0.65) / 2.54;

      setNeckSize(neckSizeCm.toFixed(2));
      setChestSize(chestValue.toFixed(2));
      setShoulderSize(shouldersValue.toFixed(2));
      setWaistSize(waistValue.toFixed(2));
      setArmLength(armsValue.toFixed(2));
      setInseam(inseamValue.toFixed(2));
    } else if (gender === "female") {
      // Calculate sizes for females
      const chestSizeCm = (height * 0.45 + weight / 6.5 - age / 10.0) / 2.54;
      const shoulderSizeCm = height / 6.0 / 2.54;
      const neckSizeCm = weight / 25.0 / 2.54;
      const waistSizeCm = weight / 20.0 / 2.54;
      const armLengthCm = height / 2.6 / 2.54;
      const inseamCm = (height * 0.62) / 2.54;

      setNeckSize(neckSizeCm.toFixed(2));
      setChestSize(chestSizeCm.toFixed(2));
      setShoulderSize(shoulderSizeCm.toFixed(2));
      setWaistSize(waistSizeCm.toFixed(2));
      setArmLength(armLengthCm.toFixed(2));
      setInseam(inseamCm.toFixed(2));
    }
  };
  const [minValue, set_minValue] = useState(170);
  const handleInput = (e) => {
    set_minValue(e.target.value);
  };
  const [minValue2, set_minValue2] = useState(60);
  const handleInput1 = (e) => {
    set_minValue2(e.target.value);
  };
  const [minValue3, set_minValue3] = useState(30);
  const handleInput2 = (e) => {
    set_minValue3(e.target.value);
  };
  const [minValue4, set_minValue4] = useState(8);
  const handleInput3 = (e) => {
    set_minValue4(e.target.value);
  };

  return (
    <div className="bg-primary h-fit flex flex-col  text-white">
      {/* {isShown && ( */}
      <h1 className="text-center text-3xl mx-10 mt-10 font-bold">
        Create Your Measurement
      </h1>
      <div className="text-left ml-14 lg:ml-[18%] mt-10">
        <label className="mt-10 text-xl ">
          <label className="text-left">Height (cm)</label>
          <br></br>
          <input
            type="range"
            value={minValue}
            min={130}
            max={250}
            className="w-[80%]"
            onInput={(e) => {
              handleInput(e);
            }}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
          <div className="font-bold text-center">{minValue} cm</div>
        </label>
        <label className="mt-10 text-xl">
          Weight (kg)<br></br>
          <input
            type="range"
            value={minValue2}
            min={30}
            max={100}
            className="w-[80%]"
            onInput={(e) => {
              handleInput1(e);
            }}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
          <div className="font-bold text-center">{minValue2} kg</div>
        </label>
        <label className="mt-5 text-xl">
          Age<br></br>
          <input
            type="range"
            value={minValue3}
            min={18}
            max={80}
            step={1}
            className="w-[80%]"
            onInput={(e) => {
              handleInput2(e);
            }}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <div className="font-bold text-white text-center">
            {minValue3} years
          </div>
        </label>
        <label className="mt-10 text-xl">
          Shoe Size (US)
          <br />
          <input
            type="range"
            value={minValue4}
            min={5}
            max={14}
            step={1}
            className="w-[80%]"
            onInput={(e) => {
              handleInput3(e);
            }}
            onChange={(e) => setShoeSize(Number(e.target.value))}
          />
          <div className="font-bold text-center text-white">US {minValue4}</div>
        </label>
      </div>
      <label className=" text-xl ml-14 lg:ml-[18%] mt-3">
        <label className="text-xl text-start">Gender</label>
        <br />
        <div className="mt-3">
          <input
            type="radio"
            checked={gender == "male"}
            name="gender"
            className="mx-2"
            value="male"
            onChange={handleOptionChange}
          />
          <label>Male</label>
          <input
            type="radio"
            checked={gender == "female"}
            name="gender"
            className="mx-2 ml-10"
            value="female"
            onChange={handleOptionChange}
          />
          <label>Female</label>
        </div>
        {/* <div className="font-bold text-white" >
                           {gender}
                        </div> */}
      </label>

      <button
        className="bg-blue-500 w-fit ml-[35%] lg:ml-[47%]  px-5 mt-5 text-xl font-semibold py-3 mx-20 rounded-2xl drop-shadow-md shadow-inner-xl"
        onClick={() => {
          handleClick();
          handleCalculate();
        }}
      >
        Calculate
      </button>
      {/* )} */}
      {isShown && (
        <div className="ml-[10%] mr-[10%]  mt-[10%] text-center">
          <div className="text-white text-3xl font-bold mb-3 ">
            Give Your Profile a Name
          </div>
          <input
            type="text"
            Placeholder="Profile1"
            className="bg-gray-700 text-gray-300 font-semibold text-center rounded-sm"
          />
          <br />
          <button className="bg-yellow-400 text-black font-bold mt-3 w-[15%] lg:w-[4%] rounded-md items-self-center">
            <img
              className=""
              src="https://images.squarespace-cdn.com/content/v1/5c38d342e2ccd16874962329/1555870468349-36N6I1DQ4711MNPG0ZQ0/blog+bw+trans.png"
            />
          </button>
          <h3 className="text-xl font-bold text-gray-300 mt-4">
            Given Below are the measurements generated by our system.
          </h3>
          <div className="grid grid-col-3 mb-3 gap-2 text-black mt-10 ">
            <div className="lg:py-2 bg-white text-center rounded- px-1">
              <p className="text-lg font-semibold">Neck Size</p> {neckSize} cm
            </div>
            <div className="lg:py-2 col-start-2 bg-white rounded-sm justify-center text-center col-end-3 px-1">
              <p className="text-lg font-semibold">Chest Size</p> {chestSize} cm
            </div>
            <div className="col-start-3 lg:py-2 bg-white rounded-sm justift-center text-center col-end-4 px-1">
              <p className="text-lg font-semibold">Shoulder Size</p>{" "}
              {shoulderSize} cm
            </div>
            <div className="bg-white lg:py-2 text-center rounded-sm px-1">
              <p className="text-lg font-semibold">Waist Size</p> {waistSize} cm
            </div>
            <div className="bg-white lg:py-2 text-center rounded-sm px-1">
              <p className="text-lg font-semibold">Arm Length</p> {armLength} cm
            </div>
            <div className="bg-white lg:py-2 text-center rounded-sm px-1">
              <p className="text-lg font-semibold">Inseam</p> {inseam} cm
            </div>
          </div>
          <Link
            to="/Mainpage"
            className="underline text-gray-400 hover:text-gray-200"
          >
            +6 More measurements
          </Link>
          <br />

          <button className="px-3 mt-10 py-2 text-center text-white bg-gray-700 rounded-xl">
            Go to 3D Model
          </button>
        </div>
      )}
    </div>
  );
};
