import React from "react";

import actionArrow from "../../../Assets/action-arrow.svg";

function CouponsContent() {
  return (
    <div className="flex flex-col items-start gap-5 self-stretch">
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
                <input type="checkbox" />
                Coupon Name
              </th>
              <th scope="col" className="px-6 py-3 p-semi">
                Coupon Code
              </th>
              <th scope="col" className="px-6 py-3 p-semi">
                Discount
              </th>
              <th scope="col" className="px-6 py-3 p-semi">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3 p-semi">
                End Date
              </th>
              <th scope="col" className="px-6 py-3 p-semi">
                Limit
              </th>
              <th
                scope="col"
                className="px-6 py-3 label-bold text-[#000] !text-[13px]"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
              <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi flex items-center gap-[15px]">
                <input type="checkbox" />
                Summer Sale
              </td>
              <td className="px-6 py-4 p-reg text-[#646464]">Summerfun123</td>
              <td className="px-6 py-4 p-reg text-[#646464]">100 SAR</td>
              <td className="px-6 py-4 p-reg text-[#646464]">12/10/2023</td>
              <td className="px-6 py-4 p-reg text-[#646464]">12/11/2023</td>
              <td className="px-6 py-4 p-reg text-[#646464]">25/50</td>
              <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
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
                <input type="checkbox" />
                Winter Sale
              </td>
              <td className="px-6 py-4 p-reg text-[#646464]">Summerwinter</td>
              <td className="px-6 py-4 p-reg text-[#646464]">50 SAR</td>
              <td className="px-6 py-4 p-reg text-[#646464]">12/12/2023</td>
              <td className="px-6 py-4 p-reg text-[#646464]">12/01/2023</td>
              <td className="px-6 py-4 p-reg text-[#646464]">50/50</td>
              <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
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
                <input type="checkbox" />
                Autumn Sale
              </td>
              <td className="px-6 py-4 p-reg text-[#646464]">Summerautumn</td>
              <td className="px-6 py-4 p-reg text-[#646464]">100 SAR</td>
              <td className="px-6 py-4 p-reg text-[#646464]">12/02/2024</td>
              <td className="px-6 py-4 p-reg text-[#646464]">12/03/2024</td>
              <td className="px-6 py-4 p-reg text-[#646464]">50/50</td>
              <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
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
                <input type="checkbox" />
                Back To School
              </td>
              <td className="px-6 py-4 p-reg text-[#646464]">Backtoschool</td>
              <td className="px-6 py-4 p-reg text-[#646464]">50 SAR</td>
              <td className="px-6 py-4 p-reg text-[#646464]">25/06/2024</td>
              <td className="px-6 py-4 p-reg text-[#646464]">25/07/2024</td>
              <td className="px-6 py-4 p-reg text-[#646464]">100/100</td>
              <td className="flex w-[148px] py-[15px] px-5 items-center gap-[15px] self-stretch">
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

      <div className="flex items-center gap-5 self-stretch">
        <p className="label-reg text-[#6D6D6D]">
          Showing 4 results from 4 data
        </p>
      </div>
    </div>
  );
}

export default CouponsContent;
