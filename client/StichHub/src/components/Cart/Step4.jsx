import React from "react";
import img from "../../assets/img/img.webp";

//main definition
const Step4 = () => (
  <div>
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:m-10 justify-center gap-4">
      <div className="grid grid-cols-1 col-span-2  relative divide-y border border-gray-200 rounded-lg p-3">
        {/* Grid block 1 */}
        <div className="grid grid-cols-3 justify-between p-3">
          <p className=" text-gray-400">Contact</p>
          <p className="text-sm  font-semibold">
            Email: xyz@gmail.com <br />
            Mob.No. 8788887878
          </p>{" "}
          <button className="font-roboto text-gray-500 hover:underline hover:text-blue-700 ">
            Change
          </button>
        </div>
        <div className="grid grid-cols-3 justify-between p-3">
          <p className=" text-gray-400">Ship To</p>
          <p className="text-sm  font-semibold">
            IIT,Khapri,Nagpur Maharashtra 40001
          </p>{" "}
          <button className="font-roboto text-gray-500 hover:underline hover:text-blue-700 ">
            Change
          </button>
        </div>
        <div className="grid grid-cols-3 justify-between p-3">
          <p className=" text-gray-400">Payment Method</p>
          <p className="text-sm  font-semibold">Cash On Delivery [COD]</p>{" "}
          <button className="font-roboto text-gray-500 hover:underline hover:text-blue-700 ">
            Change
          </button>
        </div>

        {/* Additional services block */}
        <div className="m-5 pt-5 justify-center   font-bold">
          Additional Services
          <div className="grid grid-col-2 gap-4  lg:mr-[50%]">
            {/* care+package block  */}
            <div className="rounded-lg md:h-1/3">
              <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <input name="service" type="radio" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      CARE + Package{" "}
                    </h2>
                    <p className="mt-1 text-xs  text-gray-500">
                      One Month Alteration, Premium Fabric Cloths,Delivery Free
                    </p>
                  </div>
                  <div className=" lg:flex justify-between sm:space-y-6 sm:mt-0  sm:space-x-6 m-[10px]  ">
                    <div className="flex  space-x-4">
                      <p className="text-md mt-1 font-bold">₹99.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* environment friendly block  */}
            <div className="rounded-lg  md:h-1/3">
              <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <input name="service" type="radio" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      Environment Friendly
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      Donate old cloths for green growth
                    </p>
                  </div>
                  <div className="  ">
                    <div className="flex  space-x-4">
                      <p className="text-md mt-1 font-bold">₹9.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* order information same as preivous one  */}

      <div className="justify-center w-full mt-5 lg:w-[300px] rounded-2xl lg:ml-0 lg:mt-3 ">
        <div className="shadow-2xl rounded-2xl  ">
          <h4 className="pt-4 pl-8 pb-4 font-bold md:items-center">
            <span>Order Information</span>
          </h4>
          <img loading="lazy"
            src={img}
            className="m-10 mt-0 mb-[5px] object-fill w-[73%] h-[180px] rounded-[10px] border border-solid border-[#cecece]" alt="a cartoon character riding a yellow scooter"
          />

          <div className="m-10 mt-5">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700 font-bold">
                {" "}
                Teal Brown Kurti Full (Cotton Silk)
              </p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Size:</p>
              <p className="text-gray-700 font-bold">XI</p>
              <p className="text-gray-700">Color:</p>
              <p className="text-gray-700 font-bold">Red</p>
            </div>
            <hr></hr>
            <div className="mb-2 flex justify-between mt-5">
              <p className="text-gray-700">Order Summary</p>
              <p className="text-gray-700">₹2590.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Additional Service</p>
              <p className="text-gray-700">₹4.99</p>
            </div>
            <div className="mt-2 flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">₹100.00</p>
            </div>
            <div className="mt-2 flex justify-between">
              <p className="text-gray-700">Coupon</p>
              <p className="text-green-500">₹4.99</p>
            </div>

            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total Amount</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">₹2,700.00</p>
                <p className="text-sm text-gray-700 mb-5">including GST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Step4;
