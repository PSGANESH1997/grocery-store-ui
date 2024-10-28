import React from "react";
import Chart from "react-apexcharts";

const SalesChart = () => {
  // State to store the selected month
  // const [selectedMonth, setSelectedMonth] = useState("September");
  const selectedMonth = "September";
  // Sample data organized by month
  const dataByMonth = {
    September: [
      { name: "series1", data: [31, 40, 28, 51, 42, 109, 100] },
      { name: "series2", data: [11, 32, 45, 32, 34, 52, 41] },
    ],
    October: [
      { name: "series1", data: [41, 52, 35, 64, 44, 120, 115] },
      { name: "series2", data: [15, 42, 50, 40, 45, 60, 55] },
    ],
    // Add more data for additional months as needed
  };

  // ApexChart options and settings
  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"], // Days of the month as categories
    },
    yaxis: {
      title: {
        text: "Sales (in units)", // Title for the y-axis
      },
      labels: {
        formatter: (val) => `${val}K`, // Format y-axis values with 'K'
      },
    },
    tooltip: {
      x: {
        format: "MMM", // Format for displaying month in tooltip
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
      }}
    >
      {/* Sidebar for month selection */}
      {/* <div
        style={{
          width: "150px",
          padding: "10px",
          borderRight: "1px solid #ddd",
        }}
      >
        <h3>Select Month</h3>
        {Object.keys(dataByMonth).map((month) => (
          <div
            key={month}
            onClick={() => setSelectedMonth(month)}
            style={{
              padding: "8px",
              cursor: "pointer",
              backgroundColor: month === selectedMonth ? "#eee" : "transparent",
            }}
          >
            {month}
          </div>
        ))}
      </div> */}

      {/* Chart area */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Sales Summary</h1>
        <Chart
          options={options}
          series={dataByMonth[selectedMonth]}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default SalesChart;
