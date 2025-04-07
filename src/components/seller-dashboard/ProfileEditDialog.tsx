
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Upload, User } from "lucide-react";

interface ProfileEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profileData: {
    name: string;
    username: string;
    profileImage: string;
    bio: string;
  };
  onSave: (updatedProfile: {
    name: string;
    username: string;
    profileImage: string;
    bio: string;
  }) => void;
}

const ProfileEditDialog: React.FC<ProfileEditDialogProps> = ({
  open,
  onOpenChange,
  profileData,
  onSave,
}) => {
  const { toast } = useToast();
  const [name, setName] = useState(profileData.name);
  const [username, setUsername] = useState(profileData.username);
  const [bio, setBio] = useState(profileData.bio || "");
  const [profileImage, setProfileImage] = useState(profileData.profileImage);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!name.trim() || !username.trim()) {
      toast({
        title: "Invalid input",
        description: "Name and username cannot be empty",
        variant: "destructive",
      });
      return;
    }
    
    onSave({
      name,
      username,
      profileImage: previewImage || profileImage,
      bio,
    });
    
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated",
    });
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPreviewImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center mb-4">
            <Avatar className="h-24 w-24 mb-3 border-2 border-gold">
              <AvatarImage src={previewImage || profileImage} />
              <AvatarFallback className="bg-gold text-white text-xl">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div className="relative">
              <Input
                id="profileImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <Label
                htmlFor="profileImage"
                className="flex items-center gap-2 text-sm cursor-pointer px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                <Upload size={16} />
                Change Photo
              </Label>
            </div>
          </div>
          
          <div>
            <Label htmlFor="name">Name</Label>
            <div className="flex items-center mt-1">
              <User className="h-5 w-5 text-gray-400 mr-2" />
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="username">Username</Label>
            <div className="flex items-center mt-1">
              <span className="h-5 w-5 text-gray-400 mr-2 flex items-center justify-center">@</span>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about yourself"
              className="mt-1"
              rows={4}
            />
          </div>
          
          <DialogFooter className="pt-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-gold hover:bg-gold-dark"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileEditDialog;
