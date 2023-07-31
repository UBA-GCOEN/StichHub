import { useState } from "react";

const FilterSection = ({ handleChange, clearFilter }) => {
  const [toggle, setToggle] = useState(false);
  const [customPrice, setCustomPrice] = useState({ min: "", max: "" });

  const handleCustomPrice = ()=>{
    var priceRadioInput = [...document.querySelectorAll('input[type="radio"][name="price"]')];
    priceRadioInput.forEach((input)=>{
      input.checked = false;
    })
    if(customPrice.min !== "" && customPrice.max !== ""){
      if(parseInt(customPrice.min)>= parseInt(customPrice.max)){
        alert("Enter Valid Min-Max range");
        return;
      }
       handleChange({
        target: {
          name: "price",
          value: `${customPrice.min} - ${customPrice.max}`
        }
       })
    }
   
  }

  return (
    <div>
      {/* Top Display */}
      <div className="flex justify-between mx-5 my-4">
        {/* Clothes Category */}
        <div></div>
        {/* Filters */}
        <div>
          {toggle ? (
            <div className="">
              {/* Button */}
              <div
                className="flex text-red-500 cursor-pointer"
                onClick={() => setToggle(false)}
              >
                <span>Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 m-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              {/* Filter Menu */}
              <div className="filter p-5 text-white w-max sm:w-[40vw] md:w-[30vw] lg:w-[20vw] h-[60vh] overflow-y-auto cardGradient absolute right-6 rounded-l-xl rounded-r-lg mt-2 z-[90]">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-xs px-2 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 absolute right-0 top-1"
                  onClick={() => {
                    clearFilter();
                    setToggle(false);
                  }}
                >
                  Clear Filters
                </button>
                <div>
                  <span className="font-semibold">Category :</span>
                  <div className="my-2">
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="category"
                        value="mensShirt"
                        className="mr-1"
                        id="MensShirt"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="MensShirt">
                        Men's Shirt
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="category"
                        value="mensBlazer"
                        id="MensBlazer"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="mensBlazer">
                        Men's Blazer
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="category"
                        value="womensShirt"
                        id="WomensShirt"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="WomensShirt">
                        Women's Shirt
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="category"
                        value="womensBlazer"
                        id="WomensBlazer"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="WomensBlazer">
                        Women's Blazers
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-semibold">Price Range :</span>
                  <div className="my-2">
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="price"
                        value="max - 1000"
                        id="under1000"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="under1000">
                        under 1000
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="price"
                        value="1000 - 5000"
                        id="1000-5000"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="1000-5000">
                        1000 - 5000
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="price"
                        value="5000 - 15000"
                        id="5000-15000"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="5000-15000">
                        5000 - 15000
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="price"
                        value="min - 15000"
                        id="Abovecheckbox"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="Abovecheckbox">
                        Above 15000
                      </label>
                    </div>
                    <div className="rounded px-2 my-1 flex">
                      <input
                        type="text"
                        name="price"
                        placeholder="₹ Min"
                        value={customPrice.min} 
                        id="custom min"
                        className="inline-block text-sm rounded-md outline outline-[#cde5f6] outline-2 m-1 text-black w-14 text-center p-1"
                        onChange={(e) =>
                          setCustomPrice((prev) => {
                            return { ...prev, min:e.target.value };
                          })
                        }
                      />

                      <input
                        type="text"
                        name="price"
                        placeholder="₹ Max"
                        value={customPrice.max}
                        id="custom min"
                        className="inline-block text-sm rounded-md outline outline-[#cde5f6] outline-2 m-1 text-black w-14 text-center p-1"
                        onChange={(e) =>
                          setCustomPrice((prev) => {
                            return { ...prev, max: e.target.value };
                          })
                        }
                      />
                      <button className="bg-blue-700 text-white p-1 w-10 cursor-pointer text-sm rounded-md m-1 outline-2 hover:bg-blue-500" onClick={handleCustomPrice}>Go</button>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-semibold">Tailor Rating :</span>
                  <div className="my-2">
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="rating"
                        value={5}
                        id="5star"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="5star">
                        5 star
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="rating"
                        value={4}
                        id="4star"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="4star">
                        4 star
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="rating"
                        value={3}
                        id="3star"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="3star">
                        3 star
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="rating"
                        value={2}
                        id="2star"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="2star">
                        2 star
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="rating"
                        value={1}
                        id="1star"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="1star">
                        1 star
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex text-blue-500 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <span>Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 m-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
