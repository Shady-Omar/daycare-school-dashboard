import React from "react";

import sortArrow from "../../../Assets/sort-dropdown-arrow.svg";
import actionArrow from "../../../Assets/action-arrow.svg";

function TotalStudentsContent() {
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
        <h2 className="h2-bold text-[#383838]">Total Student</h2>
        <p className="p-reg text-[#878787]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        </p>
      </div>
      {/* Filter */}
      <div
        className="flex items-start content-start self-stretch flex-wrap"
        style={{ padding: "30px 30px 0px 30px", gap: "20px 30px" }}
      >
        <div
          className="flex min-w-[333px] flex-col items-start gap-2"
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
          className="flex min-w-[333px] flex-col items-start gap-2"
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
          className="flex min-w-[333px] flex-col items-start gap-2"
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
          className="flex min-w-[333px] flex-col items-start gap-2"
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
          className="flex min-w-[333px] flex-col items-start gap-2"
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
          className="flex min-w-[333px] flex-col items-start gap-2"
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
        className="flex p-[30px] flex-col items-start gap-[30px] self-stretch bg-[#FFF]"
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
                  Child Status
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
                  <input type="checkbox" />
                  Mohammad Ishtiyaq
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Shawez
                </td>

                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Visited</p>
                    </div>
                  </div>
                </td>
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
                  <input type="checkbox" />
                  Mohammad Ishtiyaq
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Shawez
                </td>

                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Visited</p>
                    </div>
                  </div>
                </td>
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
                  <input type="checkbox" />
                  Laiq Ahmad
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">7</td>
                <td className="px-6 py-4 p-reg text-[#646464]">Abdul Jabbar</td>

                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(100, 24, 195, 0.10)" }}
                    >
                      <p className="label-semi text-[#6418C3]">Waitlist</p>
                    </div>
                  </div>
                </td>
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
                  <input type="checkbox" />
                  Mohammad Ishtiyaq
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Shawez
                </td>

                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Visited</p>
                    </div>
                  </div>
                </td>
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
                  <input type="checkbox" />
                  Mohammad Ishtiyaq
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Shawez
                </td>

                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Visited</p>
                    </div>
                  </div>
                </td>
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
                  <input type="checkbox" />
                  Mohammad Ishtiyaq
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">5</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Shawez
                </td>

                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Visited</p>
                    </div>
                  </div>
                </td>
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
  );
}

export default TotalStudentsContent;
