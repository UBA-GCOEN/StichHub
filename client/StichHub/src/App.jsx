import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Category, CustomerOrder } from "./components/Home";
import { HomeProvider, useHCustomization } from "./contexts/Home";

const CustomerAuth=lazy(()=>import("./components/Loginsignup/CustomerAuth"))
const AuthTailor=lazy(()=>import("./components/Loginsignup/AuthTailor"))
const NewTailor=lazy(()=>import("./components/TailorDashboard/NewTailor"))
const Profile=lazy(()=>import("./components/TailorDashboard/Profile"))
const OrderConfirmation=lazy(()=>import("./components/Home/OrderConfirmation"))
const PaymentSuccess=lazy(()=>import("./components/Cart/PaymentSuccess"))
const PaymentFailure=lazy(()=>import("./components/Cart/PaymentFailure"))
const ErrorPage=lazy(()=>import("./components/ErrorPage/404ErrorPage"))

function App() {
  const [userCustomer, setUserCustomer] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const [userTailor, setUserTailor] = useState(
    JSON.parse(localStorage.getItem("tailorProfile"))
  );

  useEffect(() => {
    setUserCustomer(JSON.parse(localStorage.getItem("profile")));
    setUserTailor(JSON.parse(localStorage.getItem("tailorProfile")));
  }, []);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Suspense fallback={<div className="flex justify-center items-center h-screen"><img src="./public/loading_animation.svg" alt="loading..." /></div>}>
        <HomeProvider>
          <Routes>
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
                    <Navigate to="/TailorProfileVerification" />
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
                    <Navigate to="/TailorProfileVerification" />
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
                  <Navigate to="/TailorProfileVerification" />
                )
              }
            />

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
            <Route
              path="*"
              element={<ErrorPage/>}
            />
          </Routes>
        </HomeProvider>
      </Suspense>
    </GoogleOAuthProvider>
  );
}

export default App;
