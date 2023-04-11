import React from "react";
import { AboutUsVector, AvatarDemo } from "../../assets/MainLandingPage/Icons";

const About = () => {
  return (
    <div id="aboutus" className="h-[100%] relative p-20 ml-20 mr-20">
      <div className="relative z-[5] flex">
        {/* Title on left */}
        <div id="title">
          <span className="text-6xl font-semibold">
            A <br />B<br />O<br />U<br />T<br />
            <br /> U<br />S
          </span>
        </div>

        <div>
          {/* Top Part */}
          <div id="devId" className="flex justify-around">
            {/* Sidd */}
            <div className="relative ml-[100px] mt-[40px]">
              <img
                src={AvatarDemo}
                className="relative bg-black/50 rounded-3xl w-[180px]"
              />
              <div id="name">
                <span className="text-xl font-medium">SIDDHANT PATIL</span>
              </div>
            </div>

            {/* Vishal */}
            <div className="relative pt-[180px]">
              <img
                src={AvatarDemo}
                className="relative bg-black/50 rounded-3xl w-[180px] ml-2"
              />
              <div id="name">
                <span className="text-xl font-medium">VISHAL KESHERWANI</span>
              </div>
            </div>

            {/* Naresh */}
            <div className="relative mt-[120px]">
              <img
                src={AvatarDemo}
                className="relative bg-black/50 rounded-3xl w-[180px] ml-7"
              />
              <div id="name">
                <span className="text-xl font-medium">NARESH CHANDANBATVE</span>
              </div>
            </div>

            {/* Harshal */}
            <div className="relative mt-[60px]">
              <img
                src={AvatarDemo}
                className="relative bg-black/50 rounded-3xl w-[180px]"
              />
              <div id="name">
                <span className="text-xl font-medium">HARSHAL LADE</span>
              </div>
            </div>

            {/* Saurabh */}
            <div className="relative mt-[150px]">
              <img
                src={AvatarDemo}
                className="relative bg-black/50 rounded-3xl w-[180px]"
              />
              <div id="name">
                <span className="text-xl font-medium">SAURABH YADAV</span>
              </div>
            </div>
          </div>

          {/* Bottom Part */}
          <div id="description" className="flex">
            <p className="mt-40 ml-40 text-left">
              We're a team of enthusiasts , hoping to bring the tailor community
              online and introduce them to the benifits of online business.
              Ismai customers kaa bhii dalnaa haii.
            </p>
            <img src={AboutUsVector} />
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
