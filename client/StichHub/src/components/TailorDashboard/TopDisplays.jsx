import React from "react";
import {UserGroupIcon,ArrowRightIcon,ShoppingBagIcon,CurrencyRupeeIcon,ClipboardDocumentListIcon} from '@heroicons/react/24/solid';

const TopDisplays = () => {
    return (
        <div className="flex flex-row">
            
        {/**total customers */}
        <div className="flex items-center m-4 ml-8 rounded-2xl h-max w-max bg-gradient-to-br from-grey to-dark_grey">

         <div className="grid justify-items-start grid-cols-1 gap-3 p-8">
            <div className="text-sm text-white font-medium">
            Total Customers
            </div>
            <div className="text-sm text-white font-medium">
             256
            </div>
            <div className="text-sm text-white font-medium mt-auto mb-0">
             Updated hour ago
            </div>
         </div>

         <div className="grid place-items-center gap-3 p-6">
           <div className="rounded-full  bg-black p-2">
            <UserGroupIcon className="fill-left_nav_blue h-[25px] w-[25px] ">

            </UserGroupIcon>
           </div>
           <ArrowRightIcon className="h-[25px] w-[25px] fill-white mt-3">

           </ArrowRightIcon>
         </div>

        </div>

        {/**product stitched */}
        <div className="flex items-center m-4 rounded-2xl h-max w-max bg-gradient-to-br from-grey to-dark_grey">

         <div className="grid justify-items-start grid-cols-1 gap-3 p-8">
            <div className="text-sm text-white font-medium">
            Product Stiched/Altered
            </div>
            <div className="text-sm text-white font-medium">
             254
            </div>
            <div className="text-sm text-white font-medium mt-auto mb-0">
             Updated hour ago
            </div>
         </div>

         <div className="grid place-items-center gap-3 p-6">
           <div className="rounded-full  bg-black p-2">
            <ShoppingBagIcon className="fill-left_nav_blue h-[25px] w-[25px] ">

            </ShoppingBagIcon>
           </div>
           <ArrowRightIcon className="h-[25px] w-[25px] fill-white mt-3">

           </ArrowRightIcon>
         </div>

        </div>


        {/**total Earnings */}
        <div className="flex items-center m-4 rounded-2xl h-max w-max bg-gradient-to-br from-grey to-dark_grey">

         <div className="grid justify-items-start grid-cols-1 gap-3 p-8">
            <div className="text-sm text-white font-medium">
            Total Earnings
            </div>
            <div className="text-sm text-white font-medium">
            ₹ 12,000
            </div>
            <div className="text-sm text-white font-medium mt-auto mb-0">
             Updated hour ago
            </div>
         </div>

         <div className="grid place-items-center gap-3 p-6">
           <div className="rounded-full  bg-black p-2">
            <CurrencyRupeeIcon className="fill-left_nav_blue h-[25px] w-[25px] ">

            </CurrencyRupeeIcon>
           </div>
           <ArrowRightIcon className="h-[25px] w-[25px] fill-white mt-3">

           </ArrowRightIcon>
         </div>

        </div>


        {/**
         * Total Appointmaits
         */}
         <div className="flex items-center m-4 rounded-2xl h-max w-max bg-gradient-to-br from-grey to-dark_grey">

<div className="grid justify-items-start grid-cols-1 gap-3 p-8">
   <div className="text-sm text-white font-medium">
   Total Appointments
   </div>
   <div className="text-sm text-white font-medium">
    30
   </div>
   <div className="text-sm text-white font-medium mt-auto mb-0">
    Updated hour ago
   </div>
</div>

<div className="grid place-items-center gap-3 p-6">
  <div className="rounded-full  bg-black p-2">
   <ClipboardDocumentListIcon className="fill-left_nav_blue h-[25px] w-[25px] ">

   </ClipboardDocumentListIcon>
  </div>
  <ArrowRightIcon className="h-[25px] w-[25px] fill-white mt-3">

  </ArrowRightIcon>
</div>

</div>


        </div>
    )
}

export default TopDisplays;