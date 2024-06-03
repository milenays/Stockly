import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingCart, Package, Users2, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 w-64 border-r bg-white">
      <div className="flex flex-col items-center gap-4 px-4 py-8">
        <div className="text-lg font-bold">Stockly</div>
        <nav className="flex flex-col gap-4 w-full">
          <Link to="/" className="flex items-center gap-2 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
            <Home className="w-5 h-5" /> Dashboard
          </Link>
          <Link to="/orders" className="flex items-center gap-2 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
            <ShoppingCart className="w-5 h-5" /> Orders
          </Link>
          <Link to="/products" className="flex items-center gap-2 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
            <Package className="w-5 h-5" /> Products
          </Link>
          <Link to="/customers" className="flex items-center gap-2 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
            <Users2 className="w-5 h-5" /> Customers
          </Link>
          <Link to="/settings" className="flex items-center gap-2 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
