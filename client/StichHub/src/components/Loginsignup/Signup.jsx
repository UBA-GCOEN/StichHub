import React from 'react'
import regbg from '../../assets/registrationbg.png'
import Cus from '../../assets/CustomerImg.png'
import Tail from '../../assets/TailorImg.png'

const Signup = () => {
  return (
    <div>
    <div className='bg-[#BADDF1]'>
        <img src={regbg} className="w-full h-screen object-contain"/>
      <div className='bg-white h-[60%] w-[28%] top-[21%] left-[38%]  flex items-center justify-center  absolute text-center rounded-3xl'></div>
        <div className='bg-white'>
         <h1 class="absolute text-3xl text-Black top-1/4 left-1/3 pl-[130px] font-bold">Select Your Choice</h1>
         <p class="absolute text-xl text-Black mt-12  top-1/4 left-1/3 pl-[130px] font-semibold text-centerx ">Thank you for joining us! <br/> Glad to have you on board!</p>
        </div>
        
        <button className='w-[10%] h-[20%] bg-white absolute text-3xl mt-[30px] text-Black shadow-lg  top-1/2 left-[610px] -translate-x-1/2 -translate-y-1/2 rounded-3xl'>
        <img src={Cus} className=" w-[50%] ml-[33px] mt-[2px] object-contain"/>
        <p className='text-lg text-center '>I am a <br/><strong className='underline '>Customer</strong> </p>
        </button>

        <button className='w-[10%] h-[20%] bg-black absolute text-3xl mt-[30px] text-Black shadow-xl top-1/2 left-[800px] -translate-x-1/2 -translate-y-1/2 rounded-3xl'>
        <img src={Tail} className=" w-[40%] ml-[40px] mt-[2px] object-contain"/>
        <p className='text-lg text-center text-white '>I am a <br/><strong className='underline '>Tailor</strong> </p>
        </button>

        <div className="top-1/2 left-[45%]  flex items-center justify-center bottom-[8%] absolute text-center">
          <p className="text-md font-medium text-black">Don`t have a account? <br /><a className="font-bold underline underline-offset-2 cursor-pointer">Sign Up</a></p>
       </div>
    </div>
    </div>
  )
}

export default Signup