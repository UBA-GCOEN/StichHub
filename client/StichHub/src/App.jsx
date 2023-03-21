import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  Layout,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainLandingPage />} /> {/* Siddhant Patil */}
          <Route path="Cart" element={<Cart />} /> {/* Vishal */}
          <Route path="ClothesCategory" element={<ClothesCategory />} />
          {/* Vishal */}
          <Route
            path="CustomerLandingPage"
            element={<CustomerLandingPage />}
          />{" "}
          {/* Harshal */}
          <Route path="FabricModel" element={<FabricModel />} /> {/* Harshal */}
          <Route path="FabricSelection" element={<FabricSelection />} />
          {/* Harshal */}
          <Route path="HomeOnlineVisit" element={<HomeOnlineVisit />} />
          {/* Saurabh */}
          <Route path="LoginSignUp" element={<LoginSignUp />} /> {/* Saurabh */}
          <Route path="TailorDashboard" element={<TailorDashboard />} />
          {/* Naresh */}
          <Route path="TailorDetails" element={<TailorDetails />} />
          {/* Naresh */}
          <Route path="TailorList" element={<TailorList />} /> {/* Naresh */}
          <Route
            path="TailorProfileVerification"
            element={<TailorProfileVerification />}
          />
          {/* Vishal */}
          <Route path="ThreeDConfigurator" element={<ThreeDConfigurator />} />
          {/* Siddhant Patil */}
          <Route path="ThreeDMeasurement" element={<ThreeDMeasurement />} />
          {/* Siddhant Patil */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
