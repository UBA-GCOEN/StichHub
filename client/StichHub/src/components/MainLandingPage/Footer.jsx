import React from "react";
import { Dropdown } from "rsuite";
import logo from "../../assets/logo/Long - Logo Transparent (White).png"

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#130F26] lg:mt-5 lg:ml-20 lg:mr-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:p-20 lg:grid-cols-4 gap-4 ">
          <div className="">
            <a href="/">
              <img src={logo} alt="" className="wobject-scale-down cursor-pointer w-[180px]" />
            </a>
            <p className="text-xs py-4 mb-4 font-normal leading-8 lg:text-sm text-left">Choose your style make your own trend. Select the one you want to get your clothes stitched from!</p>
          </div>
          <div className="px-10 text-left">
            <h3 className="font-semibold text-lg py-2">Join Us</h3>
            <div className="links text-sm">
              <ul className="text-[#A8A8A8]">
                <li className="py-1 hover:text-[white] cursor-pointer">
              <a href="/">LogIn</a>
                </li>
                <li className="py-1 hover:text-[white] cursor-pointer">
              <a href="/">Register</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-10 text-left">
            <h3 className="font-semibold text-lg py-2">Socials</h3>
            <div className="socials text-sm">
              <ul className="text-[#A8A8A8]">
                <li className="py-1 hover:text-[white] cursor-pointer"><a href="https://github.com/UBA-GCOEN/StichHub">GitHub</a> </li>
                <li className="py-1 hover:text-[white] cursor-pointer"><a href="">Twitter</a></li>
                <li className="py-1 hover:text-[white] cursor-pointer"><a href="#contactus">Constact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="px-10 text-left">
            <h3 className="font-semibold text-lg py-2">Links</h3>
            <div className="links text-sm">
              <ul className="text-[#A8A8A8]">
              <li className="py-1 hover:text-[white] cursor-pointer"><a href="/">Home</a></li>
              <li className="py-1 hover:text-[white] cursor-pointer"><a href="#aboutus">About Us</a></li>
              <li className="py-1 hover:text-[white] cursor-pointer"><a href="#ourServices">Our Services</a></li>
              <li className="py-1 hover:text-[white] cursor-pointer"><a href="#howitworks">How it works?</a></li>
              </ul>
            </div>
          </div>
        </div>
      <p className="text-sm mb-2">	&copy; Stichhub {new Date().getFullYear()}</p>

      </footer>
    </div>
      
  );
};

export default Footer;
