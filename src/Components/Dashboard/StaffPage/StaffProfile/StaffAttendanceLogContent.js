import React from "react";

function StaffAttendanceLogContent() {
  return (
    <div className="flex flex-col p-[30px] items-start gap-[30px] self-stretch rounded-[10px] bg-white">
      {/* Filter */}
      <div className="flex flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
        {/* Form */}
        <div className="flex flex-col lg:flex-row items-end gap-[15px] self-stretch">
          <div className="flex flex-col self-stretch lg:w-[205px] items-start gap-2">
            <label className="label text-[#868686]">Month</label>
            <select
              className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
              style={{ border: "1px solid #DBDADE" }}
              defaultValue={"December"}
            >
              <option value="December">December</option>
              {/* <option value="PM">PM</option> */}
            </select>
          </div>
          <div className="flex flex-col self-stretch lg:w-[205px] items-start gap-2">
            <label className="label text-[#868686]">Year</label>
            <select
              className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
              style={{ border: "1px solid #DBDADE" }}
              defaultValue={"2023"}
            >
              <option value="2023">2023</option>
              {/* <option value="PM">PM</option> */}
            </select>
          </div>
        </div>
      </div>
      {/* Data */}
      <div className="flex flex-col items-center gap-[30px] self-stretch rounded-[10px] bg-white">
        <div className="flex flex-col items-center gap-5 self-stretch">
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
                    Day
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                    Clocked In
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                    Clocked Out
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                    Shift
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-bold flex items-center gap-[15px]">
                    31 Dec 2023, Sunday
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">07:00 AM</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">-</td>

                  <td className="px-6 py-4 p-bold text-[#646464]">
                    05 AM - 08 PM
                  </td>
                  <td className="px-6 py-4 p-semi !text-[15px] text-[#FFAB2D]">
                    LATE
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#646464] p-bold flex items-center gap-[15px]">
                    30 Dec 2023, Saturday
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">07:00 AM</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">05:00 PM</td>

                  <td className="px-6 py-4 p-bold text-[#646464]">
                    05 AM - 08 PM
                  </td>
                  <td className="px-6 py-4 p-semi !text-[15px] text-[#00CCB6]">
                    ON TIME
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#6D6D6D] p-bold flex items-center gap-[15px]">
                    29 Dec 2023, Friday
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]"> </td>
                  <td className="px-6 py-4 p-reg text-[#646464]"> </td>

                  <td className="px-6 py-4 p-bold text-[#646464]"> </td>
                  <td className="px-6 py-4 p-semi !text-[15px] text-[#737373]">
                    Weekend
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#6D6D6D] p-bold flex items-center gap-[15px]">
                    31 Dec 2023, Sunday
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]"> </td>
                  <td className="px-6 py-4 p-reg text-[#646464]"> </td>

                  <td className="px-6 py-4 p-bold text-[#646464]">
                    05 AM - 08 PM
                  </td>
                  <td className="px-6 py-4 p-semi !text-[15px] text-[#F31A1A]">
                    ABSENT
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#6D6D6D] p-bold flex items-center gap-[15px]">
                    26 Dec 2023, Tuesday
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]"> </td>
                  <td className="px-6 py-4 p-reg text-[#646464]"> </td>

                  <td className="px-6 py-4 p-bold text-[#646464]"></td>
                  <td className="px-6 py-4 p-semi !text-[15px] text-[#6D6D6D]">
                    OFF SHIFT
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#6D6D6D] p-bold flex items-center gap-[15px]">
                    26 Dec 2023, Tuesday
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]"> </td>
                  <td className="px-6 py-4 p-reg text-[#646464]"> </td>

                  <td className="px-6 py-4 p-bold text-[#646464]"></td>
                  <td className="px-6 py-4 p-semi !text-[15px] text-[#5ECFFF]">
                    ON LEAVE
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="flex justify-between items-center self-stretch">
        <p className="label-reg text-[#6D6D6D]">
          Showing 6 results from 289 data
        </p>
      </div>
    </div>
  );
}

export default StaffAttendanceLogContent;
