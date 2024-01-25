import React from "react";
import { Link, useLocation } from "react-router-dom";

function StaffAttendanceTabs() {
  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;

  return (
    <div className="flex items-start gap-2.5 self-stretch">
      <Link
        to="/staff/attendance"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/staff/attendance" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/staff/attendance"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Attendance
        </h5>
      </Link>
      <Link
        to="/staff/shifts"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/staff/shifts" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/staff/shifts"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Shifts
        </h5>
      </Link>
    </div>
  );
}

export default StaffAttendanceTabs;
