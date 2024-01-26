import React from "react";

import actionArrow from "../../../../Assets/action-arrow.svg";

function StudentsProfileInvoicesTab() {
  return (
    <div className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch rounded-[10px] bg-white">
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
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                  />
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 p-semi">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 p-semi">
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 label-bold text-[#000] !text-[13px]"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                  />
                  259,373.00 SAR
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">23/11/2023</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(255, 74, 85, 0.10)" }}
                    >
                      <p className="label-semi text-[#FF4A55]">Unpaid</p>
                    </div>
                  </div>
                </td>

                <td className="flex py-[15px] px-5 justify-center items-center gap-[15px] self-stretch">
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
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                  />
                  199,134.00 SAR
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">23/10/2023</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Paid</p>
                    </div>
                  </div>
                </td>

                <td className="flex py-[15px] px-5 justify-center items-center gap-2.5 self-stretch">
                  <button
                    className="flex w-[115px] h-9 py-2.5 px-5 gap-3 label-bold text-[#00CCB6] !text-[13px] justify-center items-center shrink-0 rounded-[10px] bg-white"
                    style={{ border: "1px solid #00CCB6" }}
                  >
                    Download
                  </button>
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                  />
                  240,373.00 SAR
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">20/09/2023</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Paid</p>
                    </div>
                  </div>
                </td>

                <td className="flex py-[15px] px-5 justify-center items-center gap-2.5 self-stretch">
                  <button
                    className="flex w-[115px] h-9 py-2.5 px-5 gap-3 label-bold text-[#00CCB6] !text-[13px] justify-center items-center shrink-0 rounded-[10px] bg-white"
                    style={{ border: "1px solid #00CCB6" }}
                  >
                    Download
                  </button>
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                  />
                  240,373.00 SAR
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">20/09/2023</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Paid</p>
                    </div>
                  </div>
                </td>

                <td className="flex py-[15px] px-5 justify-center items-center gap-2.5 self-stretch">
                  <button
                    className="flex w-[115px] h-9 py-2.5 px-5 gap-3 label-bold text-[#00CCB6] !text-[13px] justify-center items-center shrink-0 rounded-[10px] bg-white"
                    style={{ border: "1px solid #00CCB6" }}
                  >
                    Download
                  </button>
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded"
                  />
                  240,373.00 SAR
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">20/09/2023</td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      <p className="label-semi text-[#00CCB6]">Paid</p>
                    </div>
                  </div>
                </td>

                <td className="flex py-[15px] px-5 justify-center items-center gap-2.5 self-stretch">
                  <button
                    className="flex w-[115px] h-9 py-2.5 px-5 gap-3 label-bold text-[#00CCB6] !text-[13px] justify-center items-center shrink-0 rounded-[10px] bg-white"
                    style={{ border: "1px solid #00CCB6" }}
                  >
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Footer */}
        <div className="flex justify-between items-center self-stretch">
          <p className="label-reg text-[#6D6D6D]">
            Showing 5 results from 289 data
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentsProfileInvoicesTab;
