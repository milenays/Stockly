import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Progress } from '../components/ui/Progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';

const Dashboard = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button className="bg-blue-500 text-white">Download</Button>
      </div>
      
      <Tabs defaultValue="overview">
        <TabsList className="flex space-x-4">
          <TabsTrigger value="overview" className="px-4 py-2">Overview</TabsTrigger>
          <TabsTrigger value="analytics" className="px-4 py-2">Analytics</TabsTrigger>
          <TabsTrigger value="reports" className="px-4 py-2">Reports</TabsTrigger>
          <TabsTrigger value="notifications" className="px-4 py-2">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="flex flex-col">
                <CardTitle>Total Revenue</CardTitle>
                <div className="text-2xl font-bold">$45,231.89</div>
                <CardDescription>+20.1% from last month</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col">
                <CardTitle>Subscriptions</CardTitle>
                <div className="text-2xl font-bold">+2350</div>
                <CardDescription>+180.1% from last month</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col">
                <CardTitle>Sales</CardTitle>
                <div className="text-2xl font-bold">+12,234</div>
                <CardDescription>+19% from last month</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col">
                <CardTitle>Active Now</CardTitle>
                <div className="text-2xl font-bold">+573</div>
                <CardDescription>+201 since last hour</CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Here you can integrate a chart library to display the graph */}
                <div className="h-64 bg-gray-200 rounded-lg"></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
                      <span>Olivia Martin</span>
                    </div>
                    <span>$1,999.00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
                      <span>Jackson Lee</span>
                    </div>
                    <span>$39.00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
                      <span>Isabella Nguyen</span>
                    </div>
                    <span>$299.00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
                      <span>William Kim</span>
                    </div>
                    <span>$99.00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
                      <span>Sofia Davis</span>
                    </div>
                    <span>$39.00</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
