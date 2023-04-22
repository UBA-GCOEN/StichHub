import React from "react";
function TailorSum(propsData) {
  return (
    <div className=" rounded-lg flex justify-center p-4 min-h-full min-w-full max-h-full max-w-full ">
      <div>
        <div className="drop-shadow-lg flex w-full h-full m-auto">
          <img
            className="rounded-lg object-cover"
            src={propsData.propsData.item.passport}
          />
        </div>
      </div>
    </div>
  );
}

export default TailorSum;
