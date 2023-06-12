import { useState, useEffect } from "react";
import { tailorCards } from "../../constants/home";
import { Link, useLocation } from "react-router-dom";
import axios from "../../axios.js";
import { Player } from "@lottiefiles/react-lottie-player";
import shopposter from "./../../assets/home/bady-abbas-YZm-WKqxTIU-unsplash.jpg";
import avtr from "./../../assets/home/7309681.jpg";

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
    <div className="mx-[50px] my-5 flex flex-col  gap-3 sm:gap-7">
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
          className="p-3 md:my-0 my-5 cardGradient min-w-full min-h-[30px] hover:scale-105 sm:w-[20vw] transition-all duration-200 ease-in transform md:hover:scale-105
           rounded-lg text-white bg-violet-300"
        >
          {/* Top Display */}
          {/* <div className="flex justify-between">
            <div>
              <img
                src={item.passport}
                className="mb-1 w-[60px] h-[60px] rounded-lg"
              />
              <span className="font-semibold text-lg">{item.name}</span>
            </div>
          {*Rating*}
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
          </div> */}
          <div class="h-fit  md:h-fit w-full mt-5 md:flex  gap-[50px] group">
            <div>
              <img
                src={shopposter}
                alt="img"
                class="md:h-[300px] h-[200px] rounded-lg"
              />
            </div>
            <div class=" md:w-[800px]">
              <div class="flex py-2">
                <img
                  src={item.passport ? item.passport : avtr}
                  alt="avtr"
                  class="h-[50px] rounded-sm"
                />
                <h2 class="text-slate-500 mt-3 md:mt-1 ml-4 font-medium">
                  {item.name}
                </h2>
                <p class="text-slate-500 mt-3 md:mt-1 ml-5 font-medium">
                  | 12 minutes ago
                </p>
              </div>
              <div class="md:mr-[100px] mt-[20px] relative ">
                <h1 class="text-xl font-semibold group-hover:filter group-hover:blur-sm">Title</h1>
                {item.bio ? (
                  <p class="text-left mt-[20px] mb-[20px] group-hover:filter group-hover:blur-sm">{item.bio}</p>
                ) : (
                  <p class="text-left mt-[20px] mb-[20px] w-full md:w-full group-hover:filter group-hover:blur-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Atque neque eos consequatur laudantium aliquam quia
                    quibusdam? Deleniti distinctio, delectus, similique expedita
                    fugit illum facere iure aperiam magni vitae culpa. Harum.
                  </p>
                )}

                <div className="flex flex-wrap gap-1 py-1 group-hover:filter group-hover:blur-sm">
                  {item.types.map((tags, id) => (
                    <div
                      key={id}
                      className="bg-indigo-500 rounded-md px-2 py-2 mt[20px] text-white text-xs"
                    >
                      {tags}
                    </div>
                  ))}
                </div>
                <div className="flex md:flex-row flex-col gap-2 py-2 mt-4 w-full ">
                  <Link to="/TailorDetails" state={{ item }}>
                    <button className="text-xs bg-cyan-100 hover:scale-105 transition-transform text-black font-medium py-4 px-2 rounded-lg w-full">
                      More Details
                    </button>
                  </Link>

                  <Link to={linkTo} state={{ item }}>
                    <button className="text-xs bg-blue-500 px-2 py-4 hover:scale-105 transition-transform rounded-lg w-full">
                      Book Tailor
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* middle Display */}
          {/* <p className="text-xs py-1">{item.bio}</p> */}

          {/* Buttons */}
          {/* <div className="flex flex-col justify-between gap-2 py-2">
            <Link to="/TailorDetails" state={{item}}>
              <button className="text-xs bg-cyan-100 text-black py-2 px-2 rounded-lg w-full">
                More Details
              </button>
            </Link>

            <Link to={linkTo} state={{ item }}>
              <button className="text-xs bg-blue-500 px-2 py-2 rounded-lg w-full">
                Book Tailor
              </button>
            </Link>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default TailorList;
