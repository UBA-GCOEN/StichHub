import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import logo from "../../assets/logo/Long - Logo Transparent (Black).png";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
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
    navigateTo("/home");
    setUser(null);
  };

  return (
    <nav className="mt-3">
      <div className="flex justify-between sm:justify-center">
        {/* Logo */}
        <div className="flex mt-2">
          <div className="ml-5">
            <img src={logo} alt="stichHub" className="w-[120px] sm:w-[140px]" />
          </div>
        </div>

        {/* Search */}
        <div className="hidden sm:flex mx-5 justify-center">
          <input
            name="search"
            id="search"
            placeholder="search what you want to stitch?"
            className="border-2 w-[50vw]  rounded-xl border-indigo-500 py-2 px-3"
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
              <div className="rounded-full w-9">
                {user?.result.picture ? (
                  <img src={user?.result.picture} className="rounded-full" />
                ) : (
                  <div className="w-9 bg-indigo-600 rounded-full h-9 text-white text-center text-2xl">
                    {user?.result.name.charAt(0)}
                  </div>
                )}
              </div>

              <button
                className="hidden bg-red-500 text-white py-1 px-3 rounded-lg ml-6 mt-1"
                onClick={logout}
              >
                Log Out
              </button>
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
          className="border-2 w-[90vw]  rounded-xl border-indigo-500 py-2 px-3"
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
