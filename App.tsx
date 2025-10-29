
import React from 'react';
import Dashboard from './components/Dashboard';
import ProjectExplanation from './components/ProjectExplanation';

const App: React.FC = () => {
  // A simple check for dark mode preference to set the initial class.
  // In a real app, you might use a theme provider.
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-300 flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow-md p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Data Exploration Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Visualizing key metrics and trends.
          </p>
        </div>
      </header>
      <main className="container mx-auto flex-grow p-6">
        <ProjectExplanation />
        <Dashboard />
      </main>
      <footer className="text-center p-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>© 2024 Data Exploration Team. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;