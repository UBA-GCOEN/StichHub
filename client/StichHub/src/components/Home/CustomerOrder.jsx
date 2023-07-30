import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../axios.js";
import Navbar from "./Navbar.jsx";


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
    } catch (error) {
      console.log(error.message)
      if(error.response.data.type==="JWT Error"){
        alert(error.response.data.message);
        navigateTo("/auth/customer")
      }
    }
  };

  const handleSubmit = async (e, order, tailorId, orderId) => {
    setIsLoading(true);
    try {
      await axios.post(`/cart/${orderId}/${tailorId}`, order);
      setIsLoading(false);
      navigateTo("/Cart");
    } catch (error) {
      if(error.response.data.type==="JWT Error"){
        alert(error.response.data.message);
        navigateTo("/auth/customer")
      }
      console.error(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrder();
  }, [1]);

  const [state, setState] = useState();

  return (

    <div>
      <Navbar />

      <div className="mx-5 my-5 flex flex-wrap gap-3 sm:gap-7">
        {isLoading ? (
          <div className="relative">
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
      </div>
      <div className="max-w-2xl mx-auto pt-16 sm:py-24 sm:px-6 lg:max-w-2xl lg:px-8">
        <div className="px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
          <div className=" sm:items-baseline sm:space-x-4">
            <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-xl pb-2 md:pl-4">
              Your Recent Order Acceptance Status
            </h1>
            <p className="text-gray-400">
              if your order acceptance status is not changing, then please try
              to{" "}
              <button className="text-red-500 hover:text-red-800 hover:underline ">
                refresh
              </button>{" "}
              this page to get status updated!
            </p>
          </div>
        </div>
        {orders.map((items, index) => {
          return (
            <div className="mt-6" key={index}>
              {items.requests.map((order, index2) => {
                if (order.customerId === user.result._id) {
                  return (
                    <div className="space-y-8" key={index2}>
                      <div className="bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg">
                        <div className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                          <div className="sm:flex lg:col-span-12">
                            <div className="flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40">
                              <img loading="lazy"
                                src="https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-02.jpg"
                                alt="Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade."
                                className="object-center object-cover"
                              />
                            </div>

                            <div className="mt-6 sm:mt-0 sm:ml-6 text-center lg:text-left">
                              <h3 className="text-2xl font-bold text-gray-900">
                                {order.orderData.category}{" "}
                              </h3>
                              <p className="mt-3 font-semibold text-sm text-gray-500 ">
                                Tailor Name: {items.tailorId}
                              </p>
                              <p className="mt-2 text-md font-semibold text-gray-900">
                                ₹35.00
                              </p>
                              <p className="mt-2 font-semibold justify-center lg:justify-start text-sm text-gray-500 flex">
                                Order Status:{" "}
                                <p className="text-green-500 ml-4">
                                  {order.status}
                                </p>
                              </p>

                              {order.status === "accepted" && !order.order && (
                                <div>
                                  <button
                                    className="bg-blue-500 rounded-lg py-2 px-3 w-fit text-white"
                                    onClick={(e) =>
                                      handleSubmit(
                                        e,
                                        order,
                                        items.tailorId,
                                        order._id
                                      )
                                    }
                                  >
                                    Add to Cart
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- More products... --> */}
                    </div>
                  );
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
