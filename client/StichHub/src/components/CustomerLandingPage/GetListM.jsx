import React from "react";
import Button from "./Button";
import img from "../../assets/CustomerLandingPage/Group 1000001620.webp";

function GetListM() {
  return (
    <div className="h-screen text-center m-2 p-2">
      {/* Image Part */}
      <div className="w-full text-center justify-center">
        <img loading="lazy"
          src={img}
          className="h-90" alt="a cartoon character pointing at a store"
        />
      </div>
      <div className="flex">
        {/* Text Part */}
        <div className="text-white text-left w-full  justify-center items-center m-auto">
          <h3 className="text-[#E4DCCF] text-xl leading-relaxed text-center">
            <h2 className="text-5xl font-semibold leading-normal w-full">
              Get A list of{" "}
              <span className="font-semibold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-600">
                Alteration
              </span>{" "}
              stores!
            </h2>
            Why change yourself when your clothes can change for you? Get a list
            of places where you can alter your clothes or if your piece was
            ordered by our site get it altered for free.
          </h3>
          <div className="m-1 p-2 text-center  justify-center ">
            <Button text="Get List" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetListM;
