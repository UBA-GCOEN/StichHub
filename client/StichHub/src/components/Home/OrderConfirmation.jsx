import React from "react";
import { useHCustomization } from "../../contexts/Home";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const { orderDetails, setOrderDetails } = useHCustomization();
  const navigateTo = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/order/request", orderDetails);
      // console.log(res);
      navigateTo('/home');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="text-center text-black">
      OrderConfirmation :<span>{orderDetails.category}</span>
      <br />
      {orderDetails.clothDetails.sleeve} <br />
      {orderDetails.clothDetails.collar} <br />
      {orderDetails.clothDetails.backDetails} <br />
      {orderDetails.clothDetails.cuffs} <br />
      {orderDetails.clothDetails.color} <br />
      {orderDetails.clothDetails.fabric} <br />
      {orderDetails.measurements.height} <br />
      {orderDetails.measurements.weight} <br />
      {orderDetails.measurements.shoeSize} <br />
      {orderDetails.measurements.age} <br />
      {orderDetails.measurements.gender} <br />
      {orderDetails.measurements.neckSize} <br />
      {orderDetails.measurements.chestSize} <br />
      {orderDetails.measurements.shoulderSize} <br />
      {orderDetails.measurements.waistSize} <br />
      {orderDetails.measurements.armLength} <br />
      {orderDetails.measurements.inseam} <br />
      <button
        className="py-2 px-3 rounded-xl bg-blue-500 text-white"
        onClick={handleSubmit}
      >
        Request Tailor
      </button>
    </div>
  );
};

export default OrderConfirmation;
