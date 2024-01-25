import React from "react";
import SchoolTitle from "../../SchoolTitle";
import { Link, Outlet, useLocation } from "react-router-dom";

import plusIcon from "../../../Assets/circle-plus-icon.svg";
import exportIcon from "../../../Assets/export-icon.svg";
import AddNewChildrenModal from "../../AddNewChildrenModal";

function StudentsContent() {
  // Get the current path using useLocation from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
      {/* Title */}
      <div className="flex justify-between items-center self-stretch">
        <SchoolTitle />
        {/* Conditionally render the button based on the current path */}
        {currentPath === "/students/attendance" ? (
          <div className="flex justify-end items-center gap-5">
            <Link
              to="/students/add"
              className="cyan-btn flex justify-center items-center gap-3"
            >
              <img src={plusIcon} alt="" />
              Add Children
            </Link>
            <Link className="unactive-btn flex justify-center items-center gap-3">
              <img src={exportIcon} alt="" />
              Export Data
            </Link>
          </div>
        ) : currentPath === "/students/list" ? (
          <div className="flex justify-end items-center gap-5">
            <Link
              to="/students/add"
              className="cyan-btn flex justify-center items-center gap-3"
            >
              <img src={plusIcon} alt="" />
              Add New Student
            </Link>
            <Link className="unactive-btn flex justify-center items-center gap-3">
              <img src={exportIcon} alt="" />
              Export Data
            </Link>
          </div>
        ) : currentPath === "/students/admission" ? (
          <AddNewChildrenModal />
        ) : currentPath === "/students/admission/total-children" ? (
          <AddNewChildrenModal />
        ) : currentPath === "/students/admission/applied" ? (
          <AddNewChildrenModal />
        ) : currentPath === "/students/add" ? (
          ""
        ) : currentPath.includes("/students/profile") ? (
          ""
        ) : (
          <Link to="/settings/payments" className="cyan-btn">
            Upgrade
          </Link>
        )}
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-start gap-[30px] self-stretch rounded-[10px]">
        <div className="flex flex-col items-start self-stretch rounded-[10px] gap-[30px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default StudentsContent;
