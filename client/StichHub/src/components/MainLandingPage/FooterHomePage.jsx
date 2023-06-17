import React from "react";
import {Link} from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from "../../assets/logo/Long - Logo Transparent (White).png"

const Footer = () => {
  return (
    <div className="bg-[#09051D]">
      <footer className="pt-10 lg:pt-0 lg:mt-5 lg:ml-20 lg:mr-20 justify-center text-center md:text-left lg:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:p-20 lg:grid-cols-4 gap-4 ">
          <div className="lg:pl-0 md:pl-10">
            <a href="/">
              <img src={logo} alt="logo" className="wobject-scale-down cursor-pointer w-[180px] mx-auto md:mx-0" />
            </a>
            <p className="text-xs font-normal leading-8 lg:text-sm ">Choose your style make your own trend. Select the one you want to get your clothes stitched from!</p>
          </div>
          <div className="px-10 ">
            <h3 className="font-semibold text-lg py-2">Join Us</h3>
            <div className="links text-sm">
              <ul className="text-[#A8A8A8]">
                <Link to="/auth">
                  <li className="py-1 hover:text-[white] cursor-pointer">
                    <a href="/">LogIn</a>
                  </li>
                </Link>
                <Link to="/auth">
                  <li className="py-1 hover:text-[white] cursor-pointer">
                    <a href="/">Register</a>
                  </li>
                </Link>
                
              </ul>
            </div>
          </div>
          <div className="px-10 ">
            <h3 className="font-semibold text-lg py-2">Socials</h3>
            <div className="socials text-sm">
              <ul className="text-[#A8A8A8]">
                <li className="py-1 hover:text-[white] cursor-pointer"><a href="https://github.com/UBA-GCOEN/StichHub"><GitHubIcon /> GitHub</a> </li>
                <li className="py-1 hover:text-[white] cursor-pointer"><a href=""><TwitterIcon /> Twitter</a></li>
                <li className="py-1 hover:text-[white] cursor-pointer"><a href="#contactus">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="px-10 ">
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
      <p className="text-sm mb-2 text-center pt-10 lg:pt-0">	&copy; Stichhub {new Date().getFullYear()}</p>

      </footer>
    </div>
      
  );
};

export default Footer;
