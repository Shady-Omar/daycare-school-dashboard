import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SchoolTitle from "../../SchoolTitle";

import plusIcon from "../../../Assets/circle-plus-icon.svg";

function SupportContent() {
  // Get the current path using useLocation from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
      {/* Title */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-5 lg:gap-0 self-stretch">
        <SchoolTitle />
        {/* Conditionally render the button based on the current path */}
        {currentPath === "/support/ticket" ? (
          <div className="flex justify-end items-center gap-5 self-stretch">
            <Link
              to="/support/ticket/create"
              className="cyan-btn w-full flex justify-center items-center gap-3"
            >
              <img src={plusIcon} alt="" />
              Create Ticket
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* Main Content */}
      {/* Content */}
      <Outlet />
    </div>
  );
}

export default SupportContent;
