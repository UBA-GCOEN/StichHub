import Cardi from "./Cardi";
import React from "react";
import highl from "../../assets/CustomerLandingPage/Icons/Highlight.webp";
import accu from "../../assets/CustomerLandingPage/Icons/Accuracy.webp";
import dura from "../../assets/CustomerLandingPage/Icons/Durable.webp";
import choi from "../../assets/CustomerLandingPage/Icons/Choose.webp";
import Button from "./Button";
import CardiM from "./CardiM";

function FeaturesM() {
  return (
    <div className="h-screen text-white text-center ">
      <div>
        <h1 className="text-4xl leading-normal m-4">
          Why prefer <br />
          <span className="font-semibold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-600">
            stitching?
          </span>{" "}
        </h1>
        <Button text="Learn More" />
      </div>
      <div className="flex w-full p-4 mr-4">
        {/* Div that will contain cards of the features */}
        <CardiM
          adrs={highl}
          head="Highlight"
          tail="Highlight your clothes yourself."
        />
        <CardiM
          adrs={choi}
          head="Choose"
          tail="your own fabric,
          decide how your clothes should be."
        />
      </div>

      <div className="flex w-full p-4 mr-4">
        {/* Div that will contain cards of the features */}
        <CardiM
          adrs={dura}
          head="Durable"
          tail="Get more durable 
          wardrobe for yourself."
        />
        <CardiM
          adrs={accu}
          head="Accuracy"
          tail="Get clothes made
          EXACTLY as you envision"
        />
      </div>
    </div>
  );
}

export default FeaturesM;
