import Cardi from "./Cardi";
import React from "react";
import highl from "../../assets/CustomerLandingPage/Icons/Highlight.webp";
import accu from "../../assets/CustomerLandingPage/Icons/Accuracy.webp";
import dura from "../../assets/CustomerLandingPage/Icons/Durable.webp";
import choi from "../../assets/CustomerLandingPage/Icons/Choose.webp";
import Button from "./Button";

function Features() {
  return (
    <div className="relative h-screen text-white text-center ">
      <div>
        <h1 className="text-4xl leading-loose">Why prefer stitching?</h1>

        <h1 className="text-lg leading-loose w-2/5 mx-auto mb-2 ">
          The reason why many people prefer stitching and why you should try
          wearing stitched clothes.
        </h1>
        <Button text="Learn More" />
      </div>
      {/* Gradient */}
      <div className="absolute opacity-70 circleGradient-peach object-cover w-[75%] h-[110%] -top-80 left-[29rem] z-0 "></div>
      {/* Gradient End */}
      <div className="flex justify-center p-8  z-5 ">
        {/* Div that will contain cards of the features */}
        <Cardi
          adrs={highl}
          head="Highlight"
          tail="Highlight your clothes yourself."
        />
        <Cardi
          adrs={choi}
          head="Choose"
          tail="your own fabric,
          decide how your clothes should be."
        />
        <Cardi
          adrs={dura}
          head="Durable"
          tail="Get more durable 
          wardrobe for yourself."
        />
        <Cardi
          adrs={accu}
          head="Accuracy"
          tail="Get clothes made
          EXACTLY as you envision"
        />
      </div>
    </div>
  );
}

export default Features;
