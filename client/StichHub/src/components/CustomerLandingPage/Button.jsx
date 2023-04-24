import React from "react";

function Button({ text }) {
  return (
    <button className="bg-cyan-300 hover:bg-cyan-500 text-black font-semibold py-2 px-4 rounded-full">
      {text}
    </button>
  );
}

export default Button;
