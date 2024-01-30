import React from "react";
import { Outlet } from "react-router-dom";

import StaffProfileTabs from "../../../StaffProfileTabs";

import staffPlaceholder from "../../../../Assets/staff-placeholder.png";
import editIcon from "../../../../Assets/pencil-edit-icon.svg";

function StaffProfile() {
  return (
    <div className="flex flex-col items-start gap-[30px] self-stretch">
      {/* Row 1 */}
      <div className="flex p-[30px] flex-col items-start justify-center gap-[30px] self-stretch rounded-[10px] bg-white">
        <div className="flex items-center gap-[30px] self-stretch">
          <div className="flex items-center gap-[30px]">
            {/* Picture */}
            <div className="flex items-start gap-2.5 relative">
              <img
                className="w-[70px] h-[70px] rounded-[10px]"
                src={staffPlaceholder}
                alt=""
              />
              <div
                className="flex w-[21px] cursor-pointer h-[21px] items-center justify-center gap-2.5 right-[-10px] bottom-0 rounded-[90px] bg-[#00CCB6] absolute"
                style={{ border: "2px solid #FFF" }}
              >
                <img src={editIcon} alt="edit" />
              </div>
            </div>
            {/* Text */}
            <div className="flex flex-col justify-center items-start gap-[5px]">
              <h3 className="h3-bold text-[#383838]">Muhammad Ashraf</h3>
              <p className="p-reg text-[#878787]">moh.ashraf@email.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Row 2 */}
      <div className="flex flex-col items-start self-stretch">
        <StaffProfileTabs />
        <Outlet />
      </div>
    </div>
  );
}

export default StaffProfile;
