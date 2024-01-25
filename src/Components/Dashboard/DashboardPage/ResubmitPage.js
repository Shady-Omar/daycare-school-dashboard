import React from "react";

import illustration from "../../../Assets/resubmit-illustration.png";
import ResubmitModal from "./ResubmitModal";

function ResubmitPage() {
  return (
    <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
      <div className="flex flex-col items-start gap-[30px] self-stretch">
        <div className="flex p-5 flex-col justify-center items-start gap-[30px] self-stretch rounded-[10px] bg-[#FFF]">
          <div className="flex pt-[60px] flex-col justify-center items-center gap-[120px] self-stretch">
            <div className="flex flex-col justify-center items-center gap-[30px] self-stretch">
              <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
                <h1 className="h1-med text-[#383838]">
                  Your account is under review
                </h1>
                <p className="p-reg text-[#878787]">
                  Lorem Ipsum has been the industry's standard dummy text ever.
                </p>
              </div>
              <div className="flex w-[310px] flex-col justify-center items-center gap-[15px]">
                <ResubmitModal />

                <button className="unactive-btn w-full h-[50px] p-bold">
                  IBAN Certification
                </button>
                <button className="unactive-btn w-full h-[50px] p-bold">
                  National Address Certification
                </button>
              </div>
            </div>
            <div className="flex flex-col relative items-center justify-center gap-[-270px] self-stretch">
              <div className="w-[290px] lg:w-full h-[232px] lg:h-[355px] rounded-[20px] opacity-5 bg-[#00CCB6]"></div>
              <div
                id="illustration-under-review"
                className="w-[336px] lg:w-[450px] h-[336px] lg:h-[450px] absolute top-[-117.941px] lg:top-[-132px]"
              >
                <img src={illustration} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResubmitPage;
