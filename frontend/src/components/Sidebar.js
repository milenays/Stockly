import React from 'react';
import { HomeIcon, ShoppingCartIcon, UsersIcon, ChartBarIcon, CogIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Stockly</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-4">
            <a href="/" className="flex items-center text-white">
              <HomeIcon className="h-6 w-6 mr-2" />
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="/orders" className="flex items-center text-white">
              <ShoppingCartIcon className="h-6 w-6 mr-2" />
              Orders
            </a>
          </li>
          <li className="mb-4">
            <a href="/products" className="flex items-center text-white">
              <ChartBarIcon className="h-6 w-6 mr-2" />
              Products
            </a>
          </li>
          <li className="mb-4">
            <a href="/customers" className="flex items-center text-white">
              <UsersIcon className="h-6 w-6 mr-2" />
              Customers
            </a>
          </li>
          <li>
            <a href="/settings" className="flex items-center text-white">
              <CogIcon className="h-6 w-6 mr-2" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
