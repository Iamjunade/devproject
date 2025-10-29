import React from 'react';
import ChartCard from './ChartCard';
import SalesBarChart from './charts/SalesBarChart';
import UsersLineChart from './charts/UsersLineChart';
import CategoryPieChart from './charts/CategoryPieChart';
import RevenueScatterChart from './charts/RevenueScatterChart';
import AIInsights from './AIInsights';
import ExportCenter from './ExportCenter';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
      <div className="lg:col-span-6">
        <ChartCard title="Orders by Day of the Week">
          <UsersLineChart />
        </ChartCard>
      </div>
      <div className="lg:col-span-3">
        <ChartCard title="Monthly Sales Performance">
          <SalesBarChart />
        </ChartCard>
      </div>
      <div className="lg:col-span-3">
        <ChartCard title="Sales by Category">
          <CategoryPieChart />
        </ChartCard>
      </div>
      <div className="lg:col-span-3">
        <ChartCard title="Revenue vs. Profit">
          <RevenueScatterChart />
        </ChartCard>
      </div>
       <div className="lg:col-span-3">
        <ChartCard title="AI-Powered Insights">
          <AIInsights />
        </ChartCard>
      </div>
      <div className="lg:col-span-6">
        <ChartCard title="Export Center">
          <ExportCenter />
        </ChartCard>
      </div>
    </div>
  );
};

export default Dashboard;