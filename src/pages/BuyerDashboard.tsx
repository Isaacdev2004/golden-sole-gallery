import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Clock, User, Loader2, Upload, Camera } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProfileData {
  id: string;
  created_at: string;
  updated_at: string;
  account_type: string;
  full_name: string | null;
  profile_image: string | null;
}

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState("purchases");
  const [showCreatorDetail, setShowCreatorDetail] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState<any>(null);
  const [showActivityStatus, setShowActivityStatus] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [userProfile, setUserProfile] = useState<ProfileData | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [recentPurchases, setRecentPurchases] = useState<any[]>([]);
  const [loadingPurchases, setLoadingPurchases] = useState(true);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loadingFavorites, setLoadingFavorites] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) return;
      
      try {
        setIsLoadingProfile(true);
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (error) {
          console.error('Error fetching user profile:', error);
          toast({
            title: "Error",
            description: "Failed to load your profile",
            variant: "destructive",
          });
        } else {
          setUserProfile(data as ProfileData);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoadingProfile(false);
      }
    };
    
    fetchUserProfile();
  }, [user, toast]);
  
  useEffect(() => {
    const fetchPurchases = async () => {
      if (!user) return;
      
      try {
        setLoadingPurchases(true);
        const { data, error } = await supabase
          .from('purchases')
          .select(`
            id,
            price,
            purchase_date,
            status,
            content:content_id (
              title,
              thumbnail_url,
              type
            ),
            seller:seller_id (
              id,
              full_name
            )
          `)
          .eq('buyer_id', user.id)
          .eq('status', 'completed')
          .order('purchase_date', { ascending: false })
          .limit(5);
        
        if (error) {
          console.error('Error fetching purchases:', error);
          toast({
            title: "Error",
            description: "Failed to load your purchases",
            variant: "destructive",
          });
        } else {
          setRecentPurchases(data || []);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoadingPurchases(false);
      }
    };
    
    fetchPurchases();
  }, [user, toast]);
  
  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;
      
      try {
        setLoadingFavorites(true);
        const { data, error } = await supabase
          .from('followers')
          .select(`
            id,
            following_id
          `)
          .eq('follower_id', user.id);
        
        if (error) {
          console.error('Error fetching favorites:', error);
        } else if (data && data.length > 0) {
          const sellerIds = data.map(item => item.following_id);
          
          const { data: sellerProfiles, error: sellerError } = await supabase
            .from('profiles')
            .select('*')
            .in('id', sellerIds)
            .eq('account_type', 'seller');
          
          if (sellerError) {
            console.error('Error fetching seller profiles:', sellerError);
          } else if (sellerProfiles) {
            const enhancedFavorites = await Promise.all(
              sellerProfiles.map(async (seller) => {
                const { count: photoCount } = await supabase
                  .from('content')
                  .select('*', { count: 'exact', head: true })
                  .eq('seller_id', seller.id)
                  .eq('type', 'photo');
                
                const { count: videoCount } = await supabase
                  .from('content')
                  .select('*', { count: 'exact', head: true })
                  .eq('seller_id', seller.id)
                  .eq('type', 'video');
                
                const { data: reviews } = await supabase
                  .from('reviews')
                  .select('rating')
                  .eq('seller_id', seller.id);
                
                let rating = 0;
                if (reviews && reviews.length > 0) {
                  rating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
                }
                
                return {
                  id: seller.id,
                  name: seller.full_name?.split(' ')[1] || seller.full_name || 'User',
                  displayName: seller.full_name || 'User',
                  verified: false,
                  rating: rating || 4.5,
                  reviews: reviews?.length || 0,
                  content: {
                    photos: photoCount || 0,
                    videos: videoCount || 0
                  },
                  image: null
                };
              })
            );
            
            setFavorites(enhancedFavorites);
          }
        } else {
          setFavorites([]);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoadingFavorites(false);
      }
    };
    
    fetchFavorites();
  }, [user, toast]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };

  const handleViewPurchase = (purchaseId) => {
    navigate(`/purchase/${purchaseId}`);
  };

  const handleViewSellerProfile = (sellerId) => {
    const creator = favorites.find(f => f.id === sellerId);
    if (creator) {
      setSelectedCreator(creator);
      setShowCreatorDetail(true);
    } else {
      toast({
        title: "Creator not found",
        description: "Unable to find creator information.",
      });
    }
  };

  const handleToggleFollow = async (sellerId) => {
    if (!user) return;
    
    try {
      const { data } = await supabase
        .from('followers')
        .select('*')
        .eq('follower_id', user.id)
        .eq('following_id', sellerId)
        .single();
      
      if (data) {
        await supabase
          .from('followers')
          .delete()
          .eq('follower_id', user.id)
          .eq('following_id', sellerId);
        
        setFavorites(favorites.filter(f => f.id !== sellerId));
        
        toast({
          title: "Unfollowed",
          description: "You are no longer following this seller",
        });
      } else {
        await supabase
          .from('followers')
          .insert([
            { follower_id: user.id, following_id: sellerId }
          ]);
        
        toast({
          title: "Success",
          description: "You are now following this seller",
        });
        
        const { data: sellerData, error: sellerError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', sellerId)
          .single();
          
        if (!sellerError && sellerData) {
          const newFavorite = {
            id: sellerData.id,
            name: sellerData.full_name?.split(' ')[1] || sellerData.full_name || 'User',
            displayName: sellerData.full_name || 'User',
            verified: false,
            rating: 5.0,
            reviews: 0,
            content: {
              photos: 0,
              videos: 0
            },
            image: null
          };
          
          setFavorites([...favorites, newFavorite]);
        }
      }
    } catch (error) {
      console.error('Error toggling follow status:', error);
      toast({
        title: "Error",
        description: "Failed to update follow status",
        variant: "destructive",
      });
    }
  };

  const closeCreatorDetail = () => {
    setShowCreatorDetail(false);
    setSelectedCreator(null);
  };
  
  const handleActivityStatusChange = (checked) => {
    setShowActivityStatus(checked);
    toast({
      title: checked ? "Activity status enabled" : "Activity status disabled",
      description: checked 
        ? "Sellers can now see when you're online" 
        : "Your online status is now hidden from sellers",
    });
  };
  
  const handleEmailNotificationsChange = (checked) => {
    setEmailNotifications(checked);
    toast({
      title: checked ? "Email notifications enabled" : "Email notifications disabled",
      description: checked 
        ? "You will receive updates and offers by email" 
        : "You will no longer receive updates and offers by email",
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(selectedFile.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a valid image file (JPEG, PNG, GIF, WEBP)",
        variant: "destructive",
      });
      return;
    }
    
    const maxSize = 5 * 1024 * 1024;
    if (selectedFile.size > maxSize) {
      toast({
        title: "File too large",
        description: "Image must be less than 5MB",
        variant: "destructive",
      });
      return;
    }
    
    setProfileImageFile(selectedFile);
    
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPreviewImage(reader.result);
      }
    };
    reader.readAsDataURL(selectedFile);
  };
  
  const uploadProfileImage = async () => {
    if (!profileImageFile || !user) return;
    
    try {
      setIsUploading(true);
      
      const fileExt = profileImageFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `profile_images/${user.id}/${fileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from('content_uploads')
        .upload(filePath, profileImageFile);
      
      if (uploadError) {
        throw uploadError;
      }
      
      const { data: { publicUrl } } = supabase.storage
        .from('content_uploads')
        .getPublicUrl(filePath);
      
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          profile_image: publicUrl
        })
        .eq('id', user.id);
      
      if (updateError) {
        throw updateError;
      }
      
      setUserProfile(prev => prev ? {
        ...prev,
        profile_image: publicUrl
      } : null);
      
      toast({
        title: "Profile updated",
        description: "Your profile image has been updated successfully",
      });
      
      setIsProfileDialogOpen(false);
      setPreviewImage(null);
      setProfileImageFile(null);
      
    } catch (error) {
      console.error("Error uploading profile image:", error);
      toast({
        title: "Upload failed",
        description: "Failed to upload profile image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };
  
  const userData = {
    name: userProfile?.full_name || "Loading...",
    email: user?.email || "Loading...",
    memberSince: userProfile ? new Date(userProfile.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : "Loading...",
    profileImage: userProfile?.profile_image || null
  };

  const renderPlaceholder = (type: "purchases" | "favorites") => (
    <div className="text-center py-6 text-gray-500">
      {type === "purchases" ? (
        <>
          <ShoppingCart className="mx-auto h-12 w-12 text-gray-300 mb-2" />
          <p>No purchases yet</p>
          <Button variant="link" className="text-gold mt-2" onClick={() => navigate("/browse")}>
            Browse Content
          </Button>
        </>
      ) : (
        <>
          <Heart className="mx-auto h-12 w-12 text-gray-300 mb-2" />
          <p>No favorites yet</p>
          <Button variant="link" className="text-gold mt-2" onClick={() => navigate("/sellers")}>
            Browse Sellers
          </Button>
        </>
      )}
    </div>
  );

  const renderLoadingState = () => (
    <div className="flex items-center justify-center py-8">
      <Loader2 className="h-8 w-8 animate-spin text-gold" />
      <span className="ml-2">Loading...</span>
    </div>
  );

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Buyer Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingProfile ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-gold" />
                  <span className="ml-2">Loading...</span>
                </div>
              ) : (
                <>
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative group">
                      <Avatar className="h-24 w-24 mb-4 cursor-pointer" onClick={() => setIsProfileDialogOpen(true)}>
                        {userData.profileImage ? (
                          <AvatarImage src={userData.profileImage} alt={userData.name} />
                        ) : (
                          <AvatarFallback className="bg-gold text-white text-xl">
                            {userData.name.charAt(0) || "?"}
                          </AvatarFallback>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 rounded-full transition-opacity">
                          <Camera className="h-8 w-8" />
                        </div>
                      </Avatar>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="absolute bottom-2 right-0 rounded-full h-8 w-8 p-0"
                        onClick={() => setIsProfileDialogOpen(true)}
                      >
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="text-xl font-semibold">{userData.name}</h3>
                    <p className="text-gray-500">{userData.email}</p>
                    <Badge className="mt-2 bg-gold">Buyer</Badge>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Member since:</span>
                      <span className="font-medium">{userData.memberSince}</span>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
          
          <div className="lg:col-span-2">
            <Tabs defaultValue="purchases" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="purchases" className="text-center">Recent Purchases</TabsTrigger>
                <TabsTrigger value="favorites" className="text-center">Favorites</TabsTrigger>
                <TabsTrigger value="account" className="text-center">Account</TabsTrigger>
              </TabsList>
              
              <TabsContent value="purchases">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Purchases</CardTitle>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            View All
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>All Purchases</DialogTitle>
                          </DialogHeader>
                          {loadingPurchases ? (
                            renderLoadingState()
                          ) : recentPurchases.length > 0 ? (
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Image</TableHead>
                                  <TableHead>Name</TableHead>
                                  <TableHead>Seller</TableHead>
                                  <TableHead>Date</TableHead>
                                  <TableHead>Price</TableHead>
                                  <TableHead>Action</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {recentPurchases.map((purchase) => (
                                  <TableRow key={purchase.id}>
                                    <TableCell>
                                      <div className="h-12 w-12 rounded-md overflow-hidden bg-gray-200">
                                        {purchase.content.thumbnail_url ? (
                                          <img
                                            src={purchase.content.thumbnail_url}
                                            alt={purchase.content.title}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                          />
                                        ) : (
                                          <div className="h-full w-full flex items-center justify-center text-gray-400">
                                            {purchase.content.type === 'photo' ? 'Image' : 'Video'}
                                          </div>
                                        )}
                                      </div>
                                    </TableCell>
                                    <TableCell>{purchase.content.title}</TableCell>
                                    <TableCell>{purchase.seller.full_name}</TableCell>
                                    <TableCell>{formatDate(purchase.purchase_date)}</TableCell>
                                    <TableCell>${purchase.price}</TableCell>
                                    <TableCell>
                                      <Button 
                                        variant="outline" 
                                        size="sm"
                                        onClick={() => handleViewPurchase(purchase.id)}
                                      >
                                        View
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          ) : (
                            renderPlaceholder("purchases")
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {loadingPurchases ? (
                      renderLoadingState()
                    ) : recentPurchases.length > 0 ? (
                      <div className="space-y-4">
                        {recentPurchases.slice(0, 2).map((purchase) => (
                          <div 
                            key={purchase.id} 
                            className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                            onClick={() => handleViewPurchase(purchase.id)}
                          >
                            <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-200">
                              {purchase.content.thumbnail_url ? (
                                <img 
                                  src={purchase.content.thumbnail_url} 
                                  alt={purchase.content.title} 
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                />
                              ) : (
                                <div className="h-full w-full flex items-center justify-center text-gray-400">
                                  {purchase.content.type === 'photo' ? 'Image' : 'Video'}
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{purchase.content.title}</h4>
                              <p className="text-sm text-gray-500">by {purchase.seller.full_name}</p>
                              <div className="flex items-center mt-1">
                                <Clock className="h-3 w-3 mr-1 text-gray-400" />
                                <span className="text-xs text-gray-500">{formatDate(purchase.purchase_date)}</span>
                              </div>
                            </div>
                            <div className="font-medium text-gold">${purchase.price}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      renderPlaceholder("purchases")
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="favorites">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Favorite Creators</CardTitle>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            View All
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>All Favorite Creators</DialogTitle>
                          </DialogHeader>
                          {loadingFavorites ? (
                            renderLoadingState()
                          ) : favorites.length > 0 ? (
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Profile</TableHead>
                                  <TableHead>Name</TableHead>
                                  <TableHead>Username</TableHead>
                                  <TableHead>Content</TableHead>
                                  <TableHead>Rating</TableHead>
                                  <TableHead>Action</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {favorites.map((seller) => (
                                  <TableRow key={seller.id}>
                                    <TableCell>
                                      <Avatar className="h-10 w-10 border border-gold">
                                        <AvatarFallback className="bg-gold text-white">
                                          {seller.displayName.charAt(0)}
                                        </AvatarFallback>
                                      </Avatar>
                                    </TableCell>
                                    <TableCell>{seller.displayName}</TableCell>
                                    <TableCell>@{seller.name}</TableCell>
                                    <TableCell>{seller.content.photos} Photos • {seller.content.videos} Videos</TableCell>
                                    <TableCell>{seller.rating.toFixed(1)} ★</TableCell>
                                    <TableCell>
                                      <div className="flex gap-2">
                                        <Button 
                                          variant="outline" 
                                          size="sm"
                                          onClick={() => handleViewSellerProfile(seller.id)}
                                        >
                                          View
                                        </Button>
                                        <Button 
                                          size="sm"
                                          variant="outline" 
                                          className="border-gold text-gold hover:bg-gold/10"
                                          onClick={() => handleToggleFollow(seller.id)}
                                        >
                                          Following
                                        </Button>
                                      </div>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          ) : (
                            renderPlaceholder("favorites")
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {loadingFavorites ? (
                      renderLoadingState()
                    ) : favorites.length > 0 ? (
                      <div className="space-y-4">
                        {favorites.slice(0, 2).map((seller) => (
                          <div key={seller.id} className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                            <Avatar className="h-14 w-14 border-2 border-gold">
                              <AvatarFallback className="bg-gold text-white">
                                {seller.displayName.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h4 className="font-semibold">{seller.displayName}</h4>
                              <p className="text-sm text-gray-500">@{seller.name}</p>
                              <div className="flex items-center mt-1">
                                <span className="text-xs text-gray-500">{seller.content.photos} Photos • {seller.content.videos} Videos</span>
                              </div>
                            </div>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-gold text-gold hover:bg-gold/10"
                              onClick={() => handleToggleFollow(seller.id)}
                            >
                              <Heart className="h-4 w-4 mr-1" />
                              Following
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      renderPlaceholder("favorites")
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Personal Information</h4>
                        <div className="space-y-2">
                          <div className="grid grid-cols-3 gap-4 items-center">
                            <span className="text-sm text-gray-500">Name:</span>
                            <span className="col-span-2">{userData.name}</span>
                          </div>
                          <div className="grid grid-cols-3 gap-4 items-center">
                            <span className="text-sm text-gray-500">Email:</span>
                            <span className="col-span-2">{userData.email}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-2">Privacy Settings</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Show activity status</p>
                              <p className="text-xs text-gray-500">Let sellers know when you're online</p>
                            </div>
                            <Switch 
                              checked={showActivityStatus} 
                              onCheckedChange={handleActivityStatusChange} 
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Email notifications</p>
                              <p className="text-xs text-gray-500">Receive updates and offers by email</p>
                            </div>
                            <Switch 
                              checked={emailNotifications} 
                              onCheckedChange={handleEmailNotificationsChange} 
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 pt-4">
                        <Button className="bg-gold hover:bg-gold-dark">Save Changes</Button>
                        <Button variant="outline">Reset</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Dialog open={showCreatorDetail} onOpenChange={setShowCreatorDetail}>
        <DialogContent className="max-w-md sm:max-w-lg overflow-y-auto max-h-[85vh]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Creator Profile</DialogTitle>
            <DialogDescription>
              View creator details and available content
            </DialogDescription>
          </DialogHeader>
          {selectedCreator && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-gold">
                  <AvatarFallback className="bg-gold text-white text-lg">
                    {selectedCreator.displayName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{selectedCreator.displayName}</h3>
                  <p className="text-sm text-gray-500">@{selectedCreator.name}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-amber-500 font-medium">{selectedCreator.rating.toFixed(1)} ★</span>
                    {selectedCreator.reviews > 0 && (
                      <span className="text-xs text-gray-500 ml-1">({selectedCreator.reviews} reviews)</span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-gold">{selectedCreator.content.photos}</p>
                  <p className="text-sm text-gray-600">Photos</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-gold">{selectedCreator.content.videos}</p>
                  <p className="text-sm text-gray-600">Videos</p>
                </div>
              </div>
              
              <div className="pt-2 flex justify-end gap-2">
                <Button 
                  variant="outline" 
                  className="border-gold text-gold hover:bg-gold/10"
                  onClick={closeCreatorDetail}
                >
                  Close
                </Button>
                <Button 
                  className="bg-gold hover:bg-gold-dark"
                  onClick={() => navigate(`/seller/${selectedCreator.id}`)}
                >
                  Visit Profile
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Update Profile Image</DialogTitle>
            <DialogDescription>
              Upload a new profile image to personalize your account.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {previewImage ? (
              <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden border-2 border-gold">
                <img 
                  src={previewImage} 
                  alt="Profile Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="mx-auto w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-400">
                <Camera className="h-16 w-16 text-gray-400" />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="profile-image" className="font-medium">Select Image</Label>
              <Input 
                id="profile-image" 
                type="file" 
                accept="image/jpeg, image/png, image/gif, image/webp"
                onChange={handleImageChange}
                className="cursor-pointer"
              />
              <p className="text-xs text-gray-500">
                Supported formats: JPEG, PNG, GIF, WEBP. Maximum size: 5MB.
              </p>
            </div>
            
            <div className="flex justify-end gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => {
                  setPreviewImage(null);
                  setProfileImageFile(null);
                  setIsProfileDialogOpen(false);
                }}
                disabled={isUploading}
              >
                Cancel
              </Button>
              <Button 
                onClick={uploadProfileImage}
                disabled={!profileImageFile || isUploading}
                className="bg-gold hover:bg-gold-dark"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : 'Upload Image'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BuyerDashboard;
