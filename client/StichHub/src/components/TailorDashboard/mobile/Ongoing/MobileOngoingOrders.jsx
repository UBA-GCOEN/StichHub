import React, { useEffect, useState } from "react";
import { View } from "../../../../assets/3dConfigurator/configurator-icons";
import { ClockIcon, PhoneIcon } from "@heroicons/react/24/solid";
import axios from "../../../../axios";

const MobileOngoingOrders = () => {
  const [OrderList, setOrderList] = useState([]);

  const [orderStatus, setOrderStatus] = useState("");

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
    <div className="">
      <div className="text-xl text-white text-left">Ongoing Orders</div>
      {OrderList.map((order, index) => {
        return (
          <div key={index}>
            {order.requests.map((request) => {
              return (
                <div>{request.status === "accepted" && (
                <div className="flex flex-row bg-[#252B42] rounded-xl backdrop-filter backdrop-opacity-50 h-max m-3">
                  {/* left 3d model */}
                  <div className="bg-[url('./assets/img/Ongoingtop.png')] h-max  w-[30%]  ml-[-4px] bg-fit bg-no-repeat">
                    <div
                      id="button"
                      className="scale-[0.32] mb-1 mt-[5%] flex bg-white text-black w-max p-2 rounded-full"
                    >
                      <img src={View} className="mr-3 ml-1 w-[15px]" />
                      <span className="text-sm font-semibold cursor-pointer">
                        See in your room
                      </span>
                    </div>
                  </div>

                  {/* center data */}
                  <div className="w-[30%] h-fit  mx-4 my-2">
                    {/* profile */}
                    <div class="flex justify-self-start items-center space-x-4">
                      <img
                        class="w-7 h-7 rounded-full"
                        src="./src/assets/img/jonathan.png"
                        alt=""
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
                    <div className="grid grid-flow-col grid-cols-[40%_60%] my-2">
                      <div className="bg-white w-fit h-fit rounded-full">
                        <img
                          className="grid place-items-center h-8 w-8"
                          src="https://img.icons8.com/sf-regular-filled/48/undefined/clothes.png"
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
                    <div className="grid border-black bg-white border-2 p-1   grid-cols-[45%_55%] w-full rounded-full grid-flow-col">
                      <div className="text-xs w-fit ml-1">Fabric:</div>

                      <div className="grid grid-flow-col grid-cols-[30%_70%]">
                        <div
                          style={{
                            backgroundColor:
                              request.orderData.clothDetails
                                .color,
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
                  <div className="text-slate-300 w-[33%] text-xs text-left ml-5 my-2 h-fit ">
                    <div className="text-right mr-4">1 day ago</div>
                    <div className="flex justify-between  w-1/2 grid-cols-2 text-sm text-left">
                      {/* size  */}
                      <div className="grid  grid-flow-col my-2 mr-3">
                        <div className="w-fit mr-1">SIZE:</div>
                        <div className="w-fit font-medium">XI</div>
                      </div>

                      <div className="grid grid-flow-col my-2">
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
                    <div></div>
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
  );
};

export default MobileOngoingOrders;
