import React from "react";

import AdmissionCards from "../../AdmissionCards";
import { Outlet } from "react-router-dom";

function AdmissionContent() {
  return (
    <div className="bg-[#FFF]">
      <div
        className="flex items-start gap-[30px] self-stretch bg-[#FFF]"
        style={{
          padding: "20px 20px 0px 20px",
          borderRadius: "10px 10px 0px 0px",
        }}
      >
        {/* cards */}
        <AdmissionCards />
      </div>
      <Outlet />
    </div>
  );
}

export default AdmissionContent;
