import React, { useEffect, useState } from "react";
import { View } from "../../../../assets/3dConfigurator/configurator-icons";
import { ClockIcon, PhoneIcon } from "@heroicons/react/24/solid";
import axios from "../../../../axios";

import url from "../../../../assets/img/Ongoingtop.png";

const MobileOngoingOrders = () => {
  const [OrderList, setOrderList] = useState([]);

  const [orderStatus, setOrderStatus] = useState("");

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index);
  };

  const getOrder = async () => {
    // setIsLoading(true);

    try {
      const res = await axios.get("/order/request/tailor");

      setOrderList(res.data);
      // setIsLoading(false);
    } catch (err) {
      console.log(err);
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrder();
  }, [1]);

  useEffect(() => {
    getOrder();
  }, [orderStatus]);

  return (
    
    openIndex == null ?
      <div className="w-[100vw]">
        <div className="text-xl text-white text-left ml-3 w-fit">
          Ongoing Orders
        </div>
        {OrderList.map((order, index) => {
          return (
            <div key={index} className="w-[100w]">
              {order.requests.map((request, requestIndex) => {
                //  const isOpen = openIndex === requestIndex;
                const isOpen = true;
                return (
                  <div key={requestIndex} className="w-[100w] p-0">
                    {request.status === "accepted" && (
                      <div className="flex flex-row bg-[#252B42] rounded-xl backdrop-filter backdrop-opacity-50 h-[160px] w-[95vw] m-3">
                        {/* left 3d model */}
                        <div className="relative  h-full bg-auto w-[33%] mt-[-2px] ml-[-2px]  bg-no-repeat">
                          <img loading="lazy"
                            src={url}
                            className="bg-center rounded-l-2xl bg-cover  h-[112%]" alt="a person wearing a black suit"
                          ></img>
                          <div
                            id="button"
                            className="flex absolute top-[60%] left-[-15%] z-50 scale-[0.55]   bg-white text-black w-max p-2 rounded-full"
                          >
                            <img src={View} className="mr-3 ml-1 w-[15px]" alt="icon of 3d cube" loading="lazy"/>
                            <span className="text-sm font-semibold cursor-pointer">
                              See in your room
                            </span>
                          </div>
                        </div>

                        {/* center data */}
                        <div className="flex flex-col justify-between  w-[30%] h-full  mx-4 ">
                          {/* profile */}
                          <div class="flex justify-self-start items-center space-x-4 mt-1">
                            <img loading="lazy"
                              class="w-7 h-7 rounded-full"
                              src="./src/assets/img/jonathan.png"
                              alt="profile photo of jonathan"
                            />
                            <div class="font-medium dark:text-black ">
                              <div className="text-left text-white text-xs w-max">
                                {" "}
                                Kiara Advani
                              </div>
                              <div class="text-left text-xs text-gray-500 dark:text-gray-400">
                                Nagpur
                              </div>
                            </div>
                          </div>

                          {/* order details */}
                          <div className="grid grid-flow-col grid-cols-[40%_60%] ">
                            <div className="bg-white w-fit h-fit rounded-full">
                              <img loading="lazy"
                                className="grid place-items-center h-8 w-8"
                                src="https://img.icons8.com/sf-regular-filled/48/undefined/clothes.png" alt="icon of white shirt"
                              />{" "}
                            </div>
                            <div className="grid text-slate-300 w-full text-xs text-left place-items-center justify-items-start">
                              {request.orderData.clothDetails.sleeve}{" "}
                              {request.orderData.clothDetails.cuffs}{" "}
                              {request.orderData.clothDetails.backDetails}{" "}
                              {request.orderData.category}
                            </div>
                          </div>
                          {/* /order details */}

                          {/* fabric */}
                          <div className="grid border-black bg-white border-2 p-1 mb-2   grid-cols-[45%_55%] w-full rounded-full grid-flow-col">
                            <div className="text-xs w-fit ml-1">Fabric:</div>

                            <div className="grid grid-flow-col grid-cols-[30%_70%]">
                              <div
                                style={{
                                  backgroundColor:
                                    request.orderData.clothDetails.color,
                                }}
                                className="rounded-full h-4 border-2 w-4"
                              ></div>

                              <div className="text-xs w-fit justify-self-center font-semibold">
                                {request.orderData.clothDetails.fabric}
                              </div>
                            </div>
                          </div>
                          {/* /fabric */}
                        </div>
                        {/* /center data */}

                        {/* additional data right */}
                        <div className="flex flex-col justify-between text-slate-300 w-[33%] text-xs text-left mt-1  h-full ">
                          <div className="text-right mr-4">1 day ago</div>
                          <div className="flex justify-between  w-1/2 grid-cols-2 text-sm text-left">
                            {/* size  */}
                            <div className="grid  grid-flow-col  mr-3">
                              <div className="w-fit mr-1">SIZE:</div>
                              <div className="w-fit font-medium">XI</div>
                            </div>

                            <div className="grid grid-flow-col">
                              <div className="w-fit mr-1">QTY:</div>
                              <div className="w-fit font-medium">1</div>
                            </div>
                          </div>

                          <div className="grid grid-flow-row w-fit ">
                            <div className="text-sm">Additional Notes:</div>
                            <div className="text-sm font-medium">
                              blablablablablaba
                            </div>
                          </div>
                          <button
                            type="button"
                            class="text-white w-fit h-fit bg-[#030084] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full  text-xs px-6 py-1.5 text-center inline-flex items-center justify-self-start dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mb-3 "
                            // onClick={(e) =>
                            //   handleStatusChange(
                            //     e,
                            //     order._id,
                            //     request._id,
                            //     "accepted"
                            //   )
                            // }
                            // onClick={(e) =>handleClick(requestIndex)}
                            // onClick={handleClick(index)}
                          >
                            Stitch
                            <img loading="lazy"
                              className="h-4 w-4 ml-2"
                              src="https://img.icons8.com/ios-filled/50/C3B9B9/needle.png" alt="illustration of a silver needle with a pointed tip"
                            />
                          </button>
                        </div>
                        {/* /additional data right */}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      :
      <MobileOngoingOrders/>
  );
};

export default MobileOngoingOrders;
