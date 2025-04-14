
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Shield, Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

interface Seller {
  id: string;
  username: string;
  displayName: string;
  verified: boolean;
  rating: number;
  reviews: number;
  tags: string[];
  content: { photos: number; videos: number };
  profileImage: string;
}

const Sellers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [filterVerified, setFilterVerified] = useState(false);
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchSellers = async () => {
      try {
        setLoading(true);
        
        const { data: profilesData, error: profilesError } = await supabase
          .from('profiles')
          .select('id, full_name, username, profile_image, bio, created_at')
          .eq('account_type', 'seller');
          
        if (profilesError) {
          console.error("Error fetching sellers:", profilesError);
          setLoading(false);
          return;
        }
        
        if (!profilesData || profilesData.length === 0) {
          setSellers([]);
          setLoading(false);
          return;
        }
        
        // Process each profile to add additional information
        const processedSellers = await Promise.all(profilesData.map(async (profile) => {
          // Get number of followers
          const { count: followersCount } = await supabase
            .from('followers')
            .select('*', { count: 'exact', head: true })
            .eq('following_id', profile.id);
            
          // Get content details
          const { data: contentData, count: totalContent } = await supabase
            .from('content')
            .select('id, type', { count: 'exact' })
            .eq('seller_id', profile.id);
            
          // Calculate content types
          const photoContent = contentData ? contentData.filter(item => item.type === 'photo').length : 0;
          const videoContent = contentData ? contentData.filter(item => item.type === 'video').length : 0;
          
          // Get average rating
          const { data: reviews } = await supabase
            .from('reviews')
            .select('rating')
            .eq('seller_id', profile.id);
            
          let avgRating = 0;
          let reviewCount = 0;
          
          if (reviews && reviews.length > 0) {
            reviewCount = reviews.length;
            const sum = reviews.reduce((total, review) => total + review.rating, 0);
            avgRating = parseFloat((sum / reviewCount).toFixed(1));
          } else {
            // Default rating if none exists
            avgRating = 4.5;
            reviewCount = 0;
          }
          
          // Generate tags based on content type or default ones
          let tags: string[] = [];
          if (contentData && contentData.length > 0) {
            // We could derive tags from content metadata in a real scenario
            if (photoContent > 0) tags.push("Photos");
            if (videoContent > 0) tags.push("Videos");
          } else {
            tags = ["New Seller"];
          }
          
          return {
            id: profile.id,
            username: profile.username || "user" + profile.id.substring(0, 4),
            displayName: profile.full_name || "Anonymous Seller",
            verified: followersCount ? followersCount > 10 : false, // Simple verification logic based on followers
            rating: avgRating,
            reviews: reviewCount,
            tags: tags,
            content: { photos: photoContent, videos: videoContent },
            profileImage: profile.profile_image || ""
          };
        }));
        
        setSellers(processedSellers);
      } catch (error) {
        console.error("Error fetching seller data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSellers();
  }, []);
  
  const filteredSellers = sellers.filter(seller => {
    const matchesSearch = 
      seller.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesVerified = filterVerified ? seller.verified : true;
    
    return matchesSearch && matchesVerified;
  }).sort((a, b) => {
    if (sortBy === "popular") return b.reviews - a.reviews;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "content") return (b.content.photos + b.content.videos) - (a.content.photos + a.content.videos);
    return 0;
  });

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Sellers</h1>
          <p className="text-gray-600">Discover talented creators and their exclusive content</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="md:w-1/2 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name, username, or tags..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="md:w-1/4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="content">Most Content</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:w-1/4">
            <Button 
              variant={filterVerified ? "default" : "outline"}
              className={filterVerified ? "bg-gold hover:bg-gold-dark w-full" : "border-gold text-gold hover:bg-gold/10 w-full"}
              onClick={() => setFilterVerified(!filterVerified)}
            >
              <Shield className="mr-2 h-4 w-4" />
              Verified Only
            </Button>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-12 w-12 text-gold animate-spin" />
            <span className="ml-2 text-lg">Loading sellers...</span>
          </div>
        ) : (
          <>
            {filteredSellers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSellers.map((seller) => (
                  <Link to={`/seller/${seller.id}`} key={seller.id}>
                    <Card className="hover:shadow-lg transition-all hover:border-gold hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-16 w-16 border-2 border-gold">
                            <AvatarImage src={seller.profileImage} />
                            <AvatarFallback className="bg-gold text-white">
                              {seller.displayName.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-semibold text-lg">{seller.displayName}</h3>
                              {seller.verified && (
                                <Shield className="h-4 w-4 text-gold ml-1" />
                              )}
                            </div>
                            <p className="text-sm text-gray-500">@{seller.username}</p>
                            <div className="flex items-center mt-1">
                              <Star className="h-3 w-3 text-gold mr-1" />
                              <span className="text-sm font-medium">{seller.rating}</span>
                              <span className="text-xs text-gray-500 ml-1">({seller.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-between">
                          <div>
                            <p className="text-xs text-gray-500">Content</p>
                            <p className="text-sm font-medium">
                              {seller.content.photos} Photos • {seller.content.videos} Videos
                            </p>
                          </div>
                          <div className="flex gap-2">
                            {seller.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="bg-gray-50 text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg shadow-sm max-w-2xl mx-auto">
                <Shield className="h-16 w-16 mx-auto mb-4 text-gold/50" />
                <h3 className="text-xl font-medium mb-2">No sellers available</h3>
                <p className="text-gray-600 mb-6">
                  {searchQuery || filterVerified ? 
                    "No sellers match your current search criteria." : 
                    "We're waiting for talented creators to join our platform. Be the first one to start selling content!"}
                </p>
                {(searchQuery || filterVerified) && (
                  <Button onClick={() => { setSearchQuery(""); setFilterVerified(false); }} variant="link" className="text-gold">
                    Clear filters
                  </Button>
                )}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Sellers;
