import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div>
      <Player
        src="https://assets5.lottiefiles.com/packages/lf20_ynz5xr.json"
        background="transparent"
        speed="1"
        style={{ height: "500px", width: "500px" }}
        loop
        autoplay
      />
      <div className="flex justify-center text-lg">
        ThankYou for Purchase!! <br />
        Your Order is Confirmed. <br />
      </div>
      <div className="flex justify-center m-5">
        <Link to="/home">
          <button className="bg-green-500 rounded-lg px-5 py-2 text-white">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
