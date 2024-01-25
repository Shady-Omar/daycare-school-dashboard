import React from "react";

import sortArrow from "../Assets/sort-dropdown-arrow.svg";
import actionArrow from "../Assets/action-arrow.svg";

function ManagementContent() {
  return (
    <div className="flex flex-col gap-10 self-stretch">
      <div
        className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch bg-white"
        style={{ borderRadius: "0px 10px 10px 10px" }}
      >
        <div className="flex flex-col items-start gap-[30px] self-stretch">
          <div className="flex flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
            <div className="flex flex-col items-start gap-5 self-stretch">
              {/* Sort */}
              <div className="flex items-start gap-[5px]">
                <p className="label-reg text-[#646464]">Sort by:</p>
                <div className="flex items-center gap-[11px] rounded-lg">
                  <p className="label-semi text-[#383838]">Date From</p>
                  <img src={sortArrow} alt="" />
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
                        className="px-6 py-3 p-semi flex items-center gap-[15px]"
                      >
                        Date & Time
                      </th>
                      <th scope="col" className="px-6 py-3 p-semi">
                        Visit Details
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi w-[218px] text-center"
                      >
                        Contact Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi w-[218px] text-center"
                      >
                        Gender
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 p-semi w-[218px] text-center"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                      <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi">
                        09/18/2023 | 2:39 PM
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        <p className="p-reg !font-bold text-[#575757]">
                          Mohammad Iqbal
                        </p>
                        <p className="p-reg text-[#575757]">
                          requested a visit
                        </p>
                      </td>
                      <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                        +966 544008002
                      </td>

                      <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                        Female
                      </td>
                      <td className="flex w-[218px] justify-center py-[15px] px-5 items-center gap-2.5 self-stretch">
                        <div className="flex flex-col justify-center items-start gap-2">
                          <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                            Actions
                            <img src={actionArrow} alt="action" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                      <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi">
                        09/18/2023 | 2:39 PM
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        <p className="p-reg !font-bold text-[#575757]">
                          Mohammad Iqbal
                        </p>
                        <p className="p-reg text-[#575757]">
                          requested a visit
                        </p>
                      </td>
                      <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                        +966 544008002
                      </td>

                      <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                        Female
                      </td>
                      <td className="flex w-[218px] justify-center py-[15px] px-5 items-center gap-2.5 self-stretch">
                        <div className="flex flex-col justify-center items-start gap-2">
                          <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                            Actions
                            <img src={actionArrow} alt="action" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                      <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi">
                        09/18/2023 | 2:39 PM
                      </td>
                      <td className="px-6 py-4 p-reg text-[#646464]">
                        <p className="p-reg !font-bold text-[#575757]">
                          Mohammad Iqbal
                        </p>
                        <p className="p-reg text-[#575757]">
                          requested a visit
                        </p>
                      </td>
                      <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                        +966 544008002
                      </td>

                      <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                        Female
                      </td>
                      <td className="flex w-[218px] justify-center py-[15px] px-5 items-center gap-2.5 self-stretch">
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
        </div>
      </div>
      <div className="flex p-5 flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
        {/* Title */}
        <div
          className="flex flex-col items-start gap-[5px] self-stretch"
          style={{
            padding: "0px 30px 20px 0px",
            borderBottom: "2px solid #F9F9F9",
          }}
        >
          <h2 className="h2-bold text-[#383838]">Upcoming Visits</h2>
        </div>
        {/* Table */}
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
                    Visiter Name
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Gender
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 p-semi w-[218px] text-center"
                  >
                    Contact Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 p-semi w-[218px] text-center"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 p-semi w-[218px] text-center"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 label-bold !text-[13px] w-[218px] text-center text-[#000]"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi">
                    Kholoud mahmoud
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838]">Male</td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    +966 544008002
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    9:33 AM
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    09/09/2023
                  </td>
                  <td className="flex w-[218px] justify-center py-[15px] px-5 items-center gap-2.5 self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi">
                    Kholoud mahmoud
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838]">Male</td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    +966 544008002
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    9:33 AM
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    09/09/2023
                  </td>
                  <td className="flex w-[218px] justify-center py-[15px] px-5 items-center gap-2.5 self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi">
                    Kholoud mahmoud
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838]">Male</td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    +966 544008002
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    9:33 AM
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    09/09/2023
                  </td>
                  <td className="flex w-[218px] justify-center py-[15px] px-5 items-center gap-2.5 self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi">
                    Kholoud mahmoud
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838]">Male</td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    +966 544008002
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    9:33 AM
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    09/09/2023
                  </td>
                  <td className="flex w-[218px] justify-center py-[15px] px-5 items-center gap-2.5 self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi">
                    Kholoud mahmoud
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838]">Male</td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    +966 544008002
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    9:33 AM
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    09/09/2023
                  </td>
                  <td className="flex w-[218px] justify-center py-[15px] px-5 items-center gap-2.5 self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#383838] p-semi">
                    Kholoud mahmoud
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838]">Male</td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    +966 544008002
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    9:33 AM
                  </td>
                  <td className="px-6 py-4 p-semi text-[#383838] !text-[15px] w-[218px] text-center">
                    09/09/2023
                  </td>
                  <td className="flex w-[218px] justify-center py-[15px] px-5 items-center gap-2.5 self-stretch">
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
          {/* Footer */}
          <div className="flex justify-between items-center self-stretch">
            <p className="label-reg text-[#6D6D6D]">
              Showing 10 results from 289 data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementContent;
