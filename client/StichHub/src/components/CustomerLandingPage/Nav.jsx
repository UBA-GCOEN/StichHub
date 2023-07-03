import React from "react";
import { Dropdown } from "rsuite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
function Nav() {
  return (
    <div className="flex font-sans text-white justify-between justify-items-center h-24 sticky">
      <div className="w-44 h-14 m-2 p-2">
        <img
          src=".\src\assets\logo\Long - Logo Transparent (White).png"
          alt="logo with text that says StichHub stitch your way"
        />
      </div>
      <div className="flex justify-center items-center h-24">
        <Dropdown
          title="Quick Access"
          className="m-2"
        >
          <Dropdown.Item>Item1</Dropdown.Item>
          <Dropdown.Item>Item2</Dropdown.Item>
          <Dropdown.Item>Item3</Dropdown.Item>
        </Dropdown>
        <NotificationsIcon className="m-2" />
        <ShoppingCartOutlinedIcon className="m-2" />
        <MenuOpenSharpIcon className="m-2" />
      </div>
    </div>
  );
}

export default Nav;
