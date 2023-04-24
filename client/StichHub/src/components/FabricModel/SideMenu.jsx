import { FaListUl, FaHome, FaInfo, FaStar } from "react-icons/fa";
import { useState } from "react";

function SideMenu() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      className={`fixed top-0 right-0 w-1/5 bg-white translate-x-full ${
        isOpen
          ? "fixed top-0 right-0 w-1/5 bg-white translate-x-full"
          : "fixed top-0 right-0 w-1/5 bg-white translate-x-full"
      }`}
    >
      <div
        className="absolute w-8 h-8 bg-white flex justify-center items-center cursor-pointer top-4 right-6"
        onClick={toggleMenu}
      >
        <FaListUl />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Solution</a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
