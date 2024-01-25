import React from "react";
import { Link, useLocation } from "react-router-dom";

function StudentsProfileTabs() {
  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;

  return (
    <div className="flex items-start gap-2.5 self-stretch">
      <Link
        to="/students/profile/activities"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/students/profile/activities" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/students/profile/activities"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Activities
        </h5>
      </Link>
      <Link
        to="/students/profile"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/students/profile" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/students/profile"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Profile
        </h5>
      </Link>
      <Link
        to="/students/profile/attachments"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/students/profile/attachments" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/students/profile/attachments"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Attachments
        </h5>
      </Link>
      <Link
        to="/students/profile/daily-report"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/students/profile/daily-report" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/students/profile/daily-report"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Daily Report
        </h5>
      </Link>
      <Link
        to="/students/profile/invoices"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/students/profile/invoices" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/students/profile/invoices"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Invoices
        </h5>
      </Link>
    </div>
  );
}

export default StudentsProfileTabs;
