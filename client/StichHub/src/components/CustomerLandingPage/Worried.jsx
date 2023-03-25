import React from "react";

function Worried() {
  return (
    <div className="w-sreen h-screen">
      {/* Section for models in spline*/}
      <div className="text-center">
        <div className="w-screen font-medium text-5xl">
          <h1 className="text-white">
            Worried about{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600">
              <br />
              Measurements?
            </span>
          </h1>
        </div>
      </div>
      <div className="flex">
        <iframe
          src="https://my.spline.design/roomrelaxingcopy-dbc4a1799ce2b58082cd0b46c56d55ee/"
          frameborder="0"
          width="100%"
          height="100%"
          className="border-4 border-blue-400 m-4 p-2"
        ></iframe>

        <iframe
          src="https://my.spline.design/roomrelaxingcopy-dbc4a1799ce2b58082cd0b46c56d55ee/"
          frameborder="0"
          width="100%"
          height="100%"
          className="border-4 border-blue-400 m-4 p-2"
        ></iframe>

        <iframe
          src="https://my.spline.design/roomrelaxingcopy-dbc4a1799ce2b58082cd0b46c56d55ee/"
          frameborder="0"
          width="100%"
          height="100%"
          className="border-4 border-blue-400 m-4 p-2"
        ></iframe>
      </div>
    </div>
  );
}

export default Worried;
