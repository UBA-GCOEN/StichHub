import React from "react";
import { ClockIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { View } from "../../../assets/3dConfigurator/configurator-icons";

const OngoingOrders = () => {
  return (
    <div className="bg-[#394357] h-[100hv]  auto-rows-fr row-span-3 m-8 rounded-3xl">
      <div className="text-2xl text-white text-left m-3 h-max">
        Ongoing Orders
      </div>
      <div>
        {/* first */}
        <div className="relative w-[40%] m-5">
          {/* top */}
          <div className="bg-[url('./src/assets/TailorDashboard/ongoingtop-2.png')] bg-cover bg-no-repeat p-20">
            <div className="flex  justify-center">
              <div
                id="button"
                className="mb-1 mt-[5%] flex bg-white text-black w-fit p-2 rounded-full"
              >
                <img src={View} className="mr-3 ml-1 w-[15px]" alt="icon of 3d cube"/>
                <span className="text-xs font-semibold cursor-pointer">
                  See in your room
                </span>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="grid shadow-2xl col-span-3 ">
            <div className="grid grid-rows-2 place-items-stretch rounded-2xl shadow-md p-2 mt-4">
              {/* Customer Information */}
              <div className="grid row-span-2 place-items-center grid-cols-2 ">
                <div className="text-sm text-left text-slate-200 justify-self-start font-bold">
                  Customer Information
                </div>

                <div className="grid grid-cols-5  text-xs">
                  <ClockIcon className="col-start-3 self-center fill-slate-400 h-[20px] w-[20px]" />
                  <div className="col-start-4 text-slate-400 text-left col-end-6">
                    1 hour ago
                  </div>
                </div>

                <div class="flex justify-self-start items-center space-x-4">
                  <img
                    class="w-9 h-9 rounded-full"
                    src="./src/assets/img/jonathan.png"
                    alt="profile photo of jonathan"
                  />
                  <div class="font-medium dark:text-black">
                    <div className="text-left text-slate-300 text-base">
                      Jese Leos
                    </div>
                    <div class="text-left text-xs text-gray-500 dark:text-gray-400">
                      Nagpur
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5  text-sm">
                <PhoneIcon className="w-4 h-4 col-start-3 fill-blue-700" />
                <div className="col-start-4 text-slate-400 text-xs text-left col-end-6">7447557386</div>
                </div>
                
              </div>

              {/* Order Information */}
              <div className="mt-4 ">
                <div className="text-sm text-left text-slate-200 font-bold">
                  Order Information
                </div>

                <div className="grid grid-flow-col grid-cols-[10%_90%]">
                  <img
                    className="grid place-items-center h-8 w-8"
                    src="https://img.icons8.com/sf-regular-filled/48/undefined/clothes.png" alt="icons of white shirt"
                  />
                  <div className="grid text-sm text-left text-slate-300 place-items-center justify-items-start">
                    Free Style Checked Blue Cotton Jacket with Inner
                  </div>
                </div>

                <div className="grid  bg-white p-2 m-2 ml-[32px] grid-cols-[30%_70%] w-[70%] rounded-full grid-flow-col">
                  <div className="text-sm w-fit ml-3">Fabric:</div>

                  <div className="grid grid-flow-col grid-cols-[10%_90%]">
                    <div className="rounded-full h-5 w-5 bg-blue-700"></div>

                    <div className="text-sm w-fit justify-self-center font-semibold">
                      Cotton-Dark-Blue
                    </div>
                  </div>
                </div>

                <div>
                  <div className="grid grid-flow-col ml-[32px] w-1/2 grid-cols-2 text-xs">
                    <div className="grid  grid-flow-col">
                      <div className="w-fit text-slate-50">SIZE:</div>
                      <div className="w-fit text-slate-50 font-medium">XI</div>
                    </div>

                    <div className="grid grid-flow-col">
                      <div className="w-fit text-slate-50">QTY:</div>
                      <div className="w-fit text-slate-50 font-medium">1</div>
                    </div>
                  </div>

                  <div className="grid grid-flow-col w-fit ml-[32px]">
                    <div className="text-xs text-slate-50">
                      Additional Notes for stitching:
                    </div>
                    <div className="text-xs text-slate-50 ml-2 font-medium">
                      blablablablablaba
                    </div>
                  </div>
                </div>
              </div>
              {/* Order Infromation ends */}

              {/* Action buttons */}

              <button
                type="button"
                class="text-white w-[70%] h-fit bg-[#030084] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full  text-xs px-5 py-1 text-center  flex  justify-self-center justify-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 m-2 "
              >
                <div className=" flex flex-row justify-self-center">
                  CONTINUE TO STITCH
                  <img
                    className="h-5 w-5"
                    src="https://img.icons8.com/ios-filled/50/C3B9B9/needle.png" alt="illustration of a silver needle with a pointed tip"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* second */}
        <div></div>
      </div>
    </div>
  );
};

export default OngoingOrders;
