
import React, { useEffect, useState } from 'react'
import emailImage from "../../assets/img/n.png"
import VerifiedEmail from "../../assets/img/verified.png"
import axios from '../../axios.js';
import { useParams } from 'react-router-dom';
const Verify = () => {
    const {token } = useParams();
    

    const [tailorUser , setTailorUser] = useState("");

    
    const verifyingEmail = async () => {
        try {
          const data = {
            token : token
          }
        console.log(token)
        if(token){
            const res = await axios.put("/userTailor/verify" , data);
            console.log(res)
            
        }
        
    } catch (error) {
        console.log(error.response.data.message)
    }
   }
    useEffect(() => {
      
        verifyingEmail();
    //   getMySelf();
    },[token])

  return (
     <div className="h-[100vh] text-[white]">
      <img
        src={emailImage}
        className="hidden lg:block right-24 absolute w-[30%] h-[60%] "
      />
      <img
        src={emailImage}
        className="opacity-20 right-0 bottom-[300px] w-[55%] h-[35%] lg:opacity-100 lg:right-24 absolute lg:w-[30%] lg:h-[60%] lg:hidden"
      />
      {/* If user is verified  */}
      <div className="  text-whie ml-[15%] mt-[25%] lg:mt-[10%] font-poppins">
        <div className="mr-[15%] lg:mr-[30%]">
          <h1 className="text-[rgb(127,255,0)] text-4xl font-bold mb-3">
            {/* Congrats {user?.result.name}, */}
           We are verifying your email
          </h1>
          <h1 className="select-none	 text-white text-5xl font-bold tracking-wider lg:mr-[20%]	">
            We are Verifiyng Your Email. Please Wait until the Verification Done.
          </h1>
          {/* <p className="text-right font-semibold text-white lg:mr-[180px] mt-5 tracking-tighter">
            <p className="text-gray-500 italic">
              "The intellect always cuts and divides like a pair of scissors.
              The heart sews things together and unites like a needle. The
              tailor uses both."
            </p>
            - Mata Amritanandamayi -
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default Verify