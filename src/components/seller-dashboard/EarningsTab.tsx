
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownRight, ArrowUpRight, DollarSign, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface EarningsTabProps {
  balance: number;
  pendingBalance: number;
  monthlyEarnings: number;
  revenueData: Array<{ name: string; revenue: number }>;
  onWithdrawClick: () => void;
}

const EarningsTab: React.FC<EarningsTabProps> = ({
  balance,
  pendingBalance,
  monthlyEarnings,
  revenueData,
  onWithdrawClick,
}) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Earnings Overview</CardTitle>
        <CardDescription>Your financial summary and transaction history</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-500">Available Balance</p>
              <p className="text-2xl font-bold text-gold">${balance.toFixed(2)}</p>
              <Button 
                className="w-full mt-2"
                onClick={onWithdrawClick}
              >
                Withdraw
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-500">Pending Balance</p>
              <p className="text-2xl font-bold">${pendingBalance.toFixed(2)}</p>
              <p className="text-xs text-gray-500">Available in 7 days</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-500">This Month</p>
              <p className="text-2xl font-bold">${monthlyEarnings.toFixed(2)}</p>
              <div className="flex items-center text-green-500 text-xs mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>18% from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium mb-4">Monthly Revenue</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#FFD700" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border-b">
                <div>
                  <p className="font-medium">Content Purchase</p>
                  <p className="text-xs text-gray-500">Today, 10:30 AM</p>
                </div>
                <div className="flex items-center text-green-500">
                  <p className="font-medium">+$15.00</p>
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border-b">
                <div>
                  <p className="font-medium">Subscription Payment</p>
                  <p className="text-xs text-gray-500">Yesterday, 8:15 PM</p>
                </div>
                <div className="flex items-center text-green-500">
                  <p className="font-medium">+$19.99</p>
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border-b">
                <div>
                  <p className="font-medium">Withdrawal</p>
                  <p className="text-xs text-gray-500">Apr 1, 2025</p>
                </div>
                <div className="flex items-center text-red-500">
                  <p className="font-medium">-$150.00</p>
                  <ArrowDownRight className="h-4 w-4 ml-1" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3">
                <div>
                  <p className="font-medium">Content Package</p>
                  <p className="text-xs text-gray-500">Mar 28, 2025</p>
                </div>
                <div className="flex items-center text-green-500">
                  <p className="font-medium">+$45.00</p>
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default EarningsTab;
