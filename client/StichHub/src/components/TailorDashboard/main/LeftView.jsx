import React, {useState, useEffect} from "react";
import jwt_decode from "jwt-decode";
import {
  Squares2X2Icon,
  UserIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const LeftView = (props) => {
    const { handleNavigationLinkClick } = props;

    const handleLinkClick = (index) => {
      handleNavigationLinkClick(index);
    };

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = jwt_decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem("tailorProfile")));
      }, [location]);

    
    

  return (
    <div className="grid grid-flow-row auto-rows-fr row-span-3 mt-4 z-50 rounded-3xl container h-[100hv] bg-gradient-to-br from-grey to-dark_grey ">
      {/* Leftview top Profile*/}
      <div className="grid place-items-center rounded-t-3xl bg-black">
        <div className="h-[30px]"></div>

        {/**profile image */}
        <div className="grid justify-items-end rounded-full mt-auto h-[50px] w-[50px] bg-cover bg-center bg-[url('https://media.istockphoto.com/id/1318858332/photo/headshot-portrait-of-smiling-female-employee-posing-in-office.jpg?s=612x612&w=is&k=20&c=f0NR-g76WDrQo_Qa7x3gXOGmmH-CIBZ3Ud-rQFRMlks=')]">
          <div className="rounded-full h-[15px] w-[15px] bg-green-500"></div>
        </div>

        {/**profile name */}
        <div className="text-slate-50 mt-auto text-sm">{user?.result.name}</div>

        {/**email */}
        <div className="h-max top-0 mb-auto text-slate-100  text-xs">
          {user?.result.email}
        </div>

        {/**profile ratings */}
        <div className="h-max mb-auto grid grid-flow-col auto-cols-max">
          <svg
            fill="#d97706"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
          <svg
            fill="#d97706"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
          <svg
            fill="#d97706"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
          <svg
            fill="#d97706"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
          <svg
            fill="#d97706"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
        </div>
      </div>

      {/* Left Navigation*/}
      <div className="grid place-items-center">
        {/**dashboard */}
        <button onClick={() => handleLinkClick(0)} className="group flex justify-items-center items-center rounded-tr-full rounded-bl-full w-[90%] h-[65%] focus:bg-gradient-to-b  from-left_nav_blue_light to-left_nav_blue">
          {/**icon */}
          <Squares2X2Icon className="basis-1/3 fill-left_nav_icon_orange group-focus:fill-black h-[24px] w-[24px]"></Squares2X2Icon>
          <div className="flex-2 text-sm group-focus:text-black group-focus:font-bold text-white">Dashboard</div>
        </button>

        {/**profile */}
        <button onClick={() => handleLinkClick(1)} className="group flex justify-items-center items-center rounded-tr-full rounded-bl-full w-[90%] h-[65%] focus:bg-gradient-to-b  from-left_nav_blue_light to-left_nav_blue">
          {/**icon */}
          <UserIcon className="basis-1/3 fill-left_nav_icon_orange group-focus:fill-black h-[24px] w-[24px]"></UserIcon>
          <div className="flex-2 text-sm group-focus:text-black group-focus:font-bold text-white">
            Profile
          </div>
        </button>

        {/**ongoing */}
        <button onClick={() => handleLinkClick(2)} className="group flex justify-items-center items-center rounded-tr-full rounded-bl-full w-[90%] h-[65%] focus:bg-gradient-to-b  from-left_nav_blue_light to-left_nav_blue">
          {/**icon */}
          <Cog6ToothIcon className="basis-1/3 fill-left_nav_icon_orange group-focus:fill-black h-[24px] w-[24px]"></Cog6ToothIcon>
          <div className="flex-2 text-sm group-focus:text-black group-focus:font-bold text-white">
            Ongoing
          </div>
        </button>

        {/**completed */}
        <button className="group flex justify-items-center items-center rounded-tr-full rounded-bl-full w-[90%] h-[65%] focus:bg-gradient-to-b  from-left_nav_blue_light to-left_nav_blue">
          {/**icon */}
          <CheckCircleIcon className="basis-1/3 fill-left_nav_icon_orange group-focus:fill-black h-[24px] w-[24px]"></CheckCircleIcon>
          <div className="flex-2 text-sm group-focus:text-black group-focus:font-bold text-white">
            Completed
          </div>
        </button>
      </div>

      {/** LeftView Callender*/}

      <div>
        {/** 
             <div class="scale-50 max-w-sm w-full shadow-lg">
                <div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
                    <div class="px-4 flex items-center justify-between">
                        <span  tabindex="0" class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800">October 2020</span>
                        <div class="flex items-center">
                            <button aria-label="calendar backward" class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </button>
                        <button aria-label="calendar forward" class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"> 
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </button>

                        </div>
                    </div>
                    <div class="flex items-center justify-between pt-12 overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Mo</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Tu</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">We</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Th</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Fr</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Sa</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Su</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">1</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">2</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">3</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">4</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">5</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">6</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">7</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="w-full h-full">
                                            <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <a  role="link" tabindex="0" class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full">8</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">9</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">10</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">11</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">12</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">13</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">14</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">15</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">16</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">17</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">18</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">19</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">20</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">21</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">22</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">23</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">24</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">25</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">26</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">27</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">28</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">29</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">30</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
         */}
      </div>

      {/**calender end */}
    </div>
  );
};

export default LeftView;
