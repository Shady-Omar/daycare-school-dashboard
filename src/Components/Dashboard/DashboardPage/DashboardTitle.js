import React from "react";

function DashboardTitle() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-5 lg:gap-0 self-stretch">
      <div className="flex flex-col items-start gap-[5px]">
        <h2 className="h2-bold text-[#202020]">Dashboard</h2>
        <h5 className="h5-med text-[#878787]">Welcome, Abdullah Bilal!</h5>
      </div>
      <div className="flex justify-end items-center gap-5 self-stretch lg:self-auto">
        <p className="p-reg text-[#878787] text-left">
          Last update : 2023-05-26 05:14:55
        </p>
        <button className="cyan-btn p-bold text-[#FFF]">Refresh</button>
      </div>
    </div>
  );
}

export default DashboardTitle;
