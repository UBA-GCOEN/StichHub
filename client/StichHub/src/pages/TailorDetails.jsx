import { React, useState } from "react";
import { FaArrowLeft, FaHeart, FaShareAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ProgressbarM from "../components/TailorDetails/ProgressM";
import Progressbar from "../components/TailorDetails/Progressbar";
import StarRate from "../components/TailorDetails/StarRate";
import TailorSum from "../components/TailorDetails/TailorSum";
import Tailorhead from "../components/TailorDetails/Tailorhead";

function TailorDetails() {
  const [isMobile, setIsMobile] = useState(false);

  // console.log(propsData);

  // check screen size and set state variable
  window.addEventListener("resize", () => {
    const isMobileView = window.innerWidth <= 840;
    if (isMobileView !== isMobile) setIsMobile(isMobileView);
  });

  // render mobile or desktop component based on isMobile state
  return (
    <div className="overflow-x-hidden">
      <TailorDetailsM />
      <TailorDetailsD />
    </div>
  );
}

const TailorDetailsD = () => {

  const location = useLocation();
  const propsData = location.state;

  return (
    <div className="w-screen h-[100%] min-h-screen cardGradient hidden md:block ">
      <div className="relative hidden lg:block h-fit rounded-lg p-2 w-full text-black m-auto overflow-hidden">
        {/* Gradient */}
        <div className="absolute opacity-70 circleGradient-blue object-cover w-[70%] h-[115%] -top-24 -right-[48rem] z-5 blur-xl"></div>

        {/* Gradient */}

        {/* Gradient */}
        <div className="absolute opacity-70 circleGradient-blue object-cover w-[70%] h-[115%] -bottom-[3rem] -left-[48rem] z-5 "></div>

        {/* Gradient */}
        <div className=" w-full h-full flex justify-center mt-6 ">
          <div className="flex w-full h-full justify-center">
            <div className="relative first-letter:w-fit min-h-fit drop-shadow-lg">
              {/* Photo and book button */}
              <div className="relative max-w-[38rem] top-[2rem] left-[1rem] w-[65%] h-[65%] max-h-[42rem]  blur-md -z-10  m-auto">
                <TailorSum propsData={propsData} />
              </div>
              <div className="top-[13.03rem] left-[6.3rem] z-10 w-[60%] h-[60%] absolute  text-[black]  inline-block -translate-y-2/4 mx-auto my-0  ">
                <TailorSum propsData={propsData} />
              </div>
            </div>

            <div className=" w-fit p-6 min-h-full rounded-lg drop-shadow-lg overflow-x-hidden bg-[#191F22]">
              <div className="w-full h-10 p-2 mb-4 items-center">
                {/* Back Button */}
                <Link to="/home">
                  <div className="float-left">
                    {/* BACK BUTTON */}
                    {/* <a href="./TailorList"> */}
                    <FaArrowLeft className="w-10 h-10 bg-[#b8b0b0] rounded-full p-2 hover: border-2 hover:border-black" />
                    {/* </a> */}
                  </div>
                </Link>
                {/* Back Button End */}

                {/* Share BUTTON */}
                <div className="float-right pl-4">
                  <FaShareAlt className="w-12 h-10 p-2 rounded-full bg-[#b8b0b0] hover: border-2 hover:border-black cursor-pointer" />
                </div>
                {/* Share BUTTON */}

                {/* Like button */}
                <div className="relative hover:bg-slate-500 rounded-full float-right m-auto items-center justify-center">
                  <FaHeart className="w-[2.5rem] h-[2.3rem] bg-[#b8b0b0] rounded-full p-2 hover: border-2 hover:border-black cursor-pointer" />
                </div>
                {/* Like button */}
              </div>
              <div>
                {/* Name and price tag */}
                <Tailorhead propsData={propsData} />
              </div>
              <div className=" drop-shadow-lg m-2 ">
                {/*Bio and address*/}
                <div className=" p-4 pb-1 mt-1 drop-shadow-lg  w-full  items-center  rounded-lg">
                  <h2 className="text-center font-semibold text-3xl text-white mb-2">
                    About the Tailor
                  </h2>
                  <div className=" w-full break-all items-center text-center">
                    <h1 className="text-gray-300">{propsData.item.bio}</h1>
                  </div>
                </div>
                <div className=" flex items-center align-middle gap-4 p-4 pb-1 mt-1 drop-shadow-lg  w-full rounded-lg ">
                  <h2 className="text-left font-semibold text-xl text-white">
                    Address Details:
                  </h2>
                  <p className="text-left text-gray-300 text-base">
                    {propsData.item.address}, {propsData.item.address2}, {propsData.item.state}, {propsData.item.country}, {propsData.item.pincode}
                  </p>
                  {/* {propsData.item.contact} <br /> may create propblems */}
                  {/* <p className="text-left text-gray-300">
                    {propsData.item.state} ,{propsData.item.country} ,
                    {propsData.item.pincode} <br />
                  </p> */}
                </div>
              </div>

              {/* Book AppointMent */}

              <div className="flex justify-between w-full items-center p-2 gap-4 mt-4">
                <h1 className=" text-white text-lg">
                  Current Stitching Price:
                </h1>
                <button className="border-2 border-blue-700 bg-blue-700 hover:bg-transparent text-white font-semibold py-2 px-10 rounded-full">
                  ₹ {propsData.item.prizerange[0]} - ₹{" "}
                  {propsData.item.prizerange[1]}
                </button>
              </div>
              <div className="mt-4">
                <h1 className="text-2xl text-white text-center">
                  Ratings & Reviews
                </h1>
                <div className="relative overflow-hidden flex justify-around mt-2 p-2 text-white ">
                  <div className="justify-center text-center items-center">
                    {/* Overall rating */}
                    <StarRate />
                  </div>
                  <div className="w-2/5">
                    <Progressbar />
                    <Progressbar />
                    <Progressbar />
                    <Progressbar />
                  </div>
                </div>
              </div>
              <Link
                to="/home/category"
                state={{ item: propsData.item }}
                className="w-2/5"
              >
                <div className="text-center mt-6 drop-shadow-lg">
                  <button className="drop-shadow-lg bg-[white] hover:bg-transparent text-black hover:text-white hover:border-2 hover:border-white font-semibold py-2 px-4 rounded-full">
                    Book Appointmet
                  </button>
                </div>
              </Link>

              {/* Book AppointMent End*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailorDetails;

const TailorDetailsM = () => {
  const location = useLocation();
  const propsData = location.state;
  // console.log(propsData);
  return (
    <div className="lg:hidden block cardGradient w-full h-full min-h-screen overflow-hidden pb-10">
      {/* Back Button */}
      <Link to="/home">
        <div>
          <div className="   p-2 w-12 h-12">
            <FaArrowLeft className="h-7 w-7" />
          </div>
        </div>
      </Link>
      {/* Button end */}

      {/* Photo and price tag Name*/}
      <div>
        <div>
          {/* Photo */}
          <div className="bg-white p-4 pb-1 mt-1 drop-shadow-lg  w-4/5  items-center m-auto rounded-lg">
            <div className="drop-shadow-lg flex w-fit h-fit items-center justify-center text-center mx-auto">
              <img src={propsData.item.passport} className="rounded-xl" />
            </div>
            {/* Photo End */}

            {/* Tailor Name */}
            <div className="flex justify-around m-2 p-2">
              <div className="justify-center items-center p-2">
                <div>
                  <h1>{propsData.item.name}</h1>
                </div>
                <div>
                  <h3 className="text-[#636262] text-sm">
                    {propsData.item.city}, {propsData.item.pincode}
                  </h3>
                </div>
              </div>
              <div className="relative w-fit h-fit hover:bg-slate-500 rounded-full items-center justify-center p-1 m-auto">
                <FaHeart className="w-[1.8rem] h-[1.8rem] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4" />
              </div>
            </div>
            {/* End Name */}
          </div>
        </div>
        {/* Tabs Start */}
        {/* Feature Removed */}
        {/* Tabs  End */}
        {/* Bio Start */}
        <div className="bg-white p-4 pb-1 mt-1 drop-shadow-lg  w-4/5  items-center m-auto rounded-lg text-center">
          <h2 className="font-semibold text-3xl text-center">About the Tailor</h2>
          <h3 className="break-all">{propsData.item.bio}</h3>
        </div>
        {/* Bio Ends */}
        {/* ADDRESS */}
        <div className="bg-white p-4 pb-1 mt-1 drop-shadow-lg  w-4/5  items-center m-auto rounded-lg text-center">
          <h2 className="text-center font-semibold text-2xl">Address Details</h2>
          <p className="text-center">
            {propsData.item.address} <br />
            {propsData.item.address2} <br />
          </p>
          {/* {propsData.item.contact} <br /> may create propblems */}
          <p className="text-center">
            {propsData.item.state} ,{propsData.item.country} ,
            {propsData.item.pincode} <br />
          </p>
        </div>
        {/* Reviews */}
        <div className=" p-4 pb-1  drop-shadow-lg  w-4/5  items-center rounded-lg text-center m-2 mt-4 text-white ">
          <div className="flex justify-center">
            {/* <div className="w-2/5">
              <StarRateM propsData={propsData} />
            </div> */}
            <div className="w-2/5">
              <ProgressbarM />
              <ProgressbarM />
              <ProgressbarM />
              <ProgressbarM />
            </div>
          </div>
        </div>
        {/* ReviewsEnd */}
        {/* Book AppointMent */}
        <div className="flex flex-col justify-center align-middle items-center">

          <h1 className=" text-white text-lg pt-5">
            Current Stitching Price:
          </h1>

          <div className="items-center p-2">
            <button className="border-2 border-blue-700 bg-blue-700 hover:bg-transparent text-white font-semibold py-3 px-10 rounded-full">
              ₹ {propsData.item.prizerange[0]} - ₹{" "}
              {propsData.item.prizerange[1]}
            </button>
          </div>

          <div className="text-center m-4 drop-shadow-lg">
            <Link to="/home/category" state={{ item: propsData.item }}>
              <button className="drop-shadow-lg bg-[white] hover:bg-transparent text-black hover:text-white hover:border-2 hover:border-white font-semibold py-3 px-8 rounded-full">
                Book Appointmet
              </button>
            </Link>
          </div>
        </div>

        {/* Book AppointMent End*/}
      </div>
    </div>
  );
};
