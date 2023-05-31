import { useState, useEffect } from "react";
import { tailorCards } from "../../constants/home";
import { Link, useLocation } from "react-router-dom";
import axios from "../../axios.js";
import { Player } from "@lottiefiles/react-lottie-player";
const TailorList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tailorList, setTailorList] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const getTailor = async () => {
    setIsLoading(true);

    try {
      const res = await axios.get("/tailors/list");
      setTailorList(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTailor();
  }, [1]);

  const linkTo = user ? "/home/category" : "/auth/customer";

  return (
    <div className="mx-5 my-5 flex justify-center flex-wrap gap-3 sm:gap-7">
      {isLoading ? (
        <div className="relative">
          <div className="absolute z-[100] left-[-10vw] lg:left-[30vw] top-[10vh]">
            <Player
              src="https://assets8.lottiefiles.com/packages/lf20_prjwp0b2.json"
              background="transparent"
              speed="1"
              style={{ height: "500px", width: "500px" }}
              loop
              autoplay
            />
          </div>
        </div>
      ) : null}

      {tailorList.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105 p-3 cardGradient w-[43vw] sm:w-[20vw] rounded-lg text-white"
        >
          {/* Top Display */}
          <div className="flex justify-between">
            <div>
              <img
                src={
                  item.passport.length
                    ? item.passport
                    : "https://cdn.pixabay.com/photo/2019/03/22/11/03/dressmaker-4073022_1280.jpg"
                }
                className="mb-1 w-[60px] h-[60px] rounded-full"
              />
              <span className="font-semibold text-lg">{item.name}</span>
            </div>
            {/* Rating */}
            <div>
              <div className="flex justify-end">
                <span className="text-sm px-1">{item.rating}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm"> {item.city}</span>
            </div>
          </div>
          {/* middle Display */}
          <p className="text-xs py-1">
            {item.bio.length
              ? item.bio.slice(0, 20)
              : "I can design all types of designer clothes for women for party and daily wear"}
          </p>
          <div className="flex flex-wrap gap-1 py-1">
            {item.types
              .map((tags, id) => (
                <span
                  key={id}
                  id="badge-dismiss-default"
                  className="bg-[#3b82f6] rounded-md px-2 text-white text-[10px] lg:inline-flex items-center py-1 mr-2 sm:text-sm font-medium"
                >
                  {tags}
                 
                </span>
              ))
              .slice(0, 3)}
          </div>

          {/* Buttons */}
          <div className="flex flex-col justify-between gap-2 py-2">
            <Link to="/TailorDetails" state={{ item }}>
              <button className="text-xs bg-cyan-100 text-black py-2 px-2 rounded-lg w-full">
                More Details
              </button>
            </Link>

            <Link to={linkTo} state={{ item }}>
              <button className="text-xs bg-blue-500 px-2 py-2 rounded-lg w-full">
                Book Tailor
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TailorList;
