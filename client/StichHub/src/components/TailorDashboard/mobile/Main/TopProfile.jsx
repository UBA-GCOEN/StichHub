import React, {useState, useEffect} from "react";
import jwt_decode from "jwt-decode";

const TopProfile = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
 
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwt_decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("tailorProfile")));
  }, [location]);
  // https://cdn-icons-png.flaticon.com/512/6522/6522516.png
  const bg = user?.result.picture ? (user?.result.picture) : "url('https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg')" ;
   return (
    <div className="flex w-fit h-fit grow flex-row justify-between m-10 mb-5">
      <div>
        <div className="text-sm text-white text-left">{user?.result.name}</div>
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
        <div style={{backgroundImage:bg}} className="grid justify-items-end rounded-full bg-['url(https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg)'] mt-auto h-[70px] w-[70px] bg-cover bg-center ">
          <div className="rounded-full h-[15px] w-[15px] bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default TopProfile;
