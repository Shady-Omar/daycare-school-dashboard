import React from "react";
import { Link } from "react-router-dom";

import profilePlaceholder from "../../../Assets/profile-img-placeholder.png";
import editIcon from "../../../Assets/pencil-edit-icon.svg";
import ChangePasswordModal from "./ChangePasswordModal";

function Profile() {
  return (
    <div className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch rounded-[10px] bg-[#FFF]">
      <div
        className="flex pb-5 flex-col lg:flex-row lg:justify-between items-start lg:items-center self-stretch"
        style={{ borderBottom: "1px solid #DCDCDC" }}
      >
        <div className="flex items-center gap-[30px]">
          <div className="flex items-start gap-2.5 relative">
            <img
              className="w-[70px] h-[70px] rounded-lg lg:rounded-[10px]"
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
          <div className="flex flex-col justify-center items-start gap-[5px]">
            <h3 className="h3-bold text-[#383838]">Abdullah Bilal</h3>
            <p className="p-reg text-[#878787] text-left">
              Saud International School
            </p>
          </div>
        </div>
        <Link to="/settings/edit-profile" className="hidden lg:block cyan-btn">
          Edit Profile
        </Link>
      </div>
      <div className="lg:grid grid-cols-2 flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center lg:content-center gap-[30px] self-stretch">
        <div
          className="flex self-stretch flex-col items-start gap-2"
          style={{ flex: "1 0 0" }}
        >
          <label className="label text-[#868686]">Full Name</label>
          <input
            type="text"
            className="flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#EDEDED]"
            style={{ border: "1px solid #DBDADE" }}
            placeholder=""
          />
        </div>

        <div
          className="flex self-stretch flex-col items-start gap-2"
          style={{ flex: "1 0 0" }}
        >
          <label className="label text-[#868686]">Center</label>
          <input
            type="text"
            className="flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#EDEDED]"
            style={{ border: "1px solid #DBDADE" }}
            placeholder=""
          />
        </div>
        <div
          className="flex self-stretch flex-col items-start gap-2"
          style={{ flex: "1 0 0" }}
        >
          <label className="label text-[#868686]">Contact Number</label>
          <select
            className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#EDEDED] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
            style={{ border: "1px solid #DBDADE" }}
            defaultValue={"Select"}
          >
            <option value="Select">Select</option>
            {/* <option value="PM">PM</option> */}
          </select>
        </div>
        <div
          className="flex self-stretch flex-col items-start gap-2"
          style={{ flex: "1 0 0" }}
        >
          <label className="label text-[#868686]">Email ID</label>
          <select
            className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#EDEDED] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
            style={{ border: "1px solid #DBDADE" }}
            defaultValue={"Select"}
          >
            <option value="Select">Select</option>
            {/* <option value="PM">PM</option> */}
          </select>
        </div>
        <div
          className="flex self-stretch flex-col items-start gap-2"
          style={{ flex: "1 0 0" }}
        >
          <label className="label text-[#868686]">Center Website</label>
          <input
            type="text"
            className="flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#EDEDED]"
            style={{ border: "1px solid #DBDADE" }}
            placeholder=""
          />
        </div>
        <div
          className="flex self-stretch flex-col items-start gap-2"
          style={{ flex: "1 0 0" }}
        >
          <label className="label text-[#868686]">Country</label>
          <input
            type="text"
            className="flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#EDEDED]"
            style={{ border: "1px solid #DBDADE" }}
            placeholder=""
          />
        </div>
        <div
          className="flex flex-col lg:flex-row justify-end lg:justify-normal col-span-2 items-start lg:items-end gap-5 lg:gap-[30px] self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <div
            className="flex self-stretch flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Password</label>
            <input
              type="text"
              className="flex h-[50px]  px-5 items-center self-stretch rounded-[10px] bg-[#EDEDED]"
              style={{ border: "1px solid #DBDADE" }}
              placeholder=""
            />
          </div>
          <ChangePasswordModal />
        </div>
      </div>
      <Link
        to="/settings/edit-profile"
        className="lg:hidden cyan-btn self-stretch"
      >
        Edit Profile
      </Link>
    </div>
  );
}

export default Profile;
