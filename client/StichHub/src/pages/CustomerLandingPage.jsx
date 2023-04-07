import React from "react";
import Navbardark from "../components/Navbardark.jsx";
import PageContent from "../components/CustomerLandingPage/PageContent";
import Worried from "../components/CustomerLandingPage/Worried";
const CustomerLandingPage = () => {
  return (
    <div className="bg-primary p-2 w-screen h-screen overflow-x-hidden">
      {/* NAV START */}
      <Navbardark />
      {/* NAV END */}

      {/* Central Content */}
      <PageContent />
      <div className="">
        {/* Section 2 for models in spline*/}

        <Worried />
      </div>
    </div>
  );
};

export default CustomerLandingPage;
