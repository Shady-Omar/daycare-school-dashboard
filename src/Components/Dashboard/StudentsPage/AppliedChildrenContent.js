import React from "react";

import sortArrow from "../../../Assets/sort-dropdown-arrow.svg";
import actionArrow from "../../../Assets/action-arrow.svg";
import StudentInfoModal from "./StudentInfoModal";

function AppliedContent() {
  return (
    <div
      className="flex flex-col items-start self-stretch bg-[#FFF]"
      style={{ borderRadius: "0px 0px 10px 10px" }}
    >
      {/* Title */}
      <div
        className="flex p-[30px] flex-col items-start gap-[5px] self-stretch"
        style={{ borderBottom: "2px solid #F9F9F9" }}
      >
        <h2 className="h2-bold text-[#383838]">Applied Student</h2>
        <p className="p-reg text-[#878787] text-left">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        </p>
      </div>
      {/* Filter */}
      <div
        className="flex lg:grid grid-cols-3 flex-col items-start content-start self-stretch"
        style={{ padding: "30px 30px 0px 30px", gap: "20px 30px" }}
      >
        <div
          className="flex self-stretch flex-col items-start gap-2"
          style={{ flex: "1 0 0" }}
        >
          <label className="label text-[#868686]">Search Children</label>
          <input
            type="text"
            className="flex h-[50px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
            style={{ border: "1px solid #DBDADE" }}
            placeholder="Search here..."
          />
        </div>
        <div
          className="flex self-stretch flex-col items-start gap-2"
          style={{ flex: "1 0 0" }}
        >
          <label className="label text-[#868686]">Children Status</label>
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
          <label className="label text-[#868686]">Min Age</label>
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
          <label className="label text-[#868686]">Max Age</label>
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
          <label className="label text-[#868686]">Desired Start From</label>
          <input
            type="date"
            className="flex h-[50px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
            style={{ border: "1px solid #DBDADE" }}
            placeholder="Search here..."
          />
        </div>
        <div
          className="flex self-stretch flex-col items-start gap-2"
          style={{ flex: "1 0 0" }}
        >
          <label className="label text-[#868686]">Desired Start To</label>
          <input
            type="date"
            className="flex h-[50px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
            style={{ border: "1px solid #DBDADE" }}
            placeholder="Search here..."
          />
        </div>
      </div>
      <div
        className="flex p-[30px] flex-col items-start gap-5 lg:gap-[30px] self-stretch bg-[#FFF]"
        style={{ borderRadius: "0px 0px 10px 10px" }}
      >
        {/* Sort */}
        <div className="flex items-start gap-[5px]">
          <p className="label-reg text-[#646464]">Sort by:</p>
          <div className="flex items-center gap-[11px] rounded-lg">
            <p className="label-semi text-[#383838]">First Name</p>
            <img src={sortArrow} alt="" />
          </div>
        </div>
        {/* Info */}
        <div className="flex items-center gap-5 lg:gap-[30px] self-stretch">
          <div
            className="flex py-[15px] px-5 flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center gap-5 lg:gap-0 self-stretch rounded-[10px] bg-[#00CCB6]"
            style={{ flex: "1 0 0" }}
          >
            <p className="p-semi !text-[15px] text-[#FFF]">
              1 Children selected
            </p>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-2.5 lg:gap-5 self-stretch lg:self-auto">
              <button className="flex self-stretch lg:self-auto h-[45px] justify-center items-center rounded-[5px] bg-[#FFF] p-5 gap-3 label-reg text-[#383838]">
                Change Room
              </button>
              <button
                className="flex self-stretch lg:self-auto h-[45px] justify-center items-center rounded-[5px] p-5 gap-3 label-reg text-[#FFF]"
                style={{ border: "1px solid #FFF" }}
              >
                Action Button 2
              </button>
            </div>
          </div>
        </div>
        {/* Table */}
        <div
          id="custom-scroll"
          className="relative overflow-x-scroll lg:overflow-x-auto shadow-md rounded-lg w-full"
        >
          <table className="w-full text-left rtl:text-right bg-[#FFF] ">
            <thead
              className=" bg-[#EBEBEB] text-[#383838]"
              style={{
                borderRadius: "10px 10px 0px 0px",
                border: "0.5px solid #EBEBEB",
              }}
            >
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 p-semi flex items-center gap-[15px]"
                >
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                  />
                  Child ID
                </th>
                <th scope="col" className="px-6 py-3 p-semi">
                  Children Name
                </th>
                <th scope="col" className="px-6 py-3 p-semi">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 p-semi">
                  Plan
                </th>
                <th scope="col" className="px-6 py-3 p-semi">
                  Parent
                </th>
                <th scope="col" className="px-6 py-3 p-semi">
                  Paid Amount
                </th>
                <th scope="col" className="px-6 py-3 p-semi">
                  Start Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 label-bold text-center text-[#000] !text-[13px]"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                  />
                  123456
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Mohammad Ishtiyaq
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                <td className="px-6 py-4 p-reg text-[#646464]">Daily</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Shawez
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">1,000 SAR</td>
                <td className="px-6 py-4 p-reg text-[#646464]">30/11/2023</td>

                <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                  <StudentInfoModal />
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                  />
                  123456
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Mohammad Ishtiyaq
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                <td className="px-6 py-4 p-reg text-[#646464]">Daily</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Shawez
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">1,000 SAR</td>
                <td className="px-6 py-4 p-reg text-[#646464]">30/11/2023</td>

                <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                      Actions
                      <img src={actionArrow} alt="action" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                  />
                  123456
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Mohammad Ishtiyaq
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                <td className="px-6 py-4 p-reg text-[#646464]">Daily</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Shawez
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">1,000 SAR</td>
                <td className="px-6 py-4 p-reg text-[#646464]">30/11/2023</td>

                <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                      Actions
                      <img src={actionArrow} alt="action" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AppliedContent;
