import { useEffect } from "react";
import Button from "../CustomerLandingPage/Button";
import { useHCustomization } from "../../contexts/Home";
import { useNavigate } from "react-router-dom";

const FabricCard = (prop) => {
  const { orderDetails, setOrderDetails } = useHCustomization();
  const navigateTo = useNavigate();
  const fabric = prop.head;

  //Order Details
  useEffect(() => {
    setOrderDetails({ ...orderDetails, fabricMode: fabric });
  }, []);

  const handleSubmit = () => {
    console.log(fabric);
    setOrderDetails({ ...orderDetails, fabricMode: fabric });
    console.log(orderDetails);
    navigateTo("/OrderDetails");
  };

  return (
    <div>
      <div className="relative border-2 border-cyan-300 h-max w-52 rounded-2xl p-4 m-2 text-center justify-center items-center ">
        <div className="mx-auto w-32 h-32">
          <img src={prop.adrs} />
        </div>
        <div>
          <h2 className="text-3xl font-semibold m-2 p-2">{prop.head}</h2>
          <h2 className="p-2 m-2">{prop.tail}</h2>
        </div>
        <div onClick={handleSubmit}>
          <button className="bg-cyan-300 hover:bg-cyan-500 text-black font-semibold py-2 px-4 rounded-full">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default FabricCard;
