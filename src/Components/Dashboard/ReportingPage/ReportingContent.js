import React from "react";
import { Outlet } from "react-router-dom";
import SchoolTitle from "../../SchoolTitle";
import ExportReportModal from "./ExportReportModal";
import ReportingTabs from "./ReportingTabs";

function ReportingContent() {
  return (
    <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
      {/* Title */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-5 lg:gap-0 self-stretch">
        <SchoolTitle />
        {/* Conditionally render the button based on the current path */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-end lg:items-center gap-5 self-stretch">
          <button className="white-btn flex justify-center items-center gap-3 self-stretch lg:self-auto">
            Print
          </button>
          <ExportReportModal />
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-start gap-[30px] self-stretch">
        <div className="flex flex-col gap-10 lg:gap-0 items-start self-stretch">
          {/* Tabs */}
          <ReportingTabs />
          {/* Content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ReportingContent;
