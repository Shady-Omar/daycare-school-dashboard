import React from "react";
import { Link } from "react-router-dom";

import graduationIcon from "../../../Assets/graduation-icon.svg";
import absentIcon from "../../../Assets/absent-icon.svg";
import sortArrow from "../../../Assets/sort-dropdown-arrow.svg";
import actionArrow from "../../../Assets/action-arrow.svg";
import outIcon from "../../../Assets/out-icon.svg";
import childrenPlaceholder from "../../../Assets/children-placeholder.png";

function AttendanceContent() {
  return (
    <>
      <div className="flex p-5 flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-[#FFF]">
        {/* Top */}
        <div
          className="flex pb-5 justify-between items-center self-stretch"
          style={{ borderBottom: "1px solid #DCDCDC" }}
        >
          {/* dropdown */}
          <div
            className="flex py-2.5 px-5 items-center gap-[11px] rounded-lg bg-white"
            style={{ border: "1px solid #DCDCDC" }}
          >
            <p className="label-reg text-[#383838]">Today</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2.97137 5.01254C2.78154 5.01704 2.59711 5.06945 2.43971 5.16373C2.28231 5.258 2.15848 5.3902 2.08277 5.54475C2.00705 5.69931 1.98259 5.86985 2.01225 6.03631C2.04192 6.20277 2.12448 6.35828 2.25024 6.48455L8.23174 12.6893C8.32543 12.7867 8.44182 12.8649 8.57288 12.9186C8.70393 12.9722 8.84655 13 8.99088 13C9.1352 13 9.27782 12.9722 9.40888 12.9186C9.53993 12.8649 9.65632 12.7867 9.75001 12.6893L15.7374 6.48455C15.828 6.39691 15.8978 6.29397 15.9426 6.18187C15.9874 6.06978 16.0063 5.95083 15.9982 5.83211C15.9901 5.71339 15.9551 5.59728 15.8953 5.49082C15.8356 5.38435 15.7523 5.28973 15.6504 5.21245C15.5486 5.13517 15.4302 5.07684 15.3024 5.04104C15.1746 5.00524 15.04 4.99269 14.9066 5.00406C14.7732 5.01543 14.6437 5.0505 14.526 5.10724C14.4082 5.16397 14.3045 5.24114 14.221 5.33422L8.9899 10.7536L3.76072 5.33422C3.66496 5.23127 3.54423 5.14895 3.40754 5.09324C3.27085 5.03754 3.12175 5.0099 2.97137 5.01254Z"
                fill="#00CCB6"
              />
            </svg>
          </div>
          <p className="p-reg text-[#878787]">November 13, 2023</p>
        </div>
        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF] self-stretch lg:self-auto"
            style={{ border: "2px solid #00CCB6", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#00CCB6]">
              <img src={graduationIcon} alt="" />
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">564</h2>
              <p className="p-reg text-[#878787]">Total Students</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF] self-stretch lg:self-auto"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#6418C3]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M16.1899 20.8605C17.5736 19.9414 18.6246 18.6013 19.1874 17.0384C19.7502 15.4756 19.7949 13.7731 19.3148 12.1829C18.8348 10.5926 17.8556 9.19921 16.522 8.2088C15.1885 7.21838 13.5716 6.68359 11.9105 6.68359C10.2494 6.68359 8.63241 7.21838 7.29888 8.2088C5.96535 9.19921 4.98611 10.5926 4.50609 12.1829C4.02606 13.7731 4.07075 15.4756 4.63355 17.0384C5.19634 18.6013 6.24734 19.9414 7.63099 20.8605C5.27227 21.7306 3.23367 23.297 1.78541 25.3521C1.67668 25.5065 1.61246 25.6879 1.59975 25.8763C1.58704 26.0648 1.62633 26.2531 1.71334 26.4208C1.80035 26.5884 1.93173 26.729 2.09315 26.827C2.25457 26.9251 2.43983 26.977 2.62872 26.977L21.1918 26.9763C21.3807 26.9763 21.5659 26.9244 21.7273 26.8263C21.8888 26.7282 22.0201 26.5877 22.1071 26.42C22.1941 26.2523 22.2334 26.064 22.2206 25.8755C22.2079 25.6871 22.1437 25.5057 22.0349 25.3513C20.5867 23.2966 18.5483 21.7305 16.1899 20.8605Z"
                  fill="white"
                />
                <path
                  d="M32.5436 25.3512C31.0953 23.2965 29.057 21.7304 26.6985 20.8604C28.2319 19.8397 29.3507 18.3052 29.8534 16.5331C30.3562 14.761 30.21 12.8676 29.4412 11.1937C28.6723 9.51979 27.3313 8.17523 25.6594 7.40197C23.9875 6.62872 22.0946 6.47754 20.3211 6.97566C20.1601 7.02094 20.0126 7.10469 19.8912 7.21971C19.7697 7.33472 19.6781 7.47754 19.6242 7.63585C19.5703 7.79416 19.5556 7.96321 19.5816 8.12842C19.6075 8.29364 19.6733 8.45007 19.7732 8.58422C20.9389 10.1502 21.6091 12.0293 21.6973 13.9795C21.7856 15.9298 21.2878 17.8618 20.2683 19.5266C20.1336 19.7461 20.086 20.0081 20.1348 20.261C20.1836 20.5139 20.3252 20.7394 20.5319 20.8931C20.9229 21.1841 21.299 21.4945 21.659 21.8231C21.6776 21.8433 21.6963 21.8635 21.7168 21.8825C23.0933 23.1549 24.2088 24.6832 25.0012 26.382C25.0842 26.5598 25.2163 26.7102 25.3818 26.8156C25.5473 26.921 25.7395 26.9769 25.9357 26.9769L31.7005 26.9762C31.8894 26.9762 32.0746 26.9243 32.236 26.8262C32.3974 26.7281 32.5288 26.5875 32.6158 26.4199C32.7027 26.2522 32.742 26.0639 32.7293 25.8754C32.7165 25.687 32.6523 25.5057 32.5436 25.3512Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">336</h2>
              <p className="p-reg text-[#878787]">Total Present</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF] self-stretch lg:self-auto"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#E328AF]">
              <img src={absentIcon} alt="" />
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">135</h2>
              <p className="p-reg text-[#878787]">Total Absent</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-[30px] lg:p-5 flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-[#FFF]">
        <div className="flex justify-between items-center self-stretch rounded-xl">
          <div
            className="flex flex-col lg:flex-row items-start lg:items-end gap-5 lg:gap-2.5"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex w-full flex-col items-start gap-2">
              <label className="label text-[#868686]">Student Name</label>
              <input
                type="text"
                className="flex h-[50px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DBDADE" }}
                placeholder="Search by children name..."
              />
            </div>
            <div className="flex w-full flex-col items-start gap-2">
              <label className="label text-[#868686]">Student Status</label>
              <select
                className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                style={{ border: "1px solid #DBDADE" }}
                defaultValue={"Select"}
              >
                <option value="Select">Select</option>
                {/* <option value="PM">PM</option> */}
              </select>
            </div>
            <div className="flex w-full flex-col items-start gap-2">
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
            <button className="white-btn self-stretch lg:self-auto">
              Filter
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="flex flex-col justify-center items-start gap-5 self-stretch">
            {/* Sort */}
            <div className="flex items-start gap-[5px]">
              <p className="label-reg text-[#646464]">Sort by:</p>
              <div className="flex items-center gap-[11px] rounded-lg">
                <p className="label-semi text-[#383838]">First Name</p>
                <img src={sortArrow} alt="sort" />
              </div>
            </div>
            {/* Info */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-[35px] lg:gap-[30px] self-stretch">
              <div
                className="flex py-[15px] px-5 flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center gap-5 lg:gap-0 self-stretch rounded-[10px] bg-[#00CCB6]"
                style={{ flex: "1 0 0" }}
              >
                <p className="p-semi text-[#FFF]">1 Children selected</p>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-2.5 lg:gap-5 self-stretch lg:self-auto">
                  <button className="flex h-[45px] justify-center items-center rounded-[5px] bg-[#FFF] p-5 gap-3 label-reg text-[#383838] self-stretch lg:self-auto">
                    Change Room
                  </button>
                  <button
                    className="flex h-[45px] justify-center items-center rounded-[5px] p-5 gap-3 label-reg text-[#FFF] self-stretch lg:self-auto"
                    style={{ border: "1px solid #FFF" }}
                  >
                    Action Button 2
                  </button>
                </div>
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
                    <input type="checkbox" checked />
                    Children
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Room
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Current Status
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Time In
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Time Out
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 label-bold text-[#000] text-center !text-[13px]"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <Link
                    to="/students/profile"
                    className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]"
                  >
                    <input type="checkbox" checked />
                    <img src={childrenPlaceholder} alt="" />
                    Mohammad Ishtiyaq
                  </Link>
                  <td className="px-6 py-4 p-reg text-[#646464]">Room 1</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Present</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="flex py-[15px] px-5 items-center justify-end gap-[15px] self-stretch">
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
                    <input type="checkbox" />
                    <img src={childrenPlaceholder} alt="" />
                    Mohammad Ishtiyaq
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">Room 1</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Present</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="flex  py-[15px] px-5 items-center justify-end gap-[15px] self-stretch">
                    <div className="flex w-12 h-9 py-2.5 px-[15px] justify-center items-center gap-2.5 shrink-0 rounded-md bg-[#00CCB6] ">
                      <img src={outIcon} alt="" />
                    </div>
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
                    <input type="checkbox" />
                    <img src={childrenPlaceholder} alt="" />
                    Mohammad Ishtiyaq
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">Room 1</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(255, 74, 85, 0.10)" }}
                      >
                        <p className="label-semi text-[#FF4A55]">Absent</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">-</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">-</td>
                  <td className="flex  py-[15px] px-5 items-center justify-end gap-[15px] self-stretch">
                    <div className="flex w-12 h-9 py-2.5 px-[15px] justify-center items-center gap-2.5 shrink-0 rounded-md bg-[#00CCB6] ">
                      <img src={outIcon} alt="" />
                    </div>
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
                    <input type="checkbox" />
                    <img src={childrenPlaceholder} alt="" />
                    Mohammad Ishtiyaq
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">Room 1</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Present</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="flex  py-[15px] px-5 items-center justify-end gap-[15px] self-stretch">
                    <div className="flex w-12 h-9 py-2.5 px-[15px] justify-center items-center gap-2.5 shrink-0 rounded-md bg-[#00CCB6] ">
                      <img src={outIcon} alt="" />
                    </div>
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
                    <input type="checkbox" />
                    <img src={childrenPlaceholder} alt="" />
                    Mohammad Ishtiyaq
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">Room 1</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Present</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="flex  py-[15px] px-5 items-center justify-end gap-[15px] self-stretch">
                    <div className="flex w-12 h-9 py-2.5 px-[15px] justify-center items-center gap-2.5 shrink-0 rounded-md bg-[#00CCB6] ">
                      <img src={outIcon} alt="" />
                    </div>
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
                    <input type="checkbox" />
                    <img src={childrenPlaceholder} alt="" />
                    Mohammad Ishtiyaq
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">Room 1</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Present</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="flex  py-[15px] px-5 items-center justify-end gap-[15px] self-stretch">
                    <div className="flex w-12 h-9 py-2.5 px-[15px] justify-center items-center gap-2.5 shrink-0 rounded-md bg-[#00CCB6] ">
                      <img src={outIcon} alt="" />
                    </div>
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
                    <input type="checkbox" />
                    <img src={childrenPlaceholder} alt="" />
                    Mohammad Ishtiyaq
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">Room 1</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Present</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="flex  py-[15px] px-5 items-center justify-end gap-[15px] self-stretch">
                    <div className="flex w-12 h-9 py-2.5 px-[15px] justify-center items-center gap-2.5 shrink-0 rounded-md bg-[#00CCB6] ">
                      <img src={outIcon} alt="" />
                    </div>
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
                    <input type="checkbox" />
                    <img src={childrenPlaceholder} alt="" />
                    Mohammad Ishtiyaq
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">Room 1</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Present</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">08:00 AM</td>
                  <td className="flex  py-[15px] px-5 items-center justify-end gap-[15px] self-stretch">
                    <div className="flex w-12 h-9 py-2.5 px-[15px] justify-center items-center gap-2.5 shrink-0 rounded-md bg-[#00CCB6] ">
                      <img src={outIcon} alt="" />
                    </div>
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
    </>
  );
}

export default AttendanceContent;
