import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="mx-5 my-5 flex justify-center gap-5 text-sm text-white">
      <Link to="/CustomersPage">
        <div className="cardGradient py-2 px-3 rounded-lg">Explore Our Features</div>
      </Link>
      <Link to="/ClothesCategory">
        <div className="cardGradient py-2 px-3 rounded-lg">Check Clothes Category</div>
      </Link>
    </div>
  );
};

export default Features;
