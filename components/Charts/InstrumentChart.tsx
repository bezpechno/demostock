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
  ReferenceLine,
} from 'recharts';

interface InstrumentChartProps {
  data: { date: string; open: number; high: number; low: number; close: number; volume: number }[];
}

const InstrumentChart: React.FC<InstrumentChartProps> = ({ data }) => {
  if (!Array.isArray(data) || data.some(item => typeof item.date !== 'string' || typeof item.open !== 'number')) {
    console.error('Invalid chart data:', data);
    return <div>Error: Invalid data format for chart</div>;
  }

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="close" stroke="#8884d8" />
          <Brush dataKey="date" height={30} stroke="#8884d8" />
          <ReferenceLine y={0} stroke="#000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InstrumentChart;
