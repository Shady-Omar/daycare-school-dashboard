import React from "react";

import { Link, Outlet, useLocation } from "react-router-dom";
import SchoolTitle from "../../SchoolTitle";

import NewCouponModal from "./NewCouponModal";

function ServicesContent() {
  // Get the current path using useLocation from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;

  // Check if the current path is "/services/coupons"
  const isCouponPage = currentPath === "/services/coupons";
  return (
    <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
      {/* Title */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-5 lg:gap-0 self-stretch">
        <SchoolTitle />
        {/* Conditionally render the button based on the current path */}
        {isCouponPage ? (
          <NewCouponModal />
        ) : (
          <Link
            to="/settings/payments"
            className="cyan-btn self-stretch lg:self-auto"
          >
            Upgrade
          </Link>
        )}
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-start gap-[30px] self-stretch rounded-[10px]">
        <div className="flex p-5 lg:p-[30px] flex-col items-start justify-center lg:justify-normal self-stretch rounded-[10px] bg-[#FFF]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ServicesContent;
