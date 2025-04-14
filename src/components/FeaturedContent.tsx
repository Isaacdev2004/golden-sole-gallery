
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Image } from "lucide-react";
import { Link } from "react-router-dom";

interface ContentItem {
  id: string;
  title: string;
  price: number;
  seller: {
    username: string;
  };
  thumbnail_url: string | null;
  likes: number;
  isNew: boolean;
  isFeatured: boolean;
}

interface FeaturedContentProps {
  content: ContentItem[];
}

const FeaturedContent = ({ content = [] }: FeaturedContentProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured <span className="text-gold">Content</span></h2>
          <Link to="/browse" className="text-gold hover:text-gold-dark font-medium">
            View All →
          </Link>
        </div>
        
        {content.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Image className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-medium mb-2">No featured content yet</h3>
            <p className="text-gray-600 mb-4">
              Check back soon for exciting new content from our creators!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.map((item) => (
              <Link to={`/content/${item.id}`} key={item.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={item.thumbnail_url || "/placeholder.svg"} 
                      alt={item.title} 
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
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
                        <span className="text-white text-sm">@{item.seller?.username || "Anonymous"}</span>
                        <span className="text-white font-bold">${item.price.toFixed(2)}</span>
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
        )}
      </div>
    </section>
  );
};

export default FeaturedContent;
