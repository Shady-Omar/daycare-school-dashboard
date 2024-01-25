import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false, // Set to true if you want to display the legend
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
      tooltip: {
        backgroundColor: "#00CCB6", // Set the background color (e.g., red with 70% opacity)
        bodyFontColor: "#fff", // Set the text color to white
        callbacks: {
          label: function (context) {
            return context.parsed.y + "k";
          },
          title: function () {
            return "Paid Salaries";
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Set to false to hide x-axis grid lines
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: false,
          text: "Custom Y-Axis Label", // Change the Y-axis label text
          color: "blue", // Change the color of the Y-axis label text
        },
        ticks: {
          stepSize: 10,
          color: "#A5A5A5",
          callback: function (value, index, values) {
            return value + "k"; // Append 'k' to the value
          },
        },
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "boys",
        data: [50, 20, 21, 9, 14, 55, 51, 18, 32, 24, 58, 36],
        borderColor: "#00CCB6", // Set the line color for boys
        borderWidth: 4, // Set the line thickness for boys
        pointBackgroundColor: "#00CCB6", // Point color for boys
        pointBorderColor: "#fff", // Point border color for boys
        pointRadius: 10,
        borderRadius: 10,
      },
    ],
  };

  return <Line options={options} data={data} height={369.083} width={1080} />;
}

export default LineChart;
