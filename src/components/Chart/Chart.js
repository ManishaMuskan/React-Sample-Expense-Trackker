import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  let totalMaximun = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          fillValue={dataPoint.value}
          maxValue={totalMaximun}
        />
      ))}
    </div>
  );
};

export default Chart;
