import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../../axios.js";
import { Player } from "@lottiefiles/react-lottie-player";
import Navbar from "./Navbar.jsx";
import {
  FaGifts,
  FaReceipt,
  FaShoppingBag,
  FaThermometer,
  FaTorah,
  FaTshirt,
} from "react-icons/fa";
const CustomerOrder = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigateTo = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const getOrder = async () => {
    try {
      const res = await axios.get(`order/request/customer`);
      setOrders(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = async (e, order, tailorId, orderId) => {
    setIsLoading(true);
    try {
      console.log(order);
      await axios.post(`/cart/${orderId}/${tailorId}`, order);
      setIsLoading(false);
      navigateTo("/Cart");
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrder();
  }, [1]);

  return (
    <div className="mx-5 my-5 flex flex-wrap gap-3 sm:gap-7 ">
      {isLoading ? (
        <div className="relative ">
          <div className="absolute z-[100] left-[-10vw] lg:left-[30vw] top-[10vh]">
            <Player
              src="https://assets2.lottiefiles.com/packages/lf20_a0liqnwx.json"
              background="transparent"
              speed="1"
              style={{ height: "500px", width: "500px" }}
              loop
              autoplay
            />
          </div>
        </div>
      ) : null}
      <div className="w-full">
        <Navbar />
      </div>
      <div className="text-center font-semibold text-3xl  flex justify-center p-2 w-full ">
        <FaGifts className="m-1" />
        Your Recent Orders
      </div>

      <div className=" flex flex-wrap  p-2  gap-5 items-center ">
        {orders.map((items, index) => {
          return (
            <div
              key={index}
              className="p-2 m-4 border-b-[4px] border-b-[cyan] border-[1px] border-[#c7c5c5] rounded-lg drop-shadow-md cardGradient w-[40vw]  text-white min-h-[18rem] min-w-[20rem] ml-0"
            >
              <span className="p-1 m-1 flex items-center">
                <FaThermometer className="mr-2 m-1 border-2 border-white rounded-md h-[1.8rem] w-[1.8rem] p-1" />
                <span className="text-lg font-medium ml-1 mr-1">
                  {" "}
                  TailorID :
                </span>{" "}
                {items.tailorId}
              </span>
              {items.requests.map((order, index2) => {
                {
                  const colorDiv = order.orderData.clothDetails.color;

                  if (order.customerId === user.result._id) {
                    return (
                      <div
                        key={index2}
                        className="flex flex-col p-1 m-1 text-left"
                      >
                        <div>
                          <span className="text-lg font-medium flex items-center m-1 ml-0">
                            <FaTorah className="mr-2 m-1 border-2 border-white rounded-md h-[1.8rem] w-[1.8rem] p-1" />
                            Category : {order.orderData.category}
                          </span>
                        </div>
                        <div>
                          <span className="text-lg font-medium flex">
                            <FaTshirt className="mr-2 m-1 border-2 border-white rounded-md h-[1.8rem] w-[1.8rem] p-1" />
                            Cloth Details :{" "}
                            <ul className="text-left ml-2">
                              <li className="flex items-center ml-1">
                                <span>Color:</span>
                                <div
                                  className={`bg-[${colorDiv}] ml-1 w-6 h-5 border-2 border-white`}
                                ></div>
                              </li>
                              <li>
                                <span>Fabric:</span>
                                {order.orderData.clothDetails.fabric}
                              </li>
                            </ul>
                          </span>
                        </div>

                        <span className="p-1 m-1 ml-0 flex items-center">
                          <FaReceipt className="mr-2 ml-0 m-1 border-2 border-white rounded-md h-[1.8rem] w-[1.8rem] p-1" />
                          <span className="text-lg font-medium">Status : </span>
                          {order.status}
                        </span>
                        {order.status === "accepted" && !order.order && (
                          <div className="justify-center items-center flex">
                            <button
                              className="bg-blue-500 rounded-lg py-2 px-3 w-fit text-white flex items-center"
                              onClick={(e) =>
                                handleSubmit(
                                  e,
                                  order,
                                  items.tailorId,
                                  order._id
                                )
                              }
                            >
                              <FaShoppingBag className="mr-2 ml-0 m-1 border-2 border-white rounded-md h-[1.8rem] w-[1.8rem] p-1" />
                              Add to Cart
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  }
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerOrder;
