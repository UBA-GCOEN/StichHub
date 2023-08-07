import React, { useState } from "react";
import "react-phone-number-input/style.css";
import Phoneinput from "react-phone-number-input";
import ime from "../../assets/img/ime.webp";
import validate from "../../common/validation";
import {CountryDropdown} from "react-country-region-selector";
import img from "../../assets/img/img.webp";

// main definition
const Step2 = ({form, error, handleChangeFinal, setForm, setError}) => {
  

  return (
    <div className="grid lg:grid-cols-2  md:grid-cols-1 gap-4 justify-center ">
      <div className="block max-w-lg rounded-lg bg-white p-6 ">
        {/* Contact details form */}
        <form>
          <span className="text-gray-700 font-bold">
            1. CONTACT DETAILS (Please Enter Your Details)
          </span>
          <br />
          <br />
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
            <div xs={5}>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">First Name</span>
                  <br />
                  <input
                    type="text"
                    name="firstname"
                    value={form.firstname}
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    placeholder="John cooks"
                    onChange={handleChangeFinal}
                    required
                  />
                  {error.firstname && error.firstnameError && (
                    <p className="text-red-500">{error.firstnameError}</p>
                  )}
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
                    name="lastname"
                    value={form.lastname}
                    onChange={handleChangeFinal}
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    placeholder="John cooks"
                    required
                  />
                  {error.lastname && error.lastnameError && (
                    <p className="text-red-500">{error.lastnameError}</p>
                  )}
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
                value={form.contact}
                defaultCountry="IN"
                onChange={(value) => {
                  setForm((prev) => {
                    return { ...prev, contact: value };
                  });
                  setError((prev) => {
                    return { ...prev, contact: false };
                  });

                  if(!value)   setError((prev) => {return { ...prev, contact: true }; });
                }}
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
                  onChange={handleChangeFinal}
                  value={form.email}
                  required
                />
                {error.email && error.emailError && (
                  <p className="text-red-500">{error.emailError}</p>
                )}
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
              value={form.country}
              onChange={(value) =>{
                setForm((prev) => {
                  return { ...prev, country: value };
                })
                setError((prev)=>{return {...prev, country: false}})
              }}
              className="country border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
            />
          </div>

          <div className="mb-2">
            <label>
              <span className="text-gray-700">Street address</span>
              <br />
              <input
                name="address"
                value={form.address}
                onChange={handleChangeFinal}
                type="address"
                className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece] noempty"
                placeholder="House number and street name"
                required
              />{" "}
              {error.address && error.addressError && (
                <p className="text-red-500">{error.addressError}</p>
              )}
              <input
                name="address2"
                onChange={handleChangeFinal}
                value={form.address2}
                type="address"
                className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece] noempty"
                placeholder="Appartment, suite, landmark, etc. (optional)"
                required
              />{" "}
              {error.address2 && error.address2Error && (
                <p className="text-red-500">{error.address2Error}</p>
              )}
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div xs={5}>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Town/ City</span>
                  <br />
                  <input
                    name="city"
                    type="city"
                    value={form.city}
                    onChange={handleChangeFinal}
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece] noempty"
                    placeholder=""
                    required
                  />{" "}
                  {error.city && error.cityError && (
                    <p className="text-red-500">{error.cityError}</p>
                  )}
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
                    value={form.state}
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece] noempty"
                    placeholder=""
                    onChange={handleChangeFinal}
                    required
                  />{" "}
                  {error.state && error.stateError && (
                    <p className="text-red-500">{error.stateError}</p>
                  )}
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
                value={form.pincode}
                className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                placeholder=""
                onChange={handleChangeFinal}
                required
              />{" "}
              {error.pincode && error.pincodeError && (
                <p className="text-red-500">{error.pincodeError}</p>
              )}
            </label>
          </div>

          <div className="mb-2">
            <label>
              <span className="text-gray-700">Order Notes (optional)</span>
              <br />
              <textarea
                name="notes"
                className="country border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
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
          <img
            loading="lazy"
            src={img}
            className="m-10 mt-0 mb-[5px] object-fill w-[73%] h-[180px] rounded-[10px] border border-solid border-[#cecece]"
            alt="a cartoon character riding a yellow scooter"
          />

          <div className="m-10 mt-5">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700 font-bold">
                {" "}
                Teal Brown Kurti Full (Cotton Silk)
              </p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Size:</p>
              <p className="text-gray-700 font-bold">XI</p>
              <p className="text-gray-700">Color:</p>
              <p className="text-gray-700 font-bold">Red</p>
            </div>
            <hr></hr>
            <div className="mb-2 flex justify-between mt-5">
              <p className="text-gray-700">Order Summary</p>
              <p className="text-gray-700">₹2590.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Additional Service</p>
              <p className="text-gray-700">₹4.99</p>
            </div>
            <div className="mt-2 flex justify-between">
              <p className="text-gray-700">Coupon</p>
              <p className="text-green-500">₹4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total Amount</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">₹2,600.00</p>
                <p className="text-sm text-gray-700 mb-5">including GST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src={img}
        className="hidden left-[-6%] absolute h-auto top-[100%] lg:block"
        alt="a cartoon character riding a yellow scooter"
      />
      <img
        loading="lazy"
        src={ime}
        alt="a person holding a box and a person standing next to a scooter"
        className="hidden lg:block absolute top-[109%] h-[35%] right-[25%]  "
      />
    </div>
  );
};

export default Step2;
