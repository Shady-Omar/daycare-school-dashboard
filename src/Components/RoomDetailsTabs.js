import React from "react";
import { Link, useLocation } from "react-router-dom";

function RoomDetailsTabs() {
  const location = useLocation();

  // Get the current path
  const currentPath = location.pathname;

  return (
    <div className="flex items-start gap-2.5 self-stretch">
      <Link
        to="/my-center/room/details/children"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/my-center/room/details/children" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/my-center/room/details/children"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Children
        </h5>
      </Link>
      <Link
        to="/my-center/room/details/family"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/my-center/room/details/family" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/my-center/room/details/family"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Family
        </h5>
      </Link>
      <Link
        to="/my-center/room/details/activities"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/my-center/room/details/activities"
            ? "bg-[#FFF]"
            : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/my-center/room/details/activities"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Activities
        </h5>
      </Link>
      <Link
        to="/my-center/room/details/manage"
        className={`flex p-5 items-center gap-2.5 ${
          currentPath === "/my-center/room/details/manage" ? "bg-[#FFF]" : ""
        }`}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      >
        <h5
          className={`${
            currentPath === "/my-center/room/details/manage"
              ? "h5-semi text-[#383838]"
              : "h5-med  text-[#878787]"
          } `}
        >
          Managing Staff
        </h5>
      </Link>
    </div>
  );
}

export default RoomDetailsTabs;
