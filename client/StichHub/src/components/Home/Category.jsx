import { useEffect, useState } from "react";
import { tailorCards } from "../../constants/home";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useHCustomization } from "../../contexts/Home";

const Category = () => {
  const location = useLocation();
  const navigateTo = useNavigate();
  const porpsData = location.state;
  const [selectedLabel, setSelectedLabel] = useState("");

  const { orderDetails, setOrderDetails } = useHCustomization();

  const handleRadioChange = (event) => {
    setSelectedLabel(event.target.value);
  };

  //Order Details
  useEffect(() => {
    setOrderDetails({ ...orderDetails, category: selectedLabel, tailorId: porpsData.item.creator });
  },[selectedLabel])

  const handleSubmit = () => {
    setOrderDetails({ ...orderDetails, category: selectedLabel });
    console.log(orderDetails);

    navigateTo("/configurator", { state: { selectedLabel: selectedLabel } });
  };

  // console.log(porpsData);

  return (
    <div className="bg-[#BADDF1] w-[100vw] h-[100vh] flex justify-center flex-wrap content-center">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">Select Your Cloth Category :</h1>
        <div className="my-3">
          {porpsData.item.types.map((item, index) => (
            <div className="" key={index}>
              {item === "Shirts" && (
                <div className="">
                  <label className="">
                    <div className="p-2 mb-2 bg-indigo-500 rounded-lg text-white">
                      <input
                        type="radio"
                        name="category"
                        className="mr-2"
                        value={item}
                        onChange={handleRadioChange}
                      />
                      Men's {item}
                    </div>
                  </label>
                  <label className="">
                    <div className="p-2 mb-2 bg-indigo-500 rounded-lg text-white">
                      <input
                        type="radio"
                        name="category"
                        className="mr-2"
                        value={item}
                        onChange={handleRadioChange}
                      />
                      Womens's {item} <br />
                    </div>
                  </label>
                </div>
              )}
              {item === "Blazers" && (
                <div>
                  <label className="">
                    <div className="p-2 mb-2 bg-indigo-500 rounded-lg text-white">
                      <input
                        type="radio"
                        name="category"
                        className="mr-2"
                        value={item}
                        onChange={handleRadioChange}
                      />
                      Men's {item} <br />
                    </div>
                  </label>
                  <label className="">
                    <div className="p-2 mb-2 bg-indigo-500 rounded-lg text-white">
                      <input
                        type="radio"
                        name="category"
                        className="mr-2"
                        value={item}
                        onChange={handleRadioChange}
                      />
                      Womens's {item} <br />
                    </div>
                  </label>
                </div>
              )}
            </div>
          ))}
          {porpsData.item.types.map((item, index) => (
            <div key={index}>
              {item != "Shirts" && item != "Blazers" && (
                <label className="">
                  <div className="p-2 mb-2 bg-indigo-500 rounded-lg text-white">
                    <input
                      type="radio"
                      name="category"
                      className="mr-2"
                      value={item}
                      onChange={handleRadioChange}
                    />
                    {item} <br />
                  </div>
                </label>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          {/* <Link to="/configurator" state={{ selectedLabel: selectedLabel }}> */}
          <button
            className="text-white bg-blue-500 px-4 py-2 rounded-lg w-fit flex gap-3"
            onClick={handleSubmit}
          >
            Next{" "}
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
