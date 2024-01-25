import React, { useState } from "react";

import ChartsRow from "./chartsRow";
import OverviewRow from "./OverviewRow";
import Calendar from "react-calendar";

import profileImgPlaceholder from "../../../Assets/profile-img-placeholder.png";

function OverviewTab() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const navigationLabel = ({ date }) => (
    <span>{date.toLocaleDateString("en-US", { month: "long" })}</span>
  );

  const tileClassName = ({ date, view }) => {
    // Check if the date is the selected date
    if (date.getDate() === new Date().getDate()) {
      return "selected-date";
    }
    return null;
  };

  return (
    <>
      {/* Overview Row One */}
      <OverviewRow />
      {/* Overview Row Two */}
      <ChartsRow />
      {/* Overview Row Three */}
      <div className="flex flex-col lg:flex-row items-start gap-[30px] self-stretch">
        <div className="flex lg:w-[448px] p-5 flex-col items-start gap-[30px] rounded-[10px] bg-[#FFF] self-stretch lg:self-auto">
          <div className="flex flex-col justify-center items-start gap-[30px] self-stretch">
            <div className="flex justify-between items-center self-stretch">
              <div
                className="flex justify-between items-center"
                style={{ flex: "1 0 0" }}
              >
                <h5 className="h5-bold text-[#202020]">Latest Activity</h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3"
                  height="16"
                  viewBox="0 0 3 16"
                  fill="none"
                >
                  <circle cx="1.5" cy="2" r="1.5" fill="#A5A5A5" />
                  <circle cx="1.5" cy="8" r="1.5" fill="#A5A5A5" />
                  <circle cx="1.5" cy="14" r="1.5" fill="#A5A5A5" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-5 self-stretch">
              <div className="flex justify-between items-center self-stretch rounded-[10px] bg-[#FFF]">
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 rounded-[5px]"
                    style={{ background: "rgba(0, 204, 182, 0.10)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_676_23536)">
                        <path
                          d="M28.2098 8.61483L14.7075 2.54176C14.6425 2.5142 14.5728 2.5 14.5024 2.5C14.432 2.5 14.3623 2.5142 14.2974 2.54176L0.795079 8.61483C0.707116 8.65515 0.6325 8.72027 0.580167 8.8024C0.527833 8.88453 0.5 8.98018 0.5 9.0779C0.5 9.17563 0.527833 9.27128 0.580167 9.35341C0.6325 9.43554 0.707116 9.50066 0.795079 9.54098C1.58078 9.89697 5.09952 11.4741 5.79089 11.788L14.2974 15.614C14.3617 15.644 14.4316 15.6596 14.5024 15.6596C14.5732 15.6596 14.6432 15.644 14.7075 15.614L19.7533 13.3467L20.7535 12.8963V14.0047C20.1542 14.2739 15.82 16.2234 15.1125 16.5402C14.9188 16.6276 14.709 16.6723 14.4969 16.6715C14.2848 16.6706 14.0753 16.6241 13.8823 16.5351L4.79077 12.4459V19.6223C4.79006 19.7147 4.81438 19.8055 4.8611 19.8849C4.90782 19.9643 4.97515 20.0293 5.05577 20.0727C7.44282 21.3689 10.0658 22.1594 12.7646 22.3961C15.4635 22.6328 18.1817 22.3106 20.7535 21.4493L20.7535 23.0333C20.3509 23.1549 20.005 23.419 19.7789 23.7775C19.5529 24.1359 19.462 24.5647 19.5226 24.9854C19.5833 25.4062 19.7916 25.7908 20.1095 26.0689C20.4273 26.347 20.8334 26.5 21.2536 26.5C21.6737 26.5 22.0799 26.347 22.3977 26.0689C22.7155 25.7908 22.9238 25.4062 22.9845 24.9854C23.0452 24.5647 22.9542 24.1359 22.7282 23.7775C22.5022 23.419 22.1563 23.1549 21.7536 23.0333L21.7537 12.1169C21.7643 11.8164 21.5067 11.6477 21.2586 11.5603L15.1588 8.81776C15.0396 8.76183 14.9469 8.66071 14.9007 8.53622C14.8546 8.41174 14.8586 8.27388 14.912 8.15238C14.9654 8.03088 15.0638 7.93549 15.1861 7.88679C15.3083 7.83809 15.4446 7.83999 15.5655 7.89208L21.8687 10.7303C22.1154 10.8408 22.3274 11.0177 22.4817 11.2416C22.636 11.4656 22.7267 11.7281 22.7438 12.0006C23.7842 11.5298 27.1251 10.029 28.2098 9.54098C28.2966 9.49959 28.3699 9.43407 28.4213 9.35208C28.4727 9.27009 28.5 9.175 28.5 9.0779C28.5 8.98081 28.4727 8.88572 28.4213 8.80373C28.3699 8.72173 28.2966 8.65622 28.2098 8.61483Z"
                          fill="#00CCB6"
                        />
                        <path
                          d="M21.7221 13.293V19.8303C22.0883 19.5983 22.9725 19.442 22.9999 18.929L22.9998 12.7241L21.7221 13.293Z"
                          fill="#00CCB6"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_676_23536">
                          <rect
                            width="28"
                            height="28"
                            fill="white"
                            transform="translate(0.5 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[2px]">
                    <p className="p-bold !text-[15px] text-[#383838] text-left">
                      Student Activity Lorem Ipsum
                    </p>
                    <p className="label-reg text-[#A4A4A4] text-left !text-[13px]">
                      Lorem Ipsum is simply dummy text
                    </p>
                  </div>
                </div>
                <p className="label-reg text-[#878787] lg:block hidden">
                  1 Day ago
                </p>
              </div>
              <div className="flex justify-between items-center self-stretch rounded-[10px] bg-[#FFF]">
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 rounded-[5px]"
                    style={{ background: "rgba(227, 40, 175, 0.10)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                    >
                      <path
                        d="M22.6669 6.3335H21.5003V4.00016C21.5003 3.69074 21.3773 3.394 21.1585 3.1752C20.9398 2.95641 20.643 2.8335 20.3336 2.8335C20.0242 2.8335 19.7274 2.95641 19.5086 3.1752C19.2898 3.394 19.1669 3.69074 19.1669 4.00016V6.3335H9.83359V4.00016C9.83359 3.69074 9.71067 3.394 9.49188 3.1752C9.27309 2.95641 8.97634 2.8335 8.66692 2.8335C8.3575 2.8335 8.06076 2.95641 7.84196 3.1752C7.62317 3.394 7.50025 3.69074 7.50025 4.00016V6.3335H6.33359C5.40533 6.3335 4.51509 6.70224 3.85871 7.35862C3.20234 8.015 2.83359 8.90524 2.83359 9.8335V11.0002H26.1669V9.8335C26.1669 8.90524 25.7982 8.015 25.1418 7.35862C24.4854 6.70224 23.5952 6.3335 22.6669 6.3335Z"
                        fill="#E328AF"
                      />
                      <path
                        d="M2.83359 22.6668C2.83359 23.5951 3.20234 24.4853 3.85871 25.1417C4.51509 25.7981 5.40533 26.1668 6.33359 26.1668H22.6669C23.5952 26.1668 24.4854 25.7981 25.1418 25.1417C25.7982 24.4853 26.1669 23.5951 26.1669 22.6668V13.3335H2.83359V22.6668Z"
                        fill="#E328AF"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[2px]">
                    <p className="p-bold !text-[15px] text-[#383838] text-left">
                      Calendar Activity Lorem
                    </p>
                    <p className="label-reg text-[#A4A4A4] text-left !text-[13px]">
                      Lorem Ipsum is simply dummy
                    </p>
                  </div>
                </div>
                <p className="label-reg text-[#878787] lg:block hidden">
                  2 Day ago
                </p>
              </div>
              <div className="flex justify-between items-center self-stretch rounded-[10px] bg-[#FFF]">
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 rounded-[5px]"
                    style={{ background: "rgba(100, 24, 195, 0.10)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                    >
                      <path
                        d="M14.4999 14.3376L25.8829 8.12872C25.5209 6.9376 24.7865 5.89389 23.7877 5.15081C22.7889 4.40772 21.5782 4.00438 20.3333 4H8.6666C7.42169 4.00438 6.21097 4.40772 5.21215 5.15081C4.21333 5.89389 3.47902 6.9376 3.117 8.12872L14.4999 14.3376Z"
                        fill="#6418C3"
                      />
                      <path
                        d="M15.0589 16.6907C14.8874 16.7841 14.6953 16.8331 14.5 16.8331C14.3048 16.8331 14.1126 16.7841 13.9412 16.6907L2.83337 10.6318V19.1665C2.8352 20.713 3.45036 22.1957 4.54393 23.2892C5.6375 24.3828 7.12017 24.998 8.66671 24.9998H20.3334C21.8799 24.998 23.3626 24.3828 24.4562 23.2892C25.5497 22.1957 26.1649 20.713 26.1667 19.1665V10.6318L15.0589 16.6907Z"
                        fill="#6418C3"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[2px]">
                    <p className="p-bold !text-[15px] text-[#383838] text-left">
                      Message Activity Lorem
                    </p>
                    <p className="label-reg text-[#A4A4A4] text-left !text-[13px]">
                      Lorem Ipsum is simply
                    </p>
                  </div>
                </div>
                <p className="label-reg text-[#878787] lg:block hidden">
                  2 Day ago
                </p>
              </div>
              <div className="flex justify-between items-center self-stretch rounded-[10px] bg-[#FFF]">
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 rounded-[5px]"
                    style={{ background: "rgba(94, 207, 255, 0.10)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M11.3333 19.5H13.6667V24.1667H11.3333V19.5Z"
                        fill="#5ECFFF"
                      />
                      <path
                        d="M19.5 3.54023L12.5 0.740234L5.50001 3.54023V7.83357H0.833344V24.1669H9.00001V17.1669H16V24.1669H24.1667V7.83357H19.5V3.54023ZM6.66668 19.5002H4.33334V17.1669H6.66668V19.5002ZM6.66668 14.8336H4.33334V12.5002H6.66668V14.8336ZM11.3333 14.8336H9.00001V12.5002H11.3333V14.8336ZM11.3333 5.50023H13.6667V10.1669H11.3333V5.50023ZM16 14.8336H13.6667V12.5002H16V14.8336ZM20.6667 19.5002H18.3333V17.1669H20.6667V19.5002ZM20.6667 12.5002V14.8336H18.3333V12.5002H20.6667Z"
                        fill="#5ECFFF"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[2px]">
                    <p className="p-bold !text-[15px] text-[#383838] text-left">
                      Center Activity
                    </p>
                    <p className="label-reg text-[#A4A4A4] text-left !text-[13px]">
                      Lorem Ipsum is simply dummy
                    </p>
                  </div>
                </div>
                <p className="label-reg text-[#878787] lg:block hidden">
                  3 Day ago
                </p>
              </div>
              <div className="flex justify-between items-center self-stretch rounded-[10px] bg-[#FFF]">
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 rounded-[5px]"
                    style={{ background: "rgba(255, 171, 45, 0.10)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                    >
                      <path
                        d="M13.7561 17.7755C14.9301 16.9957 15.8219 15.8586 16.2994 14.5325C16.7769 13.2065 16.8148 11.7619 16.4075 10.4126C16.0002 9.06335 15.1694 7.88105 14.0379 7.04069C12.9064 6.20034 11.5345 5.74658 10.125 5.74658C8.71563 5.74658 7.34366 6.20034 6.21218 7.04069C5.0807 7.88105 4.24983 9.06335 3.84254 10.4126C3.43524 11.7619 3.47316 13.2065 3.95069 14.5325C4.42821 15.8586 5.31997 16.9957 6.49398 17.7755C4.49264 18.5138 2.76291 19.8428 1.53409 21.5865C1.44183 21.7175 1.38734 21.8714 1.37656 22.0313C1.36577 22.1912 1.39911 22.351 1.47294 22.4933C1.54676 22.6355 1.65824 22.7548 1.7952 22.838C1.93216 22.9212 2.08935 22.9652 2.24962 22.9652L18.0001 22.9646C18.1604 22.9646 18.3176 22.9206 18.4545 22.8374C18.5915 22.7541 18.7029 22.6349 18.7767 22.4926C18.8506 22.3504 18.8839 22.1906 18.8731 22.0307C18.8623 21.8708 18.8077 21.7169 18.7155 21.5859C17.4867 19.8425 15.7572 18.5137 13.7561 17.7755Z"
                        fill="#FFAB2D"
                      />
                      <path
                        d="M27.6319 21.5859C26.4031 19.8425 24.6736 18.5137 22.6725 17.7755C23.9736 16.9094 24.9228 15.6075 25.3494 14.1039C25.776 12.6003 25.652 10.9938 24.9996 9.57346C24.3473 8.15316 23.2094 7.01232 21.7909 6.35622C20.3723 5.70012 18.7661 5.57186 17.2614 5.9945C17.1248 6.03292 16.9996 6.10398 16.8966 6.20157C16.7935 6.29916 16.7158 6.42034 16.67 6.55466C16.6243 6.68898 16.6119 6.83242 16.6339 6.9726C16.6559 7.11279 16.7117 7.24551 16.7964 7.35934C17.7856 8.68802 18.3542 10.2824 18.4291 11.9372C18.5039 13.5919 18.0816 15.2312 17.2165 16.6438C17.1023 16.8301 17.0619 17.0524 17.1033 17.2669C17.1447 17.4815 17.2649 17.6728 17.4402 17.8033C17.7719 18.0502 18.0911 18.3135 18.3965 18.5924C18.4123 18.6095 18.4282 18.6266 18.4456 18.6427C19.6135 19.7224 20.56 21.0191 21.2324 22.4605C21.3028 22.6113 21.4148 22.739 21.5553 22.8284C21.6957 22.9178 21.8588 22.9653 22.0253 22.9652L26.9166 22.9647C27.0769 22.9646 27.234 22.9206 27.371 22.8374C27.5079 22.7541 27.6194 22.6349 27.6932 22.4926C27.767 22.3503 27.8003 22.1906 27.7895 22.0307C27.7787 21.8708 27.7242 21.7169 27.6319 21.5859Z"
                        fill="#FFAB2D"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[2px]">
                    <p className="p-bold !text-[15px] text-[#383838] text-left">
                      Staff Activity Lorem Ipsum
                    </p>
                    <p className="label-reg text-[#A4A4A4] text-left !text-[13px]">
                      Lorem Ipsum is simply
                    </p>
                  </div>
                </div>
                <p className="label-reg text-[#878787] lg:block hidden">
                  3 Day ago
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:w-[353px] p-5 flex-col items-start gap-[30px] rounded-[10px] bg-[#FFF] self-stretch lg:self-auto">
          <div className="flex flex-col justify-center items-start gap-[30px] self-stretch">
            <div className="flex justify-between items-center self-stretch">
              <div
                className="flex justify-between items-center"
                style={{ flex: "1 0 0" }}
              >
                <h5 className="h5-bold text-[#202020]">Event Calendar</h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3"
                  height="16"
                  viewBox="0 0 3 16"
                  fill="none"
                >
                  <circle cx="1.5" cy="2" r="1.5" fill="#A5A5A5" />
                  <circle cx="1.5" cy="8" r="1.5" fill="#A5A5A5" />
                  <circle cx="1.5" cy="14" r="1.5" fill="#A5A5A5" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-[15px] self-stretch">
              <Calendar
                onChange={onChange}
                value={date}
                view="months" // Set the calendar view to months
                navigationLabel={navigationLabel}
                next2Label={null} // Disable the next 2 navigation button
                prev2Label={null} // Disable the previous 2 navigation button
                className="custom-calendar"
                tileClassName={tileClassName}
                formatShortWeekday={(locale, date) =>
                  date.toLocaleDateString(locale, { weekday: "short" })[0]
                }
              />
            </div>
          </div>
        </div>
        <div className="flex lg:w-[258px] p-5 flex-col items-start gap-[30px] rounded-[10px] bg-[#FFF] self-stretch lg:self-auto">
          <div className="flex flex-col justify-center items-start gap-[30px] self-stretch">
            <div className="flex justify-between items-center self-stretch">
              <div
                className="flex justify-between items-center"
                style={{ flex: "1 0 0" }}
              >
                <h5 className="h5-bold text-[#202020]">Recent Admissions</h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3"
                  height="16"
                  viewBox="0 0 3 16"
                  fill="none"
                >
                  <circle cx="1.5" cy="2" r="1.5" fill="#A5A5A5" />
                  <circle cx="1.5" cy="8" r="1.5" fill="#A5A5A5" />
                  <circle cx="1.5" cy="14" r="1.5" fill="#A5A5A5" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-5 self-stretch">
              <div className="flex items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]">
                <div
                  className="flex items-center gap-2.5"
                  style={{ flex: "1 0 0" }}
                >
                  <div className="flex w-[45px] h-[45px] justify-center items-start gap-2.5">
                    <img src={profileImgPlaceholder} alt="" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[5px] text-left">
                    <p className="label-bold !text-[13px] text-[#383838]">
                      Mohammad Ishtiyaq
                    </p>
                    <p className="label-reg text-[#878787]">Class 1</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]">
                <div
                  className="flex items-center gap-2.5"
                  style={{ flex: "1 0 0" }}
                >
                  <div className="flex w-[45px] h-[45px] justify-center items-start gap-2.5">
                    <img src={profileImgPlaceholder} alt="" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[5px] text-left">
                    <p className="label-bold !text-[13px] text-[#383838]">
                      Mohammad Ishtiyaq
                    </p>
                    <p className="label-reg text-[#878787]">Class 1</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]">
                <div
                  className="flex items-center gap-2.5"
                  style={{ flex: "1 0 0" }}
                >
                  <div className="flex w-[45px] h-[45px] justify-center items-start gap-2.5">
                    <img src={profileImgPlaceholder} alt="" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[5px] text-left">
                    <p className="label-bold !text-[13px] text-[#383838]">
                      Mohammad Ishtiyaq
                    </p>
                    <p className="label-reg text-[#878787]">Class 1</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]">
                <div
                  className="flex items-center gap-2.5"
                  style={{ flex: "1 0 0" }}
                >
                  <div className="flex w-[45px] h-[45px] justify-center items-start gap-2.5">
                    <img src={profileImgPlaceholder} alt="" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[5px] text-left">
                    <p className="label-bold !text-[13px] text-[#383838]">
                      Mohammad Ishtiyaq
                    </p>
                    <p className="label-reg text-[#878787]">Class 1</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 self-stretch rounded-[10px] bg-[#FFF]">
                <div
                  className="flex items-center gap-2.5"
                  style={{ flex: "1 0 0" }}
                >
                  <div className="flex w-[45px] h-[45px] justify-center items-start gap-2.5">
                    <img src={profileImgPlaceholder} alt="" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[5px] text-left">
                    <p className="label-bold !text-[13px] text-[#383838]">
                      Mohammad Ishtiyaq
                    </p>
                    <p className="label-reg text-[#878787]">Class 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OverviewTab;
