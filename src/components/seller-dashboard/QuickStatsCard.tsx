
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, ChevronUp, DollarSign, Users } from "lucide-react";

interface QuickStatsCardProps {
  balance: number;
  followers: number;
  views: number;
}

const QuickStatsCard: React.FC<QuickStatsCardProps> = ({
  balance,
  followers,
  views,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gold/10 p-2 rounded mr-3">
                <DollarSign className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Available Balance</p>
                <p className="font-semibold">${balance.toFixed(2)}</p>
              </div>
            </div>
            <ChevronUp className="h-4 w-4 text-green-500" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gold/10 p-2 rounded mr-3">
                <Users className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Followers</p>
                <p className="font-semibold">{followers}</p>
              </div>
            </div>
            <ChevronUp className="h-4 w-4 text-green-500" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gold/10 p-2 rounded mr-3">
                <BarChart3 className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Views</p>
                <p className="font-semibold">{views.toLocaleString()}</p>
              </div>
            </div>
            <ChevronUp className="h-4 w-4 text-green-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStatsCard;
