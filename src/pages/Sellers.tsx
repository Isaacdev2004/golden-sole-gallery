
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const sellersData = [
  {
    id: "1",
    username: "GoldenSteps",
    displayName: "Olivia Grace",
    verified: true,
    rating: 4.8,
    reviews: 156,
    tags: ["Size 7", "Arches"],
    content: { photos: 137, videos: 42 },
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&q=80"
  },
  {
    id: "2",
    username: "SoleFocus",
    displayName: "Emma Johnson",
    verified: true,
    rating: 4.9,
    reviews: 203,
    tags: ["Size 6", "High Arches"],
    content: { photos: 98, videos: 34 },
    profileImage: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&auto=format&q=80"
  },
  {
    id: "3",
    username: "ArtsyToes",
    displayName: "Sophia Lee",
    verified: false,
    rating: 4.6,
    reviews: 87,
    tags: ["Size 5", "Pedicure"],
    content: { photos: 76, videos: 12 },
    profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&q=80"
  },
  {
    id: "4",
    username: "WalkThis_Way",
    displayName: "Alexander Smith",
    verified: true,
    rating: 4.7,
    reviews: 122,
    tags: ["Size 10", "Athletic"],
    content: { photos: 104, videos: 27 },
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&q=80"
  },
  {
    id: "5",
    username: "SoleSister",
    displayName: "Ava Wilson",
    verified: false,
    rating: 4.5,
    reviews: 63,
    tags: ["Size 7.5", "Modeling"],
    content: { photos: 58, videos: 9 },
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&q=80"
  },
  {
    id: "6",
    username: "TipToe_King",
    displayName: "James Parker",
    verified: true,
    rating: 4.9,
    reviews: 176,
    tags: ["Size 9", "Art"],
    content: { photos: 143, videos: 38 },
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&q=80"
  }
];

const Sellers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [filterVerified, setFilterVerified] = useState(false);
  
  const filteredSellers = sellersData.filter(seller => {
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
        
        {filteredSellers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No sellers found matching your search.</p>
            <Button onClick={() => { setSearchQuery(""); setFilterVerified(false); }} variant="link" className="text-gold">
              Clear filters
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Sellers;
