import { useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { useCCustomization } from "../../../contexts/Configurator";
import { Link, useNavigate } from "react-router-dom";
import { useHCustomization } from "../../../contexts/Home";

const BottomSection = () => {
  const {
    shirtPart,
    part,
    setPart,
    nextPart,
    prevPart,
    sleeveType,
    collarType,
    backType,
    cuffType,
    selectedColor,
    selected,
  } = useCCustomization();

  const { orderDetails, setOrderDetails } = useHCustomization();
  const navigateTo = useNavigate();
  const x = sleeveType === "Sleeve 1" ? 1 : 2;

  //Order Details
  useEffect(() => {
    // console.log(sleeveType);
    setOrderDetails({
      ...orderDetails,
      clothDetails: {
        sleeve: sleeveType.typeName,
        collar: collarType.typeName,
        backDetails: backType.typeName,
        cuffs: cuffType.typeName,
        color: selectedColor.hex,
        fabric: selected.name,
      },
    });
  }, [part, cuffType]);

  const handleSubmit = () => {
    setOrderDetails({
      ...orderDetails,
      clothDetails: {
        sleeve: sleeveType.typeName,
        collar: collarType.typeName,
        backDetails: backType.typeName,
        cuffs: cuffType.typeName,
        color: selectedColor.hex,
        fabric: selected.name,
      },
    });
     console.log(orderDetails);

    navigateTo("/measurement");
  };

  return (
    <div className="">
      <div id="buttons" className="flex justify-center">
        <button
          id="back"
          className="border-2 border-indigo-500 rounded-lg flex text-lg mr-6 px-4 py-1 hover:bg-slate-200"
          onClick={() => prevPart()}
        >
          <ArrowLeftIcon
            className="h-5 w-5 text-black mt-1 mr-2"
            aria-hidden="true"
          />
          Back
        </button>
        {part != shirtPart.length - x ? (
          <button
            id="next"
            className="border-0 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1 rounded-lg flex text-lg"
            onClick={() => nextPart()}
          >
            Next
            <ArrowRightIcon
              className="h-5 w-5 text-white mt-1 ml-2"
              aria-hidden="true"
            />
          </button>
        ) : (
          // <Link to="/measurement">
          <button
            id="next"
            className="border-0 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1 rounded-lg flex text-lg"
            onClick={handleSubmit}
          >
            Proceed
            <ArrowRightIcon
              className="h-5 w-5 text-white mt-1 ml-2"
              aria-hidden="true"
            />
          </button>
          // </Link>
        )}
      </div>

      <div className="" style={{height: "10vh"}}>
        <div id="parts" className={`flex justify-between cursor-pointer`}>
          {sleeveType.typeName === "Sleeve 1"
            ? shirtPart.map((item, index) => (
                <div
                  key={index}
                  className={`border-b-4 ${
                    index < part ? "border-indigo-500" : "border-gray-200"
                  } p-1 mt-2 text-sm`}
                  onClick={() => setPart(index)}
                  style={{color: "rgb(59 130 246)"}}
                >
                  {item.text}
                </div>
              ))
            : shirtPart
                .filter((item, index) => index != 3)
                .map((item, index) => (
                  <div
                    key={index}
                    className={`border-b-4 ${
                      index < part ? "border-indigo-500" : "border-gray-200"
                    } p-1 mt-2 text-sm`}
                    onClick={() => setPart(index)}
                    
                  >
                    {item.text}
                  </div>
                ))}
        </div>
      </div>
      
    </div>
  );
};

export default BottomSection;
