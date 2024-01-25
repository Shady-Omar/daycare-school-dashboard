import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SettingsMenu from "./SettingsMenu";

import logo from "../Assets/Logo.svg";
import logoCollapsed from "../Assets/sidebar-collapse-logo.svg";
import burgerMenu from "../Assets/hamburgermenu.svg";
import dashboardIcon from "../Assets/dashboard-icon.svg";
import dashboardIconActive from "../Assets/dashboard-icon-active.svg";
import messagingIcon from "../Assets/messaging-icon.svg";
import messagingIconActive from "../Assets/messaging-icon-active.svg";
import billingIcon from "../Assets/billing-icon.svg";
import billingIconActive from "../Assets/billing-icon-active.svg";
import articlesIcon from "../Assets/articles-icon.svg";
import articlesIconActive from "../Assets/articles-icon-active.svg";
import reportIcon from "../Assets/report-icon.svg";
import reportIconActive from "../Assets/report-icon-active.svg";
import reviewIcon from "../Assets/review-icon.svg";
import reviewIconActive from "../Assets/review-icon-active.svg";
import supportIcon from "../Assets/support-icon.svg";
import supportIconActive from "../Assets/support-icon-active.svg";
import ServicesMenu from "./ServicesMenu";
import StudentsMenu from "./StudentsMenu";
import MyCenterMenu from "./MyCenterMenu";
import StaffMenu from "./StaffMenu";

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;

  // For Expand and collapse sidebar:
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`hidden lg:flex ${
        collapsed ? "w-[101px]" : "w-[260px]"
      }  flex-col justify-between items-start shrink-0 self-stretch bg-[#FFF] z-10 transition-all`}
      style={{ boxShadow: "18px 4px 35px 0px rgba(0, 0, 0, 0.06)" }}
    >
      {/* sidebar Main */}
      <div className="flex flex-col items-start gap-5 self-stretch">
        {/* sidebar header */}
        <div
          className={`flex h-20 ${
            collapsed
              ? "p-5 w-[102px] gap-1"
              : "py-5 px-[30px] self-stretch justify-between"
          }  items-center `}
        >
          {collapsed ? (
            <div className="w-8 h-[29px]">
              <img src={logoCollapsed} alt="logo" />
            </div>
          ) : (
            <div className="w-[141px] h-[29.375px]">
              <img src={logo} alt="logo" />
            </div>
          )}

          <button className=" focus:outline-none" onClick={toggleSidebar}>
            <img src={burgerMenu} alt="" />
          </button>
        </div>
        {/* sidebar menus */}
        <div
          className={`flex pl-[30px] flex-col items-start gap-[30px] ${
            collapsed ? "" : "self-stretch"
          } `}
        >
          {/* Main Menu */}
          <div
            className={`flex flex-col items-start gap-[15px] ${
              collapsed ? "w-[71px]" : "self-stretch"
            } `}
          >
            {collapsed ? (
              <p className="label-semi text-[#C7C7C7] !text-[12px]">MAIN</p>
            ) : (
              <h6 className="h6-bold text-[#C7C7C7]">MAIN MENU</h6>
            )}
            {/* Menu Items */}
            <div className="flex flex-col items-start gap-2.5 self-stretch">
              <Link
                to="/dashboard"
                className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                style={{
                  borderRight: `${
                    currentPath.includes("dashboard") || currentPath === "/"
                      ? "5px solid #00CCB6"
                      : ""
                  }`,
                }}
              >
                <div className="flex items-center gap-[15px]">
                  <div className="w-7 h-7">
                    {currentPath.includes("dashboard") ||
                    currentPath === "/" ? (
                      <img src={dashboardIconActive} alt="dashboard" />
                    ) : (
                      <img src={dashboardIcon} alt="dashboard" />
                    )}
                  </div>
                  {!collapsed && (
                    <h5
                      className={` ${
                        currentPath.includes("dashboard") || currentPath === "/"
                          ? "h5-bold !text-lg text-[#00CCB6]"
                          : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                      } `}
                    >
                      Dashboard
                    </h5>
                  )}
                </div>
                <div></div>
              </Link>
              <ServicesMenu collapsed={collapsed} />
              <MyCenterMenu collapsed={collapsed} />
              <StudentsMenu collapsed={collapsed} />
              <Link
                to="/chat"
                className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                style={{
                  borderRight: `${
                    currentPath.includes("chat") ? "5px solid #00CCB6" : ""
                  }`,
                }}
              >
                <div className="flex items-center gap-[15px]">
                  <div className="w-7 h-7">
                    {currentPath.includes("chat") ? (
                      <img src={messagingIconActive} alt="messaging" />
                    ) : (
                      <img src={messagingIcon} alt="messaging" />
                    )}
                  </div>
                  {!collapsed && (
                    <h5
                      className={` ${
                        currentPath.includes("chat")
                          ? "h5-bold !text-lg text-[#00CCB6]"
                          : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                      } `}
                    >
                      Messaging
                    </h5>
                  )}
                </div>
                {!collapsed && (
                  <div className="flex items-center gap-2.5">
                    <div className="flex justify-center items-center w-[29px] h-[29.264px] rounded-full text-[#FFFFFF] bg-[#5ECFFF]">
                      1
                    </div>
                  </div>
                )}
              </Link>
              <Link
                to="/billing"
                className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                style={{
                  borderRight: `${
                    currentPath.includes("billing") ? "5px solid #00CCB6" : ""
                  }`,
                }}
              >
                <div className="flex items-center gap-[15px]">
                  <div className="w-7 h-7">
                    {currentPath.includes("billing") ? (
                      <img src={billingIconActive} alt="billing" />
                    ) : (
                      <img src={billingIcon} alt="billing" />
                    )}
                  </div>
                  {!collapsed && (
                    <h5
                      className={` ${
                        currentPath.includes("billing")
                          ? "h5-bold !text-lg text-[#00CCB6]"
                          : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                      } `}
                    >
                      Billing
                    </h5>
                  )}
                </div>
              </Link>
              <StaffMenu collapsed={collapsed} />
              <Link
                to="/articles"
                className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                style={{
                  borderRight: `${
                    currentPath.includes("articles") ? "5px solid #00CCB6" : ""
                  }`,
                }}
              >
                <div className="flex items-center gap-[15px]">
                  <div className="w-7 h-7">
                    {currentPath.includes("articles") ? (
                      <img src={articlesIconActive} alt="articles" />
                    ) : (
                      <img src={articlesIcon} alt="articles" />
                    )}
                  </div>
                  {!collapsed && (
                    <h5
                      className={` ${
                        currentPath.includes("articles")
                          ? "h5-bold !text-lg text-[#00CCB6]"
                          : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                      } `}
                    >
                      Articles
                    </h5>
                  )}
                </div>
              </Link>
              <Link
                to="/report"
                className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                style={{
                  borderRight: `${
                    currentPath.includes("/report") ? "5px solid #00CCB6" : ""
                  }`,
                }}
              >
                <div className="flex items-center gap-[15px]">
                  <div className="w-7 h-7">
                    {currentPath.includes("/report") ? (
                      <img src={reportIconActive} alt="reporting" />
                    ) : (
                      <img src={reportIcon} alt="reporting" />
                    )}
                  </div>
                  {!collapsed && (
                    <h5
                      className={` ${
                        currentPath.includes("/report")
                          ? "h5-bold !text-lg text-[#00CCB6]"
                          : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                      } `}
                    >
                      Reporting
                    </h5>
                  )}
                </div>
              </Link>
              <Link
                to="/review"
                className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                style={{
                  borderRight: `${
                    currentPath.includes("review") ? "5px solid #00CCB6" : ""
                  }`,
                }}
              >
                <div className="flex items-center gap-[15px]">
                  <div className="w-7 h-7">
                    {currentPath.includes("review") ? (
                      <img src={reviewIconActive} alt="review" />
                    ) : (
                      <img src={reviewIcon} alt="review" />
                    )}
                  </div>
                  {!collapsed && (
                    <h5
                      className={` ${
                        currentPath.includes("review")
                          ? "h5-bold !text-lg text-[#00CCB6]"
                          : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                      } `}
                    >
                      Reviews
                    </h5>
                  )}
                </div>
                {!collapsed && (
                  <div className="flex items-center gap-2.5">
                    <div className="flex justify-center items-center w-[29px] h-[29.264px] rounded-full text-[#FFFFFF] bg-[#5ECFFF]">
                      1
                    </div>
                  </div>
                )}
              </Link>
            </div>
          </div>
          {/* Support Menu */}
          <div
            className={`flex flex-col items-start gap-[15px] ${
              collapsed ? "w-[71px]" : "self-stretch"
            } `}
          >
            {collapsed ? (
              <p className="label-semi text-[#C7C7C7] !text-[12px]">SUPPORT</p>
            ) : (
              <h6 className="h6-bold text-[#C7C7C7]">SUPPORT MENU</h6>
            )}

            <div className="flex flex-col items-start gap-2.5 self-stretch">
              <SettingsMenu collapsed={collapsed} />
              <Link
                to="/support"
                className="flex h-[50px] cursor-pointer pr-5 justify-between items-center self-stretch bg-[#FFF]"
                style={{
                  borderRight: `${
                    currentPath.includes("support") ? "5px solid #00CCB6" : ""
                  }`,
                }}
              >
                <div className="flex items-center gap-[15px]">
                  <div className="w-7 h-7">
                    {currentPath.includes("support") ? (
                      <img src={supportIconActive} alt="support" />
                    ) : (
                      <img src={supportIcon} alt="support" />
                    )}
                  </div>
                  {!collapsed && (
                    <h5
                      className={` ${
                        currentPath.includes("support")
                          ? "h5-bold !text-lg text-[#00CCB6]"
                          : "h5-semi text-[#A4A4A4] hover:text-[#00CCB6] transition-all"
                      } `}
                    >
                      Support
                    </h5>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar Footer */}
      {!collapsed && (
        <footer className="flex p-[30px] flex-col items-start gap-1.5 self-stretch">
          <p className="sidebar-footer text-left self-stretch">
            © 2023 DayCare, All Rights Reserved.
          </p>
        </footer>
      )}
    </div>
  );
}

export default SideBar;
