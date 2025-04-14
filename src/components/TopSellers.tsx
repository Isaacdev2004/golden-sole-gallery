import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Seller {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  subscribers: number;
  verified: boolean;
  rating: number;
  contentCount: number;
}

interface TopSellersProps {
  sellers?: Seller[];
  isHomepage?: boolean;
}

const TopSellers = ({ sellers: propSellers, isHomepage = false }: TopSellersProps) => {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (propSellers && propSellers.length > 0) {
      setSellers(propSellers);
      setLoading(false);
      return;
    }
    
    const fetchSellers = async () => {
      try {
        setLoading(true);
        
        const { data: profilesData, error: profilesError } = await supabase
          .from('profiles')
          .select('id, full_name, username, profile_image, bio, created_at')
          .eq('account_type', 'seller')
          .limit(isHomepage ? 3 : 12);
          
        if (profilesError) {
          console.error("Error fetching sellers:", profilesError);
          return;
        }
        
        if (!profilesData || profilesData.length === 0) {
          setLoading(false);
          return;
        }
        
        const processedSellers = await Promise.all(profilesData.map(async (profile) => {
          const { count: followersCount } = await supabase
            .from('followers')
            .select('*', { count: 'exact', head: true })
            .eq('following_id', profile.id);
            
          const { count: contentCount } = await supabase
            .from('content')
            .select('*', { count: 'exact', head: true })
            .eq('seller_id', profile.id);
            
          const { data: reviews } = await supabase
            .from('reviews')
            .select('rating')
            .eq('seller_id', profile.id);
            
          let avgRating = 0;
          if (reviews && reviews.length > 0) {
            const sum = reviews.reduce((total, review) => total + review.rating, 0);
            avgRating = parseFloat((sum / reviews.length).toFixed(1));
          } else {
            avgRating = 4.5;
          }
          
          return {
            id: profile.id,
            name: profile.full_name || "Anonymous Seller",
            username: profile.username || "anonymous",
            bio: profile.bio || "A content creator on our platform.",
            avatar: profile.profile_image || "/placeholder.svg",
            subscribers: followersCount || 0,
            verified: true,
            rating: avgRating,
            contentCount: contentCount || 0
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
  }, [propSellers, isHomepage]);
  
  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Meet Our <span className="text-gold">Top Sellers</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These verified creators consistently produce high-quality content and maintain
              excellent customer satisfaction.
            </p>
          </div>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-12 w-12 text-gold animate-spin" />
            <span className="ml-2 text-lg">Loading sellers...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Meet Our <span className="text-gold">Top Sellers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These verified creators consistently produce high-quality content and maintain
            excellent customer satisfaction.
          </p>
        </div>
        
        {sellers.length === 0 ? (
          <div className="bg-gray-50 rounded-lg shadow-sm p-12 text-center max-w-2xl mx-auto">
            <Users className="h-16 w-16 mx-auto mb-4 text-gold/50" />
            <h3 className="text-xl font-medium mb-2">No sellers available yet</h3>
            <p className="text-gray-600 mb-6">
              We're waiting for talented creators to join our platform. Be the first one to start selling content!
            </p>
            <Link to="/register">
              <Button className="bg-gold hover:bg-gold-dark">
                Become a Seller
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sellers.map((seller) => (
              <Card key={seller.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-r from-gold/20 to-gold/10 h-24"></div>
                <CardContent className="pt-0 relative pb-6">
                  <div className="flex justify-center">
                    <img 
                      src={seller.avatar}
                      alt={seller.name}
                      className="w-24 h-24 rounded-full border-4 border-white -mt-12 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <div className="flex items-center justify-center gap-1">
                      <h3 className="font-bold text-xl">{seller.name}</h3>
                      {seller.verified && (
                        <CheckCircle className="h-5 w-5 text-gold fill-gold" />
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">@{seller.username}</p>
                    
                    <div className="flex justify-center items-center gap-2 my-2">
                      <Badge variant="outline" className="bg-gold/5 text-gold border-gold/20">
                        ⭐ {seller.rating.toFixed(1)}
                      </Badge>
                      <Badge variant="outline" className="bg-gold/5 text-gold border-gold/20">
                        {seller.subscribers} subscribers
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                      {seller.bio}
                    </p>
                    
                    <Link to={`/seller/${seller.id}`}>
                      <Button className="w-full bg-gold hover:bg-gold-dark">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {sellers.length > 0 && !isHomepage && (
          <div className="text-center mt-10">
            <Link to="/sellers">
              <Button variant="outline" className="border-gold hover:bg-gold hover:text-white">
                View All Sellers
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopSellers;
