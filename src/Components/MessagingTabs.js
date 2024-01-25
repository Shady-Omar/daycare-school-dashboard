import React from "react";
import { Link, useLocation } from "react-router-dom";

function MessagingTabs() {
  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;

  return (
    <div className="flex items-start gap-2.5 self-stretch">
      <Link
        to="/chat/messages"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/chat/messages" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/chat/messages"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Messages
        </h5>
      </Link>
      <Link
        to="/chat/management"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/chat/management" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/chat/management"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Visit Management
        </h5>
      </Link>
      <Link
        to="/chat/announcements"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/chat/announcements" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/chat/announcements"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Announcements
        </h5>
      </Link>
    </div>
  );
}

export default MessagingTabs;
