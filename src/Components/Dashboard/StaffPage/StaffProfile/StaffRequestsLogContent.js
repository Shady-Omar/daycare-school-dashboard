import React from "react";

function StaffRequestsLogContent() {
  return (
    <div className="flex p-[30px] flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
      {/* Title */}
      <div
        className="flex pb-5 items-end gap-[5px] self-stretch"
        style={{ borderBottom: "1px solid #EBEBEB" }}
      >
        <div
          className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-[15px] lg:gap-0"
          style={{ flex: "1 0 0" }}
        >
          <h5 className="h5-bold text-[#202020]">Request Logs</h5>
          {/* dropdown */}
          <div
            className="flex py-2.5 px-5 items-center gap-[11px] rounded-lg bg-white"
            style={{ border: "1px solid #DCDCDC" }}
          >
            <p className="label-reg text-[#383838]">December 2023</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2.97137 5.01254C2.78154 5.01704 2.59711 5.06945 2.43971 5.16373C2.28231 5.258 2.15848 5.3902 2.08277 5.54475C2.00705 5.69931 1.98259 5.86985 2.01225 6.03631C2.04192 6.20277 2.12448 6.35828 2.25024 6.48455L8.23174 12.6893C8.32543 12.7867 8.44182 12.8649 8.57288 12.9186C8.70393 12.9722 8.84655 13 8.99088 13C9.1352 13 9.27782 12.9722 9.40888 12.9186C9.53993 12.8649 9.65632 12.7867 9.75001 12.6893L15.7374 6.48455C15.828 6.39691 15.8978 6.29397 15.9426 6.18187C15.9874 6.06978 16.0063 5.95083 15.9982 5.83211C15.9901 5.71339 15.9551 5.59728 15.8953 5.49082C15.8356 5.38435 15.7523 5.28973 15.6504 5.21245C15.5486 5.13517 15.4302 5.07684 15.3024 5.04104C15.1746 5.00524 15.04 4.99269 14.9066 5.00406C14.7732 5.01543 14.6437 5.0505 14.526 5.10724C14.4082 5.16397 14.3045 5.24114 14.221 5.33422L8.9899 10.7536L3.76072 5.33422C3.66496 5.23127 3.54423 5.14895 3.40754 5.09324C3.27085 5.03754 3.12175 5.0099 2.97137 5.01254Z"
                fill="#00CCB6"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Data */}
      <div className="flex flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
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
                    className="px-6 py-3 p-semi text-[#383838] flex items-center gap-[15px]"
                  >
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                    Request Type
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-bold flex items-center gap-[15px]">
                    December 26, 2023
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    Leave Request
                  </td>

                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(255, 171, 45, 0.10)" }}
                      >
                        <p className="label-semi text-[#FFAB2D]">Pending</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-bold flex items-center gap-[15px]">
                    December 20, 2023
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    Coming Late Request
                  </td>

                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Approved</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-bold flex items-center gap-[15px]">
                    December 11, 2023
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    Coming Late Request
                  </td>

                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(255, 74, 85, 0.10)" }}
                      >
                        <p className="label-semi text-[#FF4A55]">Rejected</p>
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
  );
}

export default StaffRequestsLogContent;
