import React from "react";
import { ClockIcon, PhoneIcon } from "@heroicons/react/24/solid";
// import { ClothModel } from "../Configurator";
// import {
//     ConfiguratorProvider,
//     useCCustomization
//   } from "../../contexts/Configurator";
import { View } from "../../assets/3dConfigurator/configurator-icons";

const MainDisplay = () => {
  return (
    <div className="grid z-50 row-span-2 grid-flow-row grid-cols-2 grid-rows-6 ml-8 mr-28 grid-flow-col ">
      {/* new orders */}
      <div className="grid grid-cols-5 bg-white rounded-2xl row-span-6 mb-10 mr-8 w-full h-11/12">
        {/* New orders */}
        <div className="col-start-1 col-span-2 text-left text-xl font-bold p-3">
          New Orders
        </div>

        {/* incomplete model rework with backend */}
        {/* <div className="grid rounded-md col-span-2 col-start-1">
               <ConfiguratorProvider className="rounded-md">
               <ClothModel/>
               </ConfiguratorProvider>
                
               </div> */}

        <div className="grid  col-span-3 col-start-3">
          <div className="grid grid-rows-2 rounded-2xl shadow-md p-2 mt-4">
            {/* Customer Information */}
            <div className="grid row-span-2 place-items-center grid-cols-2 ">
              <div className="text-base text-left justify-self-start font-bold">
                Customer Information
              </div>

              <div className="grid grid-cols-5  text-base">
                <ClockIcon className="col-start-2 h-[24px] w-[24px]" />
                <div className="col-start-3 text-left col-end-10">
                  {" "}
                  1 hour ago
                </div>
              </div>

              <div class="flex justify-self-start items-center space-x-4">
                <img
                  class="w-10 h-10 rounded-full"
                  src="./src/assets/img/jonathan.png"
                  alt=""
                />
                <div class="font-medium dark:text-black">
                  <div className="text-left text-lg">Jese Leos</div>
                  <div class="text-left text-sm text-gray-500 dark:text-gray-400">
                    Nagpur
                  </div>
                </div>
              </div>

              <PhoneIcon className="w-5 h-5 fill-blue-700" />
            </div>

            {/* Order Information */}
            <div className="mt-4 ">
              <div className="text-base text-left font-bold">
                Order Information
              </div>

              <div className="grid grid-flow-col grid-cols-[10%_90%]">
                <img
                  className="grid place-items-center h-8 w-8"
                  src="https://img.icons8.com/sf-regular-filled/48/undefined/clothes.png"
                />
                <div className="grid text-sm text-left place-items-center justify-items-start">
                  Free Style Checked Blue Cotton Jacket with Inner
                </div>
              </div>

              <div className="grid border-black border-2 p-2 m-2 ml-[32px] grid-cols-[30%_70%] w-[70%] rounded-full grid-flow-col">
                <div className="text-sm w-fit ml-3">Fabric:</div>

                <div className="grid grid-flow-col grid-cols-[10%_90%]">
                  <div className="rounded-full h-5 w-5 bg-blue-700"></div>

                  <div className="text-sm w-fit justify-self-center font-semibold">
                    Cotton-Dark-Blue
                  </div>
                </div>
              </div>

              <div>
                <div className="grid grid-flow-col ml-[32px] w-1/2 grid-cols-2 text-sm">
                  <div className="grid  grid-flow-col">
                    <div className="w-fit">SIZE:</div>
                    <div className="w-fit font-medium">XI</div>
                  </div>

                  <div className="grid grid-flow-col">
                    <div className="w-fit">QTY:</div>
                    <div className="w-fit font-medium">1</div>
                  </div>
                </div>

                <div className="grid grid-flow-col w-fit ml-[32px]">
                  <div className="text-sm">Additional Notes for stitching:</div>
                  <div className="text-sm ml-2 font-medium">
                    blablablablablaba
                  </div>
                </div>
              </div>
            </div>
            {/* Order Infromation ends */}

            {/* Action buttons */}
            <div className="grid place-items-center grid-flow-col m-2">
              <button
                type="button"
                class=" w-fit h-fit  focus:ring-4 focus:outline-none dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-5 py-2.5 border-2 border-[#030089] text-center text-[#030089] mr-2 mb-2"
              >
                IGNORE
              </button>
              <button
                type="button"
                class="text-white w-fit h-fit bg-[#030084] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full  text-xs px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
              >
                STITCH
                <img
                  className="h-5 w-5"
                  src="https://img.icons8.com/ios-filled/50/C3B9B9/needle.png"
                />
              </button>
            </div>
          </div>

          <button
            type="button"
            class="text-white m-7 justify-self-end self-start mt-3 w-fit h-fit bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Next
            <svg
              aria-hidden="true"
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* New Orders ends */}

      {/* Ongoing Orders */}
      <div className="  bg-white text-left rounded-2xl row-span-6 mb-10 ml-8 w-full h-9/12">
        <span className=" block text-lg font-bold ml-7 h-fit mt-3">
          Ongoing Orders
        </span>
        <div className="grid overflow-x-scroll grid-col-1 p-2 ml-2 ">
          <div class=" flex overflow-x-auto  w-fit h-fit  flex-basis-fit w-1/1 sm:w-1/1 ">
            <HJ />
            <HJ />
            <HJ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDisplay;

const HJ = () => {
  return (
    <div className="bg-white col-span-1 inline-block min-w-2 col-span-1 shadow-blue-200  h-[300px] w-[400px] m-7  mt-0 rounded-2xl">
      <div className="bg-[url('./assets/img/Ongoingtop.png')] h-[25%] w-[103%] ml-[-5px] bg-cover bg-no-repeat">
        <div className="flex  justify-center">
          <div
            id="button"
            className="mb-1 mt-[5%] flex bg-white text-black w-fit p-2 rounded-full"
          >
            <img src={View} className="mr-3 ml-1 w-[15px]" />
            <span className="text-sm font-semibold cursor-pointer">
              See in your room
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-rows-2 rounded-2xl shadow-md p-2 ">
          {/* Customer Information */}
          <div className="grid row-span-2 place-items-center grid-cols-2 ">
            <div className="text-xs text-left justify-self-start font-bold">
              Customer Information
            </div>

            <div className="grid grid-cols-5  text-xs">
              <ClockIcon className="col-start-2 h-[18px] w-[18px]" />
              <div className="col-start-3 text-left col-end-10">
                {" "}
                1 hour ago
              </div>
            </div>

            <div class="flex justify-self-start items-center space-x-4">
              <img
                class="w-7 h-7 rounded-full"
                src="./src/assets/img/jonathan.png"
                alt=""
              />
              <div class="font-medium dark:text-black">
                <div className="text-left text-sm">Jese Leos</div>
                <div class="text-left text-sm text-gray-700 dark:text-gray-400">
                  Nagpur
                </div>
              </div>
            </div>

            <PhoneIcon className="w-4 h-4 fill-blue-700" />
          </div>

          {/* Order Information */}
          <div className="mt-2 ">
            <div className="text-xs text-left font-bold">Order Information</div>

            <div className="grid grid-flow-col grid-cols-[10%_90%]">
              <img
                className="grid place-items-center h-6 w-6"
                src="https://img.icons8.com/sf-regular-filled/48/undefined/clothes.png"
              />
              <div className="grid text-xs text-left place-items-center justify-items-start">
                Free Style Checked Blue Cotton Jacket with Inner
              </div>
            </div>

            <div className="grid border-black border-2 p-1  ml-[32px] grid-cols-[30%_70%] w-[70%] rounded-full grid-flow-col">
              <div className="text-xs w-fit ml-3">Fabric:</div>

              <div className="grid grid-flow-col grid-cols-[10%_90%]">
                <div className="rounded-full h-3 w-3 bg-blue-700"></div>

                <div className="text-xs w-fit justify-self-center font-semibold">
                  Cotton-Dark-Blue
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-flow-col ml-[32px] w-1/2 grid-cols-2 text-xs mt-2">
                <div className="grid  grid-flow-col">
                  <div className="w-fit">SIZE:</div>
                  <div className="w-fit font-medium">XI</div>
                </div>

                <div className="grid grid-flow-col">
                  <div className="w-fit">QTY:</div>
                  <div className="w-fit font-medium">1</div>
                </div>
              </div>

              <div className="grid grid-flow-col w-fit ml-[32px]">
                <div className="text-sm">Additional Notes for stitching:</div>
                <div className="text-sm ml-2 font-medium">
                  blablablablablaba
                </div>
              </div>
            </div>
          </div>
          {/* Order Infromation ends */}

          {/* Action buttons */}
          <div className="grid place-items-center grid-flow-col m-2">
            <button
              type="button"
              class=" w-fit h-fit  focus:ring-4 focus:outline-none dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-5 py-1 border-2 border-[#030089] text-center text-[#030089] mr-2 mb-2"
            >
              IGNORE
            </button>
            <button
              type="button"
              class="text-white w-fit h-fit bg-[#030084] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full  text-xs px-5 py-1 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
            >
              STITCH
              <img
                className="h-5 w-5"
                src="https://img.icons8.com/ios-filled/50/C3B9B9/needle.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
