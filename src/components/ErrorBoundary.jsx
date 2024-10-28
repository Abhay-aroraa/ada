// src/components/ErrorBoundary.jsx
import React from 'react';

const ErrorBoundary = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4">Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default ErrorBoundary;
