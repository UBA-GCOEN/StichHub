import React from "react";
function TailorSum(propsData) {
  return (
    <div className="m-auto rounded-lg flex justify-center p-2 min-h-full min-w-full max-h-full max-w-full ">
      <div>
        <div className="drop-shadow-lg flex w-full h-full m-auto">
          <img loading="lazy"
            className="rounded-lg object-cover mt-2"
            src={propsData.propsData.item.passport}
          />
        </div>
      </div>
    </div>
  );
}

export default TailorSum;
