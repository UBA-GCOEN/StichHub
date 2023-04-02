import React from "react";

const Step3 = () => {
  return (
    <div className="mt-[20%] lg:mt-[5%] bg-[#130F26]">
      <div className="flex ml-[15%] ">
        <label class="my-6 mr-2 flex h-[2.638rem] w-[2.638rem] items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
          2
        </label>
        <h1 className="flex text-white text-2xl font-bold ml-2 mt-6 mb-5">
          Confirm Address Details
        </h1>
      </div>
      <div className="bottom-0 right-0 w-[50%] lg:right-20 absolute opacity-20 lg:opacity-100">
        <img src={V} />
      </div>

      <div className="ml-[15%] w-[75%] lg:w-[50%] h-auto bg-white bg-opacity-10 rounded-xl p-[2%] grid grid-cols-1 gap-3 pl-[5%] pr-5 lg:pr-40">
        <form>
          <div className="text-white">
            <span>Country/ Region</span>
            <br />
            <CountryDropdown
              class="country"
              value={country}
              onChange={setCountry}
              className="border box-border text-gray-500 w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-white bg-white"
            />
          </div>

          <div className="mb-2">
            <label>
              <span className="text-white">Street address</span>
              <br />
              <input
                name="address"
                type="address"
                className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-white bg-white"
                placeholder="House number and street name"
                required
              />{" "}
              <input
                name="address"
                type="address"
                className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-white"
                placeholder="Appartment, suite, landmark, etc. (optional)"
                required
              />{" "}
            </label>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div xs={5}>
              <div className="mb-2">
                <label>
                  <span className="text-white">Town/ City</span>
                  <br />
                  <input
                    name="city"
                    type="city"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-white"
                    placeholder="enter city"
                    required
                  />{" "}
                </label>
              </div>
            </div>
            <div xs={7}>
              <div className="mb-2">
                <label>
                  <span className="text-white">State</span>
                  <br />
                  <input
                    name="state"
                    type="state"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    placeholder="enter state"
                    required
                  />{" "}
                </label>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label className="grid grid-cols-1 lg:grid-cols-2">
              <span className="text-white">Pincode</span>
              <br />
              <input
                name="pincode"
                type="pincode"
                className=" border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                placeholder=""
                required
              />{" "}
            </label>
          </div>
        </form>
      </div>
      <button
        className="bg-gray-300 mr-5  ml-[15%] mt-[1%] px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
        onClick={handleBack}
      >
        Previous
      </button>
      <button
        className="   px-6 py-1.5 rounded-lg text-white bg-blue-500 hover:bg-blue-600 top-0"
        onClick={handleNext}
      >
        Proceed
      </button>
      <ProgressBar progressPercentage={40}></ProgressBar>
    </div>
  );
};

export default Step3;