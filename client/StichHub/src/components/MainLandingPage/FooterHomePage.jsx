
import React from "react";
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import logo from "../../assets/logo/Long - Logo Transparent (White).png"

const Footer = () => {
  return (
    <div className="bg-[#09051D] pt-7">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <a href="/">
          <img src={logo} alt="logo with text that says StichHub stitch your way" className="w-48 cursor-pointer" loading="lazy"/>
        </a>
        <p className="text-white text-center mt-4 text-xl font-serif tracking-wide antialiased font-medium">
          Choose your style, make your own trend. <br /> Select the one you want to get your clothes stitched from!
        </p>
        <div className="flex items-center mt-4">
          <a href="mailto:stichhub.office@gmail.com" target="_blank" className="text-white  px-3 hover:text-gray-300 transition-colors duration-300 ease-in-out hover:scale-110">
            <MailIcon className="text-white text-2xl  hover:text-[#DB4437]" />
          </a>
          <a href="https://github.com/UBA-GCOEN/StichHub" target="_blank" className="text-white px-3  hover:text-gray-300  transition-colors duration-300 ease-in-out hover:scale-110">
            <GitHubIcon className="text-white text-2xl  hover:text-gray-500" />
          </a>
          <a href="https://www.youtube.com/channel/UCjkwYo58eYv6ZGqu4IQiU0w" target="_blank" className="text-white px-3  hover:text-gray-300  transition-colors duration-300 ease-in-out hover:scale-110">
            <YouTubeIcon className="text-white text-2xl  hover:text-[#c4302b]" />
          </a>
          <a href="https://twitter.com/StichHub_" target="_blank" className="text-white px-3   hover:text-gray-300 transition-colors duration-300 ease-in-out hover:scale-110">
            <TwitterIcon className="text-white text-2xl  hover:text-sky-400" />
          </a>
          <a href="https://www.instagram.com/stichhub_/" target="_blank" className="text-white px-3    hover:text-gray-300  transition-colors duration-300 ease-in-out hover:scale-110">
            <InstagramIcon className="text-white text-2xl  hover:text-[#E4405F]" />
          </a>
        </div>
      </div>
      {/* <hr */}
      <p className="text-base bg-[#09051D] p-3 text-center text-white font-serif tracking-wide mt-2">&copy; StichHub {new Date().getFullYear()}</p>
    </div>

  );
};

export default Footer;

