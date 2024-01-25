// DoughnutChart.js
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Renew Contracts", "Other Invoices", "New Subscription"],
    datasets: [
      {
        data: [25, 5, 75],
        backgroundColor: ["#E328AF", "#6418C3", "#00CCB6"],
        hoverBackgroundColor: ["#E328AF", "#6418C3", "#00CCB6"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Set to true if you want to display the legend
      },
    },
  };

  return (
    <div className="w-[290px] lg:w-[226.119px] h-[268.455px] lg:h-[209.32px] flex justify-center items-center">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
