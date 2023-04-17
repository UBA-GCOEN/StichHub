import { React, useState } from "react";
import Tabs from "../components/TailorDetails/Tabs";
import TailorSum from "../components/TailorDetails/TailorSum";
import Tailorhead from "../components/TailorDetails/Tailorhead";
import StarRate from "../components/TailorDetails/StarRate";
import { FaArrowLeft, FaShareAlt } from "react-icons/fa";
import Progressbar from "../components/TailorDetails/Progressbar";
import yadav from "../assets/Yadav.png";
import TabsM from "../components/TailorDetails/TabsM";
import StarRateM from "../components/TailorDetails/StarRateM";
import ProgressbarM from "../components/TailorDetails/ProgressM";
import { useLocation } from "react-router-dom";
import { tailorCards } from "../constants/home";

function TailorDetails() {
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);

  // check screen size and set state variable
  window.addEventListener("resize", () => {
    const isMobileView = window.innerWidth <= 840;
    if (isMobileView !== isMobile) setIsMobile(isMobileView);
  });

  // render mobile or desktop component based on isMobile state
  return <div>{isMobile ? <TailorDetailsM /> : <TailorDetailsD />}</div>;
}

const TailorDetailsD = () => {
  return (
    <div className="bg-[white] h-fit rounded-lg p-2 w-3/5 text-black">
      <div className="w-full h-10">
        <div className="float-left">
          {/* BACK BUTTON */}
          <a href="./TailorList">
            <FaArrowLeft className="w-10 h-10 hover:bg-[#b8b0b0] rounded-full p-2" />
          </a>
        </div>
        <div className="float-right rounded-full hover:bg-[#b8b0b0]">
          {/* Share BUTTON */}
          <FaShareAlt className="w-10 h-10 p-2" />
        </div>
      </div>
      <div className="  flex justify-center">
        <div className="flex w-full justify-around">
          <div className="w-1/3 drop-shadow-lg">
            {/* Photo and book button */}
            <TailorSum />
          </div>
          <div className="w-2/3 rounded-lg drop-shadow-lg">
            <div>
              {/* Name and price tag */}
              <Tailorhead propsData="propsData" />
            </div>
            <div className=" drop-shadow-lg m-2 p-2">
              {/* Skills , details , previous work */}
              <Tabs />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-around m-2 p-2 drop-shadow-lg">
        <div className="justify-center text-center items-center">Address</div>
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
  );
};

export default TailorDetails;

const TailorDetailsM = () => {
  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);
  return (
    <div>
      {/* Back Button */}
      <div>
        <div className="m-2 p-2 w-12 h-12">
          <FaArrowLeft className="h-7 w-7" />
        </div>
      </div>
      {/* Button end */}

      {/* Photo and price tag Name*/}
      <div>
        <div>
          {/* Photo */}
          <div className="bg-white p-4 pb-1 mt-1 drop-shadow-lg  w-4/5  items-center m-auto rounded-lg">
            <div className="drop-shadow-lg flex w-fit h-fit items-center justify-center text-center mx-auto">
              <img src={yadav} />
            </div>
            {/* Photo End */}

            {/* Tailor Name and price button */}
            <div className="flex justify-around m-2 p-2">
              <div className="justify-center items-center p-2">
                <div>
                  <h1>Name</h1>
                </div>
                <div>
                  <h1>Address</h1>
                </div>
              </div>
              <div className="justify-right items-center p-2">
                <button className="bg-gradient-to-t from-black via-black to-gray-400  hover:bg-gradient-to-b text-white font-semibold py-2 px-4 rounded-md">
                  $999
                </button>
              </div>
            </div>
            {/* End Name and Pricetag */}
          </div>
        </div>
        {/* Tabs Start */}
        <div>
          <TabsM />
        </div>
        {/* Tabs  End */}

        {/* Reviews */}
        <div className="m-2 mt-4">
          <div className="flex justify-around">
            <div className="w-2/5">
              <StarRateM />
            </div>
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
        <div className="text-center m-4 drop-shadow-lg">
          <button className="drop-shadow-lg bg-[white] hover:bg-[gray] text-black font-semibold py-2 px-4 rounded-full">
            Book Appointmet
          </button>
        </div>
        {/* Book AppointMent End*/}
      </div>
    </div>
  );
};
