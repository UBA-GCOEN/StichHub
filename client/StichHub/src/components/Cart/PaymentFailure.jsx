import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const PaymentFailure = () => {
  return (
    <div>
      <Player
        src="https://assets3.lottiefiles.com/packages/lf20_r9doswci.json"
        background="transparent"
        speed="1"
        style={{ height: "500px", width: "500px" }}
        loop
        autoplay
      />
      <div className="flex justify-center text-lg text-center">
        Your Payment was Unsuccessfull <br />
        Try Again. <br />
      </div>
      <div className="flex justify-center m-5">
        <Link to="/Cart">
          <button className="bg-red-500 rounded-lg px-5 py-2 text-white">
            Go to Cart
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PaymentFailure