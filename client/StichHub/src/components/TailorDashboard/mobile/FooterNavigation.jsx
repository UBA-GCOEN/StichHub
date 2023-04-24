import React from "react";
import {
  Squares2X2Icon,
  UserIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FooterNavigation = (props) => {

  const { handleNavigationLinkClick } = props;

    const handleLinkClick = (index) => {
      handleNavigationLinkClick(index);
    };
  return (
    <div className="w-[100vw] h-[100hv] flex flex-row justify-between p-7 fixed bottom-0 bg-[#130F26] opacity-90 backdrop-filter backdrop-blur">
      <div onClick={()=>handleLinkClick(0)}>
        <Squares2X2Icon className="basis-1/3 fill-left_nav_icon_orange hover:fill-black h-[35px] w-[35px]"></Squares2X2Icon>
      </div>
      
        <div onClick={()=>handleLinkClick(1)}>
          <UserIcon className="basis-1/3 fill-left_nav_icon_orange hover:fill-black h-[35px] w-[35px]"></UserIcon>
        </div>
      
      <div onClick={()=>handleLinkClick(2)}>
        <Cog6ToothIcon className="basis-1/3 fill-left_nav_icon_orange hover:fill-black h-[35px] w-[35px]"></Cog6ToothIcon>
      </div>
      <div onClick={()=>handleLinkClick(3)}>
        <CheckCircleIcon className="basis-1/3 fill-left_nav_icon_orange hover:fill-black h-[35px] w-[35px]"></CheckCircleIcon>
      </div>
    </div>
  );
};

export default FooterNavigation;
