import React from "react";
import {Squares2X2Icon} from '@heroicons/react/24/solid';

const LeftView = () => {
    return(
        <div className="grid grid-flow-row auto-rows-fr rounded-3xl container  w-[15%] h-[80%] bg-gradient-to-br from-grey to-dark_grey ">
            {/* Leftview top Profile*/}
            <div className="grid place-items-center rounded-t-3xl bg-black">
              
            <div className="h-[30px]">
                
                </div>

             {/**profile image */}
             <div className="grid justify-items-end rounded-full mt-auto h-[50px] w-[50px] bg-white bg-[url('https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg')]">
                <div className="rounded-full h-[20px] w-[20px] bg-green-500">
                    
                </div>
             </div>
             
             {/**profile name */}
             <div className="text-slate-50 mt-auto text-sm">
                Mr. Akash Malhotra
             </div>

             {/**email */}
             <div className="h-max top-0 mb-auto text-slate-100  text-xs">
             inaamajay007@gmail.com
             </div>

             {/**profile ratings */}
             <div className="h-max mb-auto grid grid-flow-col auto-cols-max">
             <svg fill="#d97706" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
             <svg fill="#d97706" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
             <svg fill="#d97706" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
             <svg fill="#d97706" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
             <svg fill="#d97706" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
             </div>

             

            </div>


             {/* Left Navigation*/}
            <div className="">

            {/**dashboard */}
             <div className="flex justify-center bg-gradient-to-b from-left_nav_blue_light to-left_nav_blue">
                {/**icon */}
                <Squares2X2Icon className="h-[24px] w-[24px]">

                </Squares2X2Icon>
                <div className="text-sm font-bold">
                Dashboard
                </div>
             </div>


            </div>


            {/** LeftView Callender*/}
            <div className="">

            </div>
        </div>
    )
}

export default LeftView;