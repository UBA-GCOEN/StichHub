import React, { useState } from "react";
//used for phone no. country code selector
import "react-phone-number-input/style.css";
import Phoneinput from "react-phone-number-input";
import ime from "../../assets/img/ime.webp";

//used for Country selector field
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { Country, State, City } from "country-state-city";
import img from "../../assets/img/img.webp";

// main definition
const Step2 = () => {
  // hooks for country field
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [value, setValue] = useState();

  return (
    <div className="grid lg:grid-cols-2  md:grid-cols-1 gap-4 justify-center ">
      <div class="block max-w-lg rounded-lg bg-white p-6 ">
        {/* Contact details form */}
        <form>
          <span className="text-gray-700 font-bold">
            1. CONTACT DETAILS (Please Enter Your Details)
          </span>
          <br />
          <br />
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
            <div xs={5}>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">First Name</span>
                  <br />
                  <input
                    type="text"
                    name="name"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    placeholder="John cooks"
                    required
                  />
                </label>
              </div>
            </div>
            <div xs={6}>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Last Name</span>
                  <br />
                  <input
                    type="text"
                    name="name"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    placeholder="John cooks"
                    required
                  />
                  <br />
                </label>
              </div>
            </div>
            {/* phoneno country selector hooks used here */}
            <div>
              <span className="text-gray-700">Phone No.</span>
              <br />
              <Phoneinput
                className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                placeholder="Enter phone number"
                value={value}
                defaultCountry="IN"
                onChange={setValue}
              />
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                  placeholder="john.cooks@example.com"
                  required
                />
              </label>
            </div>
          </div>
          {/* Delivery details form */}
          <span className="text-gray-700 font-bold mt-5">
            2. DELIVERY DETAILS (Please Enter Your Delivery Details)
          </span>
          <br />
          <br />
          {/*  country selector hooks used here */}
          <div>
            <span>Country/ Region</span>
            <br />
            <CountryDropdown
              class="country"
              value={country}
              onChange={setCountry}
              className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
            />
          </div>

          <div className="mb-2">
            <label>
              <span className="text-gray-700">Street address</span>
              <br />
              <input
                name="address"
                type="address"
                className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                placeholder="House number and street name"
                required
              />{" "}
              <input
                name="address"
                type="address"
                className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                placeholder="Appartment, suite, landmark, etc. (optional)"
                required
              />{" "}
            </label>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div xs={5}>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Town/ City</span>
                  <br />
                  <input
                    name="city"
                    type="city"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    placeholder=""
                    required
                  />{" "}
                </label>
              </div>
            </div>
            <div xs={7}>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">State</span>
                  <br />
                  <input
                    name="state"
                    type="state"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    placeholder=""
                    required
                  />{" "}
                </label>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Pincode</span>
              <br />
              <input
                name="pincode"
                type="pincode"
                className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                placeholder=""
                required
              />{" "}
            </label>
          </div>

          <div className="mb-2">
            <label>
              <span class="text-gray-700">Order Notes (optional)</span>
              <br />
              <textarea
                name="notes"
                class="country"
                className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                rows="7"
                placeholder="notes about your order delivery e.g special notes"
              ></textarea>
            </label>
          </div>
        </form>
      </div>
      {/* order information block */}
      <div xs={6} className="justify-center w-full  lg:w-[300px] rounded-2xl ">
        <div className="shadow-2xl rounded-2xl  ">
          <h4 className="pt-4 pl-8 pb-4 font-bold md:items-center">
            <span>Order Information</span>
          </h4>
          <img loading="lazy"
            src={img}
            className="m-10 mt-0 mb-[5px] object-fill w-[73%] h-[180px] rounded-[10px] border border-solid border-[#cecece]" alt="a cartoon character riding a yellow scooter"
          />

          <div className="m-10 mt-5">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700 font-bold">
                {" "}
                Teal Brown Kurti Full (Cotton Silk)
              </p>
            </div>
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Size:</p>
              <p class="text-gray-700 font-bold">XI</p>
              <p class="text-gray-700">Color:</p>
              <p class="text-gray-700 font-bold">Red</p>
            </div>
            <hr></hr>
            <div class="mb-2 flex justify-between mt-5">
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
                <p class="text-sm text-gray-700 mb-5">including GST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img loading="lazy"
        src={img}
        className="hidden left-[-6%] absolute h-auto top-[100%] lg:block" alt="a cartoon character riding a yellow scooter"
      />
      <img loading="lazy"
        src={ime}
        alt="a person holding a box and a person standing next to a scooter"
        className="hidden lg:block absolute top-[95%] h-[35%] right-[10%]  "
      />
    </div>
  );
};

export default Step2;
