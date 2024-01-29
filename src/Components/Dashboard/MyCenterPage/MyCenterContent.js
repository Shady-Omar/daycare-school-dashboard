import React from "react";
import SchoolTitle from "../../SchoolTitle";
import { Link, Outlet, useLocation } from "react-router-dom";
import NewEventBtn from "./NewEventBtn";
import AddActivityModal from "./AddActivityModal";
import AddNewRoomModal from "./AddNewRoomModal";

import plusIcon from "../../../Assets/circle-plus-icon.svg";
import settingsIcon from "../../../Assets/settings-icon-active.svg";
import calendarArrow from "../../../Assets/arrow-calendar.svg";

function MyCenterContent() {
  // Get the current path using useLocation from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
      {/* Title */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-5 lg:gap-0 self-stretch">
        <SchoolTitle />
        {/* Conditionally render the button based on the current path */}
        {currentPath === "/my-center/room" ? (
          <AddNewRoomModal />
        ) : currentPath.includes("/my-center/room/details") ? (
          <div className="flex flex-col lg:flex-row self-stretch justify-end items-center gap-5">
            <button className="flex items-center gap-2.5 p-reg text-[#383838] order-3 lg:order-1">
              <img src={settingsIcon} alt="" />
              Room Settings
            </button>
            <button className="cyan-btn flex items-center justify-center self-stretch lg:self-auto lg:order-2">
              <img src={plusIcon} alt="" />
              Add Children
            </button>
            <AddActivityModal />
          </div>
        ) : currentPath === "/my-center/calendar" ? (
          <div className="flex self-stretch flex-col lg:flex-row justify-end items-center gap-2.5 lg:gap-5">
            <button className="white-btn flex justify-center lg:justify-between gap-2 items-center !text-[#646464] self-stretch lg:self-auto">
              November
              <img src={calendarArrow} alt="" />
            </button>
            <button className="white-btn flex justify-center lg:justify-between gap-2 items-center !text-[#646464] self-stretch lg:self-auto">
              2023
              <img src={calendarArrow} alt="" />
            </button>
            <NewEventBtn />
          </div>
        ) : (
          <Link to="/settings/payments" className="cyan-btn">
            Upgrade
          </Link>
        )}
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-start gap-[30px] self-stretch rounded-[10px]">
        <Outlet />
      </div>
    </div>
  );
}

export default MyCenterContent;
