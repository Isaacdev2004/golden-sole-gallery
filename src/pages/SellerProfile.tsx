
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft, MessageSquare, Heart, ShoppingCart, Share2, Shield, Star, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

// Define an extended profile type that includes our extra fields
interface ExtendedProfile {
  id: string;
  created_at: string;
  updated_at: string;
  account_type: string;
  full_name: string | null;
  username?: string | null;
  bio?: string | null;
  profile_image?: string | null;
}

const SellerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState(false);
  const [sellerData, setSellerData] = useState<any>(null);

  useEffect(() => {
    const fetchSellerData = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        
        // Fetch the seller profile
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', id)
          .eq('account_type', 'seller')
          .single();
        
        if (profileError || !profile) {
          toast({
            title: "Seller not found",
            description: "Could not find the requested seller profile",
            variant: "destructive",
          });
          navigate('/browse');
          return;
        }
        
        // Cast the profile to our extended type
        const extendedProfile = profile as ExtendedProfile;
        
        // Check if the current user is following this seller
        if (user) {
          const { data: followData } = await supabase
            .from('followers')
            .select('*')
            .eq('follower_id', user.id)
            .eq('following_id', id)
            .single();
          
          setFollowing(!!followData);
        }
        
        // Get content counts
        const { count: photoCount } = await supabase
          .from('content')
          .select('*', { count: 'exact', head: true })
          .eq('seller_id', id)
          .eq('type', 'photo');
        
        const { count: videoCount } = await supabase
          .from('content')
          .select('*', { count: 'exact', head: true })
          .eq('seller_id', id)
          .eq('type', 'video');
        
        // Get follower count
        const { count: subscriberCount } = await supabase
          .from('followers')
          .select('*', { count: 'exact', head: true })
          .eq('following_id', id);
        
        // Get rating
        const { data: reviews } = await supabase
          .from('reviews')
          .select('rating')
          .eq('seller_id', id);
        
        let rating = 0;
        let reviewCount = 0;
        
        if (reviews && reviews.length > 0) {
          rating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
          reviewCount = reviews.length;
        }
        
        // Get likes count
        const { count: likesCount } = await supabase
          .from('likes')
          .select('*', { count: 'exact', head: true });
        
        // Fetch featured content
        const { data: featuredContent } = await supabase
          .from('content')
          .select('*')
          .eq('seller_id', id)
          .order('created_at', { ascending: false })
          .limit(4);
        
        // Build seller data object - using safe fallbacks for properties that might not exist
        const username = extendedProfile.username || extendedProfile.full_name?.split(' ')[0]?.toLowerCase() || "seller";
        const displayName = extendedProfile.full_name || "Seller";
        const bio = extendedProfile.bio || "No bio available";
        const profileImage = extendedProfile.profile_image || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&q=80";
        
        setSellerData({
          id,
          username,
          displayName,
          verificationBadge: false,
          rating: rating || 4.8,
          reviewCount: reviewCount || 0,
          joinDate: new Date(extendedProfile.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
          subscribers: subscriberCount || 0,
          likes: (likesCount || 0) / 1000,
          bio,
          tags: ["Model", "Foot content"],
          subscriptionPrice: 14.99,
          photoCount: photoCount || 0,
          videoCount: videoCount || 0,
          profileImage,
          featuredContent: featuredContent?.map(item => ({
            id: item.id,
            type: item.type,
            thumbnail: item.thumbnail_url || "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=300&h=400&auto=format&q=80"
          })) || []
        });
        
      } catch (error) {
        console.error("Error fetching seller data:", error);
        toast({
          title: "Error",
          description: "Failed to load seller profile",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchSellerData();
  }, [id, user, navigate, toast]);
  
  const handleToggleFollow = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to follow sellers",
      });
      navigate('/login');
      return;
    }
    
    try {
      if (following) {
        await supabase
          .from('followers')
          .delete()
          .eq('follower_id', user.id)
          .eq('following_id', id);
        
        setFollowing(false);
        toast({
          title: "Unfollowed",
          description: `You are no longer following ${sellerData?.displayName}`,
        });
      } else {
        await supabase
          .from('followers')
          .insert([
            { follower_id: user.id, following_id: id }
          ]);
        
        setFollowing(true);
        toast({
          title: "Following",
          description: `You are now following ${sellerData?.displayName}`,
        });
      }
      
      if (sellerData) {
        setSellerData({
          ...sellerData,
          subscribers: following ? sellerData.subscribers - 1 : sellerData.subscribers + 1
        });
      }
    } catch (error) {
      console.error("Error updating follow status:", error);
      toast({
        title: "Error",
        description: "Failed to update follow status",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-gold" />
            <p className="text-gray-500">Loading seller profile...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!sellerData) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-2">Seller Not Found</h2>
            <p className="text-gray-500 mb-6">The seller you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/browse')} className="bg-gold hover:bg-gold-dark">
              Browse Sellers
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link to="/browse" className="flex items-center text-gray-600 hover:text-gold mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Browse
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="h-32 w-32 border-4 border-gold">
                  <AvatarImage src={sellerData.profileImage} alt={sellerData.displayName} />
                  <AvatarFallback className="bg-gold text-white text-2xl">
                    {sellerData.displayName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex items-center justify-center mb-2">
                <h1 className="text-2xl font-bold">{sellerData.displayName}</h1>
                {sellerData.verificationBadge && (
                  <Shield className="h-5 w-5 text-gold ml-2" />
                )}
              </div>
              
              <p className="text-gray-500 mb-2">@{sellerData.username}</p>
              
              <div className="flex items-center justify-center mb-4">
                <Star className="h-4 w-4 text-gold mr-1" />
                <span className="font-medium">{sellerData.rating.toFixed(1)}</span>
                <span className="text-gray-500 ml-1">({sellerData.reviewCount} reviews)</span>
              </div>
              
              <div className="grid grid-cols-3 border-t border-gray-100 pt-4">
                <div>
                  <p className="text-lg font-semibold">{sellerData.photoCount}</p>
                  <p className="text-sm text-gray-500">Photos</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{sellerData.videoCount}</p>
                  <p className="text-sm text-gray-500">Videos</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{sellerData.subscribers}</p>
                  <p className="text-sm text-gray-500">Subscribers</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-3">About Me</h2>
              <p className="text-gray-700 mb-4">{sellerData.bio}</p>
              <div className="flex flex-wrap gap-2">
                {sellerData.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button className="bg-gold hover:bg-gold-dark text-white w-full py-6">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Subscribe ${sellerData.subscriptionPrice}/month
              </Button>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 w-full py-6">
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Message
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className={`${following ? 'bg-gold/10 border-gold text-gold' : 'border-gray-200 text-gray-700'}`}
                  onClick={handleToggleFollow}
                >
                  <Heart className={`mr-2 h-5 w-5 ${following ? 'fill-gold text-gold' : ''}`} />
                  {following ? 'Following' : 'Follow'}
                </Button>
                <Button variant="outline" className="border-gray-200 text-gray-700">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full mb-6 bg-gray-100">
                <TabsTrigger value="all" className="flex-1">All Content</TabsTrigger>
                <TabsTrigger value="photos" className="flex-1">Photos</TabsTrigger>
                <TabsTrigger value="videos" className="flex-1">Videos</TabsTrigger>
                <TabsTrigger value="bundles" className="flex-1">Bundles</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {sellerData.featuredContent.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover-scale">
                      <CardContent className="p-0">
                        <img 
                          src={item.thumbnail} 
                          alt={`${item.type} content`} 
                          className="w-full h-[200px] object-cover" 
                        />
                        <div className="p-3">
                          <div className="flex justify-between items-center">
                            <Badge variant={item.type === "video" ? "default" : "outline"}>
                              {item.type === "video" ? "Video $9.99" : "Photo $4.99"}
                            </Badge>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
                    Load More
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="photos">
                <div className="flex justify-center items-center py-12">
                  <p className="text-gray-500">Subscribe to view all photo content</p>
                </div>
              </TabsContent>
              
              <TabsContent value="videos">
                <div className="flex justify-center items-center py-12">
                  <p className="text-gray-500">Subscribe to view all video content</p>
                </div>
              </TabsContent>
              
              <TabsContent value="bundles">
                <div className="flex justify-center items-center py-12">
                  <p className="text-gray-500">Subscribe to view all bundle options</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SellerProfile;
