import React from "react";

import childrenPlaceholder from "../../../Assets/children-placeholder.png";
import editIcon from "../../../Assets/action-edit.svg";
import deleteIcon from "../../../Assets/delete-icon.svg";
import AddFamilyModal from "../../AddFamilyModal";
import EditFamilyModal from "../../EditFamilyModal";

function FamilyTab() {
  return (
    <div
      className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-[#FFF]"
      style={{ borderRadius: "0px 10px 10px 10px" }}
    >
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
                  className="px-6 py-3 p-semi flex items-center gap-[15px]"
                >
                  Children
                </th>
                <th scope="col" className="px-6 py-3 p-semi">
                  Family
                </th>
                <th scope="col" className="px-6 py-3 p-semi">
                  Signed Up
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
                  <img src={childrenPlaceholder} alt="" />
                  Abdullah Zubair
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <AddFamilyModal />
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Invitation Sent
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
                  <img src={childrenPlaceholder} alt="" />
                  Abdullah Zubair
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div
                    className="flex items-start flex-col gap-2"
                    style={{ flex: "1 0 0" }}
                  >
                    <div className="flex items-center gap-2 self-stretch">
                      <div className="flex items-center gap-2 self-stretch">
                        <div className="flex h-[30px] p-[5px] items-center gap-2.5 rounded-[90px] bg-[#EBEBEB]">
                          <p className="label-semi text-[#383838">MS</p>
                        </div>
                        <p className="label-reg text-[#646464]">
                          Mohammad Saqlain
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <EditFamilyModal />
                        <img
                          className="w-[18px] h-[18px]"
                          src={deleteIcon}
                          alt="delete"
                        />
                      </div>
                    </div>
                    <p className="label-semi text-[#00CCB6]">
                      + Add Approved Pickup
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">Pending</td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
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
                        Add Family
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Invitation Sent
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
                  <img src={childrenPlaceholder} alt="" />
                  Abdullah Zubair
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div
                    className="flex items-start flex-col gap-2"
                    style={{ flex: "1 0 0" }}
                  >
                    <div className="flex items-center gap-2 self-stretch">
                      <div className="flex items-center gap-2 self-stretch">
                        <div className="flex h-[30px] p-[5px] items-center gap-2.5 rounded-[90px] bg-[#EBEBEB]">
                          <p className="label-semi text-[#383838">MS</p>
                        </div>
                        <p className="label-reg text-[#646464]">
                          Mohammad Saqlain
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <img
                          className="w-[18px] h-[18px]"
                          src={editIcon}
                          alt="edit"
                        />
                        <img
                          className="w-[18px] h-[18px]"
                          src={deleteIcon}
                          alt="delete"
                        />
                      </div>
                    </div>
                    <p className="label-semi text-[#00CCB6]">
                      + Add Approved Pickup
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">Pending</td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
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
                        Add Family
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  Invitation Sent
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-semi flex items-center gap-[15px]">
                  <img src={childrenPlaceholder} alt="" />
                  Abdullah Zubair
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">
                  <div
                    className="flex items-start flex-col gap-2"
                    style={{ flex: "1 0 0" }}
                  >
                    <div className="flex items-center gap-2 self-stretch">
                      <div className="flex items-center gap-2 self-stretch">
                        <div className="flex h-[30px] p-[5px] items-center gap-2.5 rounded-[90px] bg-[#EBEBEB]">
                          <p className="label-semi text-[#383838">MS</p>
                        </div>
                        <p className="label-reg text-[#646464]">
                          Mohammad Saqlain
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <img
                          className="w-[18px] h-[18px]"
                          src={editIcon}
                          alt="edit"
                        />
                        <img
                          className="w-[18px] h-[18px]"
                          src={deleteIcon}
                          alt="delete"
                        />
                      </div>
                    </div>
                    <p className="label-semi text-[#00CCB6]">
                      + Add Approved Pickup
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 p-reg text-[#646464]">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FamilyTab;
