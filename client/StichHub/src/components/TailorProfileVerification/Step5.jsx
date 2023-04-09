import React from "react";

const Step5 = () => {
  const [speciality, setSpecial] = useState(null);

  const handleChange1 = (value) => {
    setSpecial(value);
  };

  const options = [
    { value: "men", label: "1. Men's Tailor" },
    { value: "women", label: "2. Women's Tailor" },
    { value: "coat", label: "3. Coat Tailor" },
    { value: "custom", label: "4. Custom Tailor" },
  ];
  const [isClearable, setIsClearable] = useState(true);
  const [value1, setValue1] = useState(null);
  const [isMultiple, setIsMultiple] = useState(true);
  const dispatch = useCallback(
    (type = null, action, valueData = null) => {
      switch (type) {
        case "isClearable":
          if (action === "set") setIsClearable(valueData);
          if (action === "get") return isClearable;
          break;

        case "isMultiple":
          if (action === "set") {
            if (value1 !== null) {
              setValue1(null);
            }
            setIsMultiple(valueData);
          }
          if (action === "get") return isMultiple;
          break;

        default:
          break;
      }
    },
    [isMultiple, value1]
  );

  const handleCheck = useCallback(
    (value, item) => {
      dispatch(item, "set", value);
    },
    [dispatch]
  );
  return (
    <div className="mt-[20%] lg:mt-[5%] bg-[#130F26]">
      <div className="flex ml-[15%] ">
        <label class="my-6 mr-2 flex h-[2.638rem] w-[2.638rem] items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
          4
        </label>
        <h1 className="flex text-white text-2xl font-bold ml-2 mt-6 mb-5">
          Mention Specialities
        </h1>
      </div>
      <div className="mt-[-5%] bottom-14 lg:gright-20 absolute opacity-20  lg:opacity-100">
        <img src={Speciality} />
      </div>

      <div className="ml-[15%] w-[70%] lg:w-[50%] h-auto bg-white bg-opacity-10 rounded-xl p-[2%] grid grid-cols-1 gap-3 pl-[5%] pr-30 ">
        <div className="flex">
          <label className="text-2xl font-bold mb-2 text-white ">
            Confirm Specialities{" "}
          </label>

          <label className="text-lg font-semibold text-gray-400 ml-2 mt-1">
            (choose multiple if applicable)
          </label>
        </div>
        <div className="">
          <Select
            onChange={(value) => setValue1(value)}
            value={value1}
            isClearable={isClearable}
            isMultiple={isMultiple}
            options={options}
            className=""
            classNames={{
              menuButton: (state) =>
                "ml--5 flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20",
              menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
              listItem: ({ isSelected }) =>
                "list-none py-1.5 px-2 hover:bg-blue-500 rounded-md hover:text-white cursor-pointer",
            }}
          />
        </div>

        <div class="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            class="rounded-xl mt-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="link-checkbox"
            class="mt-5 ml-2 text-sm font-medium text-white"
          >
            By Clicking on this checkbox, you are agreeing to our{" "}
            <a
              href="#"
              class="text-blue-600 dark:text-blue-500 hover:underline"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
      </div>
      <button
        className="bg-gray-300 ml-[15%] mt-[1%] mr-5  px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
        onClick={handleBack}
      >
        Previous
      </button>
      <button
        className="px-6 py-1.5 rounded-lg text-white bg-blue-500 hover:bg-blue-600 top-0"
        onClick={handleNext}
      >
        Proceed
      </button>
      <ProgressBar progressPercentage={85} />
    </div>
  );
};

export default Step5;