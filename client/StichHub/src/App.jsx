import {Routes, Route } from "react-router-dom";
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
  TailorList,
  TailorProfileVerification,
  ThreeDConfigurator,
  ThreeDMeasurement,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLandingPage />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/ClothesCategory" element={<ClothesCategory />} />
      <Route path="/CustomerLandingPage" element={<CustomerLandingPage />} />
      <Route path="/FabricModel" element={<FabricModel />} />
      <Route path="/FabricSelection" element={<FabricSelection />} />
      <Route path="/HomeOnlineVisit" element={<HomeOnlineVisit />} />
      <Route path="/LoginSignUp" element={<LoginSignUp />} />
      <Route path="/TailorDashboard" element={<TailorDashboard />} />
      <Route path="/TailorDetails" element={<TailorDetails />} />
      <Route path="/TailorList" element={<TailorList />} />
      <Route path="/TailorProfileVerification" element={<TailorProfileVerification />}/>
      <Route path="/ThreeDConfigurator" element={<ThreeDConfigurator />} />
      <Route path="/ThreeDMeasurement" element={<ThreeDMeasurement />} />
    </Routes>
  );
}

export default App;
