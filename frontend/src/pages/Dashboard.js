// src/pages/Dashboard.js
import React from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const Dashboard = () => {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <h2>Dashboard Header</h2>
        </CardHeader>
        <CardContent>
          <p>Dashboard Content</p>
          <Button className="mt-4">Click Me</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
