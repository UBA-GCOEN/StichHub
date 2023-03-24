import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to="/"></Link>

      <Link to="/Cart"></Link>

      <Link to="/ClothesCategory"></Link>

      <Link to="/CustomerLandingPage"></Link>

      <Link to="/FabricModel"></Link>

      <Link to="/FabricSelection"></Link>

      <Link to="/HomeOnlineVisit"></Link>

      <Link to="/LoginSignUp"></Link>

      <Link to="/TailorDashboard"></Link>

      <Link to="/TailorDetails"></Link>

      <Link to="/TailorList"></Link>

      <Link to="/TailorProfileVerification"></Link>

      <Link to="/ThreeDConfigurator"></Link>

      <Link to="/ThreeDMeasurement"></Link>

      <Outlet />
    </>
  );
};

export default Layout;
