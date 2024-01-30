import React from "react";
import { Link } from "react-router-dom";

import infoUpArrow from "../../../Assets/info-up-arrow.svg";
import staffCardPlaceholder from "../../../Assets/staff-card-placeholder.png";
import phoneIcon from "../../../Assets/phone-icon.svg";
import emailIcon from "../../../Assets/email-icon.svg";
import sortArrow from "../../../Assets/sort-dropdown-arrow.svg";
import childrenPlaceholder from "../../../Assets/children-placeholder.png";
import actionArrow from "../../../Assets/action-arrow.svg";

function StaffListContent() {
  return (
    <div className="flex flex-col items-start gap-[30px] self-stretch">
      {/* OverView Row */}
      <div className="flex flex-col lg:flex-row items-start gap-[30px] self-stretch">
        <div
          className="flex p-5 items-start gap-[30px] rounded-[10px] bg-white self-stretch"
          style={{ flex: "1 0 0" }}
        >
          {/* Overview Cards */}
          <div
            className="flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-5 items-center content-center self-stretch"
            style={{ flex: "1 0 0" }}
          >
            <div
              className="flex self-stretch flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex py-[15px] px-5 flex-col items-start gap-2.5 self-stretch"
                style={{
                  borderRadius: "10px 10px 0px 0px",
                  background: "rgba(0, 204, 182, 0.10)",
                }}
              >
                <div className="flex justify-center items-start gap-2.5">
                  <div className="flex p-[5px] items-start gap-2.5 rounded bg-[#00CCB6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M7.1015 9.2546C7.73043 8.83684 8.20816 8.22768 8.46398 7.5173C8.71979 6.80691 8.74011 6.03304 8.52191 5.31022C8.30372 4.58739 7.85861 3.95401 7.25246 3.50382C6.64631 3.05363 5.91133 2.81055 5.15629 2.81055C4.40124 2.81055 3.66626 3.05363 3.06011 3.50382C2.45396 3.95401 2.00885 4.58739 1.79066 5.31022C1.57247 6.03304 1.59278 6.80691 1.8486 7.5173C2.10441 8.22768 2.58214 8.83684 3.21107 9.2546C2.13893 9.65011 1.21229 10.3621 0.553991 11.2962C0.504568 11.3664 0.475376 11.4489 0.469599 11.5345C0.463822 11.6202 0.481682 11.7058 0.521232 11.782C0.560781 11.8582 0.6205 11.9221 0.693873 11.9667C0.767246 12.0112 0.851455 12.0348 0.937312 12.0348L9.37507 12.0345C9.46093 12.0345 9.54513 12.0109 9.6185 11.9663C9.69187 11.9217 9.75159 11.8578 9.79113 11.7816C9.83067 11.7054 9.84852 11.6198 9.84273 11.5342C9.83694 11.4485 9.80774 11.3661 9.7583 11.2959C9.10002 10.3619 8.1735 9.65007 7.1015 9.2546Z"
                        fill="white"
                      />
                      <path
                        d="M14.535 11.296C13.8767 10.3621 12.9501 9.65019 11.8781 9.25474C12.5751 8.79077 13.0836 8.09328 13.3122 7.28778C13.5407 6.48228 13.4743 5.62165 13.1248 4.86078C12.7753 4.09991 12.1658 3.48874 11.4058 3.13726C10.6459 2.78578 9.78542 2.71707 8.97932 2.94348C8.90614 2.96406 8.83906 3.00213 8.78387 3.05441C8.72868 3.10669 8.68704 3.17161 8.66252 3.24357C8.63801 3.31553 8.63136 3.39237 8.64316 3.46747C8.65496 3.54256 8.68484 3.61367 8.73024 3.67464C9.26013 4.38644 9.56475 5.24059 9.60486 6.12706C9.64497 7.01353 9.41873 7.89171 8.95529 8.64845C8.89408 8.74825 8.87244 8.86733 8.89462 8.98229C8.91679 9.09724 8.98118 9.19973 9.07511 9.2696C9.25283 9.40187 9.42382 9.54296 9.58743 9.69233C9.59588 9.70152 9.60441 9.71066 9.61372 9.7193C10.2394 10.2977 10.7464 10.9924 11.1066 11.7645C11.1444 11.8453 11.2044 11.9137 11.2796 11.9616C11.3549 12.0095 11.4422 12.035 11.5314 12.035L14.1518 12.0346C14.2376 12.0346 14.3218 12.011 14.3952 11.9664C14.4685 11.9218 14.5282 11.858 14.5678 11.7818C14.6073 11.7055 14.6252 11.6199 14.6194 11.5343C14.6136 11.4486 14.5844 11.3662 14.535 11.296Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="p-semi text-[#383838]">Total Staff</p>
                </div>
                <div className="flex justify-between items-end self-stretch">
                  <h2 className="h2-bold text-[#383838]">68</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="74"
                    height="35"
                    viewBox="0 0 74 35"
                    fill="none"
                  >
                    <path
                      d="M1.6174 33.0002L2.59031 32.3452C3.56321 31.6902 5.50903 30.3802 7.45484 27.9774C9.40065 25.5746 11.3465 22.079 13.2923 18.7815C15.2381 15.4841 17.1839 12.3847 19.1297 11.2379C21.0755 10.0911 23.0213 10.8969 24.9672 13.4813C26.913 16.0656 28.8588 20.4285 30.8046 20.8171C32.7504 21.2056 34.6962 17.6198 36.642 17.961C38.5878 18.3023 40.5337 22.5705 42.4795 21.9915C44.4253 21.4126 46.3711 15.9863 48.3169 12.9242C50.2627 9.86213 52.2085 9.16412 54.1543 11.3284C56.1002 13.4927 58.046 18.5193 59.9918 20.6076C61.9376 22.6959 63.8834 21.846 65.8292 18.2328C67.775 14.6197 69.7209 8.24345 70.6938 5.05532L71.6667 1.86719"
                      stroke="#00CCB6"
                      strokeWidth="3.1133"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="flex py-[15px] px-5 items-center gap-2.5 self-stretch bg-[#00CCB6]"
                style={{ borderRadius: "0px 0px 10px 10px" }}
              >
                <img src={infoUpArrow} alt="" />
                <p className="label-reg text-[#FFF]">+15% than last Month</p>
              </div>
            </div>
            <div
              className="flex self-stretch flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex py-[15px] px-5 flex-col items-start gap-2.5 self-stretch"
                style={{
                  borderRadius: "10px 10px 0px 0px",
                  background: "rgba(100, 24, 195, 0.10)",
                }}
              >
                <div className="flex justify-center items-start gap-2.5">
                  <div className="flex p-[5px] items-start gap-2.5 rounded bg-[#6418C3]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <path
                        d="M11.6526 1.60742H3.81169C3.67749 1.60897 3.5483 1.65865 3.44765 1.74743C3.84705 1.88794 4.19846 2.13875 4.46114 2.47079C4.72382 2.80283 4.88702 3.20251 4.93182 3.62351C4.94038 3.69793 4.94038 3.77309 4.93182 3.84752V13.3679C4.93155 13.475 4.96202 13.58 5.01959 13.6703C5.07717 13.7606 5.15944 13.8325 5.25666 13.8775C5.3541 13.9224 5.46238 13.9383 5.56861 13.9234C5.67485 13.9085 5.77457 13.8635 5.85593 13.7935L7.45211 12.4271L9.0483 13.7935C9.14974 13.8803 9.27884 13.928 9.41234 13.928C9.54583 13.928 9.67493 13.8803 9.77638 13.7935L11.3726 12.4271L12.9688 13.7935C13.0702 13.8803 13.1993 13.9279 13.3328 13.9279C13.4138 13.9274 13.4939 13.9102 13.568 13.8775C13.6652 13.8325 13.7475 13.7606 13.8051 13.6703C13.8627 13.58 13.8931 13.475 13.8929 13.3679V3.84752C13.8929 3.25341 13.6568 2.68363 13.2367 2.26353C12.8166 1.84343 12.2468 1.60742 11.6526 1.60742ZM11.0925 9.44775H7.73214C7.58361 9.44775 7.44115 9.38875 7.33612 9.28372C7.23109 9.1787 7.17208 9.03625 7.17208 8.88773C7.17208 8.7392 7.23109 8.59676 7.33612 8.49173C7.44115 8.38671 7.58361 8.3277 7.73214 8.3277H11.0925C11.2411 8.3277 11.3835 8.38671 11.4886 8.49173C11.5936 8.59676 11.6526 8.7392 11.6526 8.88773C11.6526 9.03625 11.5936 9.1787 11.4886 9.28372C11.3835 9.38875 11.2411 9.44775 11.0925 9.44775ZM11.0925 7.20766H7.73214C7.58361 7.20766 7.44115 7.14865 7.33612 7.04363C7.23109 6.9386 7.17208 6.79616 7.17208 6.64763C7.17208 6.49911 7.23109 6.35666 7.33612 6.25164C7.44115 6.14661 7.58361 6.08761 7.73214 6.08761H11.0925C11.2411 6.08761 11.3835 6.14661 11.4886 6.25164C11.5936 6.35666 11.6526 6.49911 11.6526 6.64763C11.6526 6.79616 11.5936 6.9386 11.4886 7.04363C11.3835 7.14865 11.2411 7.20766 11.0925 7.20766ZM11.0925 4.96756H7.73214C7.58361 4.96756 7.44115 4.90856 7.33612 4.80354C7.23109 4.69851 7.17208 4.55607 7.17208 4.40754C7.17208 4.25901 7.23109 4.11657 7.33612 4.01154C7.44115 3.90652 7.58361 3.84752 7.73214 3.84752H11.0925C11.2411 3.84752 11.3835 3.90652 11.4886 4.01154C11.5936 4.11657 11.6526 4.25901 11.6526 4.40754C11.6526 4.55607 11.5936 4.69851 11.4886 4.80354C11.3835 4.90856 11.2411 4.96756 11.0925 4.96756ZM3.81169 3.84752V8.3277H2.1315C1.98296 8.3277 1.8405 8.2687 1.73547 8.16368C1.63044 8.05865 1.57143 7.91621 1.57143 7.76768V3.84752C1.57143 3.76911 1.57143 3.69631 1.57143 3.62351C1.60114 3.32645 1.74764 3.05336 1.97871 2.86432C2.20979 2.67527 2.5065 2.58576 2.80357 2.61546C3.10065 2.64517 3.37376 2.79166 3.56282 3.02272C3.75187 3.25377 3.8414 3.55046 3.81169 3.84752Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="p-semi text-[#383838]">Total Salaries (SAD)</p>
                </div>
                <div className="flex justify-between items-end self-stretch">
                  <h2 className="h2-bold text-[#383838]">11,984</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="74"
                    height="36"
                    viewBox="0 0 74 36"
                    fill="none"
                  >
                    <path
                      d="M2.28407 33.5666L3.25697 32.9116C4.22988 32.2566 6.17569 30.9466 8.1215 28.5438C10.0673 26.141 12.0131 22.6454 13.9589 19.3479C15.9048 16.0505 17.8506 12.9511 19.7964 11.8043C21.7422 10.6576 23.688 11.4633 25.6338 14.0477C27.5796 16.632 29.5254 20.9949 31.4713 21.3835C33.4171 21.772 35.3629 18.1862 37.3087 18.5275C39.2545 18.8687 41.2003 23.1369 43.1461 22.5579C45.0919 21.979 47.0378 16.5528 48.9836 13.4906C50.9294 10.4285 52.8752 9.73053 54.821 11.8948C56.7668 14.0591 58.7126 19.0857 60.6585 21.174C62.6043 23.2624 64.5501 22.4124 66.4959 18.7992C68.4417 15.1861 70.3875 8.80985 71.3604 5.62172L72.3333 2.43359"
                      stroke="#6418C3"
                      strokeWidth="3.1133"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="flex py-[15px] px-5 items-center gap-2.5 self-stretch bg-[#6418C3]"
                style={{ borderRadius: "0px 0px 10px 10px" }}
              >
                <img src={infoUpArrow} alt="" />
                <p className="label-reg text-[#FFF]">+2% than last Month</p>
              </div>
            </div>
            <div
              className="flex self-stretch flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex py-[15px] px-5 flex-col items-start gap-2.5 self-stretch"
                style={{
                  borderRadius: "10px 10px 0px 0px",
                  background: "rgba(94, 207, 255, 0.10)",
                }}
              >
                <div className="flex justify-center items-start gap-2.5">
                  <div className="flex p-[5px] items-start gap-2.5 rounded bg-[#5ECFFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.5 14.4297C10.9519 14.4297 13.75 11.6316 13.75 8.17969C13.75 4.72781 10.9519 1.92969 7.5 1.92969C4.04813 1.92969 1.25 4.72781 1.25 8.17969C1.25 11.6316 4.04813 14.4297 7.5 14.4297ZM9.71 5.96969C9.82736 5.85249 9.98646 5.78672 10.1523 5.78684C10.3182 5.78696 10.4772 5.85295 10.5944 5.97031C10.7116 6.08767 10.7773 6.24678 10.7772 6.41263C10.7771 6.57848 10.7111 6.73749 10.5938 6.85469L7.06063 10.3878L7.05813 10.3903C7.00022 10.4486 6.93137 10.4948 6.85553 10.5263C6.7797 10.5578 6.69838 10.5741 6.61625 10.5741C6.53412 10.5741 6.4528 10.5578 6.37697 10.5263C6.30113 10.4948 6.23228 10.4486 6.17437 10.3903L6.17188 10.3878L4.40625 8.62219C4.34656 8.56453 4.29894 8.49557 4.26619 8.41932C4.23343 8.34306 4.21619 8.26105 4.21547 8.17806C4.21475 8.09508 4.23056 8.01278 4.26199 7.93597C4.29341 7.85916 4.33982 7.78937 4.3985 7.73069C4.45719 7.67201 4.52697 7.6256 4.60378 7.59417C4.68059 7.56275 4.76289 7.54693 4.84588 7.54766C4.92886 7.54838 5.01088 7.56562 5.08713 7.59837C5.16338 7.63113 5.23235 7.67874 5.29 7.73844L6.61625 9.06406L9.71 5.97031V5.96969Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="p-semi text-[#383838]">Total Active</p>
                </div>
                <div className="flex justify-between items-end self-stretch">
                  <h2 className="h2-bold text-[#383838]">35+</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="74"
                    height="35"
                    viewBox="0 0 74 35"
                    fill="none"
                  >
                    <path
                      d="M1.6174 33.0002L2.59031 32.3452C3.56321 31.6902 5.50903 30.3802 7.45484 27.9774C9.40065 25.5746 11.3465 22.079 13.2923 18.7815C15.2381 15.4841 17.1839 12.3847 19.1297 11.2379C21.0755 10.0911 23.0213 10.8969 24.9672 13.4813C26.913 16.0656 28.8588 20.4285 30.8046 20.8171C32.7504 21.2056 34.6962 17.6198 36.642 17.961C38.5878 18.3023 40.5337 22.5705 42.4795 21.9915C44.4253 21.4126 46.3711 15.9863 48.3169 12.9242C50.2627 9.86213 52.2085 9.16412 54.1543 11.3284C56.1002 13.4927 58.046 18.5193 59.9918 20.6076C61.9376 22.6959 63.8834 21.846 65.8292 18.2328C67.775 14.6197 69.7209 8.24345 70.6938 5.05532L71.6667 1.86719"
                      stroke="#5ECFFF"
                      strokeWidth="3.1133"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="flex py-[15px] px-5 items-center gap-2.5 self-stretch bg-[#5ECFFF]"
                style={{ borderRadius: "0px 0px 10px 10px" }}
              >
                <img src={infoUpArrow} alt="" />
                <p className="label-reg text-[#FFF]">-2% than last Month</p>
              </div>
            </div>
            <div
              className="flex self-stretch flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex py-[15px] px-5 flex-col items-start gap-2.5 self-stretch"
                style={{
                  borderRadius: "10px 10px 0px 0px",
                  background: "rgba(255, 74, 85, 0.10)",
                }}
              >
                <div className="flex justify-center items-start gap-2.5">
                  <div className="flex p-[5px] items-start gap-2.5 rounded bg-[#FF4A55]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8 1.92969C4.5625 1.92969 1.75 4.74219 1.75 8.17969C1.75 11.6172 4.5625 14.4297 8 14.4297C11.4375 14.4297 14.25 11.6172 14.25 8.17969C14.25 4.74219 11.4375 1.92969 8 1.92969ZM10.3125 9.61719C10.5625 9.86719 10.5625 10.2422 10.3125 10.4922C10.0625 10.7422 9.6875 10.7422 9.4375 10.4922L8 9.05469L6.5625 10.4922C6.3125 10.7422 5.9375 10.7422 5.6875 10.4922C5.4375 10.2422 5.4375 9.86719 5.6875 9.61719L7.125 8.17969L5.6875 6.74219C5.4375 6.49219 5.4375 6.11719 5.6875 5.86719C5.9375 5.61719 6.3125 5.61719 6.5625 5.86719L8 7.30469L9.4375 5.86719C9.6875 5.61719 10.0625 5.61719 10.3125 5.86719C10.5625 6.11719 10.5625 6.49219 10.3125 6.74219L8.875 8.17969L10.3125 9.61719Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="p-semi text-[#383838]">Total on Leave</p>
                </div>
                <div className="flex justify-between items-end self-stretch">
                  <h2 className="h2-bold text-[#383838]">12</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="74"
                    height="35"
                    viewBox="0 0 74 35"
                    fill="none"
                  >
                    <path
                      d="M1.6174 33.0002L2.59031 32.3452C3.56321 31.6902 5.50903 30.3802 7.45484 27.9774C9.40065 25.5746 11.3465 22.079 13.2923 18.7815C15.2381 15.4841 17.1839 12.3847 19.1297 11.2379C21.0755 10.0911 23.0213 10.8969 24.9672 13.4813C26.913 16.0656 28.8588 20.4285 30.8046 20.8171C32.7504 21.2056 34.6962 17.6198 36.642 17.961C38.5878 18.3023 40.5337 22.5705 42.4795 21.9915C44.4253 21.4126 46.3711 15.9863 48.3169 12.9242C50.2627 9.86213 52.2085 9.16412 54.1543 11.3284C56.1002 13.4927 58.046 18.5193 59.9918 20.6076C61.9376 22.6959 63.8834 21.846 65.8292 18.2328C67.775 14.6197 69.7209 8.24345 70.6938 5.05532L71.6667 1.86719"
                      stroke="#FF4A55"
                      strokeWidth="3.1133"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="flex py-[15px] px-5 items-center gap-2.5 self-stretch bg-[#FF4A55]"
                style={{ borderRadius: "0px 0px 10px 10px" }}
              >
                <img src={infoUpArrow} alt="" />
                <p className="label-reg text-[#FFF]">-2% than last Month</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex p-5 flex-col items-start gap-[30px] rounded-[10px] bg-white"
          style={{ flex: "1 0 0" }}
        >
          {/* Title */}
          <div
            className="flex pb-5 items-end gap-[5px] self-stretch"
            style={{ borderBottom: "1px solid #EBEBEB" }}
          >
            <div
              className="flex justify-between items-center"
              style={{ flex: "1 0 0" }}
            >
              <h5 className="h5-bold !text-[18px] text-[#202020]">
                Latest Activity
              </h5>
              <p className="label-reg !text-[13px] text-[#595959]">
                13 November 2023
              </p>
            </div>
          </div>
          {/* Timeline */}
          <div
            id="custom-scroll"
            className="flex justify-between items-start self-stretch bg-white lg:max-h-[250px] overflow-y-scroll"
          >
            <div
              className="flex flex-col items-start gap-6"
              style={{ flex: "1 0 0" }}
            >
              <div className="flex items-center gap-4 self-stretch">
                <h5 className="h5-semi text-[#A4A4A4]">08.00 AM</h5>
                <span className="w-1 h-10 bg-[#6418C3]" />
                <div className="flex items-start" style={{ flex: "1 0 0" }}>
                  <h5 className="h5-bold text-[#383838] text-left">
                    Abdullah Bilal{" "}
                    <span className="h5-med text-[#878787]">
                      adding food for room 3
                    </span>
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-4 self-stretch">
                <h5 className="h5-semi text-[#A4A4A4]">10.00 AM</h5>
                <span className="w-1 h-10 bg-[#5ECFFF]" />
                <div className="flex items-start" style={{ flex: "1 0 0" }}>
                  <h5 className="h5-bold text-[#383838] text-left">
                    Muhammad Ashraf{" "}
                    <span className="h5-med text-[#878787]">Checking In</span>
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-4 self-stretch">
                <h5 className="h5-semi text-[#A4A4A4]">01.00 PM</h5>
                <span className="w-1 h-10 bg-[#E328AF]" />
                <div className="flex items-start" style={{ flex: "1 0 0" }}>
                  <h5 className="h5-bold text-[#383838] text-left">
                    Zubair{" "}
                    <span className="h5-med text-[#878787]">Checking Out</span>
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-4 self-stretch">
                <h5 className="h5-semi text-[#A4A4A4]">01.00 PM</h5>
                <span className="w-1 h-10 bg-[#FFAB2D]" />
                <div className="flex items-start" style={{ flex: "1 0 0" }}>
                  <h5 className="h5-bold text-[#383838] text-left">
                    Ashlan{" "}
                    <span className="h5-med text-[#878787]">
                      replace diaper on room 1
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Staff Lists */}
      <div className="flex items-start gap-[30px] self-stretch">
        <div
          className="flex p-5 flex-col items-start gap-[30px] rounded-[10px] bg-white"
          style={{ flex: "1 0 0" }}
        >
          {/* Title */}
          <div
            className="flex pb-5 items-end gap-[5px] self-stretch"
            style={{ borderBottom: "1px solid #EBEBEB" }}
          >
            <div className="flex flex-col items-start gap-[5px]">
              <h5 className="h5-bold !text-[18px] text-[#202020]">
                Staff Lists
              </h5>
            </div>
          </div>
          {/* Cards */}
          <div className="flex flex-col lg:flex-row items-start gap-[30px] self-stretch">
            <Link
              to="/staff/details"
              className="flex p-5 flex-col items-start gap-2.5 rounded-lg"
              style={{ flex: "1 0 0", border: "1px solid #EBEBEB" }}
            >
              {/* Profile */}
              <div className="flex items-center gap-[19px] self-stretch">
                <img src={staffCardPlaceholder} alt="" />
                <div
                  className="flex flex-col items-start gap-[5px]"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#202020]">Abdullah Bilal</h5>
                  <p className="p-reg text-[#878787]">Staff</p>
                </div>
              </div>
              {/* Contact */}
              <div
                className="flex flex-col lg:flex-row items-start gap-2.5 lg:gap-7 self-stretch"
                style={{
                  padding: "10px 0px 20px 0px",
                  borderBottom: "1px solid #EBEBEB",
                }}
              >
                <span className=" flex lg:justify-center lg:items-center gap-2 w-[110px] h-[18px]">
                  <img className="w-4 h-4 shrink-0" src={phoneIcon} alt="" />
                  <p className="label-semi text-[#383838]">+12 34567890</p>
                </span>
                <span className=" flex lg:justify-center lg:items-center gap-2 w-[110px] h-[18px]">
                  <img className="w-4 h-4 shrink-0" src={emailIcon} alt="" />
                  <p className="label-semi text-[#383838]">email@mail.com</p>
                </span>
              </div>
              {/* Statistic 1 */}
              <div className="flex py-2.5 items-start gap-3 self-stretch">
                <div
                  className="flex h-[90px] py-2.5 px-5 flex-col items-start gap-[15px] rounded-lg bg-[#F5F5F5]"
                  style={{ flex: "1 0 0" }}
                >
                  <p className="label-reg text-[#646464]">Attendance</p>
                  <div className="flex items-baseline gap-[5px]">
                    <p className="h3-bold text-[#383838]">150</p>
                    <p className="label-reg text-[#A4A4A4]">Days</p>
                  </div>
                </div>
                <div
                  className="flex h-[90px] py-2.5 px-5 flex-col items-start gap-[15px] rounded-lg bg-[#F5F5F5]"
                  style={{ flex: "1 0 0" }}
                >
                  <p className="label-reg text-[#646464]">Percentage</p>
                  <div className="flex items-end gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                    >
                      <circle
                        opacity="0.5"
                        cx="16"
                        cy="16.3594"
                        r="16"
                        fill="#A4A4A4"
                      />
                      <path
                        d="M16 32.3594C13.3688 32.3594 10.7782 31.7105 8.45765 30.4701C6.13713 29.2298 4.15831 27.4363 2.69649 25.2485C1.23466 23.0607 0.334949 20.5462 0.0770444 17.9277C-0.18086 15.3091 0.211005 12.6674 1.21793 10.2364C2.22485 7.80551 3.81575 5.66043 5.84971 3.99121C7.88366 2.32198 10.2979 1.18014 12.8786 0.666811C15.4592 0.153486 18.1266 0.284528 20.6446 1.04833C23.1625 1.81213 25.4532 3.18511 27.3137 5.04566L16 16.3594L16 32.3594Z"
                        fill="#6418C3"
                      />
                    </svg>
                    <h3 className="h3-bold text-[#383838]">75%</h3>
                  </div>
                </div>
              </div>
              {/* Statistic 2 */}
              <div className="flex py-2.5 items-start gap-3 self-stretch">
                {/* for mobile screen */}
                <div className="lg:hidden flex w-full flex-col items-start gap-[5px]">
                  <h6 className="h6-bold text-[#202020] !tracking-normal text-left">
                    Leave Balance
                  </h6>
                  <div className="flex justify-between items-start self-stretch">
                    <div className="w-[49px] flex-col-reverse h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex flex-row items-baseline">
                        15 <span className="p-reg text-[#A5A5A5]">/8h</span>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Personal</p>
                    </div>
                    <div className="w-[49px] flex-col-reverse h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex flex-row items-baseline">
                        5 <span className="p-reg text-[#A5A5A5]">/21h</span>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Sick</p>
                    </div>
                    <div className="w-[49px] flex-col-reverse h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex flex-row items-baseline">
                        7 <span className="p-reg text-[#A5A5A5]">/30h</span>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Vacation</p>
                    </div>
                    <div className="w-[49px] flex-col-reverse h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex flex-row items-baseline">
                        21 <span className="p-reg text-[#A5A5A5]">/12h</span>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Annual</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-full flex-col items-start gap-[5px]">
                  <h6 className="h6-bold text-[#202020] !tracking-normal text-left">
                    Used Leave
                  </h6>
                  <div className="flex w-[102px] justify-between items-start">
                    <div className="w-[22px] h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020]">5</h5>
                      <p className="label-reg text-[#A5A5A5]">Sick</p>
                    </div>
                    <div className="w-[42px] h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex items-baseline">
                        21<p className="p text-[#A5A5A5]">/12</p>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Annual</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-full flex-col items-start gap-[5px]">
                  <h6 className="h6-bold text-[#202020] !tracking-normal text-left">
                    Without Excuse
                  </h6>
                  <div className="flex w-[102px] justify-between items-start">
                    <div className="w-[22px] h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020]">5</h5>
                      <p className="label-reg text-[#A5A5A5]">Late</p>
                    </div>
                    <div className="w-[22px] h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020]">5</h5>
                      <p className="label-reg text-[#A5A5A5]">Absent</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div
              className="flex p-5 flex-col items-start gap-2.5 rounded-lg"
              style={{ flex: "1 0 0", border: "1px solid #EBEBEB" }}
            >
              {/* Profile */}
              <div className="flex items-center gap-[19px] self-stretch">
                <img src={staffCardPlaceholder} alt="" />
                <div
                  className="flex flex-col items-start gap-[5px]"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#202020]">Abdullah Bilal</h5>
                  <p className="p-reg text-[#878787]">Staff</p>
                </div>
              </div>
              {/* Contact */}
              <div
                className="flex flex-col lg:flex-row items-start gap-2.5 lg:gap-7 self-stretch"
                style={{
                  padding: "10px 0px 20px 0px",
                  borderBottom: "1px solid #EBEBEB",
                }}
              >
                <span className=" flex lg:justify-center lg:items-center gap-2 w-[110px] h-[18px]">
                  <img className="w-4 h-4 shrink-0" src={phoneIcon} alt="" />
                  <p className="label-semi text-[#383838]">+12 34567890</p>
                </span>
                <span className=" flex lg:justify-center lg:items-center gap-2 w-[110px] h-[18px]">
                  <img className="w-4 h-4 shrink-0" src={emailIcon} alt="" />
                  <p className="label-semi text-[#383838]">email@mail.com</p>
                </span>
              </div>
              {/* Statistic 1 */}
              <div className="flex py-2.5 items-start gap-3 self-stretch">
                <div
                  className="flex h-[90px] py-2.5 px-5 flex-col items-start gap-[15px] rounded-lg bg-[#F5F5F5]"
                  style={{ flex: "1 0 0" }}
                >
                  <p className="label-reg text-[#646464]">Attendance</p>
                  <div className="flex items-baseline gap-[5px]">
                    <p className="h3-bold text-[#383838]">150</p>
                    <p className="label-reg text-[#A4A4A4]">Days</p>
                  </div>
                </div>
                <div
                  className="flex h-[90px] py-2.5 px-5 flex-col items-start gap-[15px] rounded-lg bg-[#F5F5F5]"
                  style={{ flex: "1 0 0" }}
                >
                  <p className="label-reg text-[#646464]">Percentage</p>
                  <div className="flex items-end gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                    >
                      <circle
                        opacity="0.5"
                        cx="16"
                        cy="16.3594"
                        r="16"
                        fill="#A4A4A4"
                      />
                      <path
                        d="M16 32.3594C13.3688 32.3594 10.7782 31.7105 8.45765 30.4701C6.13713 29.2298 4.15831 27.4363 2.69649 25.2485C1.23466 23.0607 0.334949 20.5462 0.0770444 17.9277C-0.18086 15.3091 0.211005 12.6674 1.21793 10.2364C2.22485 7.80551 3.81575 5.66043 5.84971 3.99121C7.88366 2.32198 10.2979 1.18014 12.8786 0.666811C15.4592 0.153486 18.1266 0.284528 20.6446 1.04833C23.1625 1.81213 25.4532 3.18511 27.3137 5.04566L16 16.3594L16 32.3594Z"
                        fill="#6418C3"
                      />
                    </svg>
                    <h3 className="h3-bold text-[#383838]">75%</h3>
                  </div>
                </div>
              </div>
              {/* Statistic 2 */}
              <div className="flex py-2.5 items-start gap-3 self-stretch">
                {/* for mobile screen */}
                <div className="lg:hidden flex w-full flex-col items-start gap-[5px]">
                  <h6 className="h6-bold text-[#202020] !tracking-normal text-left">
                    Leave Balance
                  </h6>
                  <div className="flex justify-between items-start self-stretch">
                    <div className="w-[49px] flex-col-reverse h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex flex-row items-baseline">
                        15 <span className="p-reg text-[#A5A5A5]">/8h</span>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Personal</p>
                    </div>
                    <div className="w-[49px] flex-col-reverse h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex flex-row items-baseline">
                        5 <span className="p-reg text-[#A5A5A5]">/21h</span>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Sick</p>
                    </div>
                    <div className="w-[49px] flex-col-reverse h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex flex-row items-baseline">
                        7 <span className="p-reg text-[#A5A5A5]">/30h</span>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Vacation</p>
                    </div>
                    <div className="w-[49px] flex-col-reverse h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex flex-row items-baseline">
                        21 <span className="p-reg text-[#A5A5A5]">/12h</span>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Annual</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-full flex-col items-start gap-[5px]">
                  <h6 className="h6-bold text-[#202020] !tracking-normal text-left">
                    Used Leave
                  </h6>
                  <div className="flex w-[102px] justify-between items-start">
                    <div className="w-[22px] h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020]">5</h5>
                      <p className="label-reg text-[#A5A5A5]">Sick</p>
                    </div>
                    <div className="w-[42px] h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex items-baseline">
                        21<p className="p text-[#A5A5A5]">/12</p>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Annual</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-full flex-col items-start gap-[5px]">
                  <h6 className="h6-bold text-[#202020] !tracking-normal text-left">
                    Without Excuse
                  </h6>
                  <div className="flex w-[102px] justify-between items-start">
                    <div className="w-[22px] h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020]">5</h5>
                      <p className="label-reg text-[#A5A5A5]">Late</p>
                    </div>
                    <div className="w-[22px] h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020]">5</h5>
                      <p className="label-reg text-[#A5A5A5]">Absent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex p-5 flex-col items-start gap-2.5 rounded-lg"
              style={{ flex: "1 0 0", border: "1px solid #EBEBEB" }}
            >
              {/* Profile */}
              <div className="flex items-center gap-[19px] self-stretch">
                <img src={staffCardPlaceholder} alt="" />
                <div
                  className="flex flex-col items-start gap-[5px]"
                  style={{ flex: "1 0 0" }}
                >
                  <h5 className="h5-bold text-[#202020]">Abdullah Bilal</h5>
                  <p className="p-reg text-[#878787]">Staff</p>
                </div>
              </div>
              {/* Contact */}
              <div
                className="flex flex-col lg:flex-row items-start gap-2.5 lg:gap-7 self-stretch"
                style={{
                  padding: "10px 0px 20px 0px",
                  borderBottom: "1px solid #EBEBEB",
                }}
              >
                <span className=" flex lg:justify-center lg:items-center gap-2 w-[110px] h-[18px]">
                  <img className="w-4 h-4 shrink-0" src={phoneIcon} alt="" />
                  <p className="label-semi text-[#383838]">+12 34567890</p>
                </span>
                <span className=" flex lg:justify-center lg:items-center gap-2 w-[110px] h-[18px]">
                  <img className="w-4 h-4 shrink-0" src={emailIcon} alt="" />
                  <p className="label-semi text-[#383838]">email@mail.com</p>
                </span>
              </div>
              {/* Statistic 1 */}
              <div className="flex py-2.5 items-start gap-3 self-stretch">
                <div
                  className="flex h-[90px] py-2.5 px-5 flex-col items-start gap-[15px] rounded-lg bg-[#F5F5F5]"
                  style={{ flex: "1 0 0" }}
                >
                  <p className="label-reg text-[#646464]">Attendance</p>
                  <div className="flex items-baseline gap-[5px]">
                    <p className="h3-bold text-[#383838]">150</p>
                    <p className="label-reg text-[#A4A4A4]">Days</p>
                  </div>
                </div>
                <div
                  className="flex h-[90px] py-2.5 px-5 flex-col items-start gap-[15px] rounded-lg bg-[#F5F5F5]"
                  style={{ flex: "1 0 0" }}
                >
                  <p className="label-reg text-[#646464]">Percentage</p>
                  <div className="flex items-end gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                    >
                      <circle
                        opacity="0.5"
                        cx="16"
                        cy="16.3594"
                        r="16"
                        fill="#A4A4A4"
                      />
                      <path
                        d="M16 32.3594C13.3688 32.3594 10.7782 31.7105 8.45765 30.4701C6.13713 29.2298 4.15831 27.4363 2.69649 25.2485C1.23466 23.0607 0.334949 20.5462 0.0770444 17.9277C-0.18086 15.3091 0.211005 12.6674 1.21793 10.2364C2.22485 7.80551 3.81575 5.66043 5.84971 3.99121C7.88366 2.32198 10.2979 1.18014 12.8786 0.666811C15.4592 0.153486 18.1266 0.284528 20.6446 1.04833C23.1625 1.81213 25.4532 3.18511 27.3137 5.04566L16 16.3594L16 32.3594Z"
                        fill="#6418C3"
                      />
                    </svg>
                    <h3 className="h3-bold text-[#383838]">75%</h3>
                  </div>
                </div>
              </div>
              {/* Statistic 2 */}
              <div className="flex py-2.5 items-start gap-3 self-stretch">
                {/* for mobile screen */}
                <div className="lg:hidden flex w-full flex-col items-start gap-[5px]">
                  <h6 className="h6-bold text-[#202020] !tracking-normal text-left">
                    Leave Balance
                  </h6>
                  <div className="flex justify-between items-start self-stretch">
                    <div className="w-[49px] flex-col-reverse h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex flex-row items-baseline">
                        15 <span className="p-reg text-[#A5A5A5]">/8h</span>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Personal</p>
                    </div>
                    <div className="w-[49px] flex-col-reverse h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex flex-row items-baseline">
                        5 <span className="p-reg text-[#A5A5A5]">/21h</span>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Sick</p>
                    </div>
                    <div className="w-[49px] flex-col-reverse h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex flex-row items-baseline">
                        7 <span className="p-reg text-[#A5A5A5]">/30h</span>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Vacation</p>
                    </div>
                    <div className="w-[49px] flex-col-reverse h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex flex-row items-baseline">
                        21 <span className="p-reg text-[#A5A5A5]">/12h</span>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Annual</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-full flex-col items-start gap-[5px]">
                  <h6 className="h6-bold text-[#202020] !tracking-normal text-left">
                    Used Leave
                  </h6>
                  <div className="flex w-[102px] justify-between items-start">
                    <div className="w-[22px] h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020]">5</h5>
                      <p className="label-reg text-[#A5A5A5]">Sick</p>
                    </div>
                    <div className="w-[42px] h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020] flex items-baseline">
                        21<p className="p text-[#A5A5A5]">/12</p>
                      </h5>
                      <p className="label-reg text-[#A5A5A5]">Annual</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-full flex-col items-start gap-[5px]">
                  <h6 className="h6-bold text-[#202020] !tracking-normal text-left">
                    Without Excuse
                  </h6>
                  <div className="flex w-[102px] justify-between items-start">
                    <div className="w-[22px] h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020]">5</h5>
                      <p className="label-reg text-[#A5A5A5]">Late</p>
                    </div>
                    <div className="w-[22px] h-[46px] shrink-0 text-left">
                      <h5 className="h5 text-[#202020]">5</h5>
                      <p className="label-reg text-[#A5A5A5]">Absent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between items-center self-stretch">
            <p className="label-reg text-[#6D6D6D]">
              Showing 3 results from 289 data
            </p>
          </div>
        </div>
      </div>
      {/* Table Row */}
      <div className="flex flex-col items-start self-stretch">
        <div className="flex p-[30px] items-start flex-col justify-center gap-[30px] self-stretch rounded-[10px] bg-white">
          <div className="flex flex-col items-start gap-5 self-stretch">
            {/* Sort */}
            <div className="flex items-start gap-[5px]">
              <p className="label-reg text-[#646464]">Sort by:</p>
              <div className="flex items-center gap-[11px] rounded-lg">
                <p className="label-semi text-[#383838]">First Name</p>
                <img src={sortArrow} alt="" />
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
                      className="px-6 py-3 p-semi flex items-center gap-[15px]"
                    >
                      Staff Name
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3 p-semi text-center">
                      Status
                    </th>

                    <th scope="col" className="px-6 py-3  p-semi text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-[15px]">
                      <img src={childrenPlaceholder} alt="" />
                      <div className="flex flex-col justify-center items-start">
                        <p className="text-[#00CCB6] p-semi !text-[15px]">
                          Abdullah Zubair
                        </p>
                        <p className="text-[#646464] p-reg ">All Room</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      abdullahzubair@email.com
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">Admin</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex items-center flex-col gap-2">
                        <div
                          className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6] !text-xs">
                            Active
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                          Actions
                          <img src={actionArrow} alt="action" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-[15px]">
                      <img src={childrenPlaceholder} alt="" />
                      <div className="flex flex-col justify-center items-start">
                        <p className="text-[#00CCB6] p-semi !text-[15px]">
                          Abdullah Zubair
                        </p>
                        <p className="text-[#646464] p-reg ">Room 1, Room 2</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      abdullahzubair@email.com
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">Staff</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex items-center flex-col gap-2">
                        <div
                          className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                          style={{ background: "rgba(100, 24, 195, 0.10)" }}
                        >
                          <p className="label-semi text-[#6418C3] !text-xs">
                            Invited
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                          Actions
                          <img src={actionArrow} alt="action" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-[15px]">
                      <img src={childrenPlaceholder} alt="" />
                      <div className="flex flex-col justify-center items-start">
                        <p className="text-[#00CCB6] p-semi !text-[15px]">
                          Abdullah Zubair
                        </p>
                        <p className="text-[#646464] p-reg ">All Room</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      abdullahzubair@email.com
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">Admin</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex items-center flex-col gap-2">
                        <div
                          className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                          style={{ background: "rgba(255, 74, 85, 0.10)" }}
                        >
                          <p className="label-semi text-[#FF4A55] !text-xs">
                            Inactive
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                          Actions
                          <img src={actionArrow} alt="action" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-[15px]">
                      <img src={childrenPlaceholder} alt="" />
                      <div className="flex flex-col justify-center items-start">
                        <p className="text-[#00CCB6] p-semi !text-[15px]">
                          Abdullah Zubair
                        </p>
                        <p className="text-[#646464] p-reg ">All Room</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      abdullahzubair@email.com
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">Admin</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex items-center flex-col gap-2">
                        <div
                          className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6] !text-xs">
                            Active
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                          Actions
                          <img src={actionArrow} alt="action" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-[15px]">
                      <img src={childrenPlaceholder} alt="" />
                      <div className="flex flex-col justify-center items-start">
                        <p className="text-[#00CCB6] p-semi !text-[15px]">
                          Abdullah Zubair
                        </p>
                        <p className="text-[#646464] p-reg ">All Room</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      abdullahzubair@email.com
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">Admin</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex items-center flex-col gap-2">
                        <div
                          className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6] !text-xs">
                            Active
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                          Actions
                          <img src={actionArrow} alt="action" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-[15px]">
                      <img src={childrenPlaceholder} alt="" />
                      <div className="flex flex-col justify-center items-start">
                        <p className="text-[#00CCB6] p-semi !text-[15px]">
                          Abdullah Zubair
                        </p>
                        <p className="text-[#646464] p-reg ">All Room</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      abdullahzubair@email.com
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">Admin</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex items-center flex-col gap-2">
                        <div
                          className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                          style={{ background: "rgba(0, 204, 182, 0.10)" }}
                        >
                          <p className="label-semi text-[#00CCB6] !text-xs">
                            Active
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
                      <div className="flex flex-col justify-center items-start gap-2">
                        <div className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn">
                          Actions
                          <img src={actionArrow} alt="action" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className=" border-x-[0.5px] border-b-[0.5px] border-[#DCDCDC]">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-[15px]">
                      <img src={childrenPlaceholder} alt="" />
                      <div className="flex flex-col justify-center items-start">
                        <p className="text-[#00CCB6] p-semi !text-[15px]">
                          Abdullah Zubair
                        </p>
                        <p className="text-[#646464] p-reg ">Room 1, Room 2</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      abdullahzubair@email.com
                    </td>
                    <td className="px-6 py-4 p-reg text-[#646464]">Staff</td>
                    <td className="px-6 py-4 p-reg text-[#646464]">
                      <div className="flex items-center flex-col gap-2">
                        <div
                          className="flex py-2.5 px-[15px] gap-2.5 rounded-md"
                          style={{ background: "rgba(100, 24, 195, 0.10)" }}
                        >
                          <p className="label-semi text-[#6418C3] !text-xs">
                            Invited
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="flex w-full justify-center py-[15px] px-5 items-center gap-[15px] self-stretch">
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
    </div>
  );
}

export default StaffListContent;
