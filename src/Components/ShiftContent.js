import React from "react";

import actionArrow from "../Assets/action-arrow.svg";

function ShiftContent() {
  return (
    <div className="flex p-5 flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
      {/* Filter */}
      <div className="flex justify-between items-center self-stretch rounded-xl">
        <div className="flex items-end gap-2.5" style={{ flex: "1 0 0" }}>
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Shift Name</label>
            <input
              type="text"
              className="flex h-[50px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
              style={{ border: "1px solid #DBDADE" }}
              placeholder="Search by shift name..."
            />
          </div>
          <button className="white-btn w-[150px]">Search</button>
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
                <th scope="col" className="px-6 py-3 p-semi !text-[15px]">
                  Shift Name
                </th>
                <th scope="col" className="px-6 py-3 p-semi !text-[15px]">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 p-semi !text-[15px]">
                  Break Time
                </th>
                <th scope="col" className="px-6 py-3 p-semi !text-[15px]">
                  Employees #
                </th>
                <th scope="col" className="px-6 py-3 p-semi !text-[15px]">
                  Clock-in Rules
                </th>
                <th scope="col" className="px-6 py-3 p-semi !text-[15px]">
                  Clock-out Rules
                </th>

                <th scope="col" className="px-6 py-3  p-semi !text-[15px]">
                  {""}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 gap-[5px]">
                  <p className="p-semi !text-[15px]">8 am - 5 pm</p>
                  <p className="label-reg text-[#A4A4A4] !text-[15px]">
                    Monday
                  </p>
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">9 hr</td>
                <td className="px-6 py-4 p-reg text-[#646464]">30 min</td>
                <td className="px-6 py-4 p-reg text-[#00CCB6] underline">30</td>
                <td className="px-6 py-4 p-reg text-[#646464] flex flex-col gap-2.5">
                  <div className="flex items-start flex-col gap-2">
                    <div
                      className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6] !text-xs">
                        No earlier than 7 am
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start flex-col gap-2">
                    <div
                      className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                      style={{ background: "rgba(255, 171, 45, 0.10)" }}
                    >
                      <p className="label-semi text-[#FFAB2D] !text-xs">
                        30 min allowed delay
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start flex-col gap-2">
                    <div
                      className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                      style={{ background: "rgba(100, 24, 195, 0.10)" }}
                    >
                      <p className="label-semi text-[#6418C3] !text-xs">
                        No later than 10 pm
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 p-reg text-[#646464] gap-2.5">
                  <div className="flex items-start flex-col gap-2 mb-2">
                    <div
                      className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6] !text-xs">
                        Clocking out is not required
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start flex-col gap-2">
                    <div
                      className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                      style={{ background: "rgba(227, 40, 175, 0.10)" }}
                    >
                      <p className="label-semi text-[#E328AF] !text-xs">
                        2 hrs overtime
                      </p>
                    </div>
                  </div>
                </td>

                <td className=" py-[15px] px-5 self-stretch">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                      Actions
                      <img src={actionArrow} alt="action" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap flex flex-col items-start gap-[5px]">
                  <p className="p-semi !text-[15px]">8 am - 5 pm</p>
                  <p className="label-reg text-[#A4A4A4] !text-[15px]">
                    Monday
                  </p>
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">9 hr</td>
                <td className="px-6 py-4 p-reg text-[#646464]">30 min</td>
                <td className="px-6 py-4 p-reg text-[#00CCB6] underline">30</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex items-start flex-col gap-2">
                    <div
                      className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6] !text-xs">
                        No earlier than 7 am
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex items-start flex-col gap-2">
                    <div
                      className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6] !text-xs">
                        Clocking out is not required
                      </p>
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
                <td className="px-6 py-4 whitespace-nowrap flex flex-col items-start gap-[5px]">
                  <p className="p-semi !text-[15px]">8 am - 5 pm</p>
                  <p className="label-reg text-[#A4A4A4] !text-[15px]">
                    Monday
                  </p>
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">9 hr</td>
                <td className="px-6 py-4 p-reg text-[#646464]">30 min</td>
                <td className="px-6 py-4 p-reg text-[#00CCB6] underline">30</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex items-start flex-col gap-2">
                    <div
                      className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6] !text-xs">
                        No earlier than 7 am
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex items-start flex-col gap-2">
                    <div
                      className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6] !text-xs">
                        Clocking out is not required
                      </p>
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
                <td className="px-6 py-4 whitespace-nowrap flex flex-col items-start gap-[5px]">
                  <p className="p-semi !text-[15px]">8 am - 5 pm</p>
                  <p className="label-reg text-[#A4A4A4] !text-[15px]">
                    Monday
                  </p>
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">9 hr</td>
                <td className="px-6 py-4 p-reg text-[#646464]">30 min</td>
                <td className="px-6 py-4 p-reg text-[#00CCB6] underline">30</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex items-start flex-col gap-2">
                    <div
                      className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6] !text-xs">
                        No earlier than 7 am
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex items-start flex-col gap-2">
                    <div
                      className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6] !text-xs">
                        Clocking out is not required
                      </p>
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
      </div>
    </div>
  );
}

export default ShiftContent;
