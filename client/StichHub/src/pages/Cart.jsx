import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import 'react-phone-number-input/style.css'
import Phoneinput from 'react-phone-number-input'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { Country, State, City }  from 'country-state-city';
import img from '../assets/img/img.png'
import ime from '../assets/img/ime.png'
import imr from '../assets/img/imr.png'
import im from '../assets/img/im.png'
import el from '../assets/img/el.png'
import el2 from '../assets/img/el2.png'
import se from '../assets/img/se.png'


import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";

import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
 
function formatCardNumber(e) {
  const val = e.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];
 
  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
 
  if (parts.length) {
    return parts.join(" ");
  } else {
    return e;
  }
}
 
function formatExpires(e) {
  return e
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}


const MainContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
`

const StepContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 70px;
position: relative;
  :before {
    content: '';
    position: absolute;
    background: #cfe2f3;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: '';
    position: absolute;
    background: #4ea5f4;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid ${({ step }) =>
      step === 'completed' ? '#4ea5f4' : '#cfe2f3'};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StepCount = styled.span`
  font-size: 19px;
  color: #cfe2f3;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StepLabel = styled.span`
  font-size: 19px;
  color: #4ea5f4;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 30px;
`

const ButtonStyle = styled.button`
@apply rounded text-white cursor-pointer w-[90px] p-2 border-0;
background: #4ea5f4;
:active {
  @apply scale-[0.98];
}
:disabled {
  @apply text-black cursor-not-allowed;
  background: #cfe2f3;
}
`

const CheckMark = styled.div`
  @apply text-[26px] font-semibold text-[#4a154b] rotate-[-46deg] -scale-x-100;
  -ms-transform: scaleX(-1) rotate(-46deg);
  /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg);
