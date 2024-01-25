import React from "react";
import { Link, useLocation } from "react-router-dom";

function SalariesTabs() {
  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;

  return (
    <div className="flex items-start gap-2.5 self-stretch">
      <Link
        to="/staff/salaries"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/staff/salaries" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/staff/salaries"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Salaries
        </h5>
      </Link>
      <Link
        to="/staff/salaries-history"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/staff/salaries-history" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/staff/salaries-history"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Salaries History
        </h5>
      </Link>
    </div>
  );
}

export default SalariesTabs;
