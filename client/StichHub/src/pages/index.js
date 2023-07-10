import {lazy} from 'react'

const Cart=lazy(()=>import("./Cart"))
const ClothesCategory=lazy(()=>import("./ClothesCategory"))
const CustomerLandingPage=lazy(()=>import("./CustomerLandingPage"))
const FabricModel=lazy(()=>import("./FabricModel"))
const FabricSelection=lazy(()=>import("./FabricSelection"))
const HomeOnlineVisit=lazy(()=>import("./HomeOnlineVisit"))
const LoginSignUp=lazy(()=>import("./LoginSignUp"))
const MainLandingPage=lazy(()=>import("./MainLandingPage"))
const TailorDashboard=lazy(()=>import("./TailorDashboard"))
const TailorDetails=lazy(()=>import("./TailorDetails"))
const Home=lazy(()=>import("./Home"))
const TailorProfileVerification=lazy(()=>import("./TailorProfileVerification"))
const ThreeDConfigurator=lazy(()=>import("./ThreeDConfigurator"))
const ThreeDMeasurement=lazy(()=>import("./ThreeDMeasurement"))

export {
  Cart,
  ClothesCategory,
  CustomerLandingPage,
  FabricModel,
  FabricSelection,
  HomeOnlineVisit,
  LoginSignUp,
  MainLandingPage,
  TailorDashboard,
  TailorDetails,
  Home,
  TailorProfileVerification,
  ThreeDConfigurator,
  ThreeDMeasurement,
};
