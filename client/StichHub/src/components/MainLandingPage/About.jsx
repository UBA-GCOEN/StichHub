import React from "react";
import { AboutUsVector, AvatarDemo } from "../../assets/MainLandingPage/Icons";
import vk from "../../assets/vk.jpg";
import sp from "../../assets/sp.jpg";
import nc from "../../assets/nc.jpg";
import sy from "../../assets/sy.jpg";
import hl from "../../assets/hl.jpg";

const About = () => {
  return (
    <div
      id="aboutus"
      className="h-[100%] relative mt-20 mx-7 lg:p-20 lg:ml-20 lg:mr-20"
    >
      <div className="relative z-[5] flex">
        {/* Title on left */}
        <div id="title" className="">
          <span className="lg:text-6xl font-semibold">
            A <br />B<br />O<br />U<br />T<br />
            <br /> U<br />S
          </span>
        </div>

        <div>
          {/* Top Part */}
          <div id="devId" className="ml-10 lg:ml-0 flex flex-wrap justify-between">
            {/* Sidd */}
            <div className="relative lg:ml-[100px] lg:mt-[40px]">
              <div className="flex justify-center">
                <img
                  src={sp}
                  className="relative bg-black/50 rounded-3xl lg:w-[140px] w-[100px]"
                  alt="siddhant"
                />
              </div>
              <div className="name">
                <span className=" text-base lg:text-lg font-medium">SIDDHANT</span>
              </div>
            </div>

            {/* Vishal */}
            <div className="relative lg:ml-0 lg:pt-[180px] pt-14">
              <div className="flex justify-center">
                <img
                  src={vk}
                  className="relative bg-black/50 rounded-3xl lg:w-[140px] w-[100px] ml-2"
                  alt="vishal"
                />
              </div>
              <div className="name">
                <span className="text-base lg:text-lg font-medium">VISHAL</span>
              </div>
            </div>

            {/* Naresh */}
            <div className="relative lg:mt-[120px] mt-4">
              <div className="flex justify-center">
                <img
                  src={nc}
                  className="relative bg-black/50 rounded-3xl lg:w-[140px] w-[100px] lg:ml-7"
                  alt="naresh"
                />
              </div>
              <div className="name">
                <span className="text-base lg:text-lg font-medium">NARESH</span>
              </div>
            </div>

            {/* Harshal */}
            <div className="relative lg:mt-[60px] mt-14">
              <div className="flex justify-center">
                <img
                  src={hl}
                  className="relative bg-black/50 rounded-3xl lg:w-[140px] w-[100px]"
                  alt="harshal"
                />
              </div>
              <div className="name">
                <span className="text-base lg:text-lg font-medium">HARSHAL</span>
              </div>
            </div>

            {/* Saurabh */}
            <div className="relative lg:mt-[150px] mt-4">
              <div className="flex justify-center">
                <img
                  src={sy}
                  className="relative bg-black/50 rounded-3xl lg:w-[140px] w-[100px]"
                  alt="saurabh"
                />
              </div>
              <div className="name">
                <span className="text-base lg:text-lg font-medium">SAURABH</span>
              </div>
            </div>
          </div>

          {/* Bottom Part */}
          <div id="description" className="flex flex-col lg:flex-row mt-5 lg:mt-0">
          <div className="flex justify-center">
          <img src={AboutUsVector} className="lg:hidden lg:w-[340px] w-[200px]" alt="about us"/>
          </div>
            <p className="text-base lg:text-lg lg:mt-28 lg:ml-40 text-left">
              We're a team of enthusiasts , hoping to bring the tailor community
              online and introduce them to the benifits of online business.
              Ismai customers kaa bhii dalnaa haii.
            </p>
            <img src={AboutUsVector} className="hidden lg:block lg:w-[340px] w-[200px]" alt="about us"/>
          </div>
        </div>
      </div>

      {/* BG-Gradients */}
      <div className="absolute circleGradient-peach w-[670px] h-[570px] top-[20px] left-[175px] z-0 blur-xl"></div>
      <div className="absolute circleGradient-white w-[170px] h-[270px] top-[20px] right-[175px] z-0 blur-xl"></div>
    </div>
  );
};

export default About;