`

const steps = [
  {
    label: 'Cart',
    step: 1,
  },
  {
    label: 'Delivery',
    step: 2,
  },
  {
    label: 'Payment',
    step: 3,
  },
  {
    label: 'Complete Order',
    step: 4,
  },
]

const Cart = () => {
  const [value, setValue] = useState();
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [activeStep, setActiveStep] = useState(1)

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  }
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
    setActiveStep(activeStep + 1)
  };

  const handleBack = () => {
    setStep(step - 1);
    setActiveStep(activeStep - 1)
  };

  const totalSteps = steps.length

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`
 
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  // When the button is clicked
  const btnHandler = () => {
    alert('The buttion is clickable!');
  };

  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");



  const Step1 = () => (
    <div class="h-screen pt-20">
     <div className='grid grid-cols-2'>
     <h1 class="mb-5 ml-0 text-left text-2xl font-bold">Orders</h1>
    <h1 class="hidden lg:block mb-5 pl-10 text-right text-2xl font-bold">Payment Summary</h1>
      </div> 

    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-3/3">
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src={imr} className="h-[30%]"/>
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">Classic Shirt Pure Cotton Brown </h2>
              <p class="mt-1 text-xs text-gray-700">COLOR: <b>BROWN</b></p>
              <p class="mt-1 text-xs text-gray-700">SIZE: <b>XI</b></p>

            </div>
            <div class=" hidden lg:flex justify-between sm:space-y-6 sm:mt-0  sm:space-x-6 m-[40px]  ">
              <div class="flex  space-x-4">
                <p class="text-md mt-1 font-bold">₹2590.00</p> 
              </div>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div class="lg:hidden flex items-center space-x-4">
                <p class="text-sm">₹2590.00</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        </div>
      
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
       <div><h1 className='lg:hidden text-lg md-5'>Payment Summary</h1>
      <div className='pb-4'>
             <h6 className='text-xs text-red-900'>Having Discount Code?</h6>
             <div className="grid grid-cols-2 gap-1">
                  <input type="text" className=" border-gray-500 solid border rounded-md"></input>
                  <button className="  text-center ml-3 bg-blue-700 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600">Apply</button>
             </div>
      </div>
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Order Summary</p>
          <p class="text-gray-700">₹2590.00</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Additional Service</p>
          <p class="text-gray-700">₹4.99</p>
        </div>
        <div class="mt-2 flex justify-between">
          <p class="text-gray-700">Coupon</p>
          <p class="text-green-500">₹4.99</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total Amount</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">₹2,600.00</p>
            <p class="text-sm text-gray-700">including GST</p>
          </div>
        </div>
       
      </div>
      </div> 
    </div>
    <img src={im} className="hidden lg:block w-[20%] ml-[600px]  absolute"/>
    <div className='m-10 font-bold'>Additional Services
      <div className='grid grid-row-3 gap-0 lg:mr-[50%]' >
          <div class="rounded-lg md:h-1/3">
              <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <input name="service" type="radio" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">CARE + Package </h2>
                    <p class="mt-1 text-xs text-gray-500">One Month Alteration, Premium Fabric Cloths,Delivery Free</p>
                  

                  </div>
                  <div class=" lg:flex justify-between sm:space-y-6 sm:mt-0  sm:space-x-6 m-[10px]  ">
                    <div class="flex  space-x-4">
                      <p class="text-md mt-1 font-bold">₹99.00</p> 
                    </div>
                  </div>
                  
                </div>
              </div>
              </div>

      <div class="rounded-lg md:h-1/3">
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <input name="service" type="radio" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">Environment Friendly</h2>
              <p class="mt-1 text-xs text-gray-700">Donate old cloths for green growth</p>

            </div>
            <div class="  ">
              <div class="flex  space-x-4">
                <p class="text-md mt-1 font-bold">₹9.00</p> 
              </div>
            </div>
            
          </div>
        </div>
        </div>

        </div></div>
    <div className='m-10 font-bold'>Delivery
      <div className='grid grid-cols-2 gap-2' >
          <div class="rounded-lg md:h-1/3">
              <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <input name="check" type="radio" />
                <img src="https://cdn.iconscout.com/icon/free/png-256/fedex-1-282177.png" className=' lg:w-[17%] sm:w-[17%]'/>
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">FedX Delivery </h2>
                    <p class="mt-1 text-xs text-gray-700">Expected Delivery</p>
                    <p class="mt-1 text-xs text-gray-700">Friday, 29th 2023</p>

                  </div>
                  <div class=" ">
                    <div class="flex  space-x-4">
                      <p class="text-md mt-1 font-bold">₹79.00</p> 
                    </div>
                  </div>
                  
                </div>
              </div>
              </div>

      <div class="rounded-lg md:h-1/3">
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <input name="check" type="radio" />
          <img src="https://cdn-icons-png.flaticon.com/512/726/726455.png" className=' lg:w-[10%] sm:w-[10%]'/>
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">Delhivery</h2>
              <p class="mt-1 text-xs text-gray-700">Expected Delivery</p>
              <p class="mt-1 text-xs text-gray-700">Friday, 29th 2023</p>

            </div>
            <div class="  ">
              <div class="flex  space-x-4">
                <p class="text-md mt-1 font-bold">₹79.00</p> 
              </div>
            </div>
            
          </div>
        </div>
        </div>

        </div>
        </div>
        <img src={el} className="h-[30%] absolute float-right right-0 "/>
        <img src={el2} className="h-[30%] absolute float-left left-0 "/>

  </div>

  );
  const Step2 = () => (
    <div id="body" className="grid lg:grid-cols-2  lg:pl-[15%] md:grid-cols-1 gap-4 justify-center ">
     
  <div class="block max-w-lg rounded-lg bg-white p-6 ">
    
  <form> 
    
    <span className="text-gray-700 font-bold">1. CONTACT DETAILS (Please Enter Your Details)</span><br/><br/>
    <div class="grid grid-cols-2 gap-4">
   
            <div xs={5}>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">First Name</span><br/>
                  <input
                    type="text"
                    name="name"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    placeholder="John cooks"
                    required
                  />
                </label>
              </div>
              </div>
              <div xs={6} >
                <div className="mb-2">
                <label>
                  <span className="text-gray-700">Last Name</span><br/>
                  <input
                    type="text"
                    name="name"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    placeholder="John cooks"
                    required
                  /><br/> 
                  
                </label>
              </div></div>
              <div>
              <span className="text-gray-700">Phone No.</span><br/>
                    <Phoneinput
           className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"

          placeholder="Enter phone number"
          value={value}
          defaultCountry="IN"
          onChange={setValue}/>
     </div>
     <div className="mb-2">
                <label>
                  <span className="text-gray-700">Email address</span>
                  <input
                    name="email"
                    type="email"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"

                    placeholder="john.cooks@example.com"
                    required
                  />
      </label>
       </div>
                
            
    </div>
    <span className="text-gray-700 font-bold">2. DELIVERY DETAILS (Please Enter Your Delivery Details)</span>
                <br/><br/>
                <div><span >Country/ Region</span><br/>
            <CountryDropdown class="country"
            value={country}
            onChange={setCountry}
            className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
            /></div>

            <div className="mb-2">
                <label>
                  <span className="text-gray-700">Street address</span><br/>
                  <input
                    name="address"
                    type="address"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"

                    placeholder="House number and street name"
                    required
                  />  <input
                  name="address"
                  type="address"
                  className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"

                  placeholder="Appartment, suite, landmark, etc. (optional)"
                  required
                /> </label>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                  
                    <div xs={5} > 
                  <div className="mb-2">
                <label>
              
                  <span className="text-gray-700">Town/ City</span><br/>
                  <input
                    name="city"
                    type="city"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"

                    placeholder=""
                    required
                  /> </label>
                  </div>
                  </div><div xs={7} >
                  <div className="mb-2">
                <label>
              
                  <span className="text-gray-700">State</span><br/>
                  <input
                    name="state"
                    type="state"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                
                    placeholder=""
                    required
                  /> </label>
                  </div></div>
                  
                  </div>
                  <div className="mb-2">
                <label>
              
                  <span className="text-gray-700">Pincode</span><br/>
                  <input
                    name="pincode"
                    type="pincode"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                   
                    placeholder=""
                    required
                  /> </label>
                  </div>

              <div className="mb-2">
                <label>
                  <span class="text-gray-700">Ordr Notes (optional)</span><br/>
                  <textarea
                    name="notes" class="country"
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                   
                    rows="7" 
                    placeholder='notes about your order delivery e.g special notes'
                  ></textarea>
                </label>
              </div>
              
      </form>
    </div>
  
        <div xs={6} className="justify-center w-[250px] rounded-2xl ">
        <div className="shadow-2xl rounded-2xl  ">
          <h4 className='pt-4 pl-8 pb-4 font-bold md:items-center'><span>Order Information</span></h4>
          <img src={img} className="ml-[30px] mr-[20px] mb-[5px] w-[190px] h-[180px] rounded-[10px] border border-solid border-[#cecece]"/>
          <div className="pl-[30px] pr-[30px] "><span><strong>Teal Brown Kurti Full(Cotton Silk)<h6 className='text-xs'>SIZE: <strong> XI</strong>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; COLOR:<strong> RED</strong> </h6></strong></span>
          <hr className="mt-2"></hr><b><div>
         Price Total
         </div></b>
         <div class="grid grid-cols-2 gap-4">
         <div xs={2}>
          Subtotal
          GST
         </div>
         <div xs={2} >
          ₹20000/-
          ₹300/-
         </div>
         </div>  <hr className="mt-2 pl-[30px] pr-[30px]"></hr></div>
       
         <strong>
         <div class="grid grid-cols-2 gap-4">
         <div xs={2} className="pl-[30px] pr-[30px] ">
          Total
         </div>
         <div xs={2} className="pb-[20px] text-xl" >
          ₹20300/-
                   </div>
         </div></strong>
         
          </div> 
       
       
    </div> </div>
    );
    
  const Step3 = () => (
      <div>
       <div id="body" className="grid lg:grid-cols-2  lg:pl-[10%] md:grid-cols-1 gap-4 justify-center ">
       <img src={se} className=" hidden lg:block flex absolute lg:left-0 mt-20 w-[30%] sm:w-[40]% sm:right-0"/>
      <div class="block max-w-lg rounded-lg bg-white p-6 ">
      <form> 
        
        <span className="text-gray-700 font-bold text-lg ">Payment</span><br/><br/>
      
    <Card className="w-full max-w-[24rem] ">
      
      <CardBody>
        <Tabs value={type} className="overflow-visible">
          <TabsHeader className="relative z-0 h-full ">
          <Tab value="card" className="w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
>
              <input type="radio" onChange={() => setType("card")}/>
              <label className="ml-2 text-sm ">CARD</label>

            </Tab>
            <Tab value="bank" className="w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
>
              <input type="radio" onChange={() => setType("bank")}/>
              <label className="ml-2">BANK</label>
            </Tab>
            <Tab value="upi"  className=" w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
>
<input type="radio" onChange={() => setType("upi")}/>
              <label className="ml-2">UPI</label>
            </Tab>
            <Tab value="cod"  className=" w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
>
<input type="radio" onChange={() => setType("cod")}/>
              <label className="ml-2">COD</label>
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === "card" ? 400 : -400,
                
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "card" ? 400 : -400,
              },
              
            }}
          
          >
            <TabPanel value="card" className="p-0">
              <form className="mt-5 flex flex-col gap-4">
                <div className="my-0">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Card Details
                  </Typography>
                  <span >Card Number</span><br/>
                  <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
        <CreditCardIcon className="h-6 w-6 ml-2 text-blue-gray-300" />
        </button>
      </span>
      <input type="number" name="q" className=" text-black pl-14 border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
