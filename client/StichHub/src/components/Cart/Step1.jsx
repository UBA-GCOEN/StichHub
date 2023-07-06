import React, { useState, useEffect } from "react";
import imr from "../../assets/img/imr.webp";
import el from "../../assets/img/el.webp";
import el2 from "../../assets/img/el2.webp";
import im from "../../assets/img/im.webp";
import axios from "axios";

//main definition
const Step1 = () => {
  const [qty, setqty] = useState(0);
  const handleqty = () => {
    setqty(qty + 1);
  };
  const handleqtydown = () => {
    setqty(qty - 1);
  };

  //Fetching the Cart List
  const [cartList, setCartList] = useState([]);

  const getCartList = async () => {
    try {
      const res = await axios.get("/cart/list");
      setCartList(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCartList();
  }, [2]);


  const initialForm = {
    service:"",
    delivery:"",
  };
  const [form, setForm] = useState(initialForm);


  const handleChangeFinal = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // main declaration here
  return (
    <div class="h-screen pt-20">
     
      <div className="grid grid-cols-2">
        {/* header */}
        <h1 class="mb-5 ml-0 text-left text-2xl font-bold">Orders</h1>
        <h1 class="hidden lg:block mb-5 pl-10 text-right text-2xl font-bold">
          Payment Summary
        </h1>
      </div>
      {
        cartList.map((items, index) => {
          return (
            <div key={index}>
                <label>
                  {
                    items.orders.map((order, indexOrder) => {
                      return (
                      <div key={indexOrder}>
                        {order.orderData.category}
                        {order._id}
                        {order.orderData.clothDetails.backDetails}
                        {order.orderData.clothDetails.collar}
                        {order.orderData.clothDetails.fabric}

                        {order.orderData.clothDetails.sleeve}
                      </div>)
                    })
                  }
                </label>
            </div>
          )
        })
      }

      {/* first block/orders block */}
      <div class="mx-auto max-w-5xl justify-center px-1 lg:px-6 md:flex md:space-x-6 xl:px-0">
        <div class="rounded-lg md:w-3/3">
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img src={imr} className="h-[30%]" alt="a person wearing a black and brown shirt"/>
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">
                  Classic Shirt Pure Cotton Brown{" "}
                </h2>
                <p class="mt-1 text-xs text-gray-700">
                  COLOR: <b>BROWN</b>
                </p>
                <p class="mt-1 text-xs text-gray-700">
                  SIZE: <b>XI</b>
                </p>
              </div>
              <div class=" hidden lg:flex justify-between sm:space-y-6 sm:mt-0  sm:space-x-6 m-[40px]  ">
                <div class="flex  space-x-4">
                  <p class="text-md mt-1 font-bold">₹2590.00</p>
                </div>
              </div>
              <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <button
                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    onClick={handleqtydown}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <input
                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value={qty}
                    min={1}
                  />
                  <button
                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    onClick={handleqty}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <div class="lg:hidden flex items-center space-x-4">
                  <p class="text-sm">₹2590.00</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment summary block */}
        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div>
            <h1 className="lg:hidden text-lg md-5">Payment Summary</h1>
            <div className="pb-4">
              <h6 className="text-xs text-red-900 mb-3">
                Having Discount Code?
              </h6>
              <div className="grid grid-cols-2 gap-1">
                <input
                  type="text"
                  className=" border solid  rounded-md"
                ></input>
                <button className="  text-center ml-3 bg-blue-700 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600">
                  Apply
                </button>
              </div>
            </div>
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Order Summary</p>
              <p class="text-gray-700">₹2590.00</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Additional Service</p>
              <p class="text-gray-700">₹4.99</p>
            </div>
            <div class="mt-2 flex justify-between">
              <p class="text-gray-700">Coupon</p>
              <p class="text-green-500">₹4.99</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total Amount</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">₹2,600.00</p>
                <p class="text-sm text-gray-700">including GST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* image */}
      <img src={im} className="hidden lg:block w-[20%] ml-[600px] absolute" alt="a cellphone with a credit card and gift boxes"/>
      {/* Additional Services block */}
      <div className=" m-5 lg:m-10 font-bold">
        Additional Services
        <div className="grid grid-row-3 gap-0 lg:mr-[50%]">
          {/* first service */}
          <div class="rounded-lg md:h-1/3">
            <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <input name="service" type="radio" />
              <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div class="mt-5 sm:mt-0">
                  <h2 class="text-lg font-bold text-gray-900">
                    CARE + Package{" "}
                  </h2>
                  <p class="mt-1 text-xs text-gray-500">
                    One Month Alteration, Premium Fabric Cloths,Delivery Free
                  </p>
                </div>
                <div class=" lg:flex justify-between sm:space-y-6 sm:mt-0  sm:space-x-6 m-[10px]  ">
                  <div class="flex  space-x-4">
                    <p class="text-md mt-1 font-bold">₹99.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd Service */}
          <div class="rounded-lg md:h-1/3">
            <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <input name="service" type="radio" />
              <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div class="mt-5 sm:mt-0">
                  <h2 class="text-lg font-bold text-gray-900">
                    Environment Friendly
                  </h2>
                  <p class="mt-1 text-xs text-gray-700">
                    Donate old cloths for green growth
                  </p>
                </div>
                <div class="  ">
                  <div class="flex  space-x-4">
                    <p class="text-md mt-1 font-bold">₹9.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery service blocks */}
      <div className="m-5 lg:m-10 font-bold">
        Delivery
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {/* fedex */}
          <div class="rounded-lg md:h-1/3">
            <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <input name="check" type="radio" />
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/fedex-1-282177.png"
                className=" lg:w-[17%] sm:w-[17%]" alt="a company logo with text fedex"
              />
              <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div class="mt-5 sm:mt-0">
                  <h2 class="text-lg font-bold text-gray-900">
                    FedX Delivery{" "}
                  </h2>
                  <p class="mt-1 text-xs text-gray-700">Expected Delivery</p>
                  <p class="mt-1 text-xs text-gray-700">Friday, 29th 2023</p>
                </div>
                <div class=" ">
                  <div class="flex  space-x-4">
                    <p class="text-md mt-1 font-bold">₹79.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delhivery */}
          <div class="rounded-lg md:h-1/3">
            <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <input name="check" type="radio" />
              <img
                src="https://cdn-icons-png.flaticon.com/512/726/726455.png"
                className=" lg:w-[10%] sm:w-[10%]" alt="A red and white shopping cart icon symbolizing online shopping or e-commerce"
              />
              <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div class="mt-5 sm:mt-0">
                  <h2 class="text-lg font-bold text-gray-900">Delhivery</h2>
                  <p class="mt-1 text-xs text-gray-700">Expected Delivery</p>
                  <p class="mt-1 text-xs text-gray-700">Friday, 29th 2023</p>
                </div>
                <div class="  ">
                  <div class="flex  space-x-4">
                    <p class="text-md mt-1 font-bold">₹79.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={el} className="h-[30%] absolute float-right right-0 " alt="a black and purple background"/>
      <img src={el2} className="h-[30%] absolute float-left left-0 " alt="a black and blue gradient" />
    </div>
  );
};

export default Step1;
