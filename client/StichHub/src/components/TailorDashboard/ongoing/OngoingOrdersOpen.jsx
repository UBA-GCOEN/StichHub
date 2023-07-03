import React from "react";
import {
  ClockIcon,
  PencilIcon,
  PhoneIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import { View } from "../../../assets/3dConfigurator/configurator-icons";

const OngoingOrdersOpen = () => {
  return (
    <div>
      <div className="text-white text-2xl text-left">Ongoing Orders</div>
      <div className="m-7">
        {/* top */}
        <div className="bg-[url('./src/assets/TailorDashboard/ongoingtop-2.webp')] w-[102%] ml-[-15px] bg-cover bg-no-repeat p-16">
          <button className="justify-start ml-0 w-fit">
            <ArrowLeftCircleIcon className="w-10 h-10 fill-white "></ArrowLeftCircleIcon>
          </button>
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
        <div className="bg-[#252B42]  rounded-b-2xl p-10">
          <div className="text-white text-xl text-left">Order Information</div>
          {/* first part */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-between">
              <div className="rounded-full bg-white h-10 w-10">
                <img
                  className="  "
                  src="https://img.icons8.com/sf-regular-filled/48/undefined/clothes.png" alt="icons of white shirt"
                />
              </div>

              <div className="grid text-sm w-[50%] font-semibold text-left text-slate-300 place-items-center justify-items-start">
                Free Style Checked Blue Cotton Jacket with Inner
              </div>
            </div>
            <div className="text-sm text-grey flex flex-row justify-between w-[40%]">
              <div className="">
                <div className="flex flex-row">
                  <div>
                    <ClockIcon className="col-start-3 self-center fill-slate-400 h-[20px] w-[20px]" />
                  </div>
                  <div className="w-fit">Start Date</div>
                </div>
                <div className="flex flex-row">
                  <div>
                    <ClockIcon className="col-start-3 self-center fill-slate-400 h-[20px] w-[20px]" />
                  </div>
                  <div>Due Date</div>
                </div>
              </div>
              <div className="text-slate-200">
                <div>4th December 2002</div>
                <div>20th December 2002</div>
              </div>
            </div>
          </div>
          {/* second part */}
          <div className="flex flex-row justify-between">
            <div className="grid  bg-white p-2 m-2 ml-[32px] grid-cols-[30%_70%] w-fit rounded-full grid-flow-col px-4">
              <div className="text-sm w-fit mx-3">Fabric:</div>

              <div className="grid grid-flow-col grid-cols-[20%_80%]">
                <div className="rounded-full h-5 w-5 bg-blue-700 mr-2"></div>

                <div className="text-sm w-fit justify-self-center font-semibold">
                  Cotton-Dark-Blue
                </div>
              </div>
            </div>
            <div className="grid  bg-white p-2 m-2 ml-[32px] grid-cols-[30%_70%] w-fit rounded-full grid-flow-col">
              <div className="text-sm w-fit ml-3">Fabric:</div>

              <div className="grid grid-flow-col grid-cols-[90%_10%] mr-2">
                <div className="text-sm w-fit justify-self-center font-semibold">
                  Status Stiching
                </div>
                <PencilIcon className=" h-5 w-5 mr-2"></PencilIcon>
              </div>
            </div>
          </div>
          {/*third part  */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-row text-sm text-slate-50">
              <div>SIZE:XI</div>
              <div>QTY:I</div>
            </div>
            <div className="text-white w-72">
              <div className="text-sm w-fit">Additional Notes:</div>
              <div className="text-xs text-left ">
                blablablablablaba bada wala blablablablablaba blablablablablaba
                bada wala blablablablablaba bada wala blablablablablaba
                blablablablablaba
              </div>
            </div>
          </div>
          {/* fourth part */}
          <div className="flex flex-row justify-between">
            <div class="flex justify-self-start items-center space-x-4">
              <img
                class="w-9 h-9 rounded-full"
                src="./src/assets/img/jonathan.webp"
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
              <div className="col-start-4 text-slate-400 text-xs text-left col-end-6">
                7447557386
              </div>
            </div>
            <button
              type="button"
              class="text-white w-[30%] h-fit bg-[#030084] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full  text-xs px-5 py-1 text-center  flex  justify-self-center justify-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 m-2 "
            >
              <div className=" flex flex-row justify-self-center">
                MARK AS COMPLETED
                <img
                  className="h-5 w-5"
                  src="https://img.icons8.com/ios-filled/50/C3B9B9/needle.png" alt="illustration of a silver needle with a pointed tip"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingOrdersOpen;
