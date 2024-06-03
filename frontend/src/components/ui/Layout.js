// src/components/ui/Layout.js

import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 ml-64 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default Layout;
