import React from 'react';
import { Camera, History } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="px-4 py-6">
        <div className="px-4 py-6">
          <h1 className="text-xl font-semibold">Label Scanner</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-4">Welcome to Label Scanner</h2>
            <p className="text-gray-400">
              Scan product labels to analyze ingredients and get detailed information.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate('/')}
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                <Camera size={24} />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Open Camera
              </span>
              <span className="relative invisible">Open Camera</span>
            </button>

            <button
              onClick={() => navigate('/recent-scans')}
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                <History size={24} />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                View Recent Scans
              </span>
              <span className="relative invisible">View Recent Scans</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
