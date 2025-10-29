import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { salesData } from '../data/mockData';

const AIInsights: React.FC = () => {
  const [insights, setInsights] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGenerateInsights = async () => {
    setLoading(true);
    setError('');
    setInsights('');

    try {
      if (!process.env.API_KEY) {
        throw new Error("API key is not configured.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const prompt = `Analyze the following monthly sales data and provide a brief summary of key trends, insights, and potential areas for growth. Keep the summary concise and easy to understand. Here is the data in JSON format:\n\n${JSON.stringify(salesData)}`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setInsights(response.text);

    } catch (err) {
      console.error(err);
      setError('Failed to generate insights. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Click the button below to use Gemini to analyze the monthly sales data and generate actionable insights.
        </p>
        {loading && (
          <div className="flex items-center justify-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <span className="ml-3 text-gray-500 dark:text-gray-400">Generating...</span>
          </div>
        )}
        {error && <p className="text-red-500 text-sm p-4 bg-red-100 dark:bg-red-900/20 rounded-lg">{error}</p>}
        {insights && (
          <div className="p-4 bg-slate-100 dark:bg-gray-700/50 rounded-lg">
            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{insights}</p>
          </div>
        )}
      </div>
      <button
        onClick={handleGenerateInsights}
        disabled={loading}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {loading ? 'Analyzing...' : 'Generate Insights'}
      </button>
    </div>
  );
};

export default AIInsights;