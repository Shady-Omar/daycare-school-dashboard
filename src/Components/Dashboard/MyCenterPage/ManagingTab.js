import React from "react";

import sortArrow from "../../../Assets/sort-dropdown-arrow.svg";
import plusIcon from "../../../Assets/circle-plus-icon.svg";

import childrenPlaceholder from "../../../Assets/children-placeholder.png";

function ManagingTab() {
  return (
    <div className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-white rounded-[10px] lg:rounded-[0px_10px_10px_10px]">
      <div className="flex flex-col justify-center items-start gap-5 self-stretch">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-[30px] lg:gap-0 self-stretch">
          {/* Sort */}
          <div className="flex items-start gap-[5px]">
            <p className="label-reg text-[#646464]">Sort by:</p>
            <div className="flex items-center gap-[11px] rounded-lg">
              <p className="label-semi text-[#383838]">First Name</p>
              <img src={sortArrow} alt="" />
            </div>
          </div>
          <button className="cyan-btn flex flex-row items-center justify-center self-stretch">
            <img src={plusIcon} alt="" />
            Add Staff
          </button>
        </div>
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
                  <th
                    scope="col"
                    className="px-6 py-3 p-semi flex items-center gap-[15px]"
                  >
                    Staff
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi text-center">
                    Status
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
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                    <img src={childrenPlaceholder} alt="" />
                    Abdullah Zubair
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    abdullahzubair@email.com
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">Admin</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex items-center flex-col gap-2">
                      <div
                        className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6] !text-xs">
                          Online
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                    <button className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#A4A4A4] bg-[#FFF] !text-[#A4A4A4] label-reg">
                        Remove
                      </div>
                    </button>
                    <button className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#A4A4A4] bg-[#FFF] !text-[#A4A4A4] label-reg">
                        Message
                      </div>
                    </button>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                    <img src={childrenPlaceholder} alt="" />
                    Abdullah Zubair
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    abdullahzubair@email.com
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">Staff</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex items-center flex-col gap-2">
                      <div
                        className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                        style={{ background: "rgba(255, 74, 85, 0.10)" }}
                      >
                        <p className="label-semi text-[#FF4A55] !text-xs">
                          Offline
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                    <button className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#FF4A55] bg-[#FFF] !text-[#383838] label-reg">
                        Remove
                      </div>
                    </button>
                    <button className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#00CCB6] bg-[#FFF] !text-[#383838] label-reg">
                        Message
                      </div>
                    </button>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                    <img src={childrenPlaceholder} alt="" />
                    Abdullah Zubair
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    abdullahzubair@email.com
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">Admin</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex items-center flex-col gap-2">
                      <div
                        className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6] !text-xs">
                          Online
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                    <button className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#FF4A55] bg-[#FFF] !text-[#383838] label-reg">
                        Remove
                      </div>
                    </button>
                    <button className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md border border-[#00CCB6] bg-[#FFF] !text-[#383838] label-reg">
                        Message
                      </div>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagingTab;
