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

   console.log(OrderList[0])
  return (
    <div className="flex flex-col">
      <div className="text-xl text-white text-left ml-4 mt-3">New Orders</div>
    
        {/* order */}
        {OrderList.map((order) => {
          return (
            <div className="flex flex-row overflow-x-scroll w-[100vw]">
              {order.requests.map((request) => {
                
                return ( 
                  <div class="relative bg-white rounded-lg shadow-lg m-3 p-4 w-[250px]">
                    {/* top */}
                    <div className="flex flex-row place-items-center justify-between">
                      <img
                        class="w-12 h-12 rounded-full mx-2 w-max"
                        src="../src/assets/img/jonathan.png"
                        alt="Profile Picture"
                      />
                      <div className="m-2">
                        <h2 class="text-sm font-bold text-center w-max">
                        {request.customerId}
                        </h2>
                        <h2 className="text-sm font-semibold text-center">
                          Nagpur
                        </h2>
                      </div>
                    </div>

                    {/* fabric */}
                    <center>
                      <div className="grid border-black justify-self-center border-2 p-1 grid-cols-[50%_50%] w-[75%] rounded-full grid-flow-col m-2">
                        <div className="text-xs w-fit ml-3">Fabric:</div>

                        <div className="grid grid-flow-col grid-cols-[30%_70%]">
                          <div
                            style={{
                                backgroundColor:
                                  request.orderData.clothDetails
                                    .color,
                              }}
                            className="rounded-full h-4 w-4 border-2 border-black"
                          ></div>

                          <div className="text-xs w-fit justify-self-center font-semibold ">
                            {request.orderData.clothDetails.fabric}
                            
                          </div>
                        </div>
                      </div>
                    </center>

                    <p class="text-gray-600 text-center text-xs m-2">
                    {request.orderData.clothDetails.sleeve}{" "}
                                        {request.orderData.clothDetails.cuffs}{" "}
                                        {
                                          request.orderData.clothDetails
                                            .backDetails
                                        }{" "}
                                        {request.orderData.category}
                    </p>

                    {/* buton */}

                    <div className="flex top-0 justify-center">
                      <button
                        type="button"
                        class="text-white w-fit h-fit bg-[#030084] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full  text-xs px-10  text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mt-0"
                      >
                        STITCH
                        <img
                          className="h-5 w-5"
                          src="https://img.icons8.com/ios-filled/50/C3B9B9/needle.png"
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
