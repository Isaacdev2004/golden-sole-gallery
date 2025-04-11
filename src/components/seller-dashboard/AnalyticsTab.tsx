
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight, DollarSign, Eye, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface AnalyticsTabProps {
  views: number;
  revenueData: Array<{ name: string; revenue: number }>;
  contentPerformanceData: Array<{ name: string; views: number; sales: number }>;
  contentTypeData: Array<{ name: string; value: number }>;
  topContent: Array<{
    id: string;
    title: string;
    type: string;
    price: string;
    sales: number;
  }>;
  colors: string[];
}

const AnalyticsTab: React.FC<AnalyticsTabProps> = ({
  views,
  revenueData,
  contentPerformanceData,
  contentTypeData,
  topContent = [],
  colors,
}) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Performance Analytics</CardTitle>
        <CardDescription>Track and analyze your content performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Views</p>
                  <p className="text-2xl font-bold">{views.toLocaleString()}</p>
                </div>
                <div className="bg-gold/10 p-3 rounded-full">
                  <Eye className="h-6 w-6 text-gold" />
                </div>
              </div>
              <div className="flex items-center text-green-500 text-xs mt-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>12% this week</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Conversion Rate</p>
                  <p className="text-2xl font-bold">8.7%</p>
                </div>
                <div className="bg-gold/10 p-3 rounded-full">
                  <ArrowUpRight className="h-6 w-6 text-gold" />
                </div>
              </div>
              <div className="flex items-center text-green-500 text-xs mt-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>2.4% this month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Avg. Order Value</p>
                  <p className="text-2xl font-bold">$14.25</p>
                </div>
                <div className="bg-gold/10 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-gold" />
                </div>
              </div>
              <div className="flex items-center text-red-500 text-xs mt-2">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                <span>0.8% this week</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-medium mb-4">Revenue Trend</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#FFD700" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Content Performance</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={contentPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="views" fill="#FFC72C" />
                  <Bar dataKey="sales" fill="#d4af37" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h3 className="font-medium mb-4">Content Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={contentTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {contentTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-medium mb-4">Top Performing Content</h3>
            <Card>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {topContent.length > 0 ? (
                    topContent.map((content) => (
                      <div key={content.id} className="flex items-center justify-between p-4 border-b last:border-0">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-3">
                            <Eye className="h-5 w-5 text-gold" />
                          </div>
                          <div>
                            <p className="font-medium">{content.title}</p>
                            <p className="text-xs text-gray-500">{content.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{content.price}</p>
                          <p className="text-xs text-gray-500">{content.sales} sales</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      No content performance data yet.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsTab;
