import React from "react";
import DropdownActionMenu from "./DropdownActionMenu";
import sortArrow from "../Assets/sort-dropdown-arrow.svg";

function ReviewsContent() {
  return (
    <div className="flex p-[30px] items-start flex-col justify-center gap-[30px] self-stretch rounded-[10px] bg-white">
      {/* Data */}
      <div className="flex flex-col items-start gap-5 self-stretch">
        {/* Sort */}
        <div className="flex items-start gap-[5px]">
          <p className="label-reg text-[#646464]">Sort by:</p>
          <div className="flex items-center gap-[11px] rounded-lg">
            <p className="label-semi text-[#383838]">Latest</p>
            <img src={sortArrow} alt="" />
          </div>
        </div>
        {/* Table */}
        <div className="relative shadow-md sm:rounded-lg w-full">
          <table className="w-full text-left rtl:text-right bg-[#FFF] sm:rounded-lg">
            <thead
              className=" bg-[#EBEBEB] text-[#383838] sm:rounded-lg"
              style={{
                borderRadius: "10px 10px 0px 0px",
                border: "0.5px solid #EBEBEB",
              }}
            >
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 p-semi w-[62px] text-[#383838] flex items-center gap-[15px]"
                >
                  No.
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 p-semi w-[539px] text-[#383838]"
                >
                  Reviews
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 p-semi w-[72px] text-[#383838]"
                >
                  Rating
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 p-semi w-[110px] text-[#383838]"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 p-semi w-[256px] text-[#383838] text-center !text-[13px]"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-5 py-[15px] flex flex-col w-[62px] text-[#383838] justify-center items-center gap-[5px]">
                  1.
                </td>
                <td className="px-5 py-[15px] p-reg text-[#646464] w-[539px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when...
                </td>
                <td className="px-6 py-4 w-[72px]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex items-center gap-2.5 py-2.5 px-[15px] rounded-md text-[#FFAB2D] label-semi"
                      style={{ background: "rgba(255, 171, 45, 0.10)" }}
                    >
                      5.0
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 w-[110px]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex items-center gap-2.5 py-2.5 px-[15px] rounded-md text-[#00CCB6] label-semi"
                      style={{ background: "rgba(0, 204, 182, 0.10)" }}
                    >
                      Published
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 w-[256px] flex justify-center self-stretch">
                  <DropdownActionMenu />
                </td>
              </tr>
              <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                <td className="px-5 py-[15px] flex flex-col w-[62px] text-[#383838] justify-center items-center gap-[5px]">
                  2.
                </td>
                <td className="px-5 py-[15px] p-reg text-[#646464] w-[539px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when...
                </td>
                <td className="px-6 py-4 w-[72px]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex items-center gap-2.5 py-2.5 px-[15px] rounded-md text-[#FFAB2D] label-semi"
                      style={{ background: "rgba(255, 171, 45, 0.10)" }}
                    >
                      5.0
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 w-[110px]">
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className="flex items-center gap-2.5 py-2.5 px-[15px] rounded-md text-[#6418C3] label-semi"
                      style={{ background: "rgba(100, 24, 195, 0.10)" }}
                    >
                      Hidden
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 w-[256px] flex justify-center self-stretch">
                  <DropdownActionMenu />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Footer */}
        <div className="flex justify-between items-center self-stretch">
          <p className="label-reg text-[#6D6D6D]">
            Showing 10 results from 289 data
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewsContent;
