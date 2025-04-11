
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Edit } from "lucide-react";
import ProfileEditDialog from "./ProfileEditDialog";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
  bio?: string;
  onProfileUpdate?: (updatedProfile: {
    name: string;
    username: string;
    profileImage: string;
    bio: string;
  }) => void;
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
  bio = "",
  onProfileUpdate,
}) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  
  const handleProfileUpdate = async (updatedProfile: {
    name: string;
    username: string;
    profileImage: string;
    bio: string;
  }) => {
    if (!user) return;
    
    try {
      // Update profile in the database
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: updatedProfile.name,
          username: updatedProfile.username,
          profile_image: updatedProfile.profileImage,
          bio: updatedProfile.bio
        })
        .eq('id', user.id);
        
      if (error) {
        console.error("Error updating profile:", error);
        toast({
          title: "Update failed",
          description: "Could not update your profile. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      // Call the parent component's update handler
      if (onProfileUpdate) {
        onProfileUpdate(updatedProfile);
      }
      
      setIsEditDialogOpen(false);
      
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully."
      });
    } catch (error) {
      console.error("Error in profile update:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };
  
  return (
    <>
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center mb-4">
            <Avatar className="h-24 w-24 mb-4 border-2 border-gold">
              <AvatarImage src={profileImage || "/placeholder.svg"} alt={name} />
              <AvatarFallback className="bg-gold text-white text-xl">
                {name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <h3 className="text-xl font-semibold">{name || "Seller"}</h3>
                {verified && <span className="text-gold">✓</span>}
              </div>
              <p className="text-gray-500">@{username || "user"}</p>
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

          <Button 
            className="w-full mt-6 bg-gold hover:bg-gold-dark flex items-center justify-center gap-2"
            onClick={() => setIsEditDialogOpen(true)}
          >
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        </CardContent>
      </Card>
      
      <ProfileEditDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        profileData={{
          name,
          username,
          profileImage,
          bio,
        }}
        onSave={handleProfileUpdate}
      />
    </>
  );
};

export default ProfileCard;
