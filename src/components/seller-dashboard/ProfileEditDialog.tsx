
import React, { useState, useEffect } from "react";
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
import { Upload, User, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { v4 as uuidv4 } from "uuid";

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
  const { user } = useAuth();
  const [name, setName] = useState(profileData.name);
  const [username, setUsername] = useState(profileData.username);
  const [bio, setBio] = useState(profileData.bio || "");
  const [profileImage, setProfileImage] = useState(profileData.profileImage);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  
  useEffect(() => {
    // Reset form when dialog opens
    if (open) {
      setName(profileData.name);
      setUsername(profileData.username);
      setBio(profileData.bio || "");
      setProfileImage(profileData.profileImage);
      setPreviewImage(null);
      setFile(null);
    }
  }, [open, profileData]);
  
  const uploadProfileImage = async () => {
    if (!file || !user) return profileImage;
    
    try {
      setUploading(true);
      
      // Generate a unique file name to avoid collisions
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `profile_images/${user.id}/${fileName}`;
      
      // Upload the file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('content_uploads')
        .upload(filePath, file);
      
      if (uploadError) {
        throw uploadError;
      }
      
      // Get the public URL for the uploaded file
      const { data: { publicUrl } } = supabase.storage
        .from('content_uploads')
        .getPublicUrl(filePath);
      
      return publicUrl;
    } catch (error) {
      console.error("Error uploading profile image:", error);
      toast({
        title: "Upload failed",
        description: "Failed to upload profile image. Please try again.",
        variant: "destructive",
      });
      return profileImage; // Return existing image if upload fails
    } finally {
      setUploading(false);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
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
    
    // Upload image if a new one was selected
    let finalImageUrl = profileImage;
    if (file) {
      finalImageUrl = await uploadProfileImage();
    }
    
    // Save profile data
    onSave({
      name,
      username,
      profileImage: finalImageUrl,
      bio,
    });
    
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated",
    });
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(selectedFile.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a valid image file (JPEG, PNG, GIF, WEBP)",
        variant: "destructive",
      });
      return;
    }
    
    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (selectedFile.size > maxSize) {
      toast({
        title: "File too large",
        description: "Image must be less than 5MB",
        variant: "destructive",
      });
      return;
    }
    
    setFile(selectedFile);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPreviewImage(reader.result);
      }
    };
    reader.readAsDataURL(selectedFile);
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
                disabled={uploading}
              />
              <Label
                htmlFor="profileImage"
                className={`flex items-center gap-2 text-sm cursor-pointer px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {uploading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Upload size={16} />
                )}
                {uploading ? "Uploading..." : "Change Photo"}
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
                disabled={uploading}
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
                disabled={uploading}
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
              disabled={uploading}
            />
          </div>
          
          <DialogFooter className="pt-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => onOpenChange(false)}
              disabled={uploading}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-gold hover:bg-gold-dark"
              disabled={uploading}
            >
              {uploading ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileEditDialog;
