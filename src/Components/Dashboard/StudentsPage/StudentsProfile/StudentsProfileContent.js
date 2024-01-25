import React from "react";

import profilePlaceholder from "../../../../Assets/profile-img-placeholder.png";
import editIcon from "../../../../Assets/pencil-edit-icon.svg";
import StudentsProfileTabs from "../../../StudentsProfileTabs";
import { Outlet } from "react-router-dom";

function StudentsProfileContent() {
  return (
    <div className="flex flex-col items-start gap-[30px] self-stretch">
      {/* Profile name */}
      <div className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch rounded-[10px] bg-white">
        <div className="flex items-center gap-[30px] self-stretch">
          <div className="flex items-center gap-[30px]">
            {/* Picture */}
            <div className="flex items-start gap-2.5 relative">
              <img
                className="w-[70px] h-[70px] rounded-[10px]"
                src={profilePlaceholder}
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
              <h3 className="h3-bold text-[#383838]">Abdullah Zubair</h3>
              <p className="p-reg text-[#878787]">8 years old</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch">
        <StudentsProfileTabs />
        <Outlet />
      </div>
    </div>
  );
}

export default StudentsProfileContent;
