import React, { useState } from "react";
//used for phone no. country code selector
import "react-phone-number-input/style.css";
import Phoneinput from "react-phone-number-input";
//used for Country selector field
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { Country, State, City } from "country-state-city";
import img from "../../assets/img/img.png";

// main definition
const Step2 = () => {
  // hooks for country field
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [value, setValue] = useState();

  return (
    <div
      id="body"
      className="grid lg:grid-cols-2  lg:pl-[15%] md:grid-cols-1 gap-4 justify-center "
    >
      <div class="block max-w-lg rounded-lg bg-white p-6 ">
        {/* Contact details form */}
        <form>
          <span className="text-gray-700 font-bold">
            1. CONTACT DETAILS (Please Enter Your Details)
          </span>
          <br />
          <br />
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
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
          <span className="text-gray-700 font-bold">
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
      <div xs={6} className="justify-center w-[250px] rounded-2xl ">
        <div className="shadow-2xl rounded-2xl  ">
          <h4 className="pt-4 pl-8 pb-4 font-bold md:items-center">
            <span>Order Information</span>
          </h4>
          <img
            src={img}
            className="ml-[30px] mr-[20px] mb-[5px] w-[190px] h-[180px] rounded-[10px] border border-solid border-[#cecece]"
          />
          <div className="pl-[30px] pr-[30px] ">
            <span>
              <strong>
                Teal Brown Kurti Full(Cotton Silk)
                <h6 className="text-xs">
                  SIZE: <strong> XI</strong>&nbsp; &nbsp; &nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  COLOR:<strong> RED</strong>{" "}
                </h6>
              </strong>
            </span>
            <hr className="mt-2"></hr>
            <b>
              <div>Price Total</div>
            </b>
            <div class="grid grid-cols-2 gap-4">
              <div xs={2}>Subtotal GST</div>
              <div xs={2}>₹20000/- ₹300/-</div>
            </div>{" "}
            <hr className="mt-2 pl-[30px] pr-[30px]"></hr>
          </div>

          <strong>
            <div class="grid grid-cols-2 gap-4">
              <div xs={2} className="pl-[30px] pr-[30px] ">
                Total
              </div>
              <div xs={2} className="pb-[20px] text-xl">
                ₹20300/-
              </div>
            </div>
          </strong>
        </div>
      </div>{" "}
    </div>
  );
};

export default Step2;
