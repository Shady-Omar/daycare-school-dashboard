import React from "react";

import sortArrow from "../../../Assets/sort-dropdown-arrow.svg";
import actionArrow from "../../../Assets/action-arrow.svg";
import childrenPlaceholder from "../../../Assets/children-placeholder.png";

function LeavesContent() {
  return (
    <>
      {/* Row 1 */}
      <div className="flex p-5 flex-col items-start gap-[30px] self-stretch bg-white rounded-[10px] lg:rounded-none">
        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-white self-stretch"
            style={{ flex: "1 0 0", border: "1px solid #DCDCDC" }}
          >
            {/* Icon */}
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#00CCB6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M16.1902 20.8605C17.5738 19.9414 18.6248 18.6013 19.1876 17.0384C19.7504 15.4756 19.7951 13.7731 19.3151 12.1829C18.8351 10.5926 17.8558 9.19921 16.5223 8.2088C15.1888 7.21838 13.5718 6.68359 11.9107 6.68359C10.2496 6.68359 8.63265 7.21838 7.29912 8.2088C5.9656 9.19921 4.98636 10.5926 4.50633 12.1829C4.0263 13.7731 4.071 15.4756 4.63379 17.0384C5.19659 18.6013 6.24758 19.9414 7.63124 20.8605C5.27252 21.7306 3.23392 23.297 1.78566 25.3521C1.67693 25.5065 1.6127 25.6879 1.59999 25.8763C1.58728 26.0648 1.62658 26.2531 1.71359 26.4208C1.80059 26.5884 1.93198 26.729 2.0934 26.827C2.25482 26.9251 2.44008 26.977 2.62896 26.977L21.192 26.9763C21.3809 26.9763 21.5662 26.9244 21.7276 26.8263C21.889 26.7282 22.0204 26.5877 22.1074 26.42C22.1943 26.2523 22.2336 26.064 22.2209 25.8755C22.2082 25.6871 22.1439 25.5057 22.0351 25.3513C20.5869 23.2966 18.5486 21.7305 16.1902 20.8605Z"
                  fill="white"
                />
                <path
                  d="M32.5448 25.3512C31.0966 23.2965 29.0582 21.7304 26.6998 20.8604C28.2331 19.8397 29.3519 18.3052 29.8547 16.5331C30.3574 14.761 30.2113 12.8676 29.4424 11.1937C28.6736 9.51979 27.3325 8.17523 25.6606 7.40197C23.9888 6.62872 22.0958 6.47754 20.3224 6.97566C20.1614 7.02094 20.0138 7.10469 19.8924 7.21971C19.771 7.33472 19.6793 7.47754 19.6254 7.63585C19.5715 7.79416 19.5569 7.96321 19.5828 8.12842C19.6088 8.29364 19.6745 8.45007 19.7744 8.58422C20.9401 10.1502 21.6103 12.0293 21.6985 13.9795C21.7868 15.9298 21.2891 17.8618 20.2695 19.5266C20.1348 19.7461 20.0872 20.0081 20.136 20.261C20.1848 20.5139 20.3264 20.7394 20.5331 20.8931C20.9241 21.1841 21.3003 21.4945 21.6602 21.8231C21.6788 21.8433 21.6976 21.8635 21.718 21.8825C23.0945 23.1549 24.21 24.6832 25.0024 26.382C25.0855 26.5598 25.2175 26.7102 25.383 26.8156C25.5486 26.921 25.7407 26.9769 25.937 26.9769L31.7017 26.9762C31.8906 26.9762 32.0758 26.9243 32.2372 26.8262C32.3986 26.7281 32.53 26.5875 32.617 26.4199C32.704 26.2522 32.7432 26.0639 32.7305 25.8754C32.7178 25.687 32.6535 25.5057 32.5448 25.3512Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Text */}
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">564</h2>
              <p className="p-reg text-[#878787]">Total Leave</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-white self-stretch"
            style={{ flex: "1 0 0", border: "1px solid #DCDCDC" }}
          >
            {/* Icon */}
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#FFAB2D]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M16.1902 20.8605C17.5738 19.9414 18.6248 18.6013 19.1876 17.0384C19.7504 15.4756 19.7951 13.7731 19.3151 12.1829C18.8351 10.5926 17.8558 9.19921 16.5223 8.2088C15.1888 7.21838 13.5718 6.68359 11.9107 6.68359C10.2496 6.68359 8.63265 7.21838 7.29912 8.2088C5.9656 9.19921 4.98636 10.5926 4.50633 12.1829C4.0263 13.7731 4.071 15.4756 4.63379 17.0384C5.19659 18.6013 6.24758 19.9414 7.63124 20.8605C5.27252 21.7306 3.23392 23.297 1.78566 25.3521C1.67693 25.5065 1.6127 25.6879 1.59999 25.8763C1.58728 26.0648 1.62658 26.2531 1.71359 26.4208C1.80059 26.5884 1.93198 26.729 2.0934 26.827C2.25482 26.9251 2.44008 26.977 2.62896 26.977L21.192 26.9763C21.3809 26.9763 21.5662 26.9244 21.7276 26.8263C21.889 26.7282 22.0204 26.5877 22.1074 26.42C22.1943 26.2523 22.2336 26.064 22.2209 25.8755C22.2082 25.6871 22.1439 25.5057 22.0351 25.3513C20.5869 23.2966 18.5486 21.7305 16.1902 20.8605Z"
                  fill="white"
                />
                <path
                  d="M32.5448 25.3512C31.0966 23.2965 29.0582 21.7304 26.6998 20.8604C28.2331 19.8397 29.3519 18.3052 29.8547 16.5331C30.3574 14.761 30.2113 12.8676 29.4424 11.1937C28.6736 9.51979 27.3325 8.17523 25.6606 7.40197C23.9888 6.62872 22.0958 6.47754 20.3224 6.97566C20.1614 7.02094 20.0138 7.10469 19.8924 7.21971C19.771 7.33472 19.6793 7.47754 19.6254 7.63585C19.5715 7.79416 19.5569 7.96321 19.5828 8.12842C19.6088 8.29364 19.6745 8.45007 19.7744 8.58422C20.9401 10.1502 21.6103 12.0293 21.6985 13.9795C21.7868 15.9298 21.2891 17.8618 20.2695 19.5266C20.1348 19.7461 20.0872 20.0081 20.136 20.261C20.1848 20.5139 20.3264 20.7394 20.5331 20.8931C20.9241 21.1841 21.3003 21.4945 21.6602 21.8231C21.6788 21.8433 21.6976 21.8635 21.718 21.8825C23.0945 23.1549 24.21 24.6832 25.0024 26.382C25.0855 26.5598 25.2175 26.7102 25.383 26.8156C25.5486 26.921 25.7407 26.9769 25.937 26.9769L31.7017 26.9762C31.8906 26.9762 32.0758 26.9243 32.2372 26.8262C32.3986 26.7281 32.53 26.5875 32.617 26.4199C32.704 26.2522 32.7432 26.0639 32.7305 25.8754C32.7178 25.687 32.6535 25.5057 32.5448 25.3512Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Text */}
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">336</h2>
              <p className="p-reg text-[#878787]">Total Pending</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-white self-stretch"
            style={{ flex: "1 0 0", border: "1px solid #DCDCDC" }}
          >
            {/* Icon */}
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#FF4A55]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M15.8562 20.8605C17.2398 19.9414 18.2908 18.6013 18.8536 17.0384C19.4164 15.4756 19.4611 13.7731 18.9811 12.1829C18.5011 10.5926 17.5218 9.19921 16.1883 8.2088C14.8548 7.21838 13.2378 6.68359 11.5767 6.68359C9.91563 6.68359 8.29867 7.21838 6.96514 8.2088C5.63161 9.19921 4.65237 10.5926 4.17235 12.1829C3.69232 13.7731 3.73701 15.4756 4.29981 17.0384C4.8626 18.6013 5.9136 19.9414 7.29725 20.8605C4.93853 21.7306 2.89993 23.297 1.45167 25.3521C1.34294 25.5065 1.27872 25.6879 1.26601 25.8763C1.2533 26.0648 1.29259 26.2531 1.3796 26.4208C1.46661 26.5884 1.59799 26.729 1.75941 26.827C1.92083 26.9251 2.10609 26.977 2.29498 26.977L20.858 26.9763C21.0469 26.9763 21.2322 26.9244 21.3936 26.8263C21.555 26.7282 21.6864 26.5877 21.7734 26.42C21.8604 26.2523 21.8996 26.064 21.8869 25.8755C21.8742 25.6871 21.8099 25.5057 21.7012 25.3513C20.2529 23.2966 18.2146 21.7305 15.8562 20.8605Z"
                  fill="white"
                />
                <path
                  d="M32.2108 25.3512C30.7626 23.2965 28.7242 21.7304 26.3658 20.8604C27.8992 19.8397 29.0179 18.3052 29.5207 16.5331C30.0235 14.761 29.8773 12.8676 29.1084 11.1937C28.3396 9.51979 26.9986 8.17523 25.3267 7.40197C23.6548 6.62872 21.7618 6.47754 19.9884 6.97566C19.8274 7.02094 19.6798 7.10469 19.5584 7.21971C19.437 7.33472 19.3453 7.47754 19.2914 7.63585C19.2375 7.79416 19.2229 7.96321 19.2488 8.12842C19.2748 8.29364 19.3405 8.45007 19.4404 8.58422C20.6062 10.1502 21.2763 12.0293 21.3646 13.9795C21.4528 15.9298 20.9551 17.8618 19.9355 19.5266C19.8009 19.7461 19.7532 20.0081 19.802 20.261C19.8508 20.5139 19.9925 20.7394 20.1991 20.8931C20.5901 21.1841 20.9663 21.4945 21.3262 21.8231C21.3448 21.8433 21.3636 21.8635 21.3841 21.8825C22.7605 23.1549 23.876 24.6832 24.6685 26.382C24.7515 26.5598 24.8835 26.7102 25.049 26.8156C25.2146 26.921 25.4067 26.9769 25.603 26.9769L31.3677 26.9762C31.5566 26.9762 31.7419 26.9243 31.9033 26.8262C32.0647 26.7281 32.196 26.5875 32.283 26.4199C32.37 26.2522 32.4092 26.0639 32.3965 25.8754C32.3838 25.687 32.3195 25.5057 32.2108 25.3512Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Text */}
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">135</h2>
              <p className="p-reg text-[#878787]">Total Rejected</p>
            </div>
          </div>
        </div>
      </div>
      {/* Row 2 */}
      <div className="flex p-[30px] lg:p-5 flex-col justify-center lg:justify-normal items-start gap-[30px] rounded-[10px] lg:rounded-[0px_0px_10px_10px] self-stretch bg-white">
        {/* Filter */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center self-stretch gap-[30px] lg:gap-0 rounded-xl">
          <div
            className="flex flex-col lg:flex-row justify-end lg:justify-normal items-start lg:items-end gap-[15px] lg:gap-2.5 self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex self-stretch flex-col items-start gap-2">
              <label className="label text-[#868686]">Staff Name</label>
              <input
                type="text"
                className="flex h-[50px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DBDADE" }}
                placeholder="Search by staff name..."
              />
            </div>
            <div
              className="flex flex-col items-start gap-2 self-stretch"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">Leave type</label>
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
              className="flex flex-col items-start gap-2 self-stretch"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">Status</label>
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
              className="flex flex-col items-start gap-2 self-stretch"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">Start Date</label>
              <input
                type="date"
                className="flex h-[50px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF] text-[#A4A4A4]"
                style={{ border: "1px solid #DBDADE" }}
                placeholder="Search by staff name..."
              />
            </div>
            <div
              className="flex flex-col items-start gap-2 self-stretch"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">End Date</label>
              <input
                type="date"
                className="flex h-[50px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF] text-[#A4A4A4]"
                style={{ border: "1px solid #DBDADE" }}
                placeholder="Search by staff name..."
              />
            </div>
          </div>
        </div>
        {/* Data */}
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="flex flex-col justify-center items-start gap-5 self-stretch">
            <div className="flex justify-between items-center self-stretch">
              {/* Sort */}
              <div className="flex items-start gap-[5px]">
                <p className="label-reg text-[#646464]">Sort by:</p>
                <div className="flex items-center gap-[11px] rounded-lg">
                  <p className="label-semi text-[#383838]">First Name</p>
                  <img src={sortArrow} alt="" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[30px] self-stretch">
              <div
                className="flex py-[15px] px-5 flex-col lg:flex-row justify-center items-start lg:items-center lg:justify-between gap-5 lg:gap-0 self-stretch rounded-[10px] bg-[#00CCB6]"
                style={{ flex: "1 0 0" }}
              >
                <p className="p-semi !text-[15px] text-white">
                  1 Staff selected
                </p>
                <div className="flex flex-col lg:flex-row items-center gap-2.5 lg:gap-5 self-stretch">
                  <button
                    className="flex h-[45px] self-stretch justify-center items-center rounded-[10px] bg-white py-2.5 px-5 label-reg text-[#383838] !text-[13px]"
                    style={{ flex: "1 0 0", border: "1px solid #FFF" }}
                  >
                    Approve
                  </button>
                  <button
                    className="flex h-[45px] self-stretch justify-center items-center rounded-[10px] bg-[#00CCB6] py-2.5 px-5 label-reg text-white !text-[13px]"
                    style={{ flex: "1 0 0", border: "1px solid #FFF" }}
                  >
                    Reject
                  </button>
                </div>
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
                  className="px-6 py-3 p-semi text-[#383838] flex items-center gap-[15px]"
                >
                  <input type="checkbox" checked />
                  Staff Name
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Leave Type
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Start Date
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  End Date
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Days
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 p-semi text-[#383838] text-center !text-[13px]"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                  <input type="checkbox" checked />
                  <img src={childrenPlaceholder} alt="" />
                  Mohammad Ishtiyaq
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">Annual Leave</td>
                <td className="px-6 py-4 p-reg text-[#646464]">27/09/2023</td>

                <td className="px-6 py-4 p-reg text-[#646464]">27/09/2023</td>
                <td className="px-6 py-4 p-reg text-[#646464]">3</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Approved</p>
                    </div>
                  </div>
                </td>
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
                <td className="px-6 py-4 p-reg text-[#646464]">Annual Leave</td>
                <td className="px-6 py-4 p-reg text-[#646464]">27/09/2023</td>

                <td className="px-6 py-4 p-reg text-[#646464]">27/09/2023</td>
                <td className="px-6 py-4 p-reg text-[#646464]">3</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(255, 171, 45, 0.10)" }}
                    >
                      <p className="label-semi text-[#FFAB2D]">Pending</p>
                    </div>
                  </div>
                </td>
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
                <td className="px-6 py-4 p-reg text-[#646464]">Annual Leave</td>
                <td className="px-6 py-4 p-reg text-[#646464]">27/09/2023</td>

                <td className="px-6 py-4 p-reg text-[#646464]">27/09/2023</td>
                <td className="px-6 py-4 p-reg text-[#646464]">3</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(255, 74, 85, 0.10)" }}
                    >
                      <p className="label-semi text-[#FF4A55]">Rejected</p>
                    </div>
                  </div>
                </td>
                <td className="flex py-[15px] px-5 items-center justify-end gap-[15px] self-stretch">
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
    </>
  );
}

export default LeavesContent;
