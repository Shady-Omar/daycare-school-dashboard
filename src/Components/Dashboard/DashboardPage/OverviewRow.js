import { useState } from "react";
import { Transition } from "@headlessui/react";
import infoUpArrow from "../../../Assets/info-up-arrow.svg";
import birthdayPlaceholder from "../../../Assets/birthday-placeholder.png";

function OverviewRow() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row items-start gap-[30px] self-stretch">
      <div className="flex lg:w-[736px] p-5 flex-col justify-center items-start gap-[30px] rounded-[10px] bg-[#FFF]">
        <div className="flex items-start gap-[30px] self-stretch">
          <div
            className="flex flex-col justify-center items-start gap-[30px]"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex flex-col lg:flex-row  lg:justify-between items-start gap-5 lg:gap-0 self-stretch">
              <div className="flex flex-col items-start gap-2.5 lg:gap-0 self-stretch lg:self-auto">
                <h5 className="h5-bold text-[#202020]">Overview</h5>
                <p className="p-reg text-[#878787] text-left">
                  Lorem Ipsum has been the industry's standard dummy text ever.
                </p>
              </div>
              {/* Dropdown */}
              <div className="relative lg:hidden inline-block text-left self-stretch">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="flex justify-between items-start self-stretch w-full focus:outline-none"
                >
                  <div
                    className="flex justify-between items-center border border-[#DCDCDC] rounded-lg bg-white py-2.5 px-5 h-[60px]"
                    style={{ flex: "1 0 0" }}
                  >
                    {/* text */}
                    <h5 className="h5-semi text-[#383838]">This Month</h5>
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
                </button>

                <Transition
                  show={isOpen}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  {(ref) => (
                    <div
                      ref={ref}
                      className="absolute self-stretch w-full right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg"
                    >
                      {/* Dropdown content goes here */}
                      <div className="py-1 self-stretch w-full">
                        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          This Month
                        </span>
                      </div>
                    </div>
                  )}
                </Transition>
              </div>
              <div
                className="hidden lg:flex max-w-[132px] justify-center items-center border border-[#DCDCDC] bg-[#FFF] py-[10px] px-[20px] gap-[11px]"
                style={{ flex: "1 0 0", borderRadius: "10px" }}
              >
                <select
                  id=""
                  className="text-[#383838] cursor-pointer label-reg w-full text-center rounded-lg text-sm block focus:border-none focus:outline-none placeholder-gray-400"
                  defaultValue={"This Month"}
                >
                  <option value="This Month">This Month</option>
                  {/* <option value="PM">PM</option> */}
                </select>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch">
              <div
                className="flex flex-col justify-center items-start self-stretch lg:self-auto"
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
                          d="M14.8445 4.34709L7.61114 1.09366C7.57636 1.0789 7.53902 1.07129 7.5013 1.07129C7.46359 1.07129 7.42625 1.0789 7.39147 1.09366L0.158078 4.34709C0.110955 4.36869 0.0709822 4.40358 0.0429464 4.44757C0.0149106 4.49157 0 4.54281 0 4.59517C0 4.64752 0.0149106 4.69876 0.0429464 4.74276C0.0709822 4.78675 0.110955 4.82164 0.158078 4.84324C0.578991 5.03395 2.46403 5.87886 2.83441 6.047L7.39147 8.09667C7.42591 8.11274 7.46338 8.12106 7.5013 8.12106C7.53923 8.12106 7.5767 8.11274 7.61114 8.09667L10.3143 6.88204L10.8501 6.64075V7.2345C10.529 7.37875 8.20714 8.42309 7.82814 8.5928C7.72437 8.63963 7.61195 8.66361 7.49834 8.66314C7.38472 8.66267 7.2725 8.63777 7.16911 8.59009L2.29863 6.39946V10.2439C2.29825 10.2934 2.31128 10.3421 2.33631 10.3847C2.36133 10.4272 2.3974 10.462 2.44059 10.4852C3.71937 11.1796 5.12452 11.6031 6.57033 11.7299C8.01615 11.8567 9.47234 11.6841 10.8501 11.2227L10.8501 12.0713C10.6344 12.1364 10.4491 12.2779 10.328 12.4699C10.2069 12.6619 10.1582 12.8917 10.1907 13.1171C10.2232 13.3425 10.3348 13.5485 10.5051 13.6975C10.6753 13.8464 10.8929 13.9284 11.118 13.9284C11.3431 13.9284 11.5606 13.8464 11.7309 13.6975C11.9012 13.5485 12.0128 13.3425 12.0453 13.1171C12.0778 12.8917 12.0291 12.6619 11.908 12.4699C11.7869 12.2779 11.6016 12.1364 11.3859 12.0713L11.3859 6.22322C11.3916 6.06224 11.2536 5.97184 11.1207 5.92502L7.85293 4.45581C7.78908 4.42584 7.73942 4.37167 7.71468 4.30498C7.68995 4.23829 7.69211 4.16444 7.7207 4.09935C7.7493 4.03426 7.80203 3.98316 7.86753 3.95707C7.93303 3.93098 8.00603 3.932 8.07079 3.9599L11.4475 5.48037C11.5797 5.53959 11.6933 5.63433 11.7759 5.75431C11.8586 5.87429 11.9071 6.01491 11.9163 6.16088C12.4737 5.90867 14.2635 5.10467 14.8445 4.84324C14.891 4.82107 14.9303 4.78597 14.9579 4.74205C14.9854 4.69812 15 4.64718 15 4.59517C15 4.54315 14.9854 4.49221 14.9579 4.44829C14.9303 4.40436 14.891 4.36926 14.8445 4.34709Z"
                          fill="white"
                        />
                        <path
                          d="M11.369 6.85308V10.3552C11.5652 10.2309 12.0388 10.1472 12.0535 9.87239L12.0535 6.54834L11.369 6.85308Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="p-semi text-[#383838]">Total Children</p>
                  </div>
                  <div className="flex justify-between items-end self-stretch">
                    <h2 className="h2-bold text-[#383838]">564</h2>
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
                className="flex flex-col justify-center items-start self-stretch lg:self-auto"
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
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                      >
                        <path
                          d="M6.54167 10.25H7.79167V12.75H6.54167V10.25Z"
                          fill="#A4A4A4"
                        />
                        <path
                          d="M10.9167 1.7002L7.16667 0.200195L3.41667 1.7002V4.0002H0.916672V12.7502H5.29167V9.0002H9.04167V12.7502H13.4167V4.0002H10.9167V1.7002ZM4.04167 10.2502H2.79167V9.0002H4.04167V10.2502ZM4.04167 7.7502H2.79167V6.5002H4.04167V7.7502ZM6.54167 7.7502H5.29167V6.5002H6.54167V7.7502ZM6.54167 2.7502H7.79167V5.2502H6.54167V2.7502ZM9.04167 7.7502H7.79167V6.5002H9.04167V7.7502ZM11.5417 10.2502H10.2917V9.0002H11.5417V10.2502ZM11.5417 6.5002V7.7502H10.2917V6.5002H11.5417Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="p-semi text-[#383838]">Total Room</p>
                  </div>
                  <div className="flex justify-between items-end self-stretch">
                    <h2 className="h2-bold text-[#383838]">25</h2>
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
                className="flex flex-col justify-center items-start self-stretch lg:self-auto"
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
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M14.8445 4.34709L7.61114 1.09366C7.57636 1.0789 7.53902 1.07129 7.5013 1.07129C7.46359 1.07129 7.42625 1.0789 7.39147 1.09366L0.158078 4.34709C0.110955 4.36869 0.0709822 4.40358 0.0429464 4.44757C0.0149106 4.49157 0 4.54281 0 4.59517C0 4.64752 0.0149106 4.69876 0.0429464 4.74276C0.0709822 4.78675 0.110955 4.82164 0.158078 4.84324C0.578991 5.03395 2.46403 5.87886 2.83441 6.047L7.39147 8.09667C7.42591 8.11274 7.46338 8.12106 7.5013 8.12106C7.53923 8.12106 7.5767 8.11274 7.61114 8.09667L10.3143 6.88204L10.8501 6.64075V7.2345C10.529 7.37875 8.20714 8.42309 7.82814 8.5928C7.72437 8.63963 7.61195 8.66361 7.49834 8.66314C7.38472 8.66267 7.2725 8.63777 7.16911 8.59009L2.29863 6.39946V10.2439C2.29825 10.2934 2.31128 10.3421 2.33631 10.3847C2.36133 10.4272 2.3974 10.462 2.44059 10.4852C3.71937 11.1796 5.12452 11.6031 6.57033 11.7299C8.01615 11.8567 9.47234 11.6841 10.8501 11.2227L10.8501 12.0713C10.6344 12.1364 10.4491 12.2779 10.328 12.4699C10.2069 12.6619 10.1582 12.8917 10.1907 13.1171C10.2232 13.3425 10.3348 13.5485 10.5051 13.6975C10.6753 13.8464 10.8929 13.9284 11.118 13.9284C11.3431 13.9284 11.5606 13.8464 11.7309 13.6975C11.9012 13.5485 12.0128 13.3425 12.0453 13.1171C12.0778 12.8917 12.0291 12.6619 11.908 12.4699C11.7869 12.2779 11.6016 12.1364 11.3859 12.0713L11.3859 6.22322C11.3916 6.06224 11.2536 5.97184 11.1207 5.92502L7.85293 4.45581C7.78908 4.42584 7.73942 4.37167 7.71468 4.30498C7.68995 4.23829 7.69211 4.16444 7.7207 4.09935C7.7493 4.03426 7.80203 3.98316 7.86753 3.95707C7.93303 3.93098 8.00603 3.932 8.07079 3.9599L11.4475 5.48037C11.5797 5.53959 11.6933 5.63433 11.7759 5.75431C11.8586 5.87429 11.9071 6.01491 11.9163 6.16088C12.4737 5.90867 14.2635 5.10467 14.8445 4.84324C14.891 4.82107 14.9303 4.78597 14.9579 4.74205C14.9854 4.69812 15 4.64718 15 4.59517C15 4.54315 14.9854 4.49221 14.9579 4.44829C14.9303 4.40436 14.891 4.36926 14.8445 4.34709Z"
                          fill="white"
                        />
                        <path
                          d="M11.369 6.85308V10.3552C11.5652 10.2309 12.0388 10.1472 12.0535 9.87239L12.0535 6.54834L11.369 6.85308Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="p-semi text-[#383838]">Total Staff</p>
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
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex p-5 flex-col justify-center items-start gap-[30px] self-stretch rounded-[10px] bg-[#FFF]"
        style={{ flex: "1 0 0" }}
      >
        <div className="flex items-start gap-[30px] self-stretch">
          <div
            className="flex flex-col justify-center items-start gap-[30px]"
            style={{ flex: "1 0 0" }}
          >
            <div className="flex justify-between items-center self-stretch">
              <div
                className="flex justify-between items-center"
                style={{ flex: "1 0 0" }}
              >
                <h5 className="h5-bold text-[#202020]">Upcoming Birthday</h5>
                <div className="flex w-[89px] justify-end items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M15 6.28511L9 12.3398L15 18.3945"
                      stroke="#A4A4A4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M9 18.3946L15 12.3399L9 6.28516"
                      stroke="#A4A4A4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-[15px] self-stretch">
              <div
                className="flex p-[15px] justify-between items-center self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DCDCDC" }}
              >
                <div className="flex items-center gap-2.5">
                  <img src={birthdayPlaceholder} alt="" />
                  <div className="flex flex-col justify-center items-start text-left">
                    <p className="p-bold text-[#383838]">Mohammad Ishtiyaq</p>
                    <p className="label-reg text-[#878787]">Date: 27/10/2023</p>
                  </div>
                </div>
                <p className="label-reg text-[#878787]">Class: 1</p>
              </div>
              <div
                className="flex p-[15px] justify-between items-center self-stretch rounded-[10px] bg-[#FFF]"
                style={{ border: "1px solid #DCDCDC" }}
              >
                <div className="flex items-center gap-2.5">
                  <img src={birthdayPlaceholder} alt="" />
                  <div className="flex flex-col justify-center items-start text-left">
                    <p className="p-bold text-[#383838]">Mohammad Ishtiyaq</p>
                    <p className="label-reg text-[#878787]">Date: 27/10/2023</p>
                  </div>
                </div>
                <p className="label-reg text-[#878787]">Class: 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewRow;
