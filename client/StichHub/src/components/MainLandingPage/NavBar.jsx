import { useEffect, useState } from "react";
import { navbar, logo, menu, close } from "../../constants/MainLandingPage";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setIsScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`bg ${isScrolled ? "bg-inherit" : "bg-transparent"
      } w-[100vw] flex lg:pt-6 justify-center fixed z-[100] pt-3 px-4 lg:p-4`}>
      <div className="">
        <a href="#">
          <img
            src={logo}
            alt="StichHub"
            className=" w-[180px] mr-[100px] mt-2"
          />
        </a>
      </div>
      <ul className="list-none lg:flex hidden justify-center items-center cursor-pointer">
        {navbar.map((nav, index) => (
          <li
            key={nav.title}
            className={`font-poppins font-normal cursor-pointer hover:text-[#3094d3] hover:text-[20px] text-[16px]  ${
              index === navbar.length - 1 ? "mr-0" : "mr-10"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <Link to="/auth">
        <button className="hidden lg:block bg-white rounded-xl w-fit lg:px-5  shadow-xl drop-shadow-2xl mt-[6px] ml-14">
          <span className="text-[16px] text-black">Get Started</span>
        </button>
      </Link>
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black/100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] w-[200px] rounded-xl `}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navbar.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  index === navbar.length - 1 ? "mb-0" : "mb-4"
                } 
                ${active === nav.title ? "text-white" : "text-gray-500"}
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <Link to="/auth">
              <button className="px-3 bg-white rounded-xl w-fit shadow-xl drop-shadow-2xl mt-20">
                <span className="text-[16px] text-black">Get Started</span>
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
