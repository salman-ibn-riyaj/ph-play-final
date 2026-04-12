"use client";
import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Rechart = ({expectedAppData}) => {
  return (
    <div className="my-6">
      <h3 className="font-bold text-lg mb-3">Ratings</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={expectedAppData.ratings} layout="vertical">
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" width={50} />
          <Tooltip />
          <Bar dataKey="count" fill="#f97316" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
