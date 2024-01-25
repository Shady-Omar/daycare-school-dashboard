import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import SchoolTitle from "../../SchoolTitle";
import SettingsTabs from "./SettingsTabs";

function SettingsContent() {
  // Get the current path using useLocation from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
      {/* Title */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-5 lg:gap-0 self-stretch">
        <SchoolTitle />
        {currentPath === "/settings/profile" ? (
          ""
        ) : currentPath === "/settings/edit-profile" ? (
          ""
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
      <div className="flex flex-col items-start gap-[30px] self-stretch">
        <div className="flex flex-col gap-[30px] lg:gap-0 items-start self-stretch">
          {/* Tabs */}
          {currentPath === "/settings/payments" ? (
            ""
          ) : currentPath === "/settings/profile" ? (
            ""
          ) : currentPath === "/settings/edit-profile" ? (
            ""
          ) : (
            <SettingsTabs />
          )}

          {/* Content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SettingsContent;
