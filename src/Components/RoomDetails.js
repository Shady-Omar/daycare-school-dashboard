import React from "react";
import { Outlet } from "react-router-dom";
import RoomDetailsTabs from "./RoomDetailsTabs";

function RoomDetails() {
  return (
    <div className="flex flex-col items-start self-stretch">
      {/* Tabs */}
      <RoomDetailsTabs />
      <Outlet />
    </div>
  );
}

export default RoomDetails;
