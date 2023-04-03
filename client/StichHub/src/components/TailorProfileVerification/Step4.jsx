import React from "react";

const Step4 = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className=" mt-[20%] lg:mt-[5%] bg-[#130F26]">
      <div className="flex ml-[15%] ">
        <label class="my-6 mr-2 flex h-[2.638rem] w-[2.638rem] items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
          3
        </label>
        <h1 className="flex text-white text-2xl font-bold ml-2 mt-6 mb-5">
          Personal Identity Verification
        </h1>
      </div>
      <div className="mt-[-5%] right-0  bottom-[300px] w-[60%] h-[30%] lg:right-20 absolute opacity-20 lg:opacity-100 lg:hidden">
        <img src={Profileveri} />
      </div>
      <div className="hidden lg:block lg:right-20 absolute opacity-20 lg:opacity-100">
        <img src={Profileveri} />
      </div>

      <div className="ml-[15%] w-[75%] lg:w-[50%] h-auto bg-white bg-opacity-10 rounded-xl p-[2%] grid grid-cols-1 lg:grid-cols-2 gap-3 pl-[5%] pr-30 ">
        <div className="text-white  ">
          <label className="text-2xl font-bold">1. Passport Size Photo</label>
          <br />

          <label className="text-lg font-semibold text-gray-400 ml-7">
            (.jpg,.png)
          </label>
          <div className="flex">
            <img
              src={file}
              className="w-[100px] h-[100px] mt-5 rounded-lg border border-white"
            ></img>
            <input
              className="rounded-xl mt-5 flex ml-[] pl-5"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="text-white  col-span-1 mt-5 lg:mt-0 ">
          <label className="text-2xl font-bold">2. Aadhar Card (UIDAI)</label>
          <br />

          <label className="text-lg font-semibold text-gray-400 ml-7">
            (.jpg,.png,.pdf)
          </label>
          <div className="flex">
            <input className="rounded-xl mt-5 flex ml-[] pl-5" type="file" />
          </div>
        </div>

        <div className="text-white col-span-1 lg:col-span-2 mt-5 ">
          <label className="text-2xl font-bold">
            3. Profession Verification Document
          </label>
          <br />
          <label className="text-xs text-white font-semibold">
            (Any type of document/ image describing that you are working as a
            tailor){" "}
          </label>
          <br />

          <label className="text-lg font-semibold text-gray-400 ml-7">
            (.jpg,.png,.pdf)
          </label>
          <div className="flex">
            <input className="rounded-xl mt-3 flex mb-5" type="file" />
          </div>
        </div>
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
      <ProgressBar progressPercentage={70}></ProgressBar>
    </div>
  );
};

export default Step4;