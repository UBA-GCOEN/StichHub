import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { close, logo, menu, navbar } from "../../constants/MainLandingPage";
const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

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

  
  const handleScroll = () => {
    const isTop = window.scrollY === 0;
    setIsScrolled(!isTop);
    // All home sections
    const homeSection = document.getElementById('home');
    const servicesSection = document.getElementById('ourServices');
    const howItWorksSection = document.getElementById('howitworks')
    const testimonialSection = document.getElementById('testimonial')
    const aboutSection = document.getElementById('aboutus');
    const contactSection = document.getElementById('contactus');

    // Window Y position
    const scrollPosition = window.scrollY;

    // padding
    const offset = 100;

    // Condition for active section
    if (
      scrollPosition >= homeSection.offsetTop - offset &&
      scrollPosition < servicesSection.offsetTop - offset
    ) {
      setActive('Home');
    } else if (
      scrollPosition >= servicesSection.offsetTop - offset &&
      scrollPosition < howItWorksSection.offsetTop - offset
    ) {
      setActive('Our Services');
    } else if (
      scrollPosition >= howItWorksSection.offsetTop - offset &&
      scrollPosition < testimonialSection.offsetTop - offset
    ) {
      setActive('How it Works?');
    }else if (
      scrollPosition >= testimonialSection.offsetTop - offset &&
      scrollPosition < aboutSection.offsetTop - offset
    ) {
      setActive('Testimonial');
    }else if (
      scrollPosition >= aboutSection.offsetTop - offset &&
      scrollPosition < contactSection.offsetTop - offset
    ) {
      setActive('About us');
    }else if (scrollPosition >= contactSection.offsetTop - offset) {
      setActive('Contact us');
    }
  };

  return (
    <nav
      className={`bg ${
        isScrolled ? "bg-inherit" : "bg-transparent"
      } w-[100vw] flex justify-around items-center fixed z-[100] pt-3 px-4 lg:py-6 lg:px-14`}
    >
      <div className="">
        <a href="#">
          <img
            src={logo}
            alt="logo with text that says StichHub stitch your way"
            className=" w-[180px]"
            loading="lazy"
          />
        </a>
      </div>
      <ul className="list-none lg:flex hidden justify-center items-center cursor-pointer">
        {navbar.map((nav, index) => (
          <li
            style={{
              transition: ".25s ease",
            }}
            key={nav.title}
            className={`font-poppins font-normal cursor-pointer text-[16px]  ${
              index === navbar.length - 1 ? "mr-0" : "mr-10"
            }  ${
              active === nav.title
                ? "border-b-2 border-white border-solid text-[#38b6ff]"
                : ""
            } hover:border-b-2 hover:border-t-2 hover:border-white hover:text-[#38b6ff] hover:bg-[#5b5b5b4d]`}
            onClick={() => {
              setActive(nav.title);
              scrollToSection(nav.id);
              updateActiveNavLink();
            }}
          >
            <a href={`#${nav.id}`}>
              {" "}
              <span>{nav.title}</span>{" "}
            </a>
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
          loading="lazy"
          src={toggle ? close : menu}
          alt={toggle ? "close button" : "hamburger menu"}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } py-6 bg-black/100 absolute top-[4rem] right-0 mx-4 min-w-[140px] w-[200px] rounded-xl `}
          id="dropdown"
        >
          <ul className="list-none flex justify-end flex-1 flex-col">
            {navbar.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  index === navbar.length - 1 ? "mb-0" : "mb-4"
                }
                ${active === nav.title ? "" : "text-gray-500"}
                }  ${active === nav.title ? "bg-white text-black" : ""}`}
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
