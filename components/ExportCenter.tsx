import React from 'react';
import { exportToCSV } from '../utils/csvExporter';
import { salesData, usersData, categoryData, revenueData } from '../data/mockData';

const ExportCenter: React.FC = () => {
  const exportOptions = [
    { name: 'Monthly Sales Data', data: salesData, filename: 'monthly_sales.csv' },
    { name: 'Orders by Day of Week Data', data: usersData, filename: 'orders_by_day.csv' },
    { name: 'Sales by Category Data', data: categoryData, filename: 'sales_by_category.csv' },
    { name: 'Revenue vs. Profit Data', data: revenueData, filename: 'revenue_data.csv' },
  ];

  return (
    <div className="flex flex-col justify-center h-full">
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
        Select a dataset to download as a CSV file.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {exportOptions.map((option) => (
          <button
            key={option.name}
            onClick={() => exportToCSV(option.data, option.filename)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label={`Export ${option.name} to CSV`}
          >
            Export {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExportCenter;