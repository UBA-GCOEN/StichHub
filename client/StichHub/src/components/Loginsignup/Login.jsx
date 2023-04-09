import React from 'react'
import loginbg from '../../assets/loginsignup/bglogin.png'
import google from  '../../assets/googlelogo.png'


const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disbaled: "D9D9D9"
}

const Login = () => {
  return (
    <div className="w-full h-screen flex items-start">
    <div className="relative w-1/2 h-full flex flex-col">
      <div className="absolute top-[20%] left-[10%] flex flex-col"> 
      <h1 className="text-4xl text-white font-bold my-4">STICH YOUR WAY</h1>
        <p className="text-xl text-white font-semibold mb-2">Choose Your Branded Fabric pattern, type of garment or select occasion friendly , according to your mood.</p>
      </div>
      <img src={loginbg} className="w-full h-full object-cover"/>
    </div>

    <div className="w-1/2 h-full bg-[#E0E0E0] flex flex-col p-20 justify-between "> 
      <h1 className="text-3xl text-black font-bold mb-8 ">StichHUB</h1>

     <div className="w-full flex flex-col">
      <div className="w-full flex flex-col mb-1">
         <h3 className="text-2xl font-bold mb-1">Login</h3>
         <p className="text-sm mb-1">Welcome Back! Please enter your details </p>
      </div>   

       <div className="w-full flex flex-col">
              <input 
              type="email" 
              placeholder="Email"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black/40 outline-none focus:outline-none" />

              <input 
              type="password" 
              placeholder="Password"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black/40 outline-none focus:outline-none" />
       </div>
        
        <div className="w-full flex items-center justify-between">
           <div className="w-full flex items-center">
             <input type="checkbox" className="w-4 h-4 mr-2" />
             <p className="text-sm">Remember me</p>
           </div>

           <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forgot Password?</p>
        </div>

        <div className="w-full flex flex-col my-4">
          <button className="w-full text-white my-2 font-semibold bg-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
            Log in
          </button>
          <button className="w-full text-black my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
            Register
          </button>
        </div>

        <div className="w-full flex items-center justify-center">
            <div className="w-full h-[1px] bg-grey/40"></div>
            <p className="text-md absolute text-black/80 bg-[#f5f5f5]">or</p>
        </div>

        <button className="w-full text-black my-5 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
        <img src={google} className="h-6 mr-2"/>
            Sign In With Google
          </button>
      </div>

     
     <div className="w-full flex items-center justify-center">
      <p className="text-sm font-normal text-black">Don`t have a account? <span className="font-semibold underline underline-offset-2 cursor-pointer">Sign Up</span></p>
     </div>
    </div>
  </div>
  )
}

export default Login