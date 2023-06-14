import { useState } from "react";

const FilterSection = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* Top Display */}
      <div className="flex justify-between mx-5 my-4">
        {/* Clothes Category */}
        <div>Results:</div>
        {/* Filters */}
        <div>
          {toggle ? (
            <div className="">
              {/* Button */}
              <div
                className="flex text-red-500 cursor-pointer"
                onClick={() => setToggle(!toggle)}
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
                <div>
                  <span className="font-semibold">Category :</span>
                  <div className="my-2">
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="category"
                        value="MensShirt"
                        className="mr-1"
                        id="MensShirt"
                      />
                      <label
                        className="cursor-pointer"
                        for="MensShirt"
                      >
                        Men's Shirt
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="category"
                        value="MensBlazer"
                        id="MensBlazer"
                        className="mr-1"
                      />
                      <label
                        className="cursor-pointer"
                        for="MensBlazer"
                      >
                        Men's Blazer
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="category"
                        value="WomensShirt"
                        id="WomensShirt"
                        className="mr-1"
                      />
                      <label
                        className="cursor-pointer"
                        for="WomensShirt"
                      >
                        Women's Shirt
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="category"
                        value="WomensBlazer"
                        id="WomensBlazer"
                        className="mr-1"
                      />
                      <label
                        className="cursor-pointer"
                        for="WomensBlazer"
                      >
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
                        type="checkbox"
                        name="price"
                        value="under1000"
                        id="under1000"
                        className="mr-1"
                      />
                      <label
                        className="cursor-pointer"
                        for="under1000"
                      >
                        under 1000
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="checkbox"
                        name="price"
                        value="1000-5000"
                        id="1000-5000"
                        className="mr-1"
                      />
                      <label
                        className="cursor-pointer"
                        for="1000-5000"
                      >
                        1000 - 5000
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="checkbox"
                        name="price"
                        value="5000-15000"
                        id="5000-15000"
                        className="mr-1"
                      />
                      <label
                        className="cursor-pointer"
                        for="5000-15000"
                      >
                        5000 - 15000
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="checkbox"
                        name="price"
                        value="Abovecheckbox"
                        id="Abovecheckbox"
                        className="mr-1"
                      />
                      <label
                        className="cursor-pointer"
                        for="Abovecheckbox"
                      >
                        Above 15000
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-semibold">Tailor Rating :</span>
                  <div className="my-2">
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="checkbox"
                        name="rating"
                        value="5star"
                        id="5star"
                        className="mr-1"
                      />
                      <label
                        className="cursor-pointer"
                        for="5star"
                      >
                        5 star
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="checkbox"
                        name="rating"
                        value="4star"
                        id="4star"
                        className="mr-1"
                      />
                      <label
                        className="cursor-pointer"
                        for="4star"
                      >
                        4 star
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="checkbox"
                        name="rating"
                        value="3star"
                        id="3star"
                        className="mr-1"
                      />
                      <label
                        className="cursor-pointer"
                        for="3star"
                      >
                        3 star
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="checkbox"
                        name="rating"
                        value="2star"
                        id="2star"
                        className="mr-1"
                      />
                      <label
                        className="cursor-pointer"
                        for="2star"
                      >
                        2 star
                      </label>
                    </div>
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="checkbox"
                        name="rating"
                        value="1star"
                        id="1star"
                        className="mr-1"
                      />
                      <label
                        className="cursor-pointer"
                        for="1star"
                      >
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
