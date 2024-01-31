import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SchoolTitle from "../../SchoolTitle";

import plusIcon from "../../../Assets/circle-plus-icon.svg";

function BillingPageContent() {
  // Get the current path using useLocation from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
      {/* Title */}
      <div className="flex justify-between items-center self-stretch">
        <SchoolTitle />
        {/* Conditionally render the button based on the current path */}
        {currentPath === "/billing" || currentPath === "/billing/refund" ? (
          <div className="flex justify-end items-center gap-5">
            <Link
              to="/billing/request"
              className="cyan-btn flex justify-center items-center gap-3"
            >
              <img src={plusIcon} alt="" />
              Create Invoices
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-start gap-[30px] self-stretch">
        <div className="flex flex-col items-start self-stretch">
          {/* Content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default BillingPageContent;