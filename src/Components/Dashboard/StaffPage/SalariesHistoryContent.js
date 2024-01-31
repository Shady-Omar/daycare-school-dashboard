import React from "react";

function SalariesHistoryContent() {
  return (
    <div className="flex flex-col items-start gap-[30px] self-stretch">
      {/* Stats */}
      <div className="flex flex-col p-5 items-start gap-[15px] self-stretch rounded-[10px] bg-white">
        {/* Sort Dropdown */}
        <div
          className="flex py-2.5 px-5 items-center justify-center gap-[11px] rounded-lg bg-white self-stretch lg:self-auto"
          style={{ border: "1px solid #DCDCDC" }}
        >
          <p className="label-reg text-[#383838]">November 2023</p>
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
        {/* Cards */}
        <div className="flex flex-col lg:flex-row items-center gap-5 self-stretch">
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-white self-stretch"
            style={{ flex: "1 0 0", border: "1px solid #DCDCDC" }}
          >
            {/* Icon */}
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#00CCB6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M25.4364 4.03516H8.18638C7.89113 4.03856 7.60692 4.14786 7.38549 4.34317C8.26418 4.65229 9.03727 5.20408 9.61516 5.93457C10.1931 6.66506 10.5521 7.54436 10.6507 8.47054C10.6695 8.63427 10.6695 8.79963 10.6507 8.96336V29.9082C10.6501 30.1439 10.7171 30.3748 10.8438 30.5735C10.9704 30.7722 11.1514 30.9304 11.3653 31.0294C11.5797 31.1281 11.8179 31.1631 12.0516 31.1304C12.2853 31.0976 12.5047 30.9984 12.6837 30.8446L16.1953 27.8384L19.7069 30.8446C19.9301 31.0355 20.2141 31.1404 20.5078 31.1404C20.8015 31.1404 21.0855 31.0355 21.3087 30.8446L24.8203 27.8384L28.3319 30.8446C28.5551 31.0354 28.8391 31.1403 29.1328 31.1403C29.3111 31.139 29.4872 31.1013 29.6503 31.0294C29.8642 30.9304 30.0452 30.7722 30.1719 30.5735C30.2985 30.3748 30.3655 30.1439 30.3649 29.9082V8.96336C30.3649 7.65632 29.8457 6.40281 28.9214 5.47859C27.9971 4.55438 26.7435 4.03516 25.4364 4.03516ZM24.2042 21.2839H16.8114C16.4846 21.2839 16.1712 21.1541 15.9401 20.923C15.7091 20.692 15.5792 20.3786 15.5792 20.0518C15.5792 19.7251 15.7091 19.4117 15.9401 19.1806C16.1712 18.9496 16.4846 18.8198 16.8114 18.8198H24.2042C24.531 18.8198 24.8444 18.9496 25.0755 19.1806C25.3066 19.4117 25.4364 19.7251 25.4364 20.0518C25.4364 20.3786 25.3066 20.692 25.0755 20.923C24.8444 21.1541 24.531 21.2839 24.2042 21.2839ZM24.2042 16.3557H16.8114C16.4846 16.3557 16.1712 16.2259 15.9401 15.9948C15.7091 15.7638 15.5792 15.4504 15.5792 15.1236C15.5792 14.7969 15.7091 14.4835 15.9401 14.2524C16.1712 14.0214 16.4846 13.8916 16.8114 13.8916H24.2042C24.531 13.8916 24.8444 14.0214 25.0755 14.2524C25.3066 14.4835 25.4364 14.7969 25.4364 15.1236C25.4364 15.4504 25.3066 15.7638 25.0755 15.9948C24.8444 16.2259 24.531 16.3557 24.2042 16.3557ZM24.2042 11.4275H16.8114C16.4846 11.4275 16.1712 11.2977 15.9401 11.0666C15.7091 10.8356 15.5792 10.5222 15.5792 10.1954C15.5792 9.86865 15.7091 9.55528 15.9401 9.32422C16.1712 9.09317 16.4846 8.96336 16.8114 8.96336H24.2042C24.531 8.96336 24.8444 9.09317 25.0755 9.32422C25.3066 9.55528 25.4364 9.86865 25.4364 10.1954C25.4364 10.5222 25.3066 10.8356 25.0755 11.0666C24.8444 11.2977 24.531 11.4275 24.2042 11.4275ZM8.18638 8.96336V18.8198H4.48996C4.16317 18.8198 3.84977 18.69 3.6187 18.4589C3.38763 18.2279 3.25781 17.9145 3.25781 17.5877V8.96336C3.25781 8.79087 3.25781 8.63071 3.25781 8.47054C3.32317 7.81702 3.64548 7.21623 4.15384 6.80033C4.66219 6.38443 5.31496 6.1875 5.96853 6.25285C6.6221 6.3182 7.22293 6.64049 7.63886 7.14881C8.05479 7.65713 8.25174 8.30984 8.18638 8.96336Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Text */}
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">472,000.00</h2>
              <p className="p-reg text-[#878787]">
                Total Paid from Jan 1, 2023 to Date
              </p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-white self-stretch"
            style={{ flex: "1 0 0", border: "1px solid #DCDCDC" }}
          >
            {/* Icon */}
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#FFAB2D]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M25.4364 4.03516H8.18638C7.89113 4.03856 7.60692 4.14786 7.38549 4.34317C8.26418 4.65229 9.03727 5.20408 9.61516 5.93457C10.1931 6.66506 10.5521 7.54436 10.6507 8.47054C10.6695 8.63427 10.6695 8.79963 10.6507 8.96336V29.9082C10.6501 30.1439 10.7171 30.3748 10.8438 30.5735C10.9704 30.7722 11.1514 30.9304 11.3653 31.0294C11.5797 31.1281 11.8179 31.1631 12.0516 31.1304C12.2853 31.0976 12.5047 30.9984 12.6837 30.8446L16.1953 27.8384L19.7069 30.8446C19.9301 31.0355 20.2141 31.1404 20.5078 31.1404C20.8015 31.1404 21.0855 31.0355 21.3087 30.8446L24.8203 27.8384L28.3319 30.8446C28.5551 31.0354 28.8391 31.1403 29.1328 31.1403C29.3111 31.139 29.4872 31.1013 29.6503 31.0294C29.8642 30.9304 30.0452 30.7722 30.1719 30.5735C30.2985 30.3748 30.3655 30.1439 30.3649 29.9082V8.96336C30.3649 7.65632 29.8457 6.40281 28.9214 5.47859C27.9971 4.55438 26.7435 4.03516 25.4364 4.03516ZM24.2042 21.2839H16.8114C16.4846 21.2839 16.1712 21.1541 15.9401 20.923C15.7091 20.692 15.5792 20.3786 15.5792 20.0518C15.5792 19.7251 15.7091 19.4117 15.9401 19.1806C16.1712 18.9496 16.4846 18.8198 16.8114 18.8198H24.2042C24.531 18.8198 24.8444 18.9496 25.0755 19.1806C25.3066 19.4117 25.4364 19.7251 25.4364 20.0518C25.4364 20.3786 25.3066 20.692 25.0755 20.923C24.8444 21.1541 24.531 21.2839 24.2042 21.2839ZM24.2042 16.3557H16.8114C16.4846 16.3557 16.1712 16.2259 15.9401 15.9948C15.7091 15.7638 15.5792 15.4504 15.5792 15.1236C15.5792 14.7969 15.7091 14.4835 15.9401 14.2524C16.1712 14.0214 16.4846 13.8916 16.8114 13.8916H24.2042C24.531 13.8916 24.8444 14.0214 25.0755 14.2524C25.3066 14.4835 25.4364 14.7969 25.4364 15.1236C25.4364 15.4504 25.3066 15.7638 25.0755 15.9948C24.8444 16.2259 24.531 16.3557 24.2042 16.3557ZM24.2042 11.4275H16.8114C16.4846 11.4275 16.1712 11.2977 15.9401 11.0666C15.7091 10.8356 15.5792 10.5222 15.5792 10.1954C15.5792 9.86865 15.7091 9.55528 15.9401 9.32422C16.1712 9.09317 16.4846 8.96336 16.8114 8.96336H24.2042C24.531 8.96336 24.8444 9.09317 25.0755 9.32422C25.3066 9.55528 25.4364 9.86865 25.4364 10.1954C25.4364 10.5222 25.3066 10.8356 25.0755 11.0666C24.8444 11.2977 24.531 11.4275 24.2042 11.4275ZM8.18638 8.96336V18.8198H4.48996C4.16317 18.8198 3.84977 18.69 3.6187 18.4589C3.38763 18.2279 3.25781 17.9145 3.25781 17.5877V8.96336C3.25781 8.79087 3.25781 8.63071 3.25781 8.47054C3.32317 7.81702 3.64548 7.21623 4.15384 6.80033C4.66219 6.38443 5.31496 6.1875 5.96853 6.25285C6.6221 6.3182 7.22293 6.64049 7.63886 7.14881C8.05479 7.65713 8.25174 8.30984 8.18638 8.96336Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Text */}
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">155,00.00</h2>
              <p className="p-reg text-[#878787]">Total Pending Amounts</p>
            </div>
          </div>
        </div>
      </div>
      {/* Data */}
      <div className="flex flex-col p-[30px] gap-[30px] items-start justify-center self-stretch bg-white rounded-[10px]">
        <div className="flex flex-col items-start gap-[30px] self-stretch">
          {/* Filter */}
          <div className="flex flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
            {/* Form */}
            <div className="flex flex-col lg:flex-row items-end gap-[15px] self-stretch">
              <div
                className="flex flex-col items-start gap-2 self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">Status</label>
                <select
                  className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                  style={{ border: "1px solid #DBDADE" }}
                  defaultValue={"Select"}
                >
                  <option value="Select">Select</option>
                  {/* <option value="PM">PM</option> */}
                </select>
              </div>
              <div
                className="flex flex-col items-start gap-2 self-stretch"
                style={{ flex: "1 0 0" }}
              >
                <label className="label text-[#868686]">Year</label>
                <select
                  className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                  style={{ border: "1px solid #DBDADE" }}
                  defaultValue={"2023"}
                >
                  <option value="2023">2023</option>
                  {/* <option value="PM">PM</option> */}
                </select>
              </div>
            </div>
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
                      Month
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                      Total Paid
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                      Pending
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                      Paid Staff
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                      Unpaid Staff
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi text-[#383838]">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-bold flex items-center gap-[15px]">
                      December 2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">-</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      55,000.00
                    </td>

                    <td className="px-6 py-4 p-reg text-[#00CCB6]">-</td>
                    <td className="px-6 py-4 p-reg text-[#FF4A55]">12</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                          style={{ background: "rgba(255, 171, 45, 0.10)" }}
                        >
                          <p className="label-semi text-[#FFAB2D]">
                            Uncompleted
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-bold flex items-center gap-[15px]">
                      November 2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      50,000.00
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">5,000.00</td>

                    <td className="px-6 py-4 p-reg text-[#00CCB6]">12</td>
                    <td className="px-6 py-4 p-reg text-[#FF4A55]">-</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6]">Completed</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-bold flex items-center gap-[15px]">
                      November 2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      50,000.00
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">5,000.00</td>

                    <td className="px-6 py-4 p-reg text-[#00CCB6]">12</td>
                    <td className="px-6 py-4 p-reg text-[#FF4A55]">-</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6]">Completed</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap text-[#00CCB6] p-bold flex items-center gap-[15px]">
                      November 2023
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      50,000.00
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">5,000.00</td>

                    <td className="px-6 py-4 p-reg text-[#00CCB6]">12</td>
                    <td className="px-6 py-4 p-reg text-[#FF4A55]">-</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="flex py-[5px] px-2.5 items-center gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6]">Completed</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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

export default SalariesHistoryContent;
