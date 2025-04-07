
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ProfileCardProps {
  name: string;
  username: string;
  verified: boolean;
  profileImage: string;
  memberSince: string;
  rating: number;
  reviews: number;
  content: {
    photos: number;
    videos: number;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  username,
  verified,
  profileImage,
  memberSince,
  rating,
  reviews,
  content,
}) => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center mb-4">
          <Avatar className="h-24 w-24 mb-4 border-2 border-gold">
            <AvatarImage src={profileImage} />
            <AvatarFallback className="bg-gold text-white text-xl">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <h3 className="text-xl font-semibold">{name}</h3>
              {verified && <span className="text-gold">✓</span>}
            </div>
            <p className="text-gray-500">@{username}</p>
            <Badge className="mt-2 bg-gold">Seller</Badge>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Member since:</span>
            <span className="font-medium">{memberSince}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Rating:</span>
            <span className="font-medium flex items-center">
              <Star className="h-4 w-4 text-gold fill-gold mr-1" />
              {rating} ({reviews})
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Content:</span>
            <span className="font-medium">
              {content.photos} Photos • {content.videos} Videos
            </span>
          </div>
        </div>

        <Button className="w-full mt-6 bg-gold hover:bg-gold-dark">
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
