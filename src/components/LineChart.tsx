import React from "react";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import { fetchHistoricalData } from "../api/covidApi";
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

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart: React.FC = () => {
  const { data, error, isLoading } = useQuery(
    "historicalData",
    fetchHistoricalData
  );

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">Error fetching data</div>
    );

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: "Cases",
        data: Object.values(data.cases),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Deaths",
        data: Object.values(data.deaths),
        fill: false,
        borderColor: "rgba(255,99,132,1)",
      },
      {
        label: "Recovered",
        data: Object.values(data.recovered),
        fill: false,
        borderColor: "rgba(54,162,235,1)",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
