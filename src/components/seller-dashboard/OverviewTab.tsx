
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart3, DollarSign, Image, Settings, Upload, User } from "lucide-react";

interface OverviewTabProps {
  sellerData: {
    earnings: {
      today: number;
      thisWeek: number;
      thisMonth: number;
    };
    stats: {
      totalContent: number;
    };
    recentSales: Array<{
      id: number;
      item: string;
      buyer: string;
      price: string;
      date: string;
    }>;
  };
  onUploadClick: () => void;
  onSettingsClick: () => void;
  onAnalyticsClick: () => void;
  onWithdrawClick: () => void;
}

const OverviewTab: React.FC<OverviewTabProps> = ({
  sellerData,
  onUploadClick,
  onSettingsClick,
  onAnalyticsClick,
  onWithdrawClick,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Today's Earnings</p>
                <p className="text-2xl font-bold">${sellerData.earnings.today}</p>
              </div>
              <div className="bg-gold/10 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-gold" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Content</p>
                <p className="text-2xl font-bold">{sellerData.stats.totalContent}</p>
              </div>
              <div className="bg-gold/10 p-3 rounded-full">
                <Image className="h-6 w-6 text-gold" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Profile Completion</p>
                <p className="text-2xl font-bold">85%</p>
              </div>
              <div className="bg-gold/10 p-3 rounded-full">
                <User className="h-6 w-6 text-gold" />
              </div>
            </div>
            <Progress value={85} className="mt-2 bg-gray-200" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sellerData.recentSales.map((sale) => (
                <div key={sale.id} className="flex items-center justify-between p-3 border-b last:border-0">
                  <div>
                    <p className="font-medium">{sale.item}</p>
                    <p className="text-xs text-gray-500">Purchased by {sale.buyer} • {sale.date}</p>
                  </div>
                  <p className="font-medium text-gold">{sale.price}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                className="h-auto py-4 flex flex-col bg-gold hover:bg-gold-dark"
                onClick={onUploadClick}
              >
                <Upload className="h-6 w-6 mb-1" />
                <span>Upload Content</span>
              </Button>
              <Button 
                className="h-auto py-4 flex flex-col" 
                variant="outline"
                onClick={onWithdrawClick}
              >
                <DollarSign className="h-6 w-6 mb-1" />
                <span>Withdraw Funds</span>
              </Button>
              <Button 
                className="h-auto py-4 flex flex-col" 
                variant="outline"
                onClick={onSettingsClick}
              >
                <Settings className="h-6 w-6 mb-1" />
                <span>Settings</span>
              </Button>
              <Button 
                className="h-auto py-4 flex flex-col" 
                variant="outline"
                onClick={onAnalyticsClick}
              >
                <BarChart3 className="h-6 w-6 mb-1" />
                <span>Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default OverviewTab;
