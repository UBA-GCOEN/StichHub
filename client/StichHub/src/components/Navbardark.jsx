import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logo } from "../constants/MainLandingPage";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigateTo = useNavigate();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwt_decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    localStorage.clear();
    navigateTo("/auth/tailor");
  };

  const linkToCart = user ? "/Cart" : "/auth/customer";
  const linkToMeasurement = user ? "/Cart" : "/auth/customer";

  return (
    <nav className="mt-3">
      <div className="flex justify-between sm:justify-center">
        {/* Logo */}
        <div className="flex mt-2">
          <a href="/" className="ml-5">
            <img loading="lazy" src={logo} alt="logo with text that says StichHub stitch your way" className="w-[120px] sm:w-[140px]" />
          </a>
        </div>

        {/* Search */}
        <div className="hidden sm:flex mx-5 justify-center text-white">
          <input
            name="search"
            id="search"
            placeholder="search what you want to stitch?"
            className="border-2 w-[50vw] text-black rounded-xl border-indigo-500 py-2 px-3 border-solid"
          />
        </div>

        {/* Account Details or signin */}
        <div className="mx-5">
          {user?.result ? (
            <div className="flex ">
              <span className="mt-2">Welcome! &nbsp;</span>
              <span className="text-indigo-600 mr-3 mt-2">
                {" "}
                {user?.result.name}{" "}
              </span>
              <div
                className="rounded-full w-9 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                {user?.result.picture ? (
                  <img loading="lazy" src={user?.result.picture} className="rounded-full" />
                ) : (
                  <div className="w-9 bg-indigo-600 rounded-full h-9 text-white text-center text-2xl">
                    {user?.result.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div
                className={`${!toggle ? "hidden" : "flex"
                  } cardGradient w-[240px] absolute mx-[-80px] lg:mx-[-10px] py-2 min-w-[140px] top-14 rounded-xl z-[100]`}
              >
                <div className="flex flex-col gap-2 mt-3">
                  <Link to="/Cart">
                    <span className="ml-6 text-white cursor-pointer my-2 hover:text-cyan-300">
                      Your Cart
                    </span>
                  </Link>

                  <Link to="/Orders">
                    <span className="ml-6 text-white cursor-pointer my-2 hover:text-cyan-300">
                      Your Orders
                    </span>
                  </Link>

                  <Link to="/home">
                    <span className="ml-6 text-white cursor-pointer my-2 hover:text-cyan-300">
                      Your Profile
                    </span>
                  </Link>

                  <Link to="/home">
                    <span className="ml-6 text-white cursor-pointer my-2 hover:text-cyan-300">
                      Your Measurements
                    </span>
                  </Link>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded-lg ml-6 mt-9 mb-3"
                    onClick={logout}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/auth/customer">
              <button className="bg-blue-500 text-white py-1 px-3 rounded-lg mt-1">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="sm:hidden mx-5 flex justify-center mt-1">
        <input
          name="search"
          id="search"
          placeholder="search what you want to stitch?"
          className="border-2 w-[90vw] rounded-xl border-indigo-500 py-2 px-3 border-solid"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute right-8 mt-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
