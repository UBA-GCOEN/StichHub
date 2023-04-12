import React from "react";

const TopProfile = () => {
  return (
    <div className="flex w-fit h-fit grow flex-row justify-between m-10 mb-5">
      <div>
        <div className="text-sm text-white text-left">Mr. Akash Malhotra</div>
        <div className="text-sm text-grey">inaamajay007@gmail.com</div>
        <div className="h-max mb-auto grid grid-flow-col auto-cols-max mt-[2%]">
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
      {/* profile image */}
      <div className="h-fit w-fit ml-[30%]">
        <div className="grid justify-items-end rounded-full mt-auto h-[70px] w-[70px] bg-cover bg-center bg-[url('https://media.istockphoto.com/id/1318858332/photo/headshot-portrait-of-smiling-female-employee-posing-in-office.jpg?s=612x612&w=is&k=20&c=f0NR-g76WDrQo_Qa7x3gXOGmmH-CIBZ3Ud-rQFRMlks=')]">
          <div className="rounded-full h-[15px] w-[15px] bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default TopProfile;
