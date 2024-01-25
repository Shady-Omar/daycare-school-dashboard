import React from "react";

import absentIcon from "../Assets/absent-icon.svg";
import presentRoomsIcon from "../Assets/visited-icon.svg";
import timeIcon from "../Assets/time-icon.svg";
import childrenPlaceholder from "../Assets/children-placeholder.png";
import sortArrow from "../Assets/sort-dropdown-arrow.svg";
import downArrow from "../Assets/cyan-down-arrow.svg";
import checkoutIcon from "../Assets/checkout-icon.svg";
import ChangeStudentStatus from "./ChangeStudentStatus";

function ChildrenTab() {
  return (
    <>
      {/* Cards */}
      <div
        className="flex flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-[#FFF]"
        style={{ padding: "30px 30px 0px 30px" }}
      >
        <div className="flex items-center gap-5 self-stretch">
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF]"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#00CCB6]">
              <img src={presentRoomsIcon} alt="" />
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">263</h2>
              <p className="p-reg text-[#878787]">Total Present</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF]"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#FF4A55]">
              <img src={absentIcon} alt="" />
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">75</h2>
              <p className="p-reg text-[#878787]">Total Absent</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF]"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#FFAB2D]">
              <img src={timeIcon} alt="" />
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">174</h2>
              <p className="p-reg text-[#878787]">Total Time Exceeded</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF]"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#5ECFFF]">
              <img src={timeIcon} alt="" />
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">68</h2>
              <p className="p-reg text-[#878787]">Total Early</p>
            </div>
          </div>
        </div>
      </div>
      {/* Data */}
      <div
        className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-[#FFF]"
        style={{ borderRadius: "0px 10px 10px 10px" }}
      >
        <div className="flex items-center gap-[30px] self-stretch">
          <div
            className="flex flex-col items-start gap-2"
            style={{ flex: "1 0 0" }}
          >
            <label className="label text-[#868686]">Children</label>
            <select
              className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left self-stretch focus:border-none focus:outline-none placeholder-gray-400"
              style={{ border: "1px solid #DBDADE" }}
              defaultValue={"Select"}
            >
              <option value="Select">Select</option>
              {/* <option value="PM">PM</option> */}
            </select>
          </div>
        </div>
        {/* Info */}
        <div className="flex items-center gap-[30px] self-stretch">
          <div
            className="flex py-[15px] px-5 justify-between items-center self-stretch rounded-[10px] bg-[#00CCB6]"
            style={{ flex: "1 0 0" }}
          >
            <p className="p-semi text-[#FFF]">1 Children selected</p>
            <div className="flex items-center gap-5">
              <ChangeStudentStatus />
              <button
                className="flex h-[45px] justify-center items-center rounded-[5px] p-5 gap-3 label-reg text-[#FFF]"
                style={{ border: "1px solid #FFF" }}
              >
                Change Room
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-5 self-stretch">
          {/* Sort */}
          <div className="flex justify-between items-center self-stretch">
            <div className="flex items-start gap-[5px]">
              <p className="label-reg text-[#646464]">Sort by:</p>
              <div className="flex items-center gap-[11px] rounded-lg">
                <p className="label-semi text-[#383838]">First Name</p>
                <img src={sortArrow} alt="" />
              </div>
            </div>
            <p className="label-reg text-[#6D6D6D]">5 Children Total</p>
          </div>
          <div className="flexx flex-col items-start gap-5 self-stretch">
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
                      Children
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Age
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Time Status
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 label-bold text-center text-[#000] !text-[13px]"
                    >
                      {" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
                      <input type="checkbox" checked />
                      <img src={childrenPlaceholder} alt="" />
                      Abdullah Zubair
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex items-start flex-col gap-2">
                        <div
                          className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6] !text-xs">
                            3 YO
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
                            Present
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#00CCB6] bg-[#FFF] !text-[#383838] action-btn">
                          <img src={downArrow} alt="action" />
                          Move Room
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#FFAB2D] bg-[#FFF] !text-[#383838] action-btn">
                          <img src={checkoutIcon} alt="action" />
                          Check Out
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
                      <input type="checkbox" checked />
                      <img src={childrenPlaceholder} alt="" />
                      Abdullah Zubair
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex items-start flex-col gap-2">
                        <div
                          className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6] !text-xs">
                            3 YO
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
                            Present
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#00CCB6] bg-[#FFF] !text-[#383838] action-btn">
                          <img src={downArrow} alt="action" />
                          Move Room
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#FFAB2D] bg-[#FFF] !text-[#383838] action-btn">
                          <img src={checkoutIcon} alt="action" />
                          Check Out
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
                      <input type="checkbox" checked />
                      <img src={childrenPlaceholder} alt="" />
                      Abdullah Zubair
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex items-start flex-col gap-2">
                        <div
                          className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6] !text-xs">
                            3 YO
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
                            Present
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#00CCB6] bg-[#FFF] !text-[#383838] action-btn">
                          <img src={downArrow} alt="action" />
                          Move Room
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#FFAB2D] bg-[#FFF] !text-[#383838] action-btn">
                          <img src={checkoutIcon} alt="action" />
                          Check Out
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
                      <input type="checkbox" checked />
                      <img src={childrenPlaceholder} alt="" />
                      Abdullah Zubair
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex items-start flex-col gap-2">
                        <div
                          className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6] !text-xs">
                            3 YO
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
                            Present
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#00CCB6] bg-[#FFF] !text-[#383838] action-btn">
                          <img src={downArrow} alt="action" />
                          Move Room
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#FFAB2D] bg-[#FFF] !text-[#383838] action-btn">
                          <img src={checkoutIcon} alt="action" />
                          Check Out
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
                      <input type="checkbox" checked />
                      <img src={childrenPlaceholder} alt="" />
                      Abdullah Zubair
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex items-start flex-col gap-2">
                        <div
                          className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6] !text-xs">
                            3 YO
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
                            Present
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#00CCB6] bg-[#FFF] !text-[#383838] action-btn">
                          <img src={downArrow} alt="action" />
                          Move Room
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#FFAB2D] bg-[#FFF] !text-[#383838] action-btn">
                          <img src={checkoutIcon} alt="action" />
                          Check Out
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChildrenTab;
