import React from "react";
import { useHCustomization } from "../../contexts/Home";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../MainLandingPage/Footer";

const OrderConfirmation = () => {
  const { orderDetails, setOrderDetails } = useHCustomization();
  const navigateTo = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/order/request", orderDetails);
      // console.log(res);
      navigateTo("/Orders");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      {/* <div className="text-center text-black">
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
      </div> */}
      <div className="shadow-xl">
        <div className="max-w-2xl mx-auto pt-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
            <div className="flex sm:items-baseline sm:space-x-4">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Order Stitching Confirmation
              </h1>
            </div>
            <p className="text-sm text-red-600">
              Order Approval From Tailor Pending{" "}
              <time
                datetime="2021-03-22"
                className="font-medium text-gray-900"
              ></time>
            </p>
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:hidden"
            >
              View invoice<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-6">
            <div className="space-y-8">
              <div className="bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg">
                <div className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                  <div className="sm:flex lg:col-span-5">
                    <div className="flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-02.jpg"
                        alt="Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade."
                        className="object-center object-cover"
                      />
                    </div>

                    <div className="mt-6 sm:mt-0 sm:ml-6 text-center lg:text-left">
                      <h3 className="text-2xl font-bold text-gray-900">
                        <a href="#">{orderDetails.category}</a>
                      </h3>
                      <p className="mt-2 text-md font-semibold text-gray-900">
                        ₹35.00
                      </p>
                      <p className="mt-3 font-semibold text-sm text-gray-500">
                        Fabric Type: {orderDetails.clothDetails.fabric}
                      </p>
                      <p className="mt-3  justify-center lg:justify-start font-semibold text-sm text-gray-500 flex gap-3">
                        Color:{" "}
                        <div className="grid grid-flow-col grid-cols-[10%_90%]">
                          <div
                            className="rounded-full h-5 w-5 border border-black"
                            style={{
                              backgroundColor: orderDetails.clothDetails.color,
                            }}
                          ></div>

                          <div className="text-sm ml-4 w-fit justify-self-center font-semibold">
                            {orderDetails.clothDetails.color}
                          </div>
                        </div>
                      </p>
                      <button
                          className=" text-white rounded-md hover:bg-blue-500 mt-4 px-5 py-2 bg-blue-600"
                          onClick={handleSubmit}
                        >
                          Request Tailor
                        </button>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:col-span-7">
                    <dl className="grid grid-col-1 ml-[15%] mr-[15%] lg:mr-0 divide-y-4 lg:divide-y-0 gap-y-4 text-lg lg:gap-y-0 lg:ml-0  lg:grid-cols-3 gap-x-6 lg:text-sm">
                      <div>
                        <dt className="font-semibold text-gray-900">
                          Body Information
                        </dt>
                        <dd className="mt-3 text-black font-medium space-y-1">
                          <span className="block ">
                            Height: {orderDetails.measurements.height}
                          </span>
                          <span className="block">
                            Weight: {orderDetails.measurements.weight}
                          </span>
                          <span className="block">
                            Age: {orderDetails.measurements.age}
                          </span>
                          <span className="block">
                            Shoe Size: {orderDetails.measurements.shoeSize}
                          </span>
                          <span className="block">
                            Gender: {orderDetails.measurements.gender}
                          </span>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold col-span-2 text-gray-900">
                          Order Complete Information
                        </dt>
                        <dd className="mt-3 text-black font-medium space-y-1">
                          <span className="block ">
                            Sleeve: {orderDetails.clothDetails.sleeve}
                          </span>
                          <span className="block">
                            Collar: {orderDetails.clothDetails.collar}
                          </span>
                          <span className="block">
                            Backdetails: {orderDetails.clothDetails.backDetails}
                          </span>
                          <span className="block">
                            Cuffs: {orderDetails.clothDetails.cuffs}
                          </span>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold col-span-2 text-gray-900">
                          Measurement Details
                        </dt>
                        <dd className="mt-3 text-black space-y-1">
                          <p className="font-medium">
                            Neck Size: {orderDetails.measurements.neckSize}
                          </p>
                          <p className="font-medium">
                            Shoulder Size:{" "}
                            {orderDetails.measurements.shoulderSize}
                          </p>
                          <p className="font-medium">
                            Waist Size: {orderDetails.measurements.waistSize}
                          </p>
                          <p className="font-medium">
                            Arm Length: {orderDetails.measurements.armLength}
                          </p>
                          <p className="font-medium">
                            Inseam: {orderDetails.measurements.inseam}
                          </p>
                          <p className="font-medium">
                            Chest Size: {orderDetails.measurements.chestSize}
                          </p>
                        </dd>
                        
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              {/* <!-- More products... --> */}
            </div>
          </div>
        </div>
{/* <Footer /> */}
      </div>
    </div>
  );
};

export default OrderConfirmation;
