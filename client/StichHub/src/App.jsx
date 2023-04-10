import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <GoogleOAuthProvider clientId={`955507694844-omici19nttqrdla81p4o1fi7d9405oe6.apps.googleusercontent.com`}>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ClothesCategory" element={<ClothesCategory />} />
        <Route path="/CustomersPage" element={<CustomerLandingPage />} />
        <Route path="/FabricModel" element={<FabricModel />} />
        <Route path="/FabricSelection" element={<FabricSelection />} />
        <Route path="/HomeOnlineVisit" element={<HomeOnlineVisit />} />
        <Route path="/auth" element={<LoginSignUp />} />
        <Route path="/auth/customer" element={<CustomerAuth />} />
        <Route path="/auth/tailor" element={<AuthTailor />} />
        <Route path="/TailorDashboard" element={<TailorDashboard />} />
        <Route path="/TailorDetails" element={<TailorDetails />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/TailorProfileVerification"
          element={<TailorProfileVerification />}
        />
        <Route path="/Configurator" element={<ThreeDConfigurator />} />
        <Route path="/ThreeDMeasurement" element={<ThreeDMeasurement />} />
        
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
