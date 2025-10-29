
import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { revenueData } from '../../data/mockData';

const RevenueScatterChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="rgba(128, 128, 128, 0.3)" />
        <XAxis 
            type="number" 
            dataKey="revenue" 
            name="Revenue" 
            unit="$" 
            tick={{ fill: '#9ca3af' }} 
        />
        <YAxis 
            type="number" 
            dataKey="profit" 
            name="Profit" 
            unit="$" 
            tick={{ fill: '#9ca3af' }}
        />
        <Tooltip 
            cursor={{ strokeDasharray: '3 3' }} 
            contentStyle={{
              backgroundColor: '#1f2937',
              borderColor: '#374151',
              borderRadius: '0.5rem',
            }}
            labelStyle={{ color: '#f9fafb' }}
        />
        <Legend wrapperStyle={{ color: '#9ca3af' }}/>
        <Scatter name="Business Performance" data={revenueData} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default RevenueScatterChart;
