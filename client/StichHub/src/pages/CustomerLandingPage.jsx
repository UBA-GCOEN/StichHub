import React from "react";
import { Dropdown } from "rsuite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
import MouseIcon from "@mui/icons-material/Mouse";
import { color } from "@mui/system";
import Nav from "../components/CustomerLandingPage/Nav";

const CustomerLandingPage = () => {
  return (
    <div className="bg-primary p-2 w-screen h-screen">
      {/* NAV START */}
      <Nav />
      {/* NAV END */}

      {/* Central Content */}
      <div className="flex justify-around">
        <div className="w-2/5">model Here</div>
        <div className="text-center text-5xl text-white w-2/5 h-72  items-center p-5 leading-loose tracking-wide">
          Let's Become the <br />{" "}
          <span className="font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600">
            New Normal
          </span>
          <div className="bg-slate-900 h-10 text-lg w-fit rounded-xl p-1 justify-center items-center ml-auto mr-auto m-2">
            <h1>
              <MouseIcon
                className="m-1"
                style={{ color: "aqua" }}
              />
              <span className="m-1">
                Click on the button to customize the model
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        {/* Section 2 for models in spline*/}

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
    </div>
  );
};

export default CustomerLandingPage;
