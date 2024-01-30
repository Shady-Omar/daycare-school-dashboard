import React from "react";

function StaffSalaryLogContent() {
  return (
    <div className="flex flex-col p-[30px] items-start gap-[30px] self-stretch rounded-[10px] bg-white">
      {/* Filter */}
      <div className="flex flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
        {/* Form */}
        <div className="flex items-end gap-[15px] self-stretch">
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
                  className="px-6 py-3 p-semi text-[#383838] flex items-center gap-[15px]"
                >
                  Month
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Total Salary
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Deduction
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Amount Paid
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Paid Date
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-bold flex items-center gap-[15px]">
                  December 2023
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">3,000.00</td>
                <td className="px-6 py-4 p-reg text-[#646464]">500.00</td>

                <td className="px-6 py-4 p-reg text-[#00CCB6]">-</td>
                <td className="px-6 py-4 p-reg text-[#646464]">-</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(255, 171, 45, 0.10)" }}
                    >
                      <p className="label-semi text-[#FFAB2D]">Uncompleted</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-bold flex items-center gap-[15px]">
                  October 2023
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">3,000.00</td>
                <td className="px-6 py-4 p-reg text-[#646464]">500.00</td>

                <td className="px-6 py-4 p-reg text-[#00CCB6]">2,500.00</td>
                <td className="px-6 py-4 p-reg text-[#646464]">25/11/2023</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Completed</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-bold flex items-center gap-[15px]">
                  October 2023
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">3,000.00</td>
                <td className="px-6 py-4 p-reg text-[#646464]">500.00</td>

                <td className="px-6 py-4 p-reg text-[#00CCB6]">2,500.00</td>
                <td className="px-6 py-4 p-reg text-[#646464]">25/11/2023</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Completed</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-bold flex items-center gap-[15px]">
                  September 2023
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">3,000.00</td>
                <td className="px-6 py-4 p-reg text-[#646464]">500.00</td>

                <td className="px-6 py-4 p-reg text-[#00CCB6]">2,500.00</td>
                <td className="px-6 py-4 p-reg text-[#646464]">25/11/2023</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Completed</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Footer */}
      <div className="flex justify-between items-center self-stretch">
        <p className="label-reg text-[#6D6D6D]">
          Showing 10 results from 289 data
        </p>
      </div>
    </div>
  );
}

export default StaffSalaryLogContent;