/>
    </div>
      
                   <span className="text-gray-700 ">Expiration Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CVV</span><br/>
                  <div className="mb-4 flex items-center gap-4">
                    <input type="text"
                     
                      maxLength={5}
                      className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"

                      // value={formatExpires(cardExpires)}
                      // onChange={(event) => setCardExpires(event.target.value)}
                      containerProps={{ className: "min-w-[72px]" }}
                    />
                    
                    <input type="text"
                      
                      maxLength={4}
                      className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"

                      containerProps={{ className: "min-w-[72px]" }}
                    />
                  
                  </div>
                  <span className="text-gray-700">Card Holder Name</span><br/>
                  <input  className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]" />  
                 
                </div>
                <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Save Card Details</label>
</div>
                <Button size="lg h-auto">Pay Now</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>

            <TabPanel value="bank" className="p-0">
              <form className="mt-1 flex flex-col gap-4 scroll-m-0">
              <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-4 ml-2 font-medium"
                  >
                    Bank Details
                  </Typography>
              
                  <label for="banks" class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Select Bank</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose Bank</option>
                  <option value="US">Central Bank Of India</option>
                  <option value="CA">Bank Of India</option>
                  <option value="FR">Punjab National Bank of india</option>
                  <option value="DE">Bharat Bank</option>
                </select>
                  <div className='mb-5 mt-5'>
                  <span className="text-gray-700 mt-5">Bank Acount Number</span><br/>
                  <input type="number"
                    
                    maxLength={16}
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    
                  /></div><div className="mb-5">
                  <span className="text-gray-700 mt-3">Account Holder Name</span><br/>
                  <input type="text"
                    
                    maxLength={16}
                    className="border box-border w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"
                    
                  /></div>
                <Button size="lg h-auto">Pay Now</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>

            <TabPanel value="upi" className="p-0 scroll ">
              <form className="mt-12 flex flex-col gap-4">
                
                <Button size="lg h-auto">Pay Now</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
            <TabPanel value="cod" className="p-0">
              <form className="mt-12 flex flex-col gap-0">
                
              <div className="mb-5">
                  <span className="text-gray-700 mt-3 mb-2">Your Delivery Address</span><br/>
                  <input type="text"
                    disabled
                    className="border  w-full justify-around mb-[5px] p-2.5 rounded-[10px] border-solid border-[#cecece]"

                    placeholder='IIT,Khapari'
                    maxLength={16}
                    
                  /></div>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
     </form>
     </div>  
      
            <div className="justify-center w-[250px] rounded-2xl lg:ml-0 lg:mt-3 ">
            <div className="shadow-2xl rounded-2xl  ">
              <h4 className='pt-4 pl-8 pb-4 font-bold md:items-center'><span>Order Information</span></h4>
              <img src={img} className="ml-[30px] mr-[20px] mb-[5px] w-[190px] h-[180px] rounded-[10px] border border-solid border-[#cecece]"/>
              <div className="pl-[30px] pr-[30px] "><span><strong>Teal Brown Kurti Full(Cotton Silk)<h6 className='text-xs'>SIZE: <strong> XI</strong>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; COLOR:<strong> RED</strong> </h6></strong></span>
              <hr className="mt-2"></hr><b><div>
             Price Total
             </div></b>
             <div class="grid grid-cols-2 gap-4">
             <div xs={2}>
              Subtotal
              GST
              Shipping

              
             </div>
             <div xs={2} >
              ₹20,000/-
              ₹300/-
              ₹100/-
             </div>
             </div> 
             <div className='pt-4'>
             <h6 className='text-xs text-red-900'>Having Discount Code?</h6>
             <div className="grid grid-cols-2 gap-1">
                  <input type="text" className=" border-gray-500 solid border rounded-md"></input>
                  <button className="  text-center ml-3 bg-blue-700 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600"
