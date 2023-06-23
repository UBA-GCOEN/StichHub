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
import india from "../assets/india.png";
import profile from "../assets/man.jpg";

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
    <div className="w-screen h-[100%] min-h-screen cardGradient p-4 flex flex-col gap-2">
      {/* <div className="relative hidden lg:block h-fit rounded-lg p-2 w-full text-black m-auto overflow-hidden"> */}
      {/* Gradient */}
      {/* <div className="absolute opacity-70 circleGradient-blue object-cover w-[70%] h-[115%] -top-24 -right-[48rem] z-5 blur-xl"></div> */}

      {/* Gradient */}

      {/* Gradient */}
      {/* <div className="absolute opacity-70 circleGradient-blue object-cover w-[70%] h-[115%] -bottom-[3rem] -left-[48rem] z-5 "></div> */}

      {/* Gradient */}
      {/* <div className=" w-full h-full flex justify-center mt-6 ">
          <div className="flex w-full h-full justify-center">
            <div className="relative first-letter:w-fit min-h-fit drop-shadow-lg"> */}
      {/* Photo and book button */}
      {/* <div className="relative max-w-[38rem] top-[2rem] left-[1rem] w-[65%] h-[65%] max-h-[42rem]  blur-md -z-10  m-auto">
                <TailorSum propsData={propsData} />
              </div>
              <div className="top-[13.03rem] left-[6.3rem] z-10 w-[60%] h-[60%] absolute  text-[black]  inline-block -translate-y-2/4 mx-auto my-0  ">
                <TailorSum propsData={propsData} />
              </div>
            </div> */}

      {/* <div className=" w-fit p-6 min-h-full rounded-lg drop-shadow-lg overflow-x-hidden bg-[#191F22]">
              <div className="w-full h-10 p-2 mb-4 items-center"> */}
      {/* Back Button */}
      {/* <Link to="/home">
                  <div className="float-left"> */}
      {/* BACK BUTTON */}
      {/* <a href="./TailorList"> */}
      {/* <FaArrowLeft className="w-10 h-10 bg-[#b8b0b0] rounded-full p-2 hover: border-2 hover:border-black" /> */}
      {/* </a> */}
      {/* </div>
                </Link> */}
      {/* Back Button End */}

      {/* Like button */}
      {/* <div className="relative hover:bg-slate-500 rounded-full float-right m-auto items-center justify-center">
                  <FaHeart className="w-[2.3rem] h-[2.3rem] bg-[#b8b0b0] rounded-full p-2 hover: border-2 hover:border-black cursor-pointer" />
                </div> */}
      {/* Like button */}

      {/* Share BUTTON */}
      {/* <div className="float-right ">
                  <FaShareAlt className="w-10 h-10 p-2 rounded-full bg-[#b8b0b0] hover: border-2 hover:border-black cursor-pointer" />
                </div> */}
      {/* Share BUTTON */}
      {/* </div>
              <div> */}
      {/* Name and price tag */}
      {/* <Tailorhead propsData={propsData} />
              </div>
              <div className=" drop-shadow-lg m-2 "> */}
      {/*Bio and address*/}
      {/* <div className=" p-4 pb-1 mt-1 drop-shadow-lg  w-full  items-center  rounded-lg">
                  <h2 className="text-center font-semibold text-3xl text-white mb-2">
                    About the Tailor
                  </h2>
                  <div className=" w-full break-all items-center text-center">
                    <h1 className="text-gray-300">{propsData.item.bio}</h1>
                  </div>
                </div>
                <div className=" flex gap-4 p-4 pb-1 mt-1 drop-shadow-lg  w-full  rounded-lg ">
                  <h2 className="text-left font-semibold text-xl text-white ">
                    Address Details:
                  </h2>
                  <p className="text-left text-gray-300 mb-1">
                    {propsData.item.address}, {propsData.item.address2},
                    {propsData.item.state} , {propsData.item.country} ,
                    {propsData.item.pincode}
                  </p> */}
      <div className="rounde-lg  rounded shadow-3xl p-2">
        <div className="w-full h-[20vh] bg-slate-500 rounded-md"></div>
        <Link to="/home">
                  <div className="absolute right-0 top-0 p-10">
                    {/* BACK BUTTON */}
                    {/* <a href="./TailorList"> */}
                    <FaArrowLeft className="w-10 h-10 bg-[#b8b0b0] rounded-full p-2 hover: border-2 hover:border-black" />
                    {/* </a> */}
                  </div>
                </Link>
        <div className="">
          {propsData?.item?.passport ? (          <img
            src={propsData?.item?.passport}
            alt=""
            className="rounded-lg h-[18vh] shadow-3xl border-2 absolute top-[10vh] left-[4vw]"
          />) :(          <img
            src={profile}
            alt=""
            className="rounded-lg h-[18vh] shadow-3xl border-2 absolute top-[10vh] left-[4vw]"
          />)}
          <img
            src={propsData?.item?.passport}
            alt=""
            className="rounded-lg h-[18vh] shadow-3xl border-2 absolute top-[10vh] left-[4vw]"
          />
        </div>
        <div className="ml-[2.5vw] mt-[8vh]">
          <h1 className=" text-2xl font-semibold text-white">{propsData?.item?.name}</h1>
          <div className="flex gap-2  mt-2">
            <img src={india} alt="" className="h-[3.5vh]" />
            <p className="text-gray-400">
              {propsData.item.state} ,{propsData.item.country}
            </p>
          </div>
          {/* <div className="flex gap-2 items-center">
      <h1 className="text-xl font-bold">&#183;</h1><h2 className="text-gray-200"> Professional tailor</h2>
      </div> */}
          <div className="flex gap-2 my-4">
          <Link
                to="/home/category"
                state={{ item: propsData.item }}
              >
            <button
              className="shadow-3xl font-medium text-white  px-4 py-2 bg-[#222222] rounded-md hover:bg-blue-400 hover:text-black transition-transform"
            >
              Book
            </button>
            </Link>
            <button
              className="shadow-3xl font-medium text-white  px-4 py-2 bg-[#222222] rounded-md hover:bg-blue-400 hover:text-black transition-transform"
              onClick={() => navigate("/login")}
            >
              Share Profile
            </button>
          </div>
        </div>
      </div>
      <div className="rounde-lg  rounded shadow-3xl p-2">
        <div className="ml-[2.5vw]">
          <h1 className="text-3xl font-semibold text-white">About</h1>
          {propsData.item.bio ? (
            <p className="max-w-[60vw] text-gray-200 mt-5 font-medium">
              {propsData.item.bio}
            </p>
          ) : (
            <p className="max-w-[60vw] text-gray-200 mt-5 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              suscipit tenetur laboriosam. Necessitatibus nisi fuga doloribus
              quasi fugiat, cupiditate nostrum minus reprehenderit molestiae
              earum ipsa dolor sapiente harum animi totam?
            </p>
          )}

          <div className="mt-5">
            <h2 className="text-white font-semibold text-lg ">
              Address : {propsData.item.address}, {propsData.item.address2},{" "}
              {propsData.item.state} , {propsData.item.country} ,
              {propsData.item.pincode}
            </h2>
            <h2 className="text-white font-semibold text-lg ">
              Contact : {propsData.item.contact}
            </h2>
            <h2 className="text-white font-semibold text-lg ">
              Price : ₹ {propsData.item.prizerange[0]} - ₹{" "}
              {propsData.item.prizerange[1]}
            </h2>
            <div className="flex w-full  p-2 gap-4 mt-4"></div>
            <div className="mt-4">
              <h1 className="text-2xl text-white ">Ratings & Reviews</h1>
              <div className="w-2/5 text-white flex flex-col gap-2">
                <Progressbar />
                <Progressbar />
                <Progressbar />
                <Progressbar />
              </div>
              <div className="mt-5">
                <StarRate />
              </div>
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
    <div className="lg:hidden block cardGradient w-full h-full min-h-screen overflow-hidden">
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
          <Link to="/home/category" state={{ item: propsData.item }}>
            <div className="text-center m-4 drop-shadow-lg">
              <button className="drop-shadow-lg bg-[white] hover:bg-[gray] text-black font-semibold py-2 px-4 rounded-md">
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
