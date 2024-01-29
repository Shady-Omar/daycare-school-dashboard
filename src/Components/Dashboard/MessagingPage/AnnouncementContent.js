import React from "react";

import NewAnnouncementModal from "./NewAnnouncementModal";

import sortArrow from "../../../Assets/sort-dropdown-arrow.svg";

function AnnouncementContent() {
  return (
    <div className="flex p-[30px] flex-col items-start justify-center gap-[30px] rounded-[10px] lg:rounded-[0px_10px_10px_10px] self-stretch bg-white">
      <div className="flex flex-col gap-[30px] items-start self-stretch">
        <div
          className="flex flex-col items-start gap-5 self-stretch"
          style={{
            padding: "20px 0px 30px 0px",
            borderBottom: "1px solid #ECECEB",
          }}
        >
          <NewAnnouncementModal />
        </div>
        {/* Filter */}
        <div className="flex flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
          <div className="flex justify-between items-center self-stretch rounded-xl">
            <div
              className="flex flex-col lg:flex-row items-end gap-5 lg:gap-2.5"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex self-stretch lg:w-[320px] flex-col items-start gap-2">
                <label className="label text-[#868686]">Room</label>
                <select
                  className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                  style={{ border: "1px solid #DBDADE" }}
                  defaultValue={"Select Room"}
                >
                  <option value="Select Room">Select Room</option>
                  {/* <option value="PM">PM</option> */}
                </select>
              </div>
              <div
                className="flex flex-col items-start gap-2 self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">Date From</label>
                <input
                  type="date"
                  className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                  style={{ border: "1px solid #DBDADE" }}
                  placeholder="Enter First Name"
                />
              </div>
              <div
                className="flex flex-col items-start gap-2 self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">Date To</label>
                <input
                  type="date"
                  className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                  style={{ border: "1px solid #DBDADE" }}
                  placeholder="Enter First Name"
                />
              </div>
              <div
                className="flex flex-col items-start gap-2 self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">Status</label>
                <select
                  className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                  style={{ border: "1px solid #DBDADE" }}
                  defaultValue={"Select Status"}
                >
                  <option value="Select Status">Select Status</option>
                  {/* <option value="PM">PM</option> */}
                </select>
              </div>
              <button className="white-btn lg:w-[150px] self-stretch lg:self-auto">
                Filter
              </button>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="flex flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
          <div className="flex flex-col items-start gap-5 self-stretch">
            {/* Sort */}
            <div className="flex items-start gap-[5px]">
              <p className="label-reg text-[#646464]">Sort by:</p>
              <div className="flex items-center gap-[11px] rounded-lg">
                <p className="label-semi text-[#383838]">Date From</p>
                <img src={sortArrow} alt="" />
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
                      Date & Time
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Family Announcement
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 p-semi w-[218px] text-center"
                    >
                      Rooms
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 p-semi w-[218px] text-center"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi">
                      09/18/2023 | 2:39 PM
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum stan............
                    </td>
                    <td className="px-6 py-4 label-semi text-[#646464] w-[218px] text-center">
                      Room 1, Room 2
                    </td>

                    <td className="flex w-[218px] justify-center py-[15px] px-5 items-center gap-2.5 self-stretch">
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md label-semi text-[#00CCB6]"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          Sent
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi">
                      09/18/2023 | 2:39 PM
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum stan............
                    </td>
                    <td className="px-6 py-4 label-semi text-[#646464] w-[218px] text-center">
                      Room 1, Room 2
                    </td>

                    <td className="flex w-[218px] justify-center py-[15px] px-5 items-center gap-2.5 self-stretch">
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md label-semi text-[#00CCB6]"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          Sent
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi">
                      09/18/2023 | 2:39 PM
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum stan............
                    </td>
                    <td className="px-6 py-4 label-semi text-[#646464] w-[218px] text-center">
                      Room 1, Room 2
                    </td>

                    <td className="flex w-[218px] justify-center py-[15px] px-5 items-center gap-2.5 self-stretch">
                      <div className="flex flex-col items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md label-semi bg-[#FFCB37] text-white">
                          Draft
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementContent;
