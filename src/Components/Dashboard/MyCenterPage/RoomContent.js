import React from "react";
import { Link } from "react-router-dom";

import roomsIcon from "../../../Assets/rooms-icon.svg";
import presentRoomsIcon from "../../../Assets/visited-icon.svg";
import timeIcon from "../../../Assets/time-icon.svg";
import schoolIcon from "../../../Assets/school-icon.svg";
import actionArrow from "../../../Assets/action-arrow.svg";
import EditRoomModal from "./EditRoomModal";

function RoomContent() {
  return (
    <div className="flex flex-col items-start gap-[30px] self-stretch">
      <div className="flex p-5 flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-[#FFF]">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF] self-stretch"
            style={{ border: "2px solid #00CCB6", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#00CCB6]">
              <img src={roomsIcon} alt="" />
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">26</h2>
              <p className="p-reg text-[#878787]">Total Rooms</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF] self-stretch"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#6418C3]">
              <img src={presentRoomsIcon} alt="" />
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">336</h2>
              <p className="p-reg text-[#878787]">Total Present In Room</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF] self-stretch"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#E328AF]">
              <img src={timeIcon} alt="" />
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">135</h2>
              <p className="p-reg text-[#878787]">Total Time Exceeded</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch">
        <div
          className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-[#FFF]"
          style={{ borderRadius: "0px 10px 10px 10px" }}
        >
          {/* Info */}
          <div
            className="flex py-[15px] px-5 items-center gap-5 self-stretch rounded-[10px]"
            style={{ background: "rgba(0, 204, 182, 0.10)" }}
          >
            <img
              className="w-[38px] h-[38px] flex items-center justify-center"
              src={schoolIcon}
              alt="school"
            />
            <div className="flex flex-col items-start gap-[5px] text-left">
              <h5 className="h5-bold text-[#202020]">
                Welcome to your Room list!
              </h5>
              <p className="p-reg text-[#646464]">
                Rooms are your virtual classrooms for your center and can be a
                classroom or play area you use for your students - how they are
                set up is up to you! Explore with the demo room or add your own
                to try it out!
              </p>
            </div>
          </div>
          {/* Data */}
          <div className="flex flex-col items-start gap-5 self-stretch">
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
                      Room Name
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Room Capacity
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Age Range
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Managing Staff
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
                    <Link
                      to="details"
                      className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]"
                    >
                      Reception Room
                    </Link>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      24/70 Children
                    </td>

                    <td className="px-6 py-4 p-reg text-[#646464]">
                      2-8 years old
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">4 Staff</td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                      <EditRoomModal />
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
                      Reception Room
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      24/70 Children
                    </td>

                    <td className="px-6 py-4 p-reg text-[#646464]">
                      2-8 years old
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">4 Staff</td>

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
                    <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
                      Reception Room
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      24/70 Children
                    </td>

                    <td className="px-6 py-4 p-reg text-[#646464]">
                      2-8 years old
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">4 Staff</td>

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
                    <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
                      Reception Room
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      24/70 Children
                    </td>

                    <td className="px-6 py-4 p-reg text-[#646464]">
                      2-8 years old
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">4 Staff</td>

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
            {/* Footer */}
            <div className="flex justify-between items-center self-stretch">
              <p className="label-reg text-[#6D6D6D]">
                Showing 10 results from 289 data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomContent;
