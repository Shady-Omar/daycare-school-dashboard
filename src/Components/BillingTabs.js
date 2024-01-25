import React from "react";
import { Link, useLocation } from "react-router-dom";

function BillingTabs() {
  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;

  return (
    <div className="flex items-start gap-2.5 self-stretch">
      <Link
        to="/billing"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/billing" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/billing"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Billing
        </h5>
      </Link>
      <Link
        to="/billing/refund"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/billing/refund" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/billing/refund"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Refund Log
        </h5>
      </Link>
    </div>
  );
}

export default BillingTabs;
