// src/pages/Profile.tsx
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        <p className="text-lg">Name: John Doe</p>
        <p className="text-lg">Email: john.doe@example.com</p>
        <p className="text-lg">Role: Admin</p>
      </div>
    </div>
  );
};

export default Profile;
