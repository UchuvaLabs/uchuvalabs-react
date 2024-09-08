// src/pages/Settings.tsx
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">General Settings</h2>
        <p className="text-lg">Here you can configure various settings for your account.</p>
      </div>
    </div>
  );
};

export default Settings;
