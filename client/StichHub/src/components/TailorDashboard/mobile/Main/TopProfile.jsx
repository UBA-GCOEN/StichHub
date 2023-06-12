import React, {useState, useEffect} from "react";
import jwt_decode from "jwt-decode";
import axios from "../../../../axios"

const TopProfile = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [tailorDetails, setTailorDetails] = useState([]);
 
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwt_decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("tailorProfile")));
  }, [location]);

  
  // const getTailorDetails = async() => {
  //   try {
  //     const res = await axios.get("/tailors/selected");
  //     setTailorDetails(res.data);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // useEffect(() => {
  //   getTailorDetails();
  // }, [tailorDetails]);


  // https://cdn-icons-png.flaticon.com/512/6522/6522516.png
  const bg = user?.result.picture ? (user?.result.picture) : "url('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg')" ;
   return (
    <div className="flex w-fit h-fit grow flex-row justify-between m-10 mb-5">
      <div>
        <div className="text-sm text-white text-left">{user?.result.name}</div>
        <div className="text-sm text-grey">{user?.result.email}</div>
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
        <div className="grid justify-items-end rounded-full mt-auto h-[70px] w-[70px] bg-cover bg-center">
        <div className="rounded-full h-[15px] w-[15px] bg-green-500"></div>
          <img src={bg} className="grid justify-items-end rounded-full mt-auto h-[70px] w-[70px] bg-cover bg-center"/>
          
        </div>
      </div>
    </div>
  );
};

export default TopProfile;
