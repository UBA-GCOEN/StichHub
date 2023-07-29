import React, { useEffect, useState } from "react";
import axios from "../../../../axios";

const NewOrder = () => {
  const [OrderList, setOrderList] = useState([]);

  const [orderStatus, setOrderStatus] = useState("");

  const getOrder = async () => {
    // setIsLoading(true);

    try {
      const res = await axios.get("/order/request/tailor");

      setOrderList(res.data);
      // setIsLoading(false);
    } catch (err) {
      console.error(err);
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrder();
  }, [1]);

  useEffect(() => {
    getOrder();
  }, [orderStatus]);

  const handleStatusChange = async (e, orderId, requestId, newStatus) => {
    try {
      const res = await axios.put(
        `/order/${orderId}/request/${requestId}/status`,
        { status: newStatus }
      );

      setOrderStatus("hidden");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="text-xl text-white text-left ml-4 mt-3">New Orders</div>

      {/* order */}
      {OrderList.map((order, index) => {
        return (
          <div key={index} className="flex flex-row overflow-x-scroll w-[100vw]">
            {order.requests.map((request, index) => {
              return (
                <div key={index} className="relative flex flex-col justify-between bg-[#252B4280] rounded-xl shadow-lg m-3 p-4 w-[250px]">
                  {/* top */}
                  <div className="flex flex-row place-items-center justify-between">
                    <img loading="lazy"
                      className="w-12 h-12 rounded-full mx-5 w-max"

                      src="../src/assets/img/jonathan.webp"
                      alt="Profile Picture of jonathan"
                    />
                    <div className="m-2 mx-5 text-white">
                      <h2 className="text-sm font-base text-center w-max">
                        {/* {request.customerId} */}
                        John Doe
                      </h2>
                      <h2 className="text-sm text-slate-300 font-base text-center">
                        Nagpur
                      </h2>
                    </div>
                  </div>

                  {/* fabric */}
                  <center>
                    <div className="grid border-slate-200 justify-self-center border-2 p-1 grid-cols-[50%_50%] w-[75%] rounded-full grid-flow-col m-2">
                      <div className="text-xs w-fit text-slate-200 ml-3">Fabric:</div>

                      <div className="grid grid-flow-col grid-cols-[30%_70%]">
                        <div
                          style={{
                            backgroundColor:
                              request.orderData.clothDetails.color,
                          }}
                          className="rounded-full h-4 w-4 border-2 border-white"
                        ></div>

                        <div className="text-xs text-slate-200 w-fit justify-self-center font-semibold ">
                          {request.orderData.clothDetails.fabric}
                        </div>
                      </div>
                    </div>
                  </center>

                  <p className="text-gray-400 text-center text-xs m-2">
                    {request.orderData.clothDetails.sleeve}{" "}
                    {request.orderData.clothDetails.cuffs}{" "}
                    {request.orderData.clothDetails.backDetails}{" "}
                    {request.orderData.category}
                  </p>

                  {/* buton */}

                  <div className="flex top-0 justify-center">
                    <button
                      type="button"
                      className="w-fit h-fit  focus:ring-4 focus:outline-none dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-5 py-1.5 border-2 bg-slate-100 text-center text-red-900 mr-2 mb-2"
                      onClick={(e) =>
                        handleStatusChange(
                          e,
                          order._id,
                          request._id,
                          "rejected"
                        )
                      }
                    >
                      REJECT
                    </button>

                    <button
                      type="button"
                      className="text-white w-fit h-fit bg-[#030084] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full  text-xs px-6  text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mt-0"
                      onClick={(e) =>
                        handleStatusChange(
                          e,
                          order._id,
                          request._id,
                          "accepted"
                        )
                      }
                    >
                      ACCEPT
                      <img loading="lazy"
                        className="h-4 w-4 my-1.5 mx-1"
                        src="https://img.icons8.com/ios-filled/50/C3B9B9/needle.png" alt="illustration of a silver needle with a pointed tip"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      {/* /order */}
    </div>
  );
};

export default NewOrder;
