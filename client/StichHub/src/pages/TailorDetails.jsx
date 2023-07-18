import { React, useState } from "react";
import { FaArrowLeft, FaHeart} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ProgressbarM from "../components/TailorDetails/ProgressM";
import Progressbar from "../components/TailorDetails/Progressbar";
import StarRate from "../components/TailorDetails/StarRate";
import india from "../assets/india.png";
import profile from "../assets/man.jpg";

function TailorDetails() {
  const [isMobile, setIsMobile] = useState(false);


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
    <div className="w-screen h-[100%] min-h-screen cardGradient hidden md:block p-4">
      <div className="rounde-lg  rounded shadow-3xl p-2">
        <div className="w-full h-[20vh] bg-slate-500 rounded-md">
          <Link to="/home">
            <div className="absolute right-0 top-0 p-10">
              {/* BACK BUTTON */}
              {/* <a href="./TailorList"> */}
              <FaArrowLeft className="w-10 h-10 bg-[#b8b0b0] rounded-full p-2 hover: border-2 hover:border-black" />
              {/* </a> */}
            </div>
          </Link>
          <div className="">
          {propsData?.item?.passport ? (          <img loading="lazy"
            src={propsData?.item?.passport}
            alt=""
            className="rounded-lg h-[18vh] shadow-3xl border-2 absolute top-[10vh] left-[4vw]"
          />) :(          <img loading="lazy"
            src={profile}
            alt=""
            className="rounded-lg h-[18vh] shadow-3xl border-2 absolute top-[10vh] left-[4vw]"
          />)}
          <img loading="lazy"
            src={propsData?.item?.passport}
            alt=""
            className="rounded-lg h-[18vh] shadow-3xl border-2 absolute top-[10vh] left-[4vw]"
          />
        </div>
        </div>
        <div className="ml-[2.5vw] mt-[8vh]">
        <h1 className=" text-2xl font-semibold text-white">{propsData?.item?.name}</h1>
          <div className="flex gap-2  mt-2">
            <img loading="lazy" src={india} alt="" className="h-[3.5vh]" />
            <p className="text-gray-400">
              {propsData.item.state} ,{propsData.item.country}
            </p>
          </div>
          <div className="flex my-5 gap-2">
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
      <div className="rounded-lg shadow-3xl p-2 mt-5">
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
              <img src={propsData.item.passport} className="rounded-xl" alt={propsData.item.name} loading="lazy"/>
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
          <h2 className="font-semibold text-3xl text-center">
            About the Tailor
          </h2>
          <h3 className="break-all">{propsData.item.bio}</h3>
        </div>
        {/* Bio Ends */}
        {/* ADDRESS */}
        <div className="bg-white p-4 pb-1 mt-1 drop-shadow-lg  w-4/5  items-center m-auto rounded-lg text-center">
          <h2 className="text-center font-semibold text-2xl">
            Address Details
          </h2>
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
          <h1 className=" text-white text-lg pt-5">Current Stitching Price:</h1>

          <div className="items-center p-2">
            <button className="border-2 border-blue-700 bg-blue-700 hover:bg-transparent text-white font-semibold py-3 px-10 rounded-full">
              ₹ {propsData.item.prizerange[0]} - ₹{" "}
              {propsData.item.prizerange[1]}
            </button>
          </div>

          <div className="text-center m-4 drop-shadow-lg">
            <Link to="/home/category" state={{ item: propsData.item }}>
              <button className="drop-shadow-lg bg-[white] hover:bg-transparent text-black hover:text-white hover:border-2 hover:border-white font-semibold py-3 px-8 rounded-full">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>

        {/* Book AppointMent End*/}
      </div>
    </div>
  );
};
