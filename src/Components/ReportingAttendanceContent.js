import React from "react";

function ReportingAttendanceContent() {
  return (
    <div
      className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-white"
      style={{ borderRadius: "0px 10px 10px 10px" }}
    >
      {/* Filter */}
      <div className="flex items-center gap-5 self-stretch">
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
        <div
          className="flex flex-col items-start gap-2"
          style={{ flex: "1 0 0" }}
        >
          <label className="label text-[#868686]">Students</label>
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
          <label className="label text-[#868686]">Room</label>
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
          <label className="label text-[#868686]">Students Status</label>
          <select
            className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
            style={{ border: "1px solid #DBDADE" }}
            defaultValue={"Select"}
          >
            <option value="Select">Select</option>
            {/* <option value="PM">PM</option> */}
          </select>
        </div>
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
                  Students
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Room
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Check-In
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Signed In By
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Check-Out
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Signed Out By
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Total Hrs
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 text-[#383838] p-semi">
                  Mohammad Israr
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">Class 1</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  09/25/2023 <br /> 08:32pm
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Bilal
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  09/25/2023 <br /> 08:32pm
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Bilal
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">4hrs</td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 text-[#383838] p-semi">
                  Mohammad Israr
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">Class 1</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  09/25/2023 <br /> 08:32pm
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Bilal
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  09/25/2023 <br /> 08:32pm
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Bilal
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">4hrs</td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 text-[#383838] p-semi">
                  Mohammad Israr
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">Class 1</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  09/25/2023 <br /> 08:32pm
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Bilal
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  09/25/2023 <br /> 08:32pm
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Abdullah Bilal
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">4hrs</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Footer */}
        <div className="flex justify-between items-center self-stretch">
          <p className="label-reg text-[#6D6D6D]">
            Showing 3 results from 29 data
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReportingAttendanceContent;
