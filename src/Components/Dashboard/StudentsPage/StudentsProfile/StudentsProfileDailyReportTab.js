import React from "react";

import babyIcon from "../../../../Assets/baby-bottle-icon.svg";
import diaperIcon from "../../../../Assets/diaper-icon.svg";
import imageIcon from "../../../../Assets/image-icon.svg";
import photosPlaceholder from "../../../../Assets/photos-placeholder.png";
import StudentEmailReportModal from "../../../StudentEmailReportModal";

function StudentsProfileDailyReportTab() {
  return (
    <div className="flex p-[30px] flex-col justify-center items-start gap-[30px] self-stretch rounded-[10px] bg-white">
      {/* Title */}
      <div className="flex flex-col items-start gap-[5px] self-stretch">
        <h3 className="h3-med text-[#383838]">September 10, 2023</h3>
        <p className="p-reg text-[#383838]">
          Family can opt into automatic daily report emails from their profile.
        </p>
      </div>
      {/* Allergies */}
      <div
        className="flex justify-between items-start self-stretch"
        style={{ borderBottom: "1px solid #DCDCDC" }}
      >
        <div
          className="flex py-5 items-center gap-[15px] self-stretch"
          style={{ flex: "1 0 0" }}
        >
          <p className="p-reg text-[#383838]">
            Send Daily Reports Automatically
          </p>
        </div>
        <div
          className="flex justify-end items-center gap-5 self-stretch"
          style={{ flex: "1 0 0", padding: "20px 0px 20px 20px" }}
        >
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-[#DCDCDC] peer-checked:bg-[#00CCB6] peer-focus:outline-none scale-[1.29] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
      </div>
      {/* Button */}
      <StudentEmailReportModal />
      {/* activity cards */}
      <div className="flex flex-col items-start justify-center gap-[30px] self-stretch">
        <div className="flex flex-col items-start justify-center gap-[15px] self-stretch">
          <div
            className="flex h-[75px] px-5 justify-between items-center self-stretch rounded-[10px]"
            style={{ border: "1px solid #DCDCDC" }}
          >
            {/* Name */}
            <div className="flex w-[555.5px] items-center gap-[50px]">
              {/* Text */}
              <div className="flex items-center gap-[15px] shrink-0">
                <div
                  className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 shrink-0 rounded-[5px]"
                  style={{ background: "rgba(0, 204, 182, 0.10)" }}
                >
                  <img src={babyIcon} alt="bottle" />
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <p className="p-bold text-[#383838]">
                    1 Food | Last at 2:00 PM
                  </p>
                  <p className="label-reg text-[#A4A4A4]">Food - All - Lunch</p>
                </div>
              </div>
            </div>
            {/* Action */}
            <div className="flex justify-end items-center gap-[30px]">
              <p className="p-reg text-[#878787]">4:32 PM</p>
            </div>
          </div>
          <div
            className="flex h-[75px] px-5 justify-between items-center self-stretch rounded-[10px]"
            style={{ border: "1px solid #DCDCDC" }}
          >
            {/* Name */}
            <div className="flex w-[555.5px] items-center gap-[50px]">
              {/* Text */}
              <div className="flex items-center gap-[15px] shrink-0">
                <div
                  className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 shrink-0 rounded-[5px]"
                  style={{ background: "rgba(100, 24, 195, 0.10)" }}
                >
                  <img src={diaperIcon} alt="diaper" />
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <p className="p-bold text-[#383838]">
                    1 total | Last at 3:00 PM
                  </p>
                  <p className="p-reg text-[#A4A4A4]">Diaper - Wet</p>
                </div>
              </div>
            </div>
            {/* Action */}
            <div className="flex justify-end items-center gap-[30px]">
              <p className="label-reg text-[#878787]">2:16 PM</p>
            </div>
          </div>
          <div
            className="flex h-[75px] px-5 justify-between items-center self-stretch rounded-[10px]"
            style={{ border: "1px solid #DCDCDC" }}
          >
            {/* Name */}
            <div className="flex w-[555.5px] items-center gap-[50px]">
              {/* Text */}
              <div className="flex items-center gap-[15px] shrink-0">
                <div
                  className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 shrink-0 rounded-[5px]"
                  style={{ background: "rgba(94, 207, 255, 0.10)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M15.3945 2.50024C8.81445 2.54231 3.45764 7.92701 3.43655 14.4896C3.43655 16.593 3.98489 18.5912 4.95502 20.295C4.68085 20.905 4.32232 21.4939 3.85835 22.0408C3.56309 22.3563 3.22565 22.6718 2.82495 22.9453C2.44533 23.2187 2.02354 23.429 1.58065 23.6183C1.43302 23.6814 1.51738 23.7656 1.60174 23.8077C1.74937 23.8708 1.897 23.9549 2.06572 24.018C2.38206 24.1442 2.69841 24.2494 3.01476 24.3335C3.56309 24.5018 4.1747 24.5649 4.76521 24.5859C5.37681 24.6069 6.00951 24.5438 6.62111 24.4597C7.16945 24.3545 7.69669 24.2494 8.22393 24.0811C10.2275 25.5955 12.7582 26.5 15.4788 26.5C22.1221 26.5 27.5 21.1363 27.5 14.5106C27.5 7.84287 22.0588 2.45818 15.3945 2.50024ZM15.4156 21.4308C14.7407 21.4308 14.1713 20.8629 14.1713 20.1898C14.1713 19.4957 14.7407 18.9488 15.4156 18.9488C16.1115 18.9278 16.6599 19.4747 16.6809 20.1688C16.6809 20.8629 16.1537 21.4308 15.4156 21.4308ZM17.6089 14.6789C17.1871 15.0575 16.702 15.4151 16.6599 16.0461C16.6177 16.5089 16.5966 16.9716 16.5966 17.4344C16.6177 17.6868 16.5122 17.7709 16.2591 17.7499C15.9639 17.7288 15.6686 17.7499 15.3945 17.7499C15.0781 17.7499 14.7407 17.7499 14.4243 17.7499C14.2556 17.7499 14.1713 17.6868 14.1713 17.4975C14.1502 16.593 14.1291 15.3941 14.5298 14.5737C15.0148 13.501 16.1959 13.1645 16.8707 12.239C18.5579 9.94627 14.3189 8.41079 13.4542 11.2504C13.3277 11.6711 13.3066 11.6711 12.8637 11.608C12.3154 11.5448 11.767 11.4607 11.2187 11.3976C11.0078 11.3766 10.9234 11.2924 10.9445 11.0821C11.282 7.50633 16.3435 6.47566 18.7899 8.62113C19.5281 9.25215 20.0131 10.1987 20.0131 11.1662C19.992 12.7228 18.6212 13.7534 17.6089 14.6789Z"
                      fill="#5ECFFF"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <p className="p-bold text-[#383838]">Note at 3:30 PM</p>
                  <p className="p-reg text-[#A4A4A4]">Notes Testing</p>
                </div>
              </div>
            </div>
            {/* Action */}
            <div className="flex justify-end items-center gap-[30px]">
              <p className="label-reg text-[#878787]">1:27 PM</p>
            </div>
          </div>
          <div
            className="flex h-[75px] px-5 justify-between items-center self-stretch rounded-[10px]"
            style={{ border: "1px solid #DCDCDC" }}
          >
            {/* Name */}
            <div className="flex w-[555.5px] items-center gap-[50px]">
              {/* Text */}
              <div className="flex items-center gap-[15px] shrink-0">
                <div
                  className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 shrink-0 rounded-[5px]"
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
                      d="M14.5 2.25C12.0772 2.25 9.70877 2.96845 7.69427 4.3145C5.67977 5.66054 4.10965 7.57373 3.18248 9.81213C2.25531 12.0505 2.01272 14.5136 2.48539 16.8899C2.95805 19.2661 4.12475 21.4489 5.83795 23.1621C7.55114 24.8752 9.73388 26.042 12.1101 26.5146C14.4864 26.9873 16.9495 26.7447 19.1879 25.8175C21.4263 24.8904 23.3395 23.3202 24.6855 21.3057C26.0316 19.2912 26.75 16.9228 26.75 14.5C26.75 11.2511 25.4594 8.13526 23.1621 5.83794C20.8647 3.54062 17.7489 2.25 14.5 2.25ZM6.80001 9.25C6.80001 9.01794 6.89219 8.79538 7.05629 8.63128C7.22038 8.46719 7.44294 8.375 7.67501 8.375H10.825C11.0571 8.375 11.2796 8.46719 11.4437 8.63128C11.6078 8.79538 11.7 9.01794 11.7 9.25C11.7 9.48206 11.6078 9.70462 11.4437 9.86872C11.2796 10.0328 11.0571 10.125 10.825 10.125H7.67501C7.44294 10.125 7.22038 10.0328 7.05629 9.86872C6.89219 9.70462 6.80001 9.48206 6.80001 9.25ZM14.5 20.625C12.8756 20.625 11.3176 19.9797 10.169 18.831C9.02032 17.6824 8.37501 16.1245 8.37501 14.5C8.37501 14.2679 8.46719 14.0454 8.63129 13.8813C8.79538 13.7172 9.01794 13.625 9.25001 13.625C9.48207 13.625 9.70463 13.7172 9.86872 13.8813C10.0328 14.0454 10.125 14.2679 10.125 14.5C10.125 15.6603 10.5859 16.7731 11.4064 17.5936C12.2269 18.4141 13.3397 18.875 14.5 18.875C15.6603 18.875 16.7731 18.4141 17.5936 17.5936C18.4141 16.7731 18.875 15.6603 18.875 14.5C18.875 14.2679 18.9672 14.0454 19.1313 13.8813C19.2954 13.7172 19.5179 13.625 19.75 13.625C19.9821 13.625 20.2046 13.7172 20.3687 13.8813C20.5328 14.0454 20.625 14.2679 20.625 14.5C20.625 16.1245 19.9797 17.6824 18.831 18.831C17.6824 19.9797 16.1245 20.625 14.5 20.625ZM21.325 10.125H18.175C17.9429 10.125 17.7204 10.0328 17.5563 9.86872C17.3922 9.70462 17.3 9.48206 17.3 9.25C17.3 9.01794 17.3922 8.79538 17.5563 8.63128C17.7204 8.46719 17.9429 8.375 18.175 8.375H21.325C21.5571 8.375 21.7796 8.46719 21.9437 8.63128C22.1078 8.79538 22.2 9.01794 22.2 9.25C22.2 9.48206 22.1078 9.70462 21.9437 9.86872C21.7796 10.0328 21.5571 10.125 21.325 10.125Z"
                      fill="#FFAB2D"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <p className="p-bold text-[#383838]">
                    0.0 hrs total | Woke up at 4:00 PM
                  </p>
                  <p className="p-reg text-[#A4A4A4]">4:00 PM - 5:00 PM</p>
                </div>
              </div>
            </div>
            {/* Action */}
            <div className="flex justify-end items-center gap-[30px]">
              <p className="label-reg text-[#878787]">4:00 PM - 5:00 PM</p>
            </div>
          </div>
          <div
            className="flex flex-col p-5 items-center gap-5 self-stretch rounded-[10px] overflow-hidden"
            style={{ border: "1px solid #DCDCDC" }}
          >
            {/* Top */}
            <div
              className="flex pb-5 justify-between items-center self-stretch"
              style={{ borderBottom: "1px solid #DCDCDC" }}
            >
              {/* Name */}
              <div className="flex w-[555.5px] items-center gap-[50px]">
                {/* Text */}
                <div className="flex w-[190px] items-center gap-[15px] shrink-0">
                  <div
                    className="flex w-[45px] h-[45px] justify-center items-center gap-2.5 shrink-0 rounded-[5px]"
                    style={{ background: "rgba(227, 40, 175, 0.10)" }}
                  >
                    <img src={imageIcon} alt="photos" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-0.5">
                    <p className="p-bold text-[#383838]">Photo</p>
                    <p className="label-reg text-[#A4A4A4]">
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>
              </div>
              {/* Action */}
              <div className="flex justify-end items-center gap-[30px]">
                <p className="label-reg text-[#878787]">4:00 PM - 5:00 PM</p>
              </div>
            </div>
            {/* Images */}
            <div className="flex items-center gap-5 self-stretch">
              <img src={photosPlaceholder} alt="" />
              <img src={photosPlaceholder} alt="" />
              <img src={photosPlaceholder} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsProfileDailyReportTab;
