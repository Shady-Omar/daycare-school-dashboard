import React from "react";
import { Link, useLocation } from "react-router-dom";

function StaffProfileTabs() {
  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;

  return (
    <div className="flex items-start gap-2.5 self-stretch">
      <Link
        to="/staff/profile"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/staff/profile" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/staff/profile"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Profile
        </h5>
      </Link>
      <Link
        to="/staff/profile/attachments"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/staff/profile/attachments" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/staff/profile/attachments"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Attachments
        </h5>
      </Link>
      <Link
        to="/staff/profile/permissions"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/staff/profile/permissions" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/staff/profile/permissions"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Permissions
        </h5>
      </Link>
      <Link
        to="/staff/profile/activity-log"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/staff/profile/activity-log" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/staff/profile/activity-log"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Activity Log
        </h5>
      </Link>
      <Link
        to="/staff/profile/requests-log"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/staff/profile/requests-log" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/staff/profile/requests-log"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Requests Log
        </h5>
      </Link>
      <Link
        to="/staff/profile/salary-log"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/staff/profile/salary-log" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/staff/profile/salary-log"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Salary Log
        </h5>
      </Link>
      <Link
        to="/staff/profile/attendance-log"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/staff/profile/attendance-log" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/staff/profile/attendance-log"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Attendance Log
        </h5>
      </Link>
    </div>
  );
}

export default StaffProfileTabs;
