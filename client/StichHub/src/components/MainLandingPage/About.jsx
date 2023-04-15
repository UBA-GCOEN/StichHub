import React from "react";
import { AboutUsVector, AvatarDemo } from "../../assets/MainLandingPage/Icons";

const About = () => {
  return (
    <div
      id="aboutus"
      className="h-[100%] relative mt-20 mx-7 sm:p-20 sm:ml-20 sm:mr-20"
    >
      <div className="relative z-[5] flex">
        {/* Title on left */}
        <div id="title" className="">
          <span className="sm:text-6xl font-semibold">
            A <br />B<br />O<br />U<br />T<br />
            <br /> U<br />S
          </span>
        </div>

        <div>
          {/* Top Part */}
          <div id="devId" className="ml-10 sm:ml-0 flex flex-wrap justify-between">
            {/* Sidd */}
            <div className="relative sm:ml-[100px] sm:mt-[40px]">
              <div className="flex justify-center">
                <img
                  src={AvatarDemo}
                  className="relative bg-black/50 rounded-3xl sm:w-[140px] w-[100px]"
                />
              </div>
              <div id="name">
                <span className=" text-base sm:text-lg font-medium">SIDDHANT</span>
              </div>
            </div>

            {/* Vishal */}
            <div className="relative sm:ml-0 sm:pt-[180px] pt-14">
              <div className="flex justify-center">
                <img
                  src={AvatarDemo}
                  className="relative bg-black/50 rounded-3xl sm:w-[140px] w-[100px] ml-2"
                />
              </div>
              <div id="name">
                <span className="text-base sm:text-lg font-medium">VISHAL</span>
              </div>
            </div>

            {/* Naresh */}
            <div className="relative sm:mt-[120px] mt-4">
              <div className="flex justify-center">
                <img
                  src={AvatarDemo}
                  className="relative bg-black/50 rounded-3xl sm:w-[140px] w-[100px] sm:ml-7"
                />
              </div>
              <div id="name">
                <span className="text-base sm:text-lg font-medium">NARESH</span>
              </div>
            </div>

            {/* Harshal */}
            <div className="relative sm:mt-[60px] mt-14">
              <div className="flex justify-center">
                <img
                  src={AvatarDemo}
                  className="relative bg-black/50 rounded-3xl sm:w-[140px] w-[100px]"
                />
              </div>
              <div id="name">
                <span className="text-base sm:text-lg font-medium">HARSHAL</span>
              </div>
            </div>

            {/* Saurabh */}
            <div className="relative sm:mt-[150px] mt-4">
              <div className="flex justify-center">
                <img
                  src={AvatarDemo}
                  className="relative bg-black/50 rounded-3xl sm:w-[140px] w-[100px]"
                />
              </div>
              <div id="name">
                <span className="text-base sm:text-lg font-medium">SAURABH</span>
              </div>
            </div>
          </div>

          {/* Bottom Part */}
          <div id="description" className="flex flex-col sm:flex-row mt-5 sm:mt-0">
          <div className="flex justify-center">
          <img src={AboutUsVector} className="sm:hidden sm:w-[340px] w-[200px]" />
          </div>
            <p className="text-base sm:text-lg sm:mt-28 sm:ml-40 text-left">
              We're a team of enthusiasts , hoping to bring the tailor community
              online and introduce them to the benifits of online business.
              Ismai customers kaa bhii dalnaa haii.
            </p>
            <img src={AboutUsVector} className="hidden sm:block sm:w-[340px] w-[200px]" />
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
