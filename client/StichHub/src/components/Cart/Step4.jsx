import React from "react";
import img from "../../assets/img/img.png";

//main definition
const Step4 = () => (
  <div>
    <div className="grid lg:grid-cols-3 lg:m-10 justify-center sm:grid-row-2 ">
      <div class="grid grid-cols-1 col-span-2 relative divide-y border border-gray-200 rounded-lg p-3">
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
            <div class="rounded-lg md:h-1/3">
              <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <input name="service" type="radio" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                      CARE + Package{" "}
                    </h2>
                    <p class="mt-1 text-xs  text-gray-500">
                      One Month Alteration, Premium Fabric Cloths,Delivery Free
                    </p>
                  </div>
                  <div class=" lg:flex justify-between sm:space-y-6 sm:mt-0  sm:space-x-6 m-[10px]  ">
                    <div class="flex  space-x-4">
                      <p class="text-md mt-1 font-bold">₹99.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* environment friendly block  */}
            <div class="rounded-lg  md:h-1/3">
              <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <input name="service" type="radio" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                      Environment Friendly
                    </h2>
                    <p class="mt-1 text-xs text-gray-700">
                      Donate old cloths for green growth
                    </p>
                  </div>
                  <div class="  ">
                    <div class="flex  space-x-4">
                      <p class="text-md mt-1 font-bold">₹9.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* order information same as preivous one  */}
      <div className="justify-center w-[250px] col-span-1 rounded-2xl sm:ml-[20%]">
        <div className="shadow-2xl rounded-2xl  ">
          <h4 className="pt-4 pl-8 pb-4 font-bold md:items-center">
            <span>Order Information</span>
          </h4>
          <img
            src={img}
            className="ml-[30px] mr-[20px] mb-[5px] w-[190px] h-[180px] rounded-[10px] border border-solid border-[#cecece]"
          />
          <div className="pl-[30px] pr-[30px] ">
            <span>
              <strong>
                Teal Brown Kurti Full(Cotton Silk)
                <h6 className="text-xs">
                  SIZE: <strong> XI</strong>&nbsp; &nbsp; &nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  COLOR:<strong> RED</strong>{" "}
                </h6>
              </strong>
            </span>
            <hr className="mt-2"></hr>
            <b>
              <div>Price Total</div>
            </b>
            <div class="grid grid-cols-2 gap-4">
              <div xs={2}>Subtotal GST Shipping Coupon</div>
              <div xs={2}>
                ₹20,000/- ₹300/- ₹100/-
                <br />
                ₹0/-
              </div>
            </div>

            <hr className="mt-2 pl-[30px] pr-[30px]"></hr>
          </div>

          <strong>
            <div class="grid grid-cols-2 gap-4">
              <div xs={2} className="pl-[30px] pr-[30px] ">
                Total
              </div>
              <div xs={2} className="pb-[20px] text-xl">
                ₹20,400/-
              </div>
            </div>
          </strong>
        </div>
      </div>
    </div>
  </div>
);

export default Step4;
