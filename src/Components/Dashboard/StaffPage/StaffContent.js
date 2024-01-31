import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SchoolTitle from "../../SchoolTitle";
import CreateShiftModal from "./CreateShiftModal";
import AddLeaveModal from "./AddLeaveModal";
import InviteStaffModal from "./InviteStaffModal";
import StaffAttendanceTabs from "./StaffAttendanceTabs";
import SalariesTabs from "./SalariesTabs";

import plusIcon from "../../../Assets/circle-plus-icon.svg";
import exportIcon from "../../../Assets/export-icon.svg";

function StaffContent() {
  // Get the current path using useLocation from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
      {/* Title */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-[30px] lg:gap-0 self-stretch">
        <SchoolTitle />
        {/* Conditionally render the button based on the current path */}
        {currentPath.includes("/staff") ? (
          <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-end lg:items-center gap-5 self-stretch">
            {currentPath === "/staff/shifts" ? (
              <CreateShiftModal />
            ) : currentPath === "/staff/leave" ? (
              <AddLeaveModal />
            ) : currentPath === "/staff/salaries-history" ||
              currentPath.includes("/staff/profile") ? (
              ""
            ) : (
              <Link
                to="/staff"
                className="cyan-btn flex justify-center items-center gap-3 self-stretch lg:self-auto"
              >
                <img src={plusIcon} alt="" />
                Add Staff
              </Link>
            )}

            {currentPath === "/staff/attendance" ? (
              <Link className="unactive-btn flex justify-center items-center gap-3 self-stretch lg:self-auto">
                <img src={exportIcon} alt="" />
                Export Data
              </Link>
            ) : currentPath === "/staff/shifts" ||
              currentPath === "/staff/leave" ||
              currentPath === "/staff/salaries" ||
              currentPath === "/staff/salaries-history" ||
              currentPath.includes("/staff/profile") ? (
              ""
            ) : (
              <InviteStaffModal />
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-start gap-[30px] self-stretch">
        <div className="flex flex-col items-start gap-[30px] lg:gap-0 self-stretch">
          {/* Tabs */}
          {currentPath === "/staff/attendance" ? (
            <StaffAttendanceTabs />
          ) : currentPath === "/staff/shifts" ? (
            <StaffAttendanceTabs />
          ) : currentPath.includes("/staff/salaries") ? (
            <SalariesTabs />
          ) : (
            ""
          )}
          {/* Content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default StaffContent;
