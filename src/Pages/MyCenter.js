import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import SideBar from "../Components/SideBar";
import SchoolTitle from "../Components/SchoolTitle";
import AddNewRoomModal from "../Components/AddNewRoomModal";

import searchbarIcon from "../Assets/searchbar-icon.svg";
import navEmailIcon from "../Assets/nav-email-icon.svg";
import usFlagIcon from "../Assets/usflag-Icon.svg";
import downArrow from "../Assets/down-arrow.svg";
import profileImgPlaceholder from "../Assets/profile-img-placeholder.png";
import profileArrowDown from "../Assets/profile-arrow-down.svg";

import plusIcon from "../Assets/circle-plus-icon.svg";
import settingsIcon from "../Assets/settings-icon-active.svg";
import calendarArrow from "../Assets/arrow-calendar.svg";
import AddActivityModal from "../Components/AddActivityModal";
import NewEventBtn from "../Components/NewEventBtn";

function MyCenter() {
  // Get the current path using useLocation from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex items-start bg-[#F9F9F9]">
      {/* Sidebar */}
      <SideBar />
      {/* Main page */}
      <div
        className="flex pb-[30px] flex-col items-start gap-[30px]"
        style={{ flex: "1 0 0" }}
      >
        {/* Navbar */}
        <div className="flex h-20 py-2.5 px-[30px] justify-between items-center self-stretch bg-[#FFF]">
          {/* Search bar */}
          <div className="flex w-[500px] h-12 py-[19px] px-5 items-center gap-5 relative rounded-[46px] bg-[#F6F6F6] ">
            <img src={searchbarIcon} alt="search" />

            <input
              type="text"
              placeholder="Search here"
              className="bg-[#F6F6F6] w-[500px] h-12 py-[19px] pl-0 px-5 rounded-full focus:outline-none p-reg text-[#A4A4A4] "
            />
          </div>
          {/* Nav Menu */}
          <div className="flex h-11 items-center gap-[30px]">
            <div className="flexx items-center gap-5">
              <div className="relative flex items-center w-10 h-[38.438px]">
                <img src={navEmailIcon} alt="" />
                <div
                  className="absolute right-0 -top-2 flex justify-center items-center w-5 h-5 shrink-0 rounded-[14px] bg-[#E328AF]"
                  style={{
                    border: "3px solid #FFF",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                  }}
                >
                  <p className="label-bold text-[#FFF]">1</p>
                </div>
              </div>
            </div>
            <div className=" p-[10px] cursor-pointer flex flex-row items-center gap-[14px]  rounded-[46px] border-[#F0F0F0] border-[1px]">
              <img src={usFlagIcon} alt="flag icon" />
              <p className="label-bold">EN</p>
              <img src={downArrow} alt="down arrow" />
            </div>
            <Link
              to="/settings/profile"
              className="flex pl-[30px] items-center gap-[15px]"
              style={{ borderLeft: "1px solid #EBEBEB" }}
            >
              <div className="flex w-10 h-10 items-start gap-2.5">
                <img src={profileImgPlaceholder} alt="" />
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-start">
                  <p className="p-bold text-[#383838]">Abdullah Bilal</p>
                  <p className="label-reg text-[#878787]">
                    Saud International School
                  </p>
                </div>
                <div className="w-[15px] h-2">
                  <img src={profileArrowDown} alt="" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* Page Content */}
        <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
          {/* Title */}
          <div className="flex justify-between items-center self-stretch">
            <SchoolTitle />
            {/* Conditionally render the button based on the current path */}
            {currentPath === "/my-center/room" ? (
              <AddNewRoomModal />
            ) : currentPath.includes("/my-center/room/details") ? (
              <div className="flex w-[638.5px] justify-end items-center gap-5">
                <button className="flex items-center gap-2.5 p-reg text-[#383838]">
                  <img src={settingsIcon} alt="" />
                  Room Settings
                </button>
                <button className="cyan-btn flex flex-row items-center ">
                  <img src={plusIcon} alt="" />
                  Add Children
                </button>
                <AddActivityModal />
              </div>
            ) : currentPath === "/my-center/calendar" ? (
              <div className="flex w-[638.5px] justify-end items-center gap-5">
                <button className="white-btn flex justify-between gap-2 items-center !text-[#646464]">
                  November
                  <img src={calendarArrow} alt="" />
                </button>
                <button className="white-btn flex justify-between gap-2 items-center !text-[#646464]">
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
          <div className="flex flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-[#FFF]">
            <Outlet />
            {/* <div className="flex p-[30px] flex-col items-start self-stretch rounded-[10px] bg-[#FFF]">
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCenter;
