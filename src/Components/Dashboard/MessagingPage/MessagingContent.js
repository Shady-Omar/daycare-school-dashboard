import React from "react";
import { Outlet } from "react-router-dom";
import SchoolTitle from "../../SchoolTitle";
import MessagingTabs from "./MessagingTabs";

function MessagingContent() {
  return (
    <div className="flex px-[30px] flex-col items-start gap-10 self-stretch">
      {/* Title */}
      <div className="flex justify-between items-center self-stretch">
        <SchoolTitle />
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-start gap-[30px] self-stretch">
        <div className="flex flex-col items-start self-stretch gap-10 lg:gap-0">
          {/* Tabs */}
          <MessagingTabs />

          {/* Content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MessagingContent;
