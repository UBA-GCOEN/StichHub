
import React, { useEffect, useState } from 'react'
import emailImage from "../../assets/img/n.png"
import VerifiedEmail from "../../assets/img/verified.png"
import axios from '../../axios.js';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
const Verify = () => {
  const navigateTo = useNavigate();
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
    

    const [tailorUser , setTailorUser] = useState("");
    const [verificationStatus , setVerificationStatus] = useState("")
    const [renderStatus , setRenderStatus] = useState(false)

    
    const verifyingEmail = async () => {
        try {
          const data = {
            token : token
          }
        // console.log(token)
        if(token){
            const res = await axios.put("/userTailor/verify" , data);
            console.log(res.data)
            setVerificationStatus(res.data.success)
            setRenderStatus(true)
        }
        
    } catch (error) {
        // console.log(error.response.data.message)
        // console.log(error.response.data)
        setVerificationStatus(error.response.data.success)
        setRenderStatus(true)
    }
   }
    useEffect(() => {
      // console.log(token)
        verifyingEmail();
    //   getMySelf();
    },[token])
    useEffect(() => {
      if(verificationStatus === true){
        setTimeout(()=>{

          navigateTo("/TailorProfileVerification")
        }, 1000)
      }
    }, [verificationStatus])

  return (
    <div>
    {!renderStatus ? (
      // verifying email 
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
           Verifying..... Email
          </h1>
          <h1 className="select-none	 text-white text-3xl font-bold tracking-wider lg:mr-[20%]	">
            We are Verifiyng Your Email. Please Wait until the Email Verification Done.
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
    ) : (
      // verification status
      <>
      {verificationStatus  ? (<div className="h-[100vh] text-[white]">
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
             
               Your Email is Verified
              </h1>
              <h1 className="select-none	 text-white text-3xl font-bold tracking-wider lg:mr-[20%]	">
                Please Fill your Details to become a verified Tailor.
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
        </div>) : (<div className="h-[100vh] text-[white]">
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
            <h1 className="text-[rgb(255,38,0)] text-4xl font-bold mb-3">
             

            Invalid Verification Link 
            </h1>
            <h1 className="select-none	 text-white text-3xl font-bold tracking-wider lg:mr-[20%]	">
              Verification Link has been expired. Please Resend the Verification Link.
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
      </div>)}
      </>
    )}

    {/* rendering Verification Status */}
    
    

    </div>
  
  )
}

export default Verify