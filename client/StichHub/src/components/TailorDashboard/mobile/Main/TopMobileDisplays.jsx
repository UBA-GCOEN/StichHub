import React from "react";
import {
  UserGroupIcon,
  ArrowRightIcon,
  ShoppingBagIcon,
  CurrencyRupeeIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";

const TopMobileDisplays = () => {
  return (
    <div class="flex overflow-x-scroll w-[90vw] mx-4  sm:w-1/1 lg:overflow-visible lg:justify-center bg-[#10121A] backdrop-filter backdrop-opacity-5 rounded-xl">
      {/* Total Customers */}
      <div className=" relative ml-0 p-0">
        <div className="scale-75 flex left-0  rounded-2xl h-max w-max bg-gradient-to-br from-grey to-dark_grey">
          <div className="grid justify-items-start grid-cols-1  p-5">
            <div className="text-sm text-white font-medium">
              Total Customers
            </div>
            <div className="text-sm text-white font-medium">256</div>
            <div className="text-sm text-white font-medium mt-auto mb-0">
              Updated hour ago
            </div>
          </div>
          <div className="grid place-items-center gap-3 p-6">
            <div className="rounded-full  bg-black p-2">
              <UserGroupIcon className="fill-left_nav_blue h-[25px] w-[25px] "></UserGroupIcon>
            </div>
            <ArrowRightIcon className="h-[25px] w-[25px] fill-white mt-3"></ArrowRightIcon>
          </div>
        </div>
      </div>

      {/* Product Stiched/Altered */}
      <div className="relative w-fit h-fit">
        <div className="scale-75 flex rounded-2xl h-max w-max bg-gradient-to-br from-grey to-dark_grey">
          <div className="grid justify-items-start grid-cols-1  p-6">
            <div className="text-sm text-white font-medium">
              Product Stiched
            </div>
            <div className="text-sm text-white font-medium">254</div>
            <div className="text-sm text-white font-medium mt-auto mb-0">
              Updated hour ago
            </div>
          </div>
          <div className="grid place-items-center gap-3 p-6">
            <div className="rounded-full  bg-black p-2">
              <ShoppingBagIcon className="fill-left_nav_blue h-[25px] w-[25px] "></ShoppingBagIcon>
            </div>
            <ArrowRightIcon className="h-[25px] w-[25px] fill-white mt-3"></ArrowRightIcon>
          </div>
        </div>
      </div>

      {/* total Earnings */}
      <div className="relative">
        <div className="scale-75 flex rounded-2xl h-max w-max bg-gradient-to-br from-grey to-dark_grey">
          <div className="grid justify-items-start grid-cols-1 p-6">
            <div className="text-sm text-white font-medium">Total Earnings</div>
            <div className="text-sm text-white font-medium">₹ 12,000</div>
            <div className="text-sm text-white font-medium mt-auto mb-0">
              Updated hour ago
            </div>
          </div>
          <div className="grid place-items-center gap-3 p-6">
            <div className="rounded-full  bg-black p-2">
              <CurrencyRupeeIcon className="fill-left_nav_blue h-[25px] w-[25px] "></CurrencyRupeeIcon>
            </div>
            <ArrowRightIcon className="h-[25px] w-[25px] fill-white mt-3"></ArrowRightIcon>
          </div>
        </div>
      </div>
      {/* Total Appointmaits */}
      <div className="relative w-fit">
        <div className="scale-75 flex rounded-2xl h-max w-max bg-gradient-to-br from-grey to-dark_grey">
          <div className="grid justify-items-start grid-cols-1 p-6">
            <div className="text-sm text-white font-medium">
              Total Appointments
            </div>
            <div className="text-sm text-white font-medium">30</div>
            <div className="text-sm text-white font-medium mt-auto mb-0">
              Updated hour ago
            </div>
          </div>
          <div className="grid place-items-center gap-3 p-6">
            <div className="rounded-full  bg-black p-2">
              <ClipboardDocumentListIcon className="fill-left_nav_blue h-[25px] w-[25px] "></ClipboardDocumentListIcon>
            </div>
            <ArrowRightIcon className="h-[25px] w-[25px] fill-white mt-3"></ArrowRightIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMobileDisplays;
