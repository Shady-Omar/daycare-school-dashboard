import React from "react";
import BillingTabs from "../../BillingTabs";
import actionArrow from "../../../Assets/action-arrow.svg";

function BillingRefundContent() {
  return (
    <div className="flex flex-col items-start gap-[30px] self-stretch">
      <div className="flex flex-col items-start self-stretch">
        {/* Tabs */}
        <BillingTabs />
        <div
          className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-white"
          style={{ borderRadius: "0px 10px 10px 10px" }}
        >
          {/* Filter */}
          <div className="flex items-end gap-5 self-stretch">
            <div
              className="flex flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">Search Students</label>
              <input
                type="text"
                className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DBDADE" }}
                placeholder="Search here"
              />
            </div>
            <div
              className="flex flex-col items-start gap-2"
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
              className="flex flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">Date From</label>
              <input
                type="date"
                className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DBDADE" }}
              />
            </div>
            <div
              className="flex flex-col items-start gap-2"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">Date To</label>
              <input
                type="date"
                className="text-[#A4A4A4] p-reg flex h-[50px] px-5 items-center self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DBDADE" }}
              />
            </div>
            <button className="cyan-btn">Filter</button>
          </div>
          {/* Data */}
          <div className="flex flex-col items-start gap-5 self-stretch">
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
                    <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                      Invoice Number
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                      Student’s Name
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                      Student ID
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 p-semi text-[#383838] text-center"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 text-[#383838] p-semi">
                      25/9/2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Term Plan
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      5483716944
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Abdullah Bilal
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      1002541455
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      SAR 100.00
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
                    <td className="px-6 py-4 text-[#383838] p-semi">
                      25/9/2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Term Plan
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      5483716944
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Abdullah Bilal
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      1002541455
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      SAR 100.00
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
                    <td className="px-6 py-4 text-[#383838] p-semi">
                      25/9/2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Term Plan
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      5483716944
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Abdullah Bilal
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      1002541455
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      SAR 100.00
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
                    <td className="px-6 py-4 text-[#383838] p-semi">
                      25/9/2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Term Plan
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      5483716944
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      Abdullah Bilal
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      1002541455
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      SAR 100.00
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
                Showing 4 results from 29 data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingRefundContent;
