import { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import {
  MainLandingPage,
  CustomerLandingPage,
  Cart,
  ClothesCategory,
  FabricModel,
  FabricSelection,
  HomeOnlineVisit,
  LoginSignUp,
  TailorDashboard,
  TailorDetails,
  Home,
  TailorProfileVerification,
  ThreeDConfigurator,
  ThreeDMeasurement,
} from "./pages";
import CustomerAuth from "./components/Loginsignup/CustomerAuth";
import AuthTailor from "./components/Loginsignup/AuthTailor";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Category, CustomerOrder } from "./components/Home";
import NewTailor from "./components/TailorDashboard/NewTailor";
import Profile from "./components/TailorDashboard/Profile";
import { HomeProvider, useHCustomization } from "./contexts/Home";
import OrderConfirmation from "./components/Home/OrderConfirmation";
import PaymentSuccess from "./components/Cart/PaymentSuccess";
import PaymentFailure from "./components/Cart/PaymentFailure";
import EmailVerification from "./components/TailorProfileVerification/EmailVerification";
import axios from "./axios.js";
import Verify from "./components/TailorProfileVerification/Verify.jsx"
import { isStyledComponent } from "styled-components";



function App() {
  const navigateTo = useNavigate();
  //Imported from context
  const [isTailorLoggedIn , setIsTailorLoggedIn] = useState({
    success : "",
    message : "",
    tailorUser : {}
  })
  const [userCustomer, setUserCustomer] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const [userTailor, setUserTailor] = useState(
    JSON.parse(localStorage.getItem("tailorProfile"))
  );  
  /**  
   * fetching Tailor details  if he is logged in or his authorization token is valid 
   * 
   */
  const fetchTailorDetails = async () => {
    try {
      const fetchedTailorDetailsResponse = await axios.get("/userTailor/getmyself");
    //getting only tailor details
    console.log(fetchedTailorDetailsResponse)
    setIsTailorLoggedIn(fetchedTailorDetailsResponse.data)
    console.log(isTailorLoggedIn)
    } catch (error) {
      if(error){
        setIsTailorLoggedIn({...isTailorLoggedIn , success : false})
        
      }
    }  
   
  }

  useEffect(() => {
    console.log(isTailorLoggedIn)
    if(isTailorLoggedIn.success === false){
      localStorage.clear();
      navigateTo("/")
    }
  }, [isTailorLoggedIn])

  
  
  
  useEffect(() => {
    fetchTailorDetails();
    setUserCustomer(JSON.parse(localStorage.getItem("profile")));
    setUserTailor(JSON.parse(localStorage.getItem("tailorProfile")));
  
  }, []);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <HomeProvider>
        <Routes>
        {/* <Route path = "/" element = {<MainLandingPage />} /> */}
          {/* Landing Page */}
          {userCustomer ? (
            <Route
              path="/"
              element={
                !userCustomer ? <MainLandingPage /> : <Navigate to="/home" />
              }
            />
          ) : (
            <Route
              path="/"
              element={
                !userTailor ? (
                  <MainLandingPage />
                ) : (
                  // <Navigate to="/TailorProfileVerification" />
                  <Navigate to= "/TailorDashboard" />
                )
              }
            />
          )}

          {/* Authentication */}
          {userCustomer ? (
            <Route
              path="/auth"
              element={
                !userCustomer ? <LoginSignUp /> : <Navigate to="/home" />
              }
            />
          ) : (
            <Route
              path="/auth"
              element={
                !userTailor ? (
                  <LoginSignUp />
                ) : (
                  // <Navigate to="/TailorProfileVerification" />
                  <Navigate to= "/TailorDashboard" />
                )
              }
            />
          )}
          <Route
            path="/auth/customer"
            element={!userCustomer ? <CustomerAuth /> : <Navigate to="/home" />}
          />
          <Route
            path="/auth/tailor"
            element={
              !userTailor ? (
                <AuthTailor />
              ) : (
                // <Navigate to="/TailorProfileVerification" />
                // alert("hello 3")
                <Navigate to= "/TailorDashboard" />
              )
            }
          />
          {/* Email Verication */}
          {/* <Route path = "/verifyemail/:token" element = {<EmailVerifying />} />
          <Route exact path="/email/verification" element = {<EmailVerification />} /> */}
          <Route path="/verification" element={<EmailVerification  />} />
          <Route path="/verify-email/:token" element={<Verify />} />
          {/* Customer Side */}
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/TailorDetails"
            element={<TailorDetails />}
          />
          <Route
            path="/home/category"
            element={<Category />}
          />
          <Route
            path="/Configurator"
            element={<ThreeDConfigurator />}
          />
          <Route
            path="/measurement"
            element={<ThreeDMeasurement />}
          />
          <Route
            path="/measurement/"
            element={<ThreeDMeasurement />}
          />
          <Route
            path="/FabricModel"
            element={<FabricModel />}
          />
          <Route
            path="/OrderDetails"
            element={<OrderConfirmation />}
          />
          <Route
            path="/Cart"
            element={<Cart />}
          />
          <Route
            path="/Orders"
            element={<CustomerOrder />}
          />
          <Route
            path="/Cart/success"
            element={<PaymentSuccess />}
          />
          <Route
            path="/Cart/cancel"
            element={<PaymentFailure />}
          />
          {/* Customer Features  */}
          <Route
            path="/ClothesCategory"
            element={<ClothesCategory />}
          />
          <Route
            path="/CustomersPage"
            element={<CustomerLandingPage />}
          />

          {/* Tailor Side */}
          <Route
            path="/TailorDashboard"
            element={<TailorDashboard />}
          />
          <Route
            path="/TailorDashboard/Profile"
            element={<Profile />}
          />
          <Route
            path="/TailorDashboard/NewTailor"
            element={<NewTailor />}
          />
          <Route
            path="/TailorProfileVerification"
            element={<TailorProfileVerification />}
          />

          {/* Miscelleneous */}
          <Route
            path="/FabricSelection"
            element={<FabricSelection />}
          />
          <Route
            path="/HomeOnlineVisit"
            element={<HomeOnlineVisit />}
          />
<Route path="*" element={<div> Not Found or You do not have permission.</div>}/>

        </Routes>
      </HomeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
