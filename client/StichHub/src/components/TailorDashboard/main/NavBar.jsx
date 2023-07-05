import jwt_decode from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/Long - Logo Transparent (White).png";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const navigateTo = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  const boxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setIsOpen(!isOpen);
      }
    }

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwt_decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("tailorProfile")));
  }, [location]);

  const logout = () => {
    localStorage.clear();
    navigateTo("/auth/tailor");
    setUser(null);
  };

  return (
    <div className="flex justify-between p-2 bg-primary  w-full">
      <div className="flex mt-2 h-fit w-40 ">
        <div className="mx-5">
          <img src={logo}  className="" alt="logo with text that says StichHub stitch your way" loading="lazy"/>
        </div>
        {/* <div className="mx-5">Search</div> */}
      </div>
      <div className="mx-5">
        {user?.result ? (
       
          <div ref={boxRef}  className="flex justify-between">
            <span className="mt-2 text-slate-300 ">Welcome! </span>
            <span className="text-indigo-400 mr-2 ml-2 mt-2">
              {" "}
              {user?.result.name}{" "}
            </span>

           
            <div onClick={handleOpen} className="rounded-full w-9">
              {user?.result.picture ? (
                <img loading="lazy"
                  src={user?.result.picture}
                  className="rounded-full bg-indigo-200" alt={user?.result.name}
                />
              ) : (
                <div className="w-9 bg-indigo-600 rounded-full h-9 text-white text-center text-2xl">
                  {user?.result.name.charAt(0)}
                </div>
              )}
            </div>


            {isOpen && (

              <div onClick={logout}  className="z-50 absolute flex flex-row justify-between top-[8%] p-2 right-5 bg-white h-fit w-[100px] rounded-xl ">
               <ArrowLeftOnRectangleIcon className="grid h-6 w-6 items-center"/>
               Log Out
              </div>
              // <button
              //   className="bg-red-500 text-white py-1 px-3 rounded-lg ml-6 mt-1"
              //   }
              // >
              //   Log Out
              // </button>
            )}
            </div>
          
        ) : (
          <Link to="/auth/tailor">
            <button className="bg-blue-500 text-white py-1 px-3 rounded-lg mt-1">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
