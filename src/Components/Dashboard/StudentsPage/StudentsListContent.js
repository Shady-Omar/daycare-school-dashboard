import React from "react";

import activeChart from "../../../Assets/active-chart.svg";
import inactiveChart from "../../../Assets/inactive-chart.svg";
import usersIcon from "../../../Assets/users-icon.svg";
import sortArrow from "../../../Assets/sort-dropdown-arrow.svg";
import actionArrow from "../../../Assets/action-arrow.svg";

function StudentsListContent() {
  return (
    <div className="w-full bg-[#FFF] rounded-[10px]">
      <div
        className="flex items-start gap-[30px] self-stretch bg-[#FFF]"
        style={{
          borderRadius: "10px 10px 0px 0px",
          padding: "20px 20px 0px 20px",
        }}
      >
        <div
          className="flex p-5 items-start gap-[30px] self-stretch rounded-[10px] bg-[#F9F9F9]"
          style={{ flex: "1 0 0" }}
        >
          <div
            className="flex p-5 items-center justify-between rounded-[10px] bg-[#FFF]"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex items-center gap-[15px]">
              <img src={usersIcon} alt="users" />
              <div className="w-[108px] h-[55px] text-left">
                <h4 className="h4-bold text-[#202020]">384</h4>
                <p className="p-reg text-[#A5A5A5]">Students Active</p>
              </div>
            </div>
            <img src={activeChart} alt="chart" />
          </div>
          <div
            className="flex p-5 items-center justify-between rounded-[10px] bg-[#FFF]"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex items-center gap-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
              >
                <path
                  d="M20.3576 26.5306C22.1605 25.333 23.53 23.5867 24.2634 21.5503C24.9967 19.5139 25.0549 17.2954 24.4295 15.2233C23.804 13.1512 22.528 11.3355 20.7904 10.045C19.0527 8.75445 16.9458 8.05762 14.7813 8.05762C12.6169 8.05762 10.5099 8.75445 8.77229 10.045C7.03467 11.3355 5.75869 13.1512 5.1332 15.2233C4.50771 17.2954 4.56595 19.5139 5.29929 21.5503C6.03263 23.5867 7.4021 25.333 9.20505 26.5306C6.13156 27.6644 3.4752 29.7054 1.58808 32.3832C1.4464 32.5845 1.36272 32.8208 1.34615 33.0663C1.32959 33.3119 1.38079 33.5573 1.49417 33.7757C1.60754 33.9942 1.77874 34.1773 1.98907 34.3051C2.19941 34.4329 2.44081 34.5005 2.68693 34.5005L26.8752 34.4996C27.1213 34.4996 27.3627 34.432 27.573 34.3042C27.7833 34.1763 27.9545 33.9932 28.0679 33.7747C28.1812 33.5563 28.2324 33.3109 28.2158 33.0653C28.1992 32.8197 28.1155 32.5834 27.9738 32.3822C26.0867 29.7049 23.4307 27.6642 20.3576 26.5306Z"
                  fill="#6418C3"
                />
                <path
                  d="M41.6669 32.3819C39.7798 29.7046 37.1237 27.6639 34.0507 26.5303C36.0487 25.2002 37.5064 23.2007 38.1616 20.8916C38.8167 18.5825 38.6263 16.1154 37.6244 13.9342C36.6226 11.7531 34.8752 10.0011 32.6967 8.99348C30.5181 7.9859 28.0515 7.78892 25.7407 8.43798C25.5309 8.49698 25.3386 8.60612 25.1804 8.75598C25.0222 8.90585 24.9028 9.09194 24.8326 9.29823C24.7623 9.50451 24.7432 9.72479 24.7771 9.94007C24.8109 10.1554 24.8965 10.3592 25.0267 10.534C26.5457 12.5745 27.4189 15.023 27.5339 17.5642C27.6489 20.1055 27.0004 22.6229 25.6718 24.7922C25.4964 25.0783 25.4343 25.4197 25.4979 25.7492C25.5615 26.0787 25.746 26.3726 26.0153 26.5729C26.5248 26.952 27.0149 27.3565 27.484 27.7847C27.5082 27.811 27.5326 27.8372 27.5593 27.862C29.3529 29.5201 30.8065 31.5114 31.839 33.725C31.9472 33.9567 32.1192 34.1527 32.3349 34.29C32.5506 34.4273 32.801 34.5002 33.0567 34.5002L40.5684 34.4993C40.8145 34.4993 41.0559 34.4316 41.2662 34.3038C41.4765 34.176 41.6476 33.9928 41.761 33.7744C41.8743 33.5559 41.9255 33.3105 41.9089 33.065C41.8923 32.8194 41.8086 32.5831 41.6669 32.3819Z"
                  fill="#6418C3"
                />
              </svg>
              <div className="w-[120px] h-[55px] text-left">
                <h4 className="h4-bold text-[#202020]">139</h4>
                <p className="p-reg text-[#A5A5A5]">Students Inactive</p>
              </div>
            </div>
            <img src={inactiveChart} alt="chart" />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-start self-stretch bg-[#FFF]"
        style={{ borderRadius: "0px 0px 10px 10px" }}
      >
        <div
          className="flex p-[30px] flex-col items-start gap-[30px] self-stretch bg-[#FFF]"
          style={{ borderRadius: "0px 0px 10px 10px" }}
        >
          <div className="flex justify-between items-center self-stretch rounded-xl">
            <div className="flex items-end gap-2.5" style={{ flex: "1 0 0" }}>
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
              <button className="white-btn">Filter</button>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 self-stretch">
            {/* Sort */}
            <div className="flex items-start gap-[5px]">
              <p className="label-reg text-[#646464]">Sort by:</p>
              <div className="flex items-center gap-[11px] rounded-lg">
                <p className="label-semi text-[#383838]">First Name</p>
                <img src={sortArrow} alt="" />
              </div>
            </div>
            {/* Table */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
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
                      <input type="checkbox" />
                      Children Name
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Age
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Parent
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Contract End
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Days Left
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Child Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 label-bold text-[#000] !text-[13px]"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                      <input type="checkbox" />
                      Mohammad Ishtiyaq
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Abdullah Shawez
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      10/21/2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">32</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6]">Active</p>
                        </div>
                      </div>
                    </td>
                    <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
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
                      Mohammad Ishtiyaq
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Abdullah Shawez
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      10/21/2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">32</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6]">Active</p>
                        </div>
                      </div>
                    </td>
                    <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
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
                      Laiq Ahmad
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">7</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Abdul Jabbar
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      10/21/2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">-</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                          style={{ background: "rgba(255, 74, 85, 0.10)" }}
                        >
                          <p className="label-semi text-[#FF4A55]">Inactive</p>
                        </div>
                      </div>
                    </td>
                    <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
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
                      Mohammad Ishtiyaq
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Abdullah Shawez
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      10/21/2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">32</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6]">Active</p>
                        </div>
                      </div>
                    </td>
                    <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
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
                      Mohammad Ishtiyaq
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Abdullah Shawez
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      10/21/2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">32</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6]">Active</p>
                        </div>
                      </div>
                    </td>
                    <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
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
                      Mohammad Ishtiyaq
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Abdullah Shawez
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      10/21/2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">32</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6]">Active</p>
                        </div>
                      </div>
                    </td>
                    <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
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

export default StudentsListContent;
