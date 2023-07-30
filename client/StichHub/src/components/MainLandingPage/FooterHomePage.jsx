
import React from "react";
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './FooterHomePage.css'

import logo from "../../assets/logo/Long - Logo Transparent (White).png"

const Footer = () => {
  return (
    <body>
    <footer>
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
      </div>

<div className="container mx-auto flex flex-col items-center justify-center">
<p className="text-white text-center mt-4 text-xl font-serif tracking-wide antialiased font-medium">Choose your style, make your own trend. <br /> Select the one you want to get your clothes stitched from! </p>

<ul className="social_icon">
  <li><a href="mailto:stichhub.office@gmail.com" target="_blank" className="text-white px-3"><MailIcon className="text-white text-2xl hover-glow-mail" /></a></li>
  <li> <a href="https://github.com/UBA-GCOEN/StichHub" target="_blank" className="text-white px-3"><GitHubIcon className="text-white text-2xl hover-glow-github" /></a></li>
  <li><a href="https://www.youtube.com/watch?v=dE3RYo23eSY" target="_blank" className="text-white px-3"><YouTubeIcon className="text-white text-2xl hover-glow-youtube" /></a></li>
  <li><a href="https://www.instagram.com/stichhub_/" target="_blank" className="text-white px-3"><InstagramIcon className="text-white text-2xl hover-glow-instagram" /></a></li>
  <li><a href="https://twitter.com/StichHub_" target="_blank" id="social-tw"><TwitterIcon className="text-white text-2xl hover-glow-twitter" /></a></li>

</ul>

<div className="mt-2 text-sm">
     <Link to="/privacy-policy" className="text-white hover:underline">Privacy Policy</Link>
     <span className="text-white mx-1">|</span>
     <Link to="/terms-and-conditions" className="text-white hover:underline">Terms and Conditions</Link>
    <span className="text-white mx-1">|</span>
     <a href="https://github.com/UBA-GCOEN/StichHub/blob/main/LICENSE" className="text-white hover:underline">License</a>
   </div>
   <p className="text-base  p-3 text-center text-white font-serif tracking-wide mt-2">&copy; StichHub {new Date().getFullYear()}</p>
 </div>



</footer>

</body>

  );
};

export default Footer;

