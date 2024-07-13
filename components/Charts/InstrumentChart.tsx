import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
  AreaChart,
  Area,
  ComposedChart,
  Bar,
} from 'recharts';

interface InstrumentChartProps {
  data: { date: string; open: number; high: number; low: number; close: number; volume: number }[];
}

const InstrumentChart: React.FC<InstrumentChartProps> = ({ data }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="right" dataKey="volume" barSize={20} fill="#413ea0" />
          <Line yAxisId="left" type="monotone" dataKey="close" stroke="#8884d8" />
          <Line yAxisId="left" type="monotone" dataKey="open" stroke="#82ca9d" />
          <Brush dataKey="date" height={30} stroke="#8884d8" />
          <Area yAxisId="left" type="monotone" dataKey="high" fill="#8884d8" stroke="#8884d8" />
          <Area yAxisId="left" type="monotone" dataKey="low" fill="#82ca9d" stroke="#82ca9d" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InstrumentChart;
