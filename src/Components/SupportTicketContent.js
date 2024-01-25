import React from "react";

import actionArrow from "../Assets/action-arrow.svg";
import { Link } from "react-router-dom";

function SupportTicketContent() {
  return (
    <>
      {/* Overview */}
      <div className="flex p-5 flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
        {/* Cards */}
        <div className="flex items-center gap-5 self-stretch">
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF]"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#00CCB6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M18.454 2.85576C10.699 2.90534 4.38559 9.25159 4.36073 16.9861C4.36073 19.4651 5.00699 21.8201 6.15035 23.8281C5.82723 24.547 5.40468 25.2412 4.85785 25.8857C4.50987 26.2575 4.11218 26.6294 3.63992 26.9517C3.19251 27.2739 2.69539 27.5218 2.17342 27.7449C1.99943 27.8193 2.09885 27.9185 2.19828 27.9681C2.37227 28.0424 2.54626 28.1416 2.74511 28.216C3.11794 28.3647 3.49078 28.4887 3.86362 28.5878C4.50987 28.7861 5.23069 28.8605 5.92665 28.8853C6.64747 28.9101 7.39315 28.8357 8.11396 28.7366C8.76022 28.6126 9.38161 28.4886 10.003 28.2903C12.3643 30.0752 15.347 31.1412 18.5534 31.1412C26.383 31.1412 32.7212 24.8197 32.7212 17.0109C32.7212 9.15242 26.3084 2.80618 18.454 2.85576ZM18.4788 25.1668C17.6835 25.1668 17.0123 24.4975 17.0123 23.7042C17.0123 22.8861 17.6835 22.2416 18.4788 22.2416C19.2991 22.2168 19.9453 22.8613 19.9702 23.6794C19.9702 24.4975 19.3488 25.1668 18.4788 25.1668ZM21.0638 17.2092C20.5667 17.6554 19.995 18.0768 19.9453 18.8205C19.8956 19.3659 19.8708 19.9113 19.8708 20.4567C19.8956 20.7542 19.7713 20.8533 19.4731 20.8285C19.1251 20.8037 18.7771 20.8285 18.454 20.8285C18.0811 20.8285 17.6835 20.8285 17.3106 20.8285C17.1118 20.8285 17.0123 20.7542 17.0123 20.5311C16.9875 19.4651 16.9626 18.052 17.4349 17.0852C18.0066 15.8209 19.3985 15.4243 20.1939 14.3335C22.1824 11.6314 17.1863 9.82176 16.1672 13.1684C16.0181 13.6642 15.9933 13.6642 15.4713 13.5898C14.825 13.5155 14.1788 13.4163 13.5325 13.3419C13.284 13.3172 13.1846 13.218 13.2094 12.9701C13.6071 8.75578 19.5725 7.54107 22.4558 10.0697C23.3257 10.8134 23.8974 11.9289 23.8974 13.0693C23.8726 14.9037 22.2569 16.1184 21.0638 17.2092Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">263</h2>
              <p className="p-reg text-[#878787]">Total Tickets</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF]"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#5ECFFF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M23.6666 14.2617C23.6667 13.2343 23.5158 12.2125 23.2187 11.2289C22.7969 9.82983 22.0858 8.5348 21.1314 7.42762C20.1771 6.32044 19.0007 5.42576 17.6785 4.80149C16.3562 4.17721 14.9175 3.83723 13.4555 3.80355C11.9934 3.76988 10.5406 4.04325 9.19093 4.60598C7.84128 5.16871 6.62491 6.00826 5.6205 7.07033C4.6161 8.13239 3.84604 9.3933 3.36014 10.7715C2.87424 12.1497 2.68334 13.6144 2.79977 15.071C2.9162 16.5275 3.33738 17.9434 4.03605 19.2271L2.805 23.5443C2.76648 23.6794 2.75986 23.8216 2.78567 23.9597C2.81147 24.0977 2.869 24.2279 2.95372 24.34C3.03843 24.4521 3.14803 24.5431 3.27389 24.6057C3.39974 24.6683 3.53842 24.7008 3.679 24.7008C3.76316 24.7006 3.84691 24.689 3.92794 24.6663L8.2498 23.4354C8.863 23.7711 9.50978 24.0416 10.1795 24.2424C11.1638 24.5467 12.1882 24.7012 13.2185 24.7008C15.9886 24.6977 18.6443 23.5968 20.603 21.6398C22.5617 19.6828 23.6635 17.0294 23.6666 14.2617Z"
                  fill="white"
                />
                <path
                  d="M30.2307 30.1084L28.9624 25.66C30.2578 23.2775 30.6034 20.4937 29.9298 17.8672C29.2561 15.2407 27.6131 12.9661 25.3306 11.5C25.7056 13.3331 25.6674 15.2266 25.2187 17.043C24.77 18.8595 23.9221 20.5533 22.7366 22.0014C21.551 23.4496 20.0576 24.6157 18.3648 25.4152C16.6719 26.2147 14.8222 26.6274 12.9498 26.6233C12.1155 26.6208 11.2836 26.5346 10.4666 26.3661C11.4452 27.8726 12.7834 29.1122 14.3606 29.9735C15.9379 30.8347 17.7047 31.2906 19.502 31.3C21.2909 31.3002 23.0512 30.8523 24.6221 29.9971L29.0738 31.2645C29.1573 31.2879 29.2436 31.2998 29.3303 31.3C29.4751 31.3 29.618 31.2665 29.7477 31.202C29.8773 31.1375 29.9902 31.0438 30.0775 30.9283C30.1648 30.8128 30.2241 30.6786 30.2506 30.5364C30.2772 30.3941 30.2704 30.2476 30.2307 30.1084Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">75</h2>
              <p className="p-reg text-[#878787]">Open Tickets</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF]"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#6418C3]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.7334 30.75C24.3275 30.75 30.4834 24.5941 30.4834 17C30.4834 9.40588 24.3275 3.25 16.7334 3.25C9.13927 3.25 2.9834 9.40588 2.9834 17C2.9834 24.5941 9.13927 30.75 16.7334 30.75ZM21.5954 12.138C21.8536 11.8802 22.2036 11.7355 22.5685 11.7357C22.9334 11.736 23.2832 11.8812 23.541 12.1394C23.7988 12.3976 23.9435 12.7476 23.9433 13.1125C23.943 13.4773 23.7978 13.8272 23.5396 14.085L15.7668 21.8579L15.7613 21.8634C15.6339 21.9915 15.4824 22.0932 15.3156 22.1626C15.1487 22.232 14.9698 22.2677 14.7891 22.2677C14.6085 22.2677 14.4296 22.232 14.2627 22.1626C14.0959 22.0932 13.9444 21.9915 13.817 21.8634L13.8115 21.8579L9.92715 17.9735C9.79582 17.8467 9.69107 17.6949 9.61901 17.5272C9.54695 17.3594 9.50902 17.179 9.50743 16.9964C9.50584 16.8139 9.54063 16.6328 9.60977 16.4638C9.6789 16.2948 9.781 16.1413 9.91011 16.0122C10.0392 15.8831 10.1927 15.781 10.3617 15.7119C10.5307 15.6427 10.7118 15.6079 10.8943 15.6095C11.0769 15.6111 11.2573 15.649 11.4251 15.7211C11.5928 15.7932 11.7446 15.8979 11.8714 16.0292L14.7891 18.9456L21.5954 12.1394V12.138Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">174</h2>
              <p className="p-reg text-[#878787]">Solved Tickets</p>
            </div>
          </div>
        </div>
      </div>
      {/* Main */}
      <div className="flex flex-col justify-center items-center gap-[30px] self-stretch">
        <div className="flex py-10 px-5 flex-col justify-center items-center gap-[30px] self-stretch rounded-[10px] bg-white">
          <div className="flex flex-col justify-center items-center gap-[120px] self-stretch">
            <div className="flex flex-col justify-center items-center gap-[30px]">
              {/* title */}
              <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
                <h1 className="h1-med text-[#383838]">
                  Lorem Ipsum has been the industry's <br /> standard dummy text
                  ever.
                </h1>
                <p className="p-reg text-[#878787]">
                  Lorem Ipsum has been the industry's standard dummy text ever.
                </p>
              </div>
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
                  <th scope="col" className="px-6 py-3 p-semi">
                    Ticket ID
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Subject
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Priority
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Created
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Replays
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 p-semi">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <Link
                    to="view"
                    className="px-6 py-4 text-[#00CCB6] p-semi !text-[15px]"
                  >
                    234343
                  </Link>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    Abdullah Bilal
                  </td>
                  <td className="px-6 py-4 p-semi !text-[15px] text-[#FF4A55]">
                    High
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">27/09/2023</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">4</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Solved</p>
                      </div>
                    </div>
                  </td>

                  <td className="flex py-[15px] px-5 justify-start items-center gap-[15px] self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 text-[#00CCB6] p-semi !text-[15px]">
                    234343
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    Abdullah Bilal
                  </td>
                  <td className="px-6 py-4 p-semi !text-[15px] text-[#383838]">
                    Normal
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">27/09/2023</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">4</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Solved</p>
                      </div>
                    </div>
                  </td>

                  <td className="flex py-[15px] px-5 justify-start items-center gap-[15px] self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 text-[#00CCB6] p-semi !text-[15px]">
                    234343
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    Abdullah Bilal
                  </td>
                  <td className="px-6 py-4 p-semi !text-[15px] text-[#383838]">
                    Normal
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">27/09/2023</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">4</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Solved</p>
                      </div>
                    </div>
                  </td>

                  <td className="flex py-[15px] px-5 justify-start items-center gap-[15px] self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 text-[#00CCB6] p-semi !text-[15px]">
                    234343
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    Abdullah Bilal
                  </td>
                  <td className="px-6 py-4 p-semi !text-[15px] text-[#383838]">
                    Normal
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">27/09/2023</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">4</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(0, 204, 182, 0.10)" }}
                      >
                        <p className="label-semi text-[#00CCB6]">Solved</p>
                      </div>
                    </div>
                  </td>

                  <td className="flex py-[15px] px-5 justify-start items-center gap-[15px] self-stretch">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                        Actions
                        <img src={actionArrow} alt="action" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                  <td className="px-6 py-4 text-[#00CCB6] p-semi !text-[15px]">
                    234343
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    Abdullah Bilal
                  </td>
                  <td className="px-6 py-4 p-semi !text-[15px] text-[#FF4A55]">
                    High
                  </td>
                  <td className="px-6 py-4 p-reg text-[#646464]">27/09/2023</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">4</td>
                  <td className="px-6 py-4 p-reg text-[#646464]">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md"
                        style={{ background: "rgba(255, 74, 85, 0.10)" }}
                      >
                        <p className="label-semi text-[#FF4A55]">Open</p>
                      </div>
                    </div>
                  </td>

                  <td className="flex py-[15px] px-5 justify-start items-center gap-[15px] self-stretch">
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
    </>
  );
}

export default SupportTicketContent;
