
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for featured content
const featuredContent = [
  {
    id: 1,
    title: "Summer Collection",
    price: 19.99,
    username: "FootGoddess",
    image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    likes: 124,
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Beach Day Photos",
    price: 14.99,
    username: "SoleMate",
    image: "https://images.unsplash.com/photo-1622633968683-ce0d0b611ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    likes: 88,
    isNew: false,
    isFeatured: true,
  },
  {
    id: 3,
    title: "Exclusive Set",
    price: 29.99,
    username: "ToesTellAll",
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    likes: 210,
    isNew: true,
    isFeatured: true,
  },
  {
    id: 4,
    title: "Weekly Photos",
    price: 9.99,
    username: "FeetLover",
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    likes: 76,
    isNew: false,
    isFeatured: true,
  }
];

const FeaturedContent = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured <span className="gold-text">Content</span></h2>
          <Link to="/browse" className="text-gold hover:text-gold-dark font-medium">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredContent.map((item) => (
            <Link to={`/content/${item.id}`} key={item.id}>
              <Card className="overflow-hidden hover-scale">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    {item.isNew && (
                      <Badge className="bg-gold text-white hover:bg-gold-dark">New</Badge>
                    )}
                    {item.isFeatured && (
                      <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-gold text-gold">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium">{item.title}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">@{item.username}</span>
                      <span className="text-white font-bold">${item.price}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-3 flex justify-between items-center">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{item.likes}</span>
                  </div>
                  <Badge className="bg-gold/10 hover:bg-gold/20 text-gold border-none">View Details</Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
