import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const navigateTo = useNavigate();

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
    <div className="flex justify-between p-2 bg-white  w-full">
      <div className="flex mt-2">
        <div className="mx-5">Logo</div>
        <div className="mx-5">Search</div>
      </div>
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
              className="bg-red-500 text-white py-1 px-3 rounded-lg ml-6 mt-1"
              onClick={logout}
            >
              Log Out
            </button>
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
