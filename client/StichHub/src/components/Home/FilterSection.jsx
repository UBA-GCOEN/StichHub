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
        <div className="cursor-pointer">
          {toggle ? (
            <div className="">
              {/* Button */}
              <div
                className="flex text-red-500"
                onClick={() => setToggle(!toggle)}
              >
                <span>close</span>
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
              <div className="filter p-5 text-white w-[70vw] h-[60vh] overflow-y-scroll cardGradient absolute right-6 rounded-l-xl rounded-r-lg mt-2 z-[90]">
                <div>
                  <span className="font-semibold">Category :</span>
                  <div className="my-2 mx-3">
                    <input
                      type="radio"
                      name="category"
                      value="MensShirt"
                      className="mr-1"
                    />
                    <label for="MensShirt">Men's Shirt</label>
                    <br />
                    <input
                      type="radio"
                      name="category"
                      value="MensBlazer"
                      className="mr-1"
                    />
                    <label for="MensBlazer">Men's Blazer</label>
                    <br />
                    <input
                      type="radio"
                      name="category"
                      value="WomensShirt"
                      className="mr-1"
                    />
                    <label for="WomensShirt">Women's Shirt</label>
                    <br />
                    <input
                      type="radio"
                      name="category"
                      value="WomensBlazer"
                      className="mr-1"
                    />
                    <label for="WomensBlazer">Women's Blazers</label>
                  </div>
                </div>
                <div>
                  <span className="font-semibold">Price Range :</span>
                  <div className="my-2 mx-3">
                    <input
                      type="checkbox"
                      name="price"
                      value="under1000"
                      className="mr-1"
                    />
                    <label>under 1000</label>
                    <br />
                    <input
                      type="checkbox"
                      name="price"
                      value="1000-5000"
                      className="mr-1"
                    />
                    <label>1000 - 5000</label>
                    <br />
                    <input
                      type="checkbox"
                      name="price"
                      value="5000-15000"
                      className="mr-1"
                    />
                    <label>5000 - 15000</label>
                    <br />
                    <input
                      type="checkbox"
                      name="price"
                      value="Abovecheckbox"
                      className="mr-1"
                    />
                    <label>Above 15000</label>
                  </div>
                </div>
                <div>
                  <span className="font-semibold">Tailor Rating :</span>
                  <div className="my-2 mx-3">
                    <input
                      type="checkbox"
                      name="rating"
                      value="5star"
                      className="mr-1"
                    />
                    <label>5 star</label>
                    <br />
                    <input
                      type="checkbox"
                      name="rating"
                      value="4star"
                      className="mr-1"
                    />
                    <label>4 star</label>
                    <br />
                    <input
                      type="checkbox"
                      name="rating"
                      value="3star"
                      className="mr-1"
                    />
                    <label>3 star</label>
                    <br />
                    <input
                      type="checkbox"
                      name="rating"
                      value="2star"
                      className="mr-1"
                    />
                    <label>2 star</label>
                    <br />
                    <input
                      type="checkbox"
                      name="rating"
                      value="1star"
                      className="mr-1"
                    />
                    <label>1 star</label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex text-blue-500"
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
