import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { close, logo, menu, navbar } from "../../constants/MainLandingPage";

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

  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      smooth: true,
      offset: -70, // Adjust this offset according to your needs
    });
  };

  return (
    <nav
      className={`bg ${
        isScrolled ? "bg-inherit" : "bg-transparent"
      } w-[100vw] flex justify-around items-center fixed z-[100] pt-3 px-4 lg:py-6 lg:px-14`}
    >
      <div className="">
        <a href="#">
          <img src={logo} alt="logo with text that says StichHub stitch your way" className=" w-[180px]" />
        </a>
      </div>
      <ul className="list-none lg:flex hidden justify-center items-center cursor-pointer">
        {navbar.map((nav, index) => (
          <li
            style={{transition:".4s ease"}}
            key={nav.title}
            className={`font-poppins font-normal cursor-pointer hover:text-[#3094d3] hover:scale-125 text-[16px]  ${
              index === navbar.length - 1 ? "mr-0" : "mr-10"
            }`}
            onClick={() => {
              setActive(nav.title);
              scrollToSection(nav.id);
            }}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <Link to="/auth" aria-label="Auth">
        <button className="hidden lg:block bg-white hover:bg-transparent hover:text-white border hover:border-blue-700 hover:border-2 hover:transition-all duration-500 rounded-xl w-fit lg:px-6 py-2 shadow-xl drop-shadow-2xl text-black text-base font-semibold">
          Get Started
        </button>
      </Link>
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt={toggle ? "close button" : "hamburger menu"}
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
                onClick={() => {
                  setActive(nav.title);
                  scrollToSection(nav.id);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <Link to="/auth" aria-label="Auth">
              <button className="bg-white rounded-xl w-fit px-5 py-1.5 shadow-xl drop-shadow-2xl mt-20 text-black text-base font-semibold">
                Get Started
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
