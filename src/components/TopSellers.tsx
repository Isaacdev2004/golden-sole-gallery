
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  sellers: Seller[];
}

const TopSellers = ({ sellers = [] }: TopSellersProps) => {
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
        
        {sellers.length > 0 && (
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
