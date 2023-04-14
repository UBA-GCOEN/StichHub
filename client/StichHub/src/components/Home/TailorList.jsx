import React from "react";
import { tailorCards } from "../../constants/home";
import { Link } from "react-router-dom";

const TailorList = () => {
  return (
    <div className="mx-5 my-5 flex flex-wrap justify-between gap-3">
      {tailorCards.map((item, index) => (
        <div
          key={index}
          className="p-3 cardGradient w-[43vw] rounded-lg text-white"
        >
          {/* Top Display */}
          <div className="flex justify-between">
            <div>
              <img
                src={item.img}
                className="mb-1 w-[60px] h-[60px] rounded-lg"
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
              <span className="text-sm"> {item.location}</span>
            </div>
          </div>
          {/* middle Display */}
          <p className="text-xs py-1">{item.bio}</p>
          <div className="flex flex-wrap gap-1 py-1">
            {item.tag.map((tags, id) => (
              <div
                key={id}
                className="bg-indigo-500 rounded-md px-2 text-white text-xs"
              >
                {tags}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col justify-between gap-2 py-2">
            <Link to="/TailorDetails" state={{ index: index }}>
              <button className="text-xs bg-cyan-100 text-black py-2 px-2 rounded-lg w-full">
                More Details
              </button>
            </Link>
            <Link to="/home/category" state={{ index: index }}>
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
