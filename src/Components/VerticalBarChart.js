import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const VerticalBarChart = () => {
  const data = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUNE",
      "JULY",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "boys",
        data: [60, 30, 45, 50, 20, 62, 25, 60, 48, 56, 20, 62],
        backgroundColor: "#6418C3",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "girls",
        data: [70, 35, 62, 80, 37, 18, 70, 72, 45, 80, 37, 17],
        backgroundColor: "#00CCB6",
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Set to true if you want to display the legend
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div id="vertical-chart" className="w-[479px] h-[227.32px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default VerticalBarChart;
