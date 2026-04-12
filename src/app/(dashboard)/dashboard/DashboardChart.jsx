"use client";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const DashboardChart = ({ data }) => {
  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend />
      <Tooltip />
    </PieChart>
  );
};

export default DashboardChart;