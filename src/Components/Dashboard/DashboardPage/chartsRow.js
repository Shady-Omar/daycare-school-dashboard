import { useState } from "react";
import { Transition } from "@headlessui/react";
import VerticalBarChart from "../../VerticalBarChart";
import DoughnutChart from "../../DoughnutChart";

function ChartsRow() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row items-start gap-[30px] self-stretch">
      <div className="flex w-full p-5 flex-col items-start gap-[30px] rounded-[10px] bg-[#FFF]">
        <div className="flex w-full lg:h-[285.32px] flex-col justify-center items-start gap-[30px] self-stretch lg:self-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-5 lg:gap-0 self-stretch">
            <div className="flex flex-col items-start gap-2.5 lg:gap-0 self-stretch lg:self-auto">
              <h5 className="h5-bold text-[#202020]">SAR 3,525</h5>
              <p className="p-reg text-[#878787]">Total Revenue</p>
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
          <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-[30px] self-stretch">
            <DoughnutChart />
            <div
              className="flex flex-col justify-center items-start gap-2.5 self-stretch lg:self-auto"
              style={{ flex: "1 0 0" }}
            >
              <div
                className="flex pb-[15px] items-center gap-2.5 self-stretch"
                style={{ borderBottom: "1px solid #DCDCDC" }}
              >
                <div className="flex items-center gap-2.5 rounded-md w-5 h-5 bg-[#00CCB6]"></div>
                <div
                  className="flex flex-col items-start"
                  style={{ flex: "1 0 0" }}
                >
                  <p className="p-bold !text-[15px] text-[#383838]">
                    SAR 2,000
                  </p>
                  <p className="label-reg !text-[13px] text-[#878787]">
                    New Subscription
                  </p>
                </div>
                <p className="p-bold !text-[15px] text-[#383838]">75%</p>
              </div>
              <div
                className="flex pb-[15px] items-center gap-2.5 self-stretch"
                style={{ borderBottom: "1px solid #DCDCDC" }}
              >
                <div className="flex items-center gap-2.5 rounded-md w-5 h-5 bg-[#E328AF]"></div>
                <div
                  className="flex flex-col items-start"
                  style={{ flex: "1 0 0" }}
                >
                  <p className="p-bold !text-[15px] text-[#383838]">
                    SAR 1,000
                  </p>
                  <p className="label-reg !text-[13px] text-[#878787]">
                    Renew Contracts
                  </p>
                </div>
                <p className="p-bold !text-[15px] text-[#383838]">25%</p>
              </div>
              <div
                className="flex pb-[15px] items-center gap-2.5 self-stretch"
                style={{ borderBottom: "1px solid #DCDCDC" }}
              >
                <div className="flex items-center gap-2.5 rounded-md w-5 h-5 bg-[#6418C3]"></div>
                <div
                  className="flex flex-col items-start"
                  style={{ flex: "1 0 0" }}
                >
                  <p className="p-bold !text-[15px] text-[#383838]">SAR 500</p>
                  <p className="label-reg !text-[13px] text-[#878787]">
                    Other Invoices
                  </p>
                </div>
                <p className="p-bold !text-[15px] text-[#383838]">5%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="custom-scroll"
        className="flex w-full lg:overflow-visible overflow-x-scroll p-5 flex-col items-start gap-[30px] rounded-[10px] bg-[#FFF]"
      >
        <div className="flex w-[484px] lg:w-full h-[285.32px] flex-col items-start gap-[30px]">
          <div className="flex justify-between items-start self-stretch">
            <div className="flex flex-col items-start">
              <h5 className="h5-bold text-[#202020]">Number of Children</h5>
            </div>
            <div className="hidden lg:flex w-[215.5px] justify-end items-start gap-5">
              <div className="flex items-center gap-2.5">
                <span className="w-[13px] h-[13px] bg-[#00CCB6] rounded-full"></span>
                <p className="p-reg text-[#878787]">Girl</p>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-[13px] h-[13px] bg-[#6418C3] rounded-full"></span>
                <p className="p-reg text-[#878787]">Boy</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[30px] self-stretch">
            <VerticalBarChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartsRow;
