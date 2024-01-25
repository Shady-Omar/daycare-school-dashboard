import React from "react";
import { Link, useLocation } from "react-router-dom";

function ReportingTabs() {
  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;
  return (
    <div className="flex items-start gap-2.5 self-stretch">
      <Link
        to="/report/attendance"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/report/attendance" || currentPath === "/report"
            ? "bg-[#FFF]"
            : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/report/attendance" || currentPath === "/report"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Attendance Report
        </h5>
      </Link>
      <Link
        to="/report/daily"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/report/daily" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/report/daily"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Daily Report
        </h5>
      </Link>
    </div>
  );
}

export default ReportingTabs;
