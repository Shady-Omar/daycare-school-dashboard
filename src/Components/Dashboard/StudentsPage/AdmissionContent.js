import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

import graduationIcon from "../../../Assets/graduation-icon.svg";
import waitlistIcon from "../../../Assets/waitlist-icon.svg";
import visitedIcon from "../../../Assets/visited-icon.svg";

function AdmissionContent() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className=" w-full self-stretch bg-[#FFF]">
      <div
        className="flex flex-col lg:flex-row items-start gap-[30px] self-stretch bg-[#FFF]"
        style={{
          padding: "20px 20px 0px 20px",
          borderRadius: "10px 10px 0px 0px",
        }}
      >
        {/* cards */}
        <div
          className="flex flex-col lg:flex-row justify-center lg:justify-normal items-start lg:items-center gap-5 self-stretch lg:self-auto"
          style={{ flex: "1 0 0" }}
        >
          <Link
            to="/students/admission"
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF] self-stretch lg:self-auto"
            style={{
              border: ` ${
                currentPath === "/students/admission"
                  ? "2px solid #00CCB6"
                  : "1px solid #DCDCDC"
              }`,
              flex: "1 0 0",
            }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#00CCB6]">
              <img src={graduationIcon} alt="" />
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">564</h2>
              <p className="p-reg text-[#878787]">Total Children</p>
            </div>
          </Link>
          <Link
            to="/students/admission/applied"
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF] self-stretch lg:self-auto"
            style={{
              border: ` ${
                currentPath === "/students/admission/applied"
                  ? "2px solid #00CCB6"
                  : "1px solid #DCDCDC"
              }`,
              flex: "1 0 0",
            }}
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
                  d="M16.1899 20.8605C17.5736 19.9414 18.6246 18.6013 19.1874 17.0384C19.7502 15.4756 19.7949 13.7731 19.3148 12.1829C18.8348 10.5926 17.8556 9.19921 16.522 8.2088C15.1885 7.21838 13.5716 6.68359 11.9105 6.68359C10.2494 6.68359 8.63241 7.21838 7.29888 8.2088C5.96535 9.19921 4.98611 10.5926 4.50609 12.1829C4.02606 13.7731 4.07075 15.4756 4.63355 17.0384C5.19634 18.6013 6.24734 19.9414 7.63099 20.8605C5.27227 21.7306 3.23367 23.297 1.78541 25.3521C1.67668 25.5065 1.61246 25.6879 1.59975 25.8763C1.58704 26.0648 1.62633 26.2531 1.71334 26.4208C1.80035 26.5884 1.93173 26.729 2.09315 26.827C2.25457 26.9251 2.43983 26.977 2.62872 26.977L21.1918 26.9763C21.3807 26.9763 21.5659 26.9244 21.7273 26.8263C21.8888 26.7282 22.0201 26.5877 22.1071 26.42C22.1941 26.2523 22.2334 26.064 22.2206 25.8755C22.2079 25.6871 22.1437 25.5057 22.0349 25.3513C20.5867 23.2966 18.5483 21.7305 16.1899 20.8605Z"
                  fill="white"
                />
                <path
                  d="M32.5436 25.3512C31.0953 23.2965 29.057 21.7304 26.6985 20.8604C28.2319 19.8397 29.3507 18.3052 29.8534 16.5331C30.3562 14.761 30.21 12.8676 29.4412 11.1937C28.6723 9.51979 27.3313 8.17523 25.6594 7.40197C23.9875 6.62872 22.0946 6.47754 20.3211 6.97566C20.1601 7.02094 20.0126 7.10469 19.8912 7.21971C19.7697 7.33472 19.6781 7.47754 19.6242 7.63585C19.5703 7.79416 19.5556 7.96321 19.5816 8.12842C19.6075 8.29364 19.6733 8.45007 19.7732 8.58422C20.9389 10.1502 21.6091 12.0293 21.6973 13.9795C21.7856 15.9298 21.2878 17.8618 20.2683 19.5266C20.1336 19.7461 20.086 20.0081 20.1348 20.261C20.1836 20.5139 20.3252 20.7394 20.5319 20.8931C20.9229 21.1841 21.299 21.4945 21.659 21.8231C21.6776 21.8433 21.6963 21.8635 21.7168 21.8825C23.0933 23.1549 24.2088 24.6832 25.0012 26.382C25.0842 26.5598 25.2163 26.7102 25.3818 26.8156C25.5473 26.921 25.7395 26.9769 25.9357 26.9769L31.7005 26.9762C31.8894 26.9762 32.0746 26.9243 32.236 26.8262C32.3974 26.7281 32.5288 26.5875 32.6158 26.4199C32.7027 26.2522 32.742 26.0639 32.7293 25.8754C32.7165 25.687 32.6523 25.5057 32.5436 25.3512Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">163</h2>
              <p className="p-reg text-[#878787]">Applied Children</p>
            </div>
          </Link>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF] self-stretch lg:self-auto"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#5ECFFF]">
              <img src={visitedIcon} alt="" />
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">15</h2>
              <p className="p-reg text-[#878787]">Visited</p>
            </div>
          </div>
          <div
            className="flex h-[108px] p-[14.4px] items-center gap-5 rounded-[7.2px] bg-[#FFF] self-stretch lg:self-auto"
            style={{ border: "1px solid #DCDCDC", flex: "1 0 0" }}
          >
            <div className="flex w-12 h-[47px] p-[7.128px] justify-center items-center gap-[14.256px] rounded-[5.702px] bg-[#E328AF]">
              <img src={waitlistIcon} alt="" />
            </div>
            <div
              className="flex flex-col justify-center items-start"
              style={{ flex: "1 0 0" }}
            >
              <h2 className="h2-bold text-[#383838]">35</h2>
              <p className="p-reg text-[#878787]">Waitlist</p>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default AdmissionContent;
