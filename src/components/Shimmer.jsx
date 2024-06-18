import React from 'react';

const ShimmerCard = () => {
  return (
    <div className="shimmer-card bg-gray-200 rounded-lg overflow-hidden relative">
      <div className="shimmer-image bg-gray-300 h-52 w-full"></div>
      <div className="p-4">
        <div className="shimmer-title bg-gray-300 h-4 w-3/4 mb-2"></div>
        <div className="shimmer-subtitle bg-gray-300 h-4 w-1/2"></div>
      </div>
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
    </div>
  );
}

export default ShimmerCard;

