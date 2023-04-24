import { React, useState } from "react";
import Tabs from "../components/TailorDetails/Tabs";
import TailorSum from "../components/TailorDetails/TailorSum";
import Tailorhead from "../components/TailorDetails/Tailorhead";
import StarRate from "../components/TailorDetails/StarRate";
import { FaArrowLeft, FaHeart, FaShareAlt } from "react-icons/fa";
import Progressbar from "../components/TailorDetails/Progressbar";
import yadav from "../assets/Yadav.png";
import TabsM from "../components/TailorDetails/TabsM";
import StarRateM from "../components/TailorDetails/StarRateM";
import ProgressbarM from "../components/TailorDetails/ProgressM";
import { Link, useLocation } from "react-router-dom";
import { tailorCards } from "../constants/home";

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
    <div className="w-screen h-[100%] min-h-screen cardGradient">
      <div className="relative hidden lg:block h-fit rounded-lg p-2 w-full text-black m-auto overflow-hidden">
        {/* Gradient */}
        <div className="absolute opacity-70 circleGradient-blue object-cover w-[70%] h-[115%] -top-24 -right-[48rem] z-5 blur-xl"></div>

        {/* Gradient */}

        {/* Gradient */}
        <div className="absolute opacity-70 circleGradient-blue object-cover w-[70%] h-[115%] -bottom-[3rem] -left-[48rem] z-5 "></div>

        {/* Gradient */}
        <div className=" w-full h-full flex justify-center ">
          <div className=" flex w-full h-full justify-around ">
            <div className="relative first-letter:w-1/2 min-h-fit drop-shadow-lg">
              {/* Photo and book button */}
              <div className="relative max-w-[38rem] top-[2rem] left-[1rem] w-[85%] h-[85%] max-h-[42rem]  blur-md -z-10  m-auto">
                <TailorSum propsData={propsData} />
              </div>
              <div className="top-[13.03rem] left-[6.3rem] z-10 w-[60%] h-[60%] absolute  text-[black]  inline-block -translate-y-2/4 mx-auto my-0  ">
                <TailorSum propsData={propsData} />
              </div>
            </div>

            <div className=" w-2/3 min-h-full rounded-lg drop-shadow-lg overflow-x-hidden">
              <div className="w-full h-10 m-2 p-2">
                {/* Back Button */}
                <Link to="/home">
                  <div className="float-left">
                    {/* BACK BUTTON */}
                    {/* <a href="./TailorList"> */}
                    <FaArrowLeft className="w-10 h-10 hover:bg-[#b8b0b0] rounded-full p-2" />
                    {/* </a> */}
                  </div>
                </Link>
                {/* Back Button End */}

                {/* Like button */}
                <div className="relative hover:bg-slate-500 rounded-full   float-right m-auto items-center justify-center">
                  <FaHeart className="w-[2.3rem] h-[2.3rem] hover:bg-[#b8b0b0] rounded-full p-1" />
                </div>
                {/* Like button */}

                {/* Share BUTTON */}
                <div className="float-right rounded-full hover:bg-[#b8b0b0]">
                  <FaShareAlt className="w-10 h-10 p-2" />
                </div>
                {/* Share BUTTON */}
              </div>
              <div>
                {/* Name and price tag */}
                <Tailorhead propsData={propsData} />
              </div>
              <div className=" drop-shadow-lg m-2 ">
                {/*Bio and address*/}
                <div className=" p-4 pb-1 mt-1 drop-shadow-lg  w-full  items-center  rounded-lg">
                  <h2 className="text-left font-semibold text-xl text-white">
                    About the Tailor
                  </h2>
                  <div className=" w-full break-all">
                    <h1 className="text-[gray]">{propsData.item.bio}</h1>
                  </div>
                </div>
                <div className=" p-4 pb-1 mt-1 drop-shadow-lg  w-full  items-center rounded-lg ">
                  <h2 className="text-left font-semibold text-xl text-white ">
                    Address Details
                  </h2>
                  <p className="text-left text-[gray]">
                    {propsData.item.address} <br />
                    {propsData.item.address2} <br />
                  </p>
                  {/* {propsData.item.contact} <br /> may create propblems */}
                  <p className="text-left text-[gray]">
                    {propsData.item.state} ,{propsData.item.country} ,
                    {propsData.item.pincode} <br />
                  </p>
                </div>
              </div>

              {/* Book AppointMent */}
              <div className="flex justify-center w-full">
                <div className="justify-right flex  items-center p-2 w-3/5">
                  <h1 className="text-xs text-[gray]">
                    Current Stitching Price
                  </h1>
                  <button className="bg-gradient-to-t from-[#2964e1] via-[#6060ec] to-gray-400  hover:bg-gradient-to-b text-white font-semibold py-2 px-4 rounded-lg w-full">
                    ₹ {propsData.item.prizerange[0]} - ₹{" "}
                    {propsData.item.prizerange[1]}
                  </button>
                </div>
                <Link
                  to="/home/category"
                  state={{ item: propsData.item }}
                  className="w-2/5"
                >
                  <div className="text-center m-4 drop-shadow-lg">
                    <button className="drop-shadow-lg bg-[white] hover:bg-[gray] text-black font-semibold py-2 px-4 rounded-full">
                      Book Appointmet
                    </button>
                  </div>
                </Link>
              </div>

              {/* Book AppointMent End*/}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden flex justify-around m-2 p-2 text-white ">
          <div className="absolute opacity-70 circleGradient-peach object-cover w-[200%] h-[200%] bottom-28 -left-[10rem] z-5 "></div>
          <div className="justify-center text-center items-center">
            {/* Overall rating */}
            <StarRate />
          </div>
          <div className="w-2/5 ">
            <Progressbar />
            <Progressbar />
            <Progressbar />
            <Progressbar />
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
    <div className="lg:hidden block        cardGradient w-full h-full min-h-screen overflow-hidden">
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
              <img
                src={propsData.item.passport}
                className="rounded-xl"
              />
            </div>
            {/* Photo End */}

            {/* Tailor Name */}
            <div className="flex justify-around m-2 p-2">
              <div className="justify-center items-center p-2">
                <div>
                  <h1>{propsData.item.name}</h1>
                </div>
                <div>
                  <h3 className="text-[#636262] text-sm ">
                    {propsData.item.city},{propsData.item.pincode}
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
          <h2 className="text-left font-semibold text-2xl">About the Tailor</h2>
          <h3 className="break-all">{propsData.item.bio}</h3>
        </div>
        {/* Bio Ends */}
        {/* ADDRESS */}
        <div className="bg-white p-4 pb-1 mt-1 drop-shadow-lg  w-4/5  items-center m-auto rounded-lg text-center">
          <h2 className="text-left font-semibold text-2xl">Address Details</h2>
          <p className="text-left">
            {propsData.item.address} <br />
            {propsData.item.address2} <br />
          </p>
          {/* {propsData.item.contact} <br /> may create propblems */}
          <p className="text-left">
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
        <div className="flex justify-center">
          <Link
            to="/home/category"
            state={{ item: propsData.item }}
          >
            <div className="text-center m-4 drop-shadow-lg">
              <button className="drop-shadow-lg bg-[white] hover:bg-[gray] text-black font-semibold py-2 px-4 rounded-full">
                Book Appointmet
              </button>
            </div>
          </Link>

          <div className="justify-right items-center p-2">
            <button className="bg-gradient-to-t from-[#2964e1] via-[#6060ec] to-gray-400  hover:bg-gradient-to-b text-white font-semibold py-2 px-4 rounded-md">
              ₹ {propsData.item.prizerange[0]} <br /> - ₹{" "}
              {propsData.item.prizerange[1]}
            </button>
          </div>
        </div>

        {/* Book AppointMent End*/}
      </div>
    </div>
  );
};
