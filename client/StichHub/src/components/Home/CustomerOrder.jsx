import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../../axios.js";
import { Player } from "@lottiefiles/react-lottie-player";

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

  const handleSubmit = async(e, order, tailorId, orderId) => {
    setIsLoading(true);
    try {
      console.log(order);
      await axios.post(`/cart/${orderId}/${tailorId}`, order)
      setIsLoading(false);
      navigateTo('/Cart');
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getOrder();
  }, [1]);

  return (
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
      Your Recent Order:
      {orders.map((items, index) => {
        return (
          <div key={index}>
            <span>tailorId : {items.tailorId}</span>
            {items.requests.map((order, index2) => {
              if (order.customerId === user.result._id) {
                return (
                  <div key={index2} className="flex flex-col">
                    <div>{order.orderData.category}</div>
                    <span>{order.status}</span>
                    {order.status === "accepted" && !order.order && (
                      <div>
                          <button 
                          className="bg-blue-500 rounded-lg py-2 px-3 w-fit text-white"
                          onClick={(e) => handleSubmit(e, order, items.tailorId, order._id)}>
                            Add to Cart
                          </button>
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CustomerOrder;
