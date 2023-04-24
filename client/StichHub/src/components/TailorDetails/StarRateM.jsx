import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
function StarRateM(propsData) {
  const colors = {
    yellow: "#ebeb35",
    gray: "#676d67",
  };
  const stars = Array(5).fill(0);

  // const [currentValue, setCurrentValue] = useState(
  //   propsData.propsData.item.rating
  // ); // To modify rating value in future

  console.log(propsData.propsData);
  return (
    <div>
      <div className="justify-center items-center text-center">
        <h1 className="text-lg font-semibold">Reviews</h1>
        <h1>{currentValue}/5.0</h1>
        <h3>Based on 420 reviews {/* Variable to be added */}</h3>
      </div>
      <div className="flex justify-center items-center">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              className="cursor-pointer"
              color={currentValue > index ? colors.yellow : colors.gray}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StarRateM;
