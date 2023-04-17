import {useState} from "react";
import { tailorCards } from "../../constants/home";
import { Link, useLocation } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  const porpsData = location.state;
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleRadioChange = (event) => {
    setSelectedLabel(event.target.value);
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
                      <input type="radio" name="category" className="mr-2" onChange={handleRadioChange}/>
                      Men's {item}
                    </div>
                  </label>
                  <label className="">
                    <div className="p-2 mb-2 bg-indigo-500 rounded-lg text-white">
                      <input type="radio" name="category" className="mr-2" onChange={handleRadioChange}/>
                      Womens's {item} <br />
                    </div>
                  </label>
                </div>
              )}
              {item === "Blazers" && (
                <div>
                  <label className="">
                    <div className="p-2 mb-2 bg-indigo-500 rounded-lg text-white">
                      <input type="radio" name="category" className="mr-2" onChange={handleRadioChange}/>
                      Men's {item} <br />
                    </div>
                  </label>
                  <label className="">
                    <div className="p-2 mb-2 bg-indigo-500 rounded-lg text-white">
                      <input type="radio" name="category" className="mr-2" onChange={handleRadioChange}/>
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
                    <input type="radio" name="category" className="mr-2" onChange={handleRadioChange}/>
                    {item} <br />
                  </div>
                </label>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/configurator" state={{selectedLabel: selectedLabel}}>
            <button className="text-white bg-blue-500 px-4 py-2 rounded-lg w-fit flex gap-3">
              Next{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
