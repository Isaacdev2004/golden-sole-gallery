
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock data for top sellers
const topSellers = [
  {
    id: 1,
    name: "Amber Rose",
    username: "AmberRose",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
    bio: "Exclusive content creator specializing in high-quality foot modeling.",
    subscribers: 1240,
    verified: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Jessica Wild",
    username: "JessWild",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
    bio: "Professional foot model with weekly exclusive updates.",
    subscribers: 950,
    verified: true,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Sophie Smith",
    username: "SoleSophie",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
    bio: "Former dancer turned content creator. Daily posts and personalized content.",
    subscribers: 1850,
    verified: true,
    rating: 4.8,
  }
];

const TopSellers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Meet Our <span className="gold-text">Top Sellers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These verified creators consistently produce high-quality content and maintain
            excellent customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topSellers.map((seller) => (
            <Card key={seller.id} className="overflow-hidden hover-scale">
              <div className="bg-gradient-to-r from-gold/20 to-gold-light/20 h-24"></div>
              <CardContent className="pt-0 relative pb-6">
                <div className="flex justify-center">
                  <img 
                    src={seller.avatar}
                    alt={seller.name}
                    className="w-24 h-24 rounded-full border-4 border-white -mt-12 object-cover"
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
                      ⭐ {seller.rating}
                    </Badge>
                    <Badge variant="outline" className="bg-gold/5 text-gold border-gold/20">
                      {seller.subscribers} subscribers
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">
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
        
        <div className="text-center mt-10">
          <Link to="/sellers">
            <Button variant="outline" className="border-gold hover:bg-gold hover:text-white">
              View All Sellers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
