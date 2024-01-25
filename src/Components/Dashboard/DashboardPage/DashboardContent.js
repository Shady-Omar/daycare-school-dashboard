import React from "react";
import { Outlet } from "react-router-dom";

import DashboardTitle from "./DashboardTitle";
import DashboardPageTabs from "./DashboardPageTabs";

function DashboardContent() {
  return (
    <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
      {/* Title */}
      <DashboardTitle />
      {/* Main Content */}
      <div className="flex flex-col items-start gap-[30px] self-stretch">
        <DashboardPageTabs />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardContent;
