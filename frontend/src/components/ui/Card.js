// src/components/ui/Card.js

import React from 'react';


export function Card({ children, ...props }) {
  return (
    <div className="bg-white shadow rounded-lg p-4" {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, ...props }) {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4" {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, ...props }) {
  return (
    <div className="text-gray-700" {...props}>
      {children}
    </div>
  );
}
