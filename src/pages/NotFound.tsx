import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-black text-center p-6">
      <div>
        <h1 className="text-7xl font-bold text-accent">404</h1>
        <p className="mt-4 text-xl text-gray-300">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
