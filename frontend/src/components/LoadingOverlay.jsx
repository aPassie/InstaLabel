import React from 'react';

const LoadingOverlay = () => {
  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-700">Analyzing image...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;