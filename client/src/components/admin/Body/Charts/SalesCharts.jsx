import Chart from "react-apexcharts";
import React, { useState } from "react";

const SalesChart = () => {
  const [option, setOption] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ]);

  return (
    <div className="w-full h-auto">

    
    <Chart
      options={option}
      series={series}
      type="line"
      
    />
    </div>
  );
};

export default SalesChart;
