import React from "react";
import {
  Squares2X2Icon,
  UserIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FooterNavigation = () => {
  return (
    <div className="w-[100vw] h-[100hv] flex flex-row justify-between p-7 fixed bottom-0 bg-[#130F26] opacity-90 backdrop-filter backdrop-blur">
      <div>
        <Squares2X2Icon className="basis-1/3 fill-left_nav_icon_orange hover:fill-black h-[35px] w-[35px]"></Squares2X2Icon>
      </div>
      <Link to="/TailorDashboard/Profile">
        <div>
          <UserIcon className="basis-1/3 fill-left_nav_icon_orange hover:fill-black h-[35px] w-[35px]"></UserIcon>
        </div>
      </Link>
      <div>
        <Cog6ToothIcon className="basis-1/3 fill-left_nav_icon_orange hover:fill-black h-[35px] w-[35px]"></Cog6ToothIcon>
      </div>
      <div>
        <CheckCircleIcon className="basis-1/3 fill-left_nav_icon_orange hover:fill-black h-[35px] w-[35px]"></CheckCircleIcon>
      </div>
    </div>
  );
};

export default FooterNavigation;
