
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Clock, User, Loader2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState("purchases");
  const [showCreatorDetail, setShowCreatorDetail] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState<any>(null);
  const [showActivityStatus, setShowActivityStatus] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [recentPurchases, setRecentPurchases] = useState<any[]>([]);
  const [loadingPurchases, setLoadingPurchases] = useState(true);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loadingFavorites, setLoadingFavorites] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  
  // Fetch user profile data
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
          setUserProfile(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoadingProfile(false);
      }
    };
    
    fetchUserProfile();
  }, [user, toast]);
  
  // Fetch recent purchases
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
  
  // Fetch favorites (followed sellers)
  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;
      
      try {
        setLoadingFavorites(true);
        const { data, error } = await supabase
          .from('followers')
          .select(`
            id,
            following:following_id (
              id, 
              full_name,
              account_type
            )
          `)
          .eq('follower_id', user.id);
        
        if (error) {
          console.error('Error fetching favorites:', error);
        } else if (data && data.length > 0) {
          // Get the seller profiles with more details
          const sellerIds = data.map(item => item.following.id);
          
          const { data: sellerProfiles, error: sellerError } = await supabase
            .from('profiles')
            .select('*')
            .in('id', sellerIds)
            .eq('account_type', 'seller');
          
          if (sellerError) {
            console.error('Error fetching seller profiles:', sellerError);
          } else {
            // Get content counts for each seller
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
                
                // Get average rating
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
                  name: seller.full_name.split(' ')[1] || seller.full_name, // Using last name as username if possible
                  displayName: seller.full_name,
                  verified: false, // Placeholder, we'd need to add this to the profiles table
                  rating: rating || 4.5, // Default if no reviews
                  reviews: reviews?.length || 0,
                  content: {
                    photos: photoCount || 0,
                    videos: videoCount || 0
                  },
                  image: null // We'd need to add profile images
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
  
  // Format date helper function
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
      // Check if already following
      const { data } = await supabase
        .from('followers')
        .select('*')
        .eq('follower_id', user.id)
        .eq('following_id', sellerId)
        .single();
      
      if (data) {
        // Unfollow
        await supabase
          .from('followers')
          .delete()
          .eq('follower_id', user.id)
          .eq('following_id', sellerId);
        
        // Update local state
        setFavorites(favorites.filter(f => f.id !== sellerId));
      } else {
        // Follow
        await supabase
          .from('followers')
          .insert([
            { follower_id: user.id, following_id: sellerId }
          ]);
        
        toast({
          title: "Success",
          description: "You are now following this seller",
        });
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

  // Use the actual user profile data (if available) or fallback to default values
  const userData = {
    name: userProfile?.full_name || "Loading...",
    email: user?.email || "Loading...",
    memberSince: userProfile ? new Date(userProfile.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : "Loading...",
    credits: 50, // This would need to be added to the profiles table
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
                renderLoadingState()
              ) : (
                <>
                  <div className="flex flex-col items-center mb-4">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarFallback className="bg-gold text-white text-xl">
                        {userData.name.charAt(0) || "?"}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold">{userData.name}</h3>
                    <p className="text-gray-500">{userData.email}</p>
                    <Badge className="mt-2 bg-gold">Buyer</Badge>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Member since:</span>
                      <span className="font-medium">{userData.memberSince}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Credits:</span>
                      <span className="font-medium text-gold">{userData.credits}</span>
                    </div>
                    <Button className="w-full mt-4 bg-gold hover:bg-gold-dark">
                      Add Credits
                    </Button>
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
                  onClick={() => handleToggleFollow(selectedCreator.id)}
                >
                  Following
                </Button>
                <Button 
                  className="bg-gold hover:bg-gold-dark"
                  onClick={() => {
                    setShowCreatorDetail(false);
                    navigate(`/seller/${selectedCreator.id}`);
                  }}
                >
                  Browse Content
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </>
  );
};

export default BuyerDashboard;
