import React from "react";

import actionArrow from "../../../../Assets/action-arrow.svg";
import StudentNewAttachmentModal from "../../../StudentNewAttachmentModal";

function StudentsProfileAttachmentsTab() {
  return (
    <div className="flex flex-col p-[30px] items-start gap-[30px] self-stretch rounded-[10px] bg-white">
      <StudentNewAttachmentModal />
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
                <th
                  scope="col"
                  className="px-6 py-3 p-semi w-[337px] text-[#383838] flex items-center gap-[15px]"
                >
                  Type
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Visible To
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Uploaded
                </th>
                <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                  Expiration Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 p-semi text-[#383838] text-center !text-[13px]"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 flex flex-col w-[337px] justify-center items-start gap-[5px]">
                  <p className="p-semi text-[#383838] !text-[15px]">
                    Enrollment Contract
                  </p>
                  <p className="p-reg text-[#878787]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </td>
                <td className="px-6 py-4 p-reg text-[#646464] w-[148px]">
                  Admins, Teachers, Parents
                </td>
                <td className="px-6 py-4 flex flex-col justify-center items-start gap-[5px]">
                  <p className="p-semi text-[#383838] !text-[15px]">
                    09/30/2023
                  </p>
                  <p className="p-reg text-[#A4A4A4]">Abdullah Bilal</p>
                </td>

                <td className="px-6 py-4 p-semi text-[#FF4A55]  !text-[15px]">
                  09/29/2023
                </td>

                <td className="py-[15px] px-5">
                  <div className="flex flex-col items-center justify-center gap-2">
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

export default StudentsProfileAttachmentsTab;
