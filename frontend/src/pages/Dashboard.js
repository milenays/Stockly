import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">Total Revenue</div>
          <div className="bg-white p-4 shadow rounded">Subscriptions</div>
          <div className="bg-white p-4 shadow rounded">Sales</div>
        </div>
        <div className="mt-6 bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-2">Overview</h2>
          <p>Chart goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
