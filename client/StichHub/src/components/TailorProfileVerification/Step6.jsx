import React from 'react'


// user identification
const user = {
    name: "Vishal",
  };
  
const Step6 = () => {
  return (
<div>
      <img
        src={Verified}
        className="hidden lg:block right-24 absolute w-[30%] h-[60%] "
      />
      <img
        src={Verified}
        className="opacity-20 right-0 bottom-[300px] w-[55%] h-[35%] lg:opacity-100 lg:right-24 absolute lg:w-[30%] lg:h-[60%] lg:hidden"
      />

      <div className="  text-whie ml-[15%] mt-[25%] lg:mt-[10%] font-poppins">
        <div className="mr-[15%] lg:mr-[30%]">
          <h1 className="text-[rgb(127,255,0)] text-4xl font-bold mb-3">
            Congrats {user.name},
          </h1>
          <h1 className="select-none	 text-white text-5xl font-bold tracking-wider lg:mr-[20%]	">
            Now you are completely registered & verified on our website.
          </h1>
          <p className="text-right font-semibold text-white lg:mr-[180px] mt-5 tracking-tighter">
            <p className="text-gray-500 italic">
              "The intellect always cuts and divides like a pair of scissors.
              The heart sews things together and unites like a needle. The
              tailor uses both."
            </p>
            - Mata Amritanandamayi -
          </p>
        </div>
      </div>
      <button
        className="bg-gray-300 ml-[15%] mt-[2%]  px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
        onClick={handleBack}
      >
        Previous
      </button>
      <button className="px-6 py-1.5 rounded-lg ml-5 text-white bg-[#009415] hover:bg-green-600 top-0">
        Submit
      </button>
      <ProgressBar progressPercentage={100} />
    </div>  )
}

export default Step6;