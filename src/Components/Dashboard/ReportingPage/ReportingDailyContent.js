import React from "react";

function ReportingDailyContent() {
  return (
    <div className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-white rounded-[10px] lg:rounded-[0px_10px_10px_10px]">
      {/* Filter */}
      <div className="flex flex-col lg:flex-row items-end gap-5 self-stretch">
        <div
          className="flex flex-col items-start gap-2 self-stretch"
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
          className="flex flex-col items-start gap-2 self-stretch"
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
          className="flex flex-col items-start gap-2 self-stretch"
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
          className="flex flex-col items-start gap-2 self-stretch"
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
        <div className="flex justify-center lg:justify-normal items-center gap-2.5 self-stretch lg:self-auto">
          <input type="checkbox" className="w-[18px] h-[18px] rounded" />
          <h5 className="p-reg text-[#646464]">Exclude weekend days</h5>
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
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Students
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Room
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 p-semi text-[#383838] text-center"
                >
                  Total Days Present
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 p-semi text-[#383838] text-center"
                >
                  Day Attended
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 text-[#383838] p-semi">
                  Mohammad Israr
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">Class 1</td>
                <td className="px-6 py-4 p-reg text-[#646464] text-center">
                  24
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Yes</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 text-[#383838] p-semi">
                  Mohammad Israr
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">Class 1</td>
                <td className="px-6 py-4 p-reg text-[#646464] text-center">
                  24
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Yes</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 text-[#383838] p-semi">
                  Mohammad Israr
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">Class 1</td>
                <td className="px-6 py-4 p-reg text-[#646464] text-center">
                  24
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(255, 74, 85, 0.10)" }}
                    >
                      <p className="label-semi text-[#FF4A55]">No</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 text-[#383838] p-semi">
                  Mohammad Israr
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">Class 1</td>
                <td className="px-6 py-4 p-reg text-[#646464] text-center">
                  24
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(255, 74, 85, 0.10)" }}
                    >
                      <p className="label-semi text-[#FF4A55]">No</p>
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
  );
}

export default ReportingDailyContent;
