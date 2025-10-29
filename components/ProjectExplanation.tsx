import React from 'react';

const ProjectExplanation: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        Project Overview: From Analysis to Visualization
      </h2>
      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p>
          This interactive dashboard, titled{' '}
          <span className="font-semibold">"Data Exploration Dashboard"</span>,
          serves as the final presentation layer for a comprehensive data analysis
          project.
        </p>
        <p>
          Our process began with in-depth data exploration and analysis. We
          leveraged the power of{' '}
          <span className="font-semibold">Python</span> and its rich ecosystem
          of data science libraries (like Pandas, Matplotlib, and Scikit-learn)
          within a <span className="font-semibold">Jupyter Notebook</span>{' '}
          environment. This allowed us to clean, process, and model raw
          data to uncover key trends, patterns, and insights.
        </p>
        <p>
          What you see here is the culmination of that work. This dashboard is powered by a 
          <span className="font-semibold"> sample from a real-world Superstore dataset</span>. We've transformed
          the static findings from our notebooks into interactive charts and
          even integrated the Gemini API to provide real-time AI-powered
          analysis, making the data accessible and understandable for a broader
          audience.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Developed By
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Mohd Junaid Pasha, Mohd Saif Patel, M. Hrisikesh, M. Ishan, M. Teja, K. Satya, Pranay.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Under the guidance of Divya and Mounika mam.
        </p>
      </div>
    </div>
  );
};

export default ProjectExplanation;