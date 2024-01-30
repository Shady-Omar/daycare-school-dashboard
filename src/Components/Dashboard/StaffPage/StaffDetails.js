import React from "react";

import whitePlusIcon from "../../../Assets/plus-white-btn.svg";

function StaffDetails() {
  return (
    <div className="flex flex-col items-start gap-[30px] self-stretch">
      <div className="flex flex-col lg:grid grid-cols-3 items-start self-stretch rounded-[10px] bg-white">
        {/* Left Side */}
        <div className="flex col-span-1 self-stretch p-5 lg:py-[50px] lg:px-[30px] flex-col justify-start items-center gap-[30px] rounded-[10px] bg-white">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <label className="label text-[#868686]">Search staff</label>
            <input
              type="text"
              className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DBDADE" }}
              placeholder="Enter Staff Name"
            />
          </div>
        </div>
        {/* Right Side */}
        <div className="flex col-span-2 self-stretch flex-col py-[30px] lg:py-[50px] px-5 lg:px-[30px] justify-center items-start content-start gap-[30px] rounded-[10px] bg-white">
          <div className="flex flex-col lg:grid grid-cols-2 gap-[30px] self-stretch">
            <div
              className="flex self-stretch flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">Name</label>
              <input
                type="text"
                className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DBDADE" }}
                placeholder="Enter Name"
              />
            </div>
            <div
              className="flex self-stretch flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">ID NUMBER</label>
              <input
                type="text"
                className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DBDADE" }}
                placeholder="Enter ID Number"
              />
            </div>
            <div
              className="flex self-stretch flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">Gender</label>
              <select
                className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
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
              <label className="label text-[#868686]">Nationality</label>
              <select
                className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
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
              <label className="label text-[#868686]">Email</label>
              <input
                type="text"
                className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DBDADE" }}
                placeholder="Enter Email"
              />
            </div>
            <div
              className="flex self-stretch flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">enter phone number</label>
              <input
                type="text"
                className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DBDADE" }}
                placeholder="Enter phone number"
              />
            </div>
            <div
              className="flex self-stretch flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">Role Title</label>
              <select
                className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
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
              <label className="label text-[#868686]">Contract Type</label>
              <select
                className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                style={{ border: "1px solid #DBDADE" }}
                defaultValue={"Select"}
              >
                <option value="Select">Select</option>
                {/* <option value="PM">PM</option> */}
              </select>
            </div>
            <div
              className="flex  flex-col justify-center items-start gap-[15px] col-span-2"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex  flex-col items-start gap-2 self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">Work Shift</label>
                <select
                  className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                  style={{ border: "1px solid #DBDADE" }}
                  defaultValue={"Select"}
                >
                  <option value="Select">Select</option>
                  {/* <option value="PM">PM</option> */}
                </select>
              </div>
              <button className="white-btn self-stretch !h-auto">
                Create Shift
              </button>
            </div>
            <div
              className="flex  flex-col justify-center items-start gap-[15px] col-span-2"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex flex-col items-start gap-2 self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">
                  Leave days per year{" "}
                </label>
                <input
                  type="text"
                  className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                  style={{ border: "1px solid #DBDADE" }}
                  placeholder="Enter number"
                />
              </div>
              <div className="flex items-center gap-2.5">
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
                <p className="p-reg text-[#646464] text-left">
                  Leave can be used during preparation
                </p>
              </div>
            </div>
            <div
              className="flex self-stretch flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">probation period</label>
              <select
                className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
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
              <label className="label text-[#868686]">probation Days</label>
              <select
                className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
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
              <label className="label text-[#868686]">Start Date</label>
              <input
                type="date"
                className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DBDADE" }}
              />
            </div>
            <div
              className="flex self-stretch flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">End Date</label>
              <input
                type="date"
                className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DBDADE" }}
              />
            </div>
          </div>
          <div
            className="flex flex-col items-start gap-2 self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex items-start gap-1 self-stretch">
              <p className="label text-[#868686]">Salaries</p>
            </div>
            <div
              className="flex p-5 items-center flex-col content-center gap-[15px] self-stretch rounded-[10px] bg-white"
              style={{ border: "1px solid #DBDADE" }}
            >
              <div className="flex flex-col lg:grid grid-cols-3 gap-[15px] self-stretch">
                <div
                  className="flex self-stretch flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">Basic Salary</label>
                  <div className="flex items-start gap-[-1px] self-stretch">
                    <input
                      type="text"
                      className="w-full h-[50px] px-5 bg-[#FFF]"
                      style={{
                        borderRadius: "10px 0px 0px 10px",
                        border: "1px solid #DBDADE",
                        borderRight: "none",
                      }}
                    />
                    <div
                      className="flex w-full h-[50px] justify-end pr-4 items-center"
                      style={{
                        borderRadius: "0px 10px 10px 0px",
                        border: "1px solid #DBDADE",
                        borderLeft: "none",
                      }}
                    >
                      <p className="p-reg text-[#646464]">SAR</p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex self-stretch flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">Housing</label>
                  <div className="flex items-start gap-[-1px] self-stretch">
                    <input
                      type="text"
                      className="w-full h-[50px] px-5 bg-[#FFF]"
                      style={{
                        borderRadius: "10px 0px 0px 10px",
                        border: "1px solid #DBDADE",
                        borderRight: "none",
                      }}
                    />
                    <div
                      className="flex w-full h-[50px] justify-end pr-4 items-center"
                      style={{
                        borderRadius: "0px 10px 10px 0px",
                        border: "1px solid #DBDADE",
                        borderLeft: "none",
                      }}
                    >
                      <p className="p-reg text-[#646464]">SAR</p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex self-stretch flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">OTHERS</label>
                  <div className="flex items-start gap-[-1px] self-stretch">
                    <input
                      type="text"
                      className="w-full h-[50px] px-5 bg-[#FFF]"
                      style={{
                        borderRadius: "10px 0px 0px 10px",
                        border: "1px solid #DBDADE",
                        borderRight: "none",
                      }}
                    />
                    <div
                      className="flex w-full h-[50px] justify-end pr-4 items-center"
                      style={{
                        borderRadius: "0px 10px 10px 0px",
                        border: "1px solid #DBDADE",
                        borderLeft: "none",
                      }}
                    >
                      <p className="p-reg text-[#646464]">SAR</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:grid grid-cols-2 gap-[15px] self-stretch">
                <div
                  className="flex self-stretch flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">Total Salary</label>
                  <div className="flex items-start gap-[-1px] self-stretch">
                    <input
                      type="text"
                      className="w-full h-[50px] px-5 bg-[#FFF]"
                      style={{
                        borderRadius: "10px 0px 0px 10px",
                        border: "1px solid #DBDADE",
                        borderRight: "none",
                      }}
                    />
                    <div
                      className="flex w-full h-[50px] justify-end pr-4 items-center"
                      style={{
                        borderRadius: "0px 10px 10px 0px",
                        border: "1px solid #DBDADE",
                        borderLeft: "none",
                      }}
                    >
                      <p className="p-reg text-[#646464]">SAR</p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex self-stretch flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">Gosi Deduction</label>
                  <div className="flex items-start gap-[-1px] self-stretch">
                    <input
                      type="text"
                      className="w-full h-[50px] px-5 bg-[#FFF]"
                      style={{
                        borderRadius: "10px 0px 0px 10px",
                        border: "1px solid #DBDADE",
                        borderRight: "none",
                      }}
                    />
                    <div
                      className="flex w-full h-[50px] justify-end pr-4 items-center"
                      style={{
                        borderRadius: "0px 10px 10px 0px",
                        border: "1px solid #DBDADE",
                        borderLeft: "none",
                      }}
                    >
                      <p className="p-reg text-[#646464]">SAR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-start gap-2 self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex items-start gap-1 self-stretch">
              <p className="label text-[#868686]">Contract terms</p>
            </div>
            <div
              className="flex p-5 items-center flex-col content-center gap-[15px] self-stretch rounded-[10px] bg-white"
              style={{ border: "1px solid #DBDADE" }}
            >
              <div className="flex flex-col lg:grid grid-cols-2 gap-[15px] self-stretch">
                <div
                  className="flex self-stretch flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">Terms</label>
                  <input
                    type="text"
                    className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                    style={{ border: "1px solid #DBDADE" }}
                    placeholder="Enter Terms"
                  />
                </div>
                <div
                  className="flex self-stretch flex-col items-start gap-2"
                  style={{ flex: "1 0 0" }}
                >
                  <label className="label text-[#868686]">Type</label>
                  <select
                    className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                    style={{ border: "1px solid #DBDADE" }}
                    defaultValue={"Select"}
                  >
                    <option value="Select">Select</option>
                    {/* <option value="PM">PM</option> */}
                  </select>
                </div>
                <button className="white-btn col-span-2 !h-auto flex justify-center items-center gap-3">
                  <img src={whitePlusIcon} alt="" />
                  Add More
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-start gap-[15px] self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex items-start gap-1 self-stretch">
              <p className="label text-[#868686]">Managing Room</p>
            </div>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" className="w-[18px] h-[18px] rounded" />
              <p className="p-reg text-[#646464]">All Room</p>
            </div>
            <div
              className="flex flex-col lg:grid grid-cols-2 gap-[15px] self-stretch p-5 items-center content-center rounded-[10px] bg-white"
              style={{ border: "1px solid #DBDADE" }}
            >
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input
                  type="checkbox"
                  checked
                  className="w-[18px] h-[18px] rounded"
                />
                <p className="p-reg text-[#646464]">Room 1</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
                <p className="p-reg text-[#646464]">Room 2</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
                <p className="p-reg text-[#646464]">Room 3</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input
                  type="checkbox"
                  checked
                  className="w-[18px] h-[18px] rounded"
                />
                <p className="p-reg text-[#646464]">Room 4</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
                <p className="p-reg text-[#646464]">Room 5</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input
                  type="checkbox"
                  checked
                  className="w-[18px] h-[18px] rounded"
                />
                <p className="p-reg text-[#646464]">Room 6</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-start gap-[15px] self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex items-start gap-1 self-stretch">
              <p className="label text-[#868686]">Permissions</p>
            </div>
            <div className="flex items-center gap-2.5">
              <input type="checkbox" className="w-[18px] h-[18px] rounded" />
              <p className="p-reg text-[#646464]">Give Full Permissions</p>
            </div>
            <div
              className="flex flex-col lg:grid grid-cols-2 gap-[15px] self-stretch p-5 items-center content-center rounded-[10px] bg-white"
              style={{ border: "1px solid #DBDADE" }}
            >
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input
                  type="checkbox"
                  checked
                  className="w-[18px] h-[18px] rounded"
                />
                <p className="p-reg text-[#646464]">My Center</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
                <p className="p-reg text-[#646464]">Admission</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
                <p className="p-reg text-[#646464]">Billing</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input
                  type="checkbox"
                  checked
                  className="w-[18px] h-[18px] rounded"
                />
                <p className="p-reg text-[#646464]">Review</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
                <p className="p-reg text-[#646464]">Staff</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input
                  type="checkbox"
                  checked
                  className="w-[18px] h-[18px] rounded"
                />
                <p className="p-reg text-[#646464]">Notifications</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input
                  type="checkbox"
                  checked
                  className="w-[18px] h-[18px] rounded"
                />
                <p className="p-reg text-[#646464]">Articles</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
                <p className="p-reg text-[#646464]">Settings</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
                <p className="p-reg text-[#646464]">Reporting</p>
              </div>
              <div
                className="flex self-stretch items-center gap-2.5"
                style={{ flex: "1 0 0" }}
              >
                <input type="checkbox" className="w-[18px] h-[18px] rounded" />
                <p className="p-reg text-[#646464]">Support</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row justify-center items-center gap-5 self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <button
              className="flex self-stretch h-[50px] justify-center items-center rounded-[10px] bg-white py-2.5 px-5 p-bold text-[#383838] !text-[15px]"
              style={{ flex: "1 0 0", border: "1px solid #5ECFFF" }}
            >
              Resend Invitation
            </button>
            <button
              className="flex self-stretch h-[50px] justify-center items-center rounded-[10px] bg-white py-2.5 px-5 p-bold text-[#383838] !text-[15px]"
              style={{ flex: "1 0 0", border: "1px solid #FF4A55" }}
            >
              Delete
            </button>
            <button className="cyan-btn self-stretch" style={{ flex: "1 0 0" }}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffDetails;
