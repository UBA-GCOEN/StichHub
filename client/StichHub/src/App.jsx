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
import { Category } from "./components/Home";
import NewTailor from "./components/TailorDashboard/NewTailor";
import Profile from "./components/TailorDashboard/Profile";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
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
        <Route path="/home/category" element={<Category />} />
        <Route
          path="/TailorProfileVerification"
          element={<TailorProfileVerification />}
        />
        <Route path="/Configurator" element={<ThreeDConfigurator />} />
        <Route path="/measurement" element={<ThreeDMeasurement />} />
        <Route path="/TailorDashboard/Profile" element={<Profile />} />
        <Route path="/TailorDashboard/NewTailor" element={<NewTailor />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
