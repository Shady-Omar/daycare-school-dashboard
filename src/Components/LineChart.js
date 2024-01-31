import React, { useEffect, useState } from "react";
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
  const [displayedLabels, setDisplayedLabels] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [displayedBorderWidth, setDisplayedBorderWidth] = useState("");
  const [displayedPointRadius, setDisplayedPointRadius] = useState("");

  useEffect(() => {
    // Adjust labels and data based on screen size
    if (window.innerWidth < 600) {
      setDisplayedLabels(["Jan", "Feb", "Mar", "Apr"]);
      setDisplayedData([50, 20, 21, 9]); // Adjust data accordingly
      setDisplayedBorderWidth(2);
      setDisplayedPointRadius(6);
    } else {
      setDisplayedLabels([
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ]);
      setDisplayedData([50, 20, 21, 9, 14, 55, 51, 18, 32, 24, 58, 36]);
      setDisplayedBorderWidth(4);
      setDisplayedPointRadius(10);
    }
  }, []);

  const options = {
    responsive: true,
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

  // const labels = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "Jul",
  //   "aug",
  //   "sep",
  //   "oct",
  //   "nov",
  //   "dec",
  // ];

  const data = {
    labels: displayedLabels,
    datasets: [
      {
        label: "boys",
        data: displayedData,
        borderColor: "#00CCB6", // Set the line color for boys
        borderWidth: displayedBorderWidth, // Set the line thickness for boys
        pointBackgroundColor: "#00CCB6", // Point color for boys
        pointBorderColor: "#fff", // Point border color for boys
        pointRadius: displayedPointRadius,
        borderRadius: 10,
      },
    ],
  };

  return (
    <Line
      options={options}
      data={data}
      // height={369.083}
      // width={1080}
      className="!min-w-[250px] lg:!min-w-[900px] !self-stretch !h-[281px] lg:!h-[369.083px]"
    />
  );
}

export default LineChart;
