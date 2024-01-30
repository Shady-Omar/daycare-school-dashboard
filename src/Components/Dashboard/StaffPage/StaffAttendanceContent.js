import React from "react";

import sortArrow from "../../../Assets/sort-dropdown-arrow.svg";

function StaffAttendanceContent() {
  return (
    <>
      {/* Row 1 */}
      <div className="flex p-5 flex-col items-start gap-[30px] self-stretch rounded-[10px] bg-white">
        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
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
                <g clip-path="url(#clip0_1145_20162)">
                  <path
                    d="M16.5232 20.8605C17.9068 19.9414 18.9578 18.6013 19.5206 17.0384C20.0834 15.4756 20.1281 13.7731 19.6481 12.1829C19.1681 10.5926 18.1888 9.19921 16.8553 8.2088C15.5218 7.21838 13.9048 6.68359 12.2437 6.68359C10.5826 6.68359 8.96566 7.21838 7.63213 8.2088C6.2986 9.19921 5.31937 10.5926 4.83934 12.1829C4.35931 13.7731 4.404 15.4756 4.9668 17.0384C5.5296 18.6013 6.58059 19.9414 7.96425 20.8605C5.60552 21.7306 3.56692 23.297 2.11866 25.3521C2.00993 25.5065 1.94571 25.6879 1.933 25.8763C1.92029 26.0648 1.95959 26.2531 2.04659 26.4208C2.1336 26.5884 2.26498 26.729 2.4264 26.827C2.58783 26.9251 2.77308 26.977 2.96197 26.977L21.525 26.9763C21.7139 26.9763 21.8992 26.9244 22.0606 26.8263C22.222 26.7282 22.3534 26.5877 22.4404 26.42C22.5274 26.2523 22.5666 26.064 22.5539 25.8755C22.5412 25.6871 22.4769 25.5057 22.3682 25.3513C20.9199 23.2966 18.8816 21.7305 16.5232 20.8605Z"
                    fill="white"
                  />
                  <path
                    d="M32.8768 25.3512C31.4286 23.2965 29.3902 21.7304 27.0318 20.8604C28.5652 19.8397 29.6839 18.3052 30.1867 16.5331C30.6895 14.761 30.5433 12.8676 29.7744 11.1937C29.0056 9.51979 27.6646 8.17523 25.9927 7.40197C24.3208 6.62872 22.4278 6.47754 20.6544 6.97566C20.4934 7.02094 20.3458 7.10469 20.2244 7.21971C20.103 7.33472 20.0114 7.47754 19.9574 7.63585C19.9035 7.79416 19.8889 7.96321 19.9148 8.12842C19.9408 8.29364 20.0065 8.45007 20.1064 8.58422C21.2722 10.1502 21.9423 12.0293 22.0306 13.9795C22.1188 15.9298 21.6211 17.8618 20.6015 19.5266C20.4669 19.7461 20.4193 20.0081 20.468 20.261C20.5168 20.5139 20.6585 20.7394 20.8651 20.8931C21.2561 21.1841 21.6323 21.4945 21.9922 21.8231C22.0108 21.8433 22.0296 21.8635 22.0501 21.8825C23.4265 23.1549 24.5421 24.6832 25.3345 26.382C25.4175 26.5598 25.5495 26.7102 25.7151 26.8156C25.8806 26.921 26.0728 26.9769 26.269 26.9769L32.0338 26.9762C32.2226 26.9762 32.4079 26.9243 32.5693 26.8262C32.7307 26.7281 32.862 26.5875 32.949 26.4199C33.036 26.2522 33.0753 26.0639 33.0625 25.8754C33.0498 25.687 32.9856 25.5057 32.8768 25.3512Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1145_20162">
                    <rect
                      width="33"
                      height="33"
                      fill="white"
                      transform="translate(0.899902 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {/* Text */}
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">96</h2>
              <p className="p-reg text-[#878787]">Total number of staff</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-white self-stretch"
            style={{ flex: "1 0 0", border: "1px solid #DCDCDC" }}
          >
            {/* Icon */}
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
                  d="M17.0664 30.75C24.6605 30.75 30.8164 24.5941 30.8164 17C30.8164 9.40588 24.6605 3.25 17.0664 3.25C9.47228 3.25 3.31641 9.40588 3.31641 17C3.31641 24.5941 9.47228 30.75 17.0664 30.75ZM21.9284 12.138C22.1866 11.8802 22.5366 11.7355 22.9015 11.7357C23.2664 11.736 23.6162 11.8812 23.874 12.1394C24.1319 12.3976 24.2766 12.7476 24.2763 13.1125C24.276 13.4773 24.1308 13.8272 23.8727 14.085L16.0998 21.8579L16.0943 21.8634C15.9669 21.9915 15.8154 22.0932 15.6486 22.1626C15.4817 22.232 15.3028 22.2677 15.1222 22.2677C14.9415 22.2677 14.7626 22.232 14.5957 22.1626C14.4289 22.0932 14.2774 21.9915 14.15 21.8634L14.1445 21.8579L10.2602 17.9735C10.1288 17.8467 10.0241 17.6949 9.95202 17.5272C9.87995 17.3594 9.84202 17.179 9.84044 16.9964C9.83885 16.8139 9.87364 16.6328 9.94278 16.4638C10.0119 16.2948 10.114 16.1413 10.2431 16.0122C10.3722 15.8831 10.5257 15.781 10.6947 15.7119C10.8637 15.6427 11.0448 15.6079 11.2273 15.6095C11.4099 15.6111 11.5903 15.649 11.7581 15.7211C11.9258 15.7932 12.0776 15.8979 12.2044 16.0292L15.1222 18.9456L21.9284 12.1394V12.138Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Text */}
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">83</h2>
              <p className="p-reg text-[#878787]">Clocked in staff</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-white self-stretch"
            style={{ flex: "1 0 0", border: "1px solid #DCDCDC" }}
          >
            {/* Icon */}
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#E328AF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M16.7334 3.25C9.1709 3.25 2.9834 9.4375 2.9834 17C2.9834 24.5625 9.1709 30.75 16.7334 30.75C24.2959 30.75 30.4834 24.5625 30.4834 17C30.4834 9.4375 24.2959 3.25 16.7334 3.25ZM21.8209 20.1625C22.3709 20.7125 22.3709 21.5375 21.8209 22.0875C21.2709 22.6375 20.4459 22.6375 19.8959 22.0875L16.7334 18.925L13.5709 22.0875C13.0209 22.6375 12.1959 22.6375 11.6459 22.0875C11.0959 21.5375 11.0959 20.7125 11.6459 20.1625L14.8084 17L11.6459 13.8375C11.0959 13.2875 11.0959 12.4625 11.6459 11.9125C12.1959 11.3625 13.0209 11.3625 13.5709 11.9125L16.7334 15.075L19.8959 11.9125C20.4459 11.3625 21.2709 11.3625 21.8209 11.9125C22.3709 12.4625 22.3709 13.2875 21.8209 13.8375L18.6584 17L21.8209 20.1625Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Text */}
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">13</h2>
              <p className="p-reg text-[#878787]">On leave</p>
            </div>
          </div>
        </div>
      </div>
      {/* Row 2 */}
      <div className="flex p-5 flex-col items-start gap-[30px] self-stretch bg-white rounded-[10px] lg:rounded-[0px_0px_10px_10px]">
        {/* Filter */}
        <div className="flex justify-between items-center self-stretch rounded-xl">
          <div
            className="flex flex-col lg:flex-row justify-end lg:justify-normal items-start lg:items-end gap-5 lg:gap-2.5"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex self-stretch flex-col items-start gap-2">
              <label className="label text-[#868686]">Staff Name</label>
              <input
                type="text"
                className="flex h-[50px] px-5 items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DBDADE" }}
                placeholder="Search by staff name..."
              />
            </div>
            <div
              className="flex flex-col items-start gap-2 self-stretch"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">Attendace Status</label>
              <select
                className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                style={{ border: "1px solid #DBDADE" }}
                defaultValue={"Select Status"}
              >
                <option value="Select Status">Select Status</option>
                {/* <option value="PM">PM</option> */}
              </select>
            </div>
            <div
              className="flex flex-col items-start gap-2 self-stretch"
              style={{ flex: "1 0 0" }}
            >
              <label className="label text-[#868686]">Room</label>
              <select
                className="text-[#A4A4A4] h-[50px] cursor-pointer rounded-[10px] px-5 p-reg text-left bg-[#FFF] self-stretch focus:border-none focus:outline-none placeholder-gray-400"
                style={{ border: "1px solid #DBDADE" }}
                defaultValue={"Select Room"}
              >
                <option value="Select Room">Select Room</option>
                {/* <option value="PM">PM</option> */}
              </select>
            </div>
            <button className="white-btn self-stretch lg:self-auto lg:w-[150px]">
              Filter
            </button>
          </div>
        </div>
        {/* Data */}
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="flex flex-col justify-center items-start gap-5 self-stretch">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-between items-start lg:items-center self-stretch">
              {/* dropdown */}
              <div
                className="flex py-2.5 px-5 items-center gap-[11px] rounded-lg bg-white"
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
              {/* Sort */}
              <div className="flex items-start gap-[5px]">
                <p className="label-reg text-[#646464]">Sort by:</p>
                <div className="flex items-center gap-[11px] rounded-lg">
                  <p className="label-semi text-[#383838]">First Name</p>
                  <img src={sortArrow} alt="" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[30px] self-stretch">
              <div
                className="flex py-[15px] px-5 flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between gap-5 lg:gap-0 self-stretch rounded-[10px] bg-[#00CCB6]"
                style={{ flex: "1 0 0" }}
              >
                <p className="p-semi text-white">1 Staff selected</p>
                <div className="flex flex-col lg:flex-row items-center gap-2.5 lg:gap-5 self-stretch">
                  <button
                    className="flex self-stretch h-[45px] justify-center items-center rounded-[10px] bg-white py-2.5 px-5 label-reg text-[#383838] !text-[13px]"
                    style={{ flex: "1 0 0", border: "1px solid #FFF" }}
                  >
                    Clear All the Late Status
                  </button>
                  <button
                    className="flex self-stretch h-[45px] justify-center items-center rounded-[10px] bg-[#00CCB6] py-2.5 px-5 label-reg text-white !text-[13px]"
                    style={{ flex: "1 0 0", border: "1px solid #FFF" }}
                  >
                    Clear All the Absent Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffAttendanceContent;