>Apply</button>
             </div>
             </div>
              <hr className="mt-2 pl-[30px] pr-[30px]"></hr></div>
           
             <strong>
             <div class="grid grid-cols-2 gap-4">
             <div xs={2} className="pl-[30px] pr-[30px] ">
              Total
             </div>
             <div xs={2} className="pb-[20px] text-xl" >
              ₹20,400/-
                       </div>
             </div></strong>
              </div> 
           
           
        </div> 
        </div>
        </div>
        );
  
  const Step4 = () => (
    <div>
      <div className='grid lg:grid-cols-3 lg:m-10 justify-center sm:grid-row-2 '>
      <div class="grid grid-cols-1 col-span-2 relative divide-y border border-gray-200 rounded-lg p-3">
        <div className="grid grid-cols-3 justify-between p-3"><p className=' text-gray-400'>Contact</p><p className='text-sm  font-semibold'>Email: xyz@gmail.com <br/>Mob.No. 8788887878</p> <button className='font-roboto text-gray-500 hover:underline hover:text-blue-700 ' >Change</button></div>
        <div className="grid grid-cols-3 justify-between p-3"><p className=' text-gray-400'>Ship To</p><p className='text-sm  font-semibold'>IIT,Khapri,Nagpur Maharashtra 40001</p> <button className='font-roboto text-gray-500 hover:underline hover:text-blue-700 ' >Change</button></div>
        <div className="grid grid-cols-3 justify-between p-3"><p className=' text-gray-400'>Payment Method</p><p className='text-sm  font-semibold'>Cash On Delivery [COD]</p> <button className='font-roboto text-gray-500 hover:underline hover:text-blue-700 ' >Change</button></div>
        <div className='m-5 pt-5 justify-center  font-bold'>Additional Services
        <div className='grid grid-col-2 gap-0 lg:mr-[50%]' >
          <div class="rounded-lg md:h-1/3">
              <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <input name="service" type="radio" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">CARE + Package </h2>
                    <p class="mt-1 text-xs text-gray-500">One Month Alteration, Premium Fabric Cloths,Delivery Free</p>
                  

                  </div>
                  <div class=" lg:flex justify-between sm:space-y-6 sm:mt-0  sm:space-x-6 m-[10px]  ">
                    <div class="flex  space-x-4">
                      <p class="text-md mt-1 font-bold">₹99.00</p> 
                    </div>
                  </div>
                  
                </div>
              </div>
              </div>

      <div class="rounded-lg  md:h-1/3">
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <input name="service" type="radio" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">Environment Friendly</h2>
              <p class="mt-1 text-xs text-gray-700">Donate old cloths for green growth</p>

            </div>
            <div class="  ">
              <div class="flex  space-x-4">
                <p class="text-md mt-1 font-bold">₹9.00</p> 
              </div>
            </div>
            
          </div>
        </div>
        </div>

      </div>
      </div></div> 
     <div className="justify-center w-[250px] col-span-1 rounded-2xl sm:ml-[20%]">
            <div className="shadow-2xl rounded-2xl  ">
              <h4 className='pt-4 pl-8 pb-4 font-bold md:items-center'><span>Order Information</span></h4>
              <img src={img} className="ml-[30px] mr-[20px] mb-[5px] w-[190px] h-[180px] rounded-[10px] border border-solid border-[#cecece]"/>
              <div className="pl-[30px] pr-[30px] "><span><strong>Teal Brown Kurti Full(Cotton Silk)<h6 className='text-xs'>SIZE: <strong> XI</strong>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; COLOR:<strong> RED</strong> </h6></strong></span>
              <hr className="mt-2"></hr><b><div>
             Price Total
             </div></b>
             <div class="grid grid-cols-2 gap-4">
             <div xs={2}>
              Subtotal
              GST
              Shipping
              Coupon

        
             </div>
             <div xs={2} >
              ₹20,000/-
              ₹300/-
              ₹100/-<br/>
              ₹0/-
             </div>
             </div> 
             
              <hr className="mt-2 pl-[30px] pr-[30px]"></hr></div>
           
             <strong>
             <div class="grid grid-cols-2 gap-4">
             <div xs={2} className="pl-[30px] pr-[30px] ">
              Total
             </div>
             <div xs={2} className="pb-[20px] text-xl" >
              ₹20,400/-
                       </div>
             </div></strong>
              </div> 
           
           </div>
        
    </div></div> );

  return (
    <div className='m-5'>
     <Navbar/>
     
     <MainContainer>
      <StepContainer width={width}>
        {steps.map(({ step, label }) => (
          <StepWrapper key={step}>
            <StepStyle step={activeStep >= step ? 'completed' : 'incomplete'}>
              {activeStep > step ? (
                <CheckMark className='
                @apply text-[26px] font-semibold text-[#4ea5f4] rotate-[-46deg] -scale-x-100;
                -ms-transform: scaleX(-1) rotate(-46deg);
                /* IE 9 */
                -webkit-transform: scaleX(-1) rotate(-46deg);'>L</CheckMark>
              ) : (
                <StepCount>{step}</StepCount>
              )}
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel key={step}>{label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
     
    </MainContainer>
      <div className="flex items-center justify-center h-auto pt-[60px] ">
        <div className="bg-white p-6 rounded-lg w-full lg:max-w-5xl">
          <h2 className="text-lg font-medium mb-4 pl-5">Step {step} of 4</h2>
       
          {step === 1? <Step1/>:(step==2)?<Step2/>:(step==3)?<Step3/>:<Step4/>}
     
          
          <div className="flex justify-center gap-10  mt-6">
          {step >1 && (
              <button
                className="bg-gray-300 w-[30%]  px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400 top-0"
                onClick={handleBack}
              >
                Previous
              </button>
          )}
          {step <4 && step !=1 && (
              <button
                className="bg-blue-500 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600 top-0"
                onClick={handleNext}
              >
                Next
              </button>
           )}
          {step ==4 && (
              <button
                className="bg-blue-500 w-[30%] px-6 py-1.5 rounded-lg text-white hover:bg-blue-600"
                onClick={handleNext}  disabled={activeStep === totalSteps}
              >
                Submit
              </button>
           )}
           {step ==1 && (
              <button
                className="bg-blue-500  lg:mt-[10%] w-[30%] px-6 py-1.5 rounded-lg text-white hover:bg-blue-600"
                onClick={handleNext}  disabled={activeStep === totalSteps}
              >
                Next
              </button>
           )}
            
          </div>
            
        </div><br/>
      
        {/* {step==2? <div><img src={img} alt="logo" className="absolute bottom-0 left-0 h-[600px]"/>
             </div> : <div></div>} */}
      </div>
 
      
     
    
    </div>
  )
  


}

export default Cart