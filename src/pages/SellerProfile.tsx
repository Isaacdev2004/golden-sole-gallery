
import { useParams, Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft, MessageSquare, Heart, ShoppingCart, Share2, Shield, Star } from "lucide-react";

const SellerProfile = () => {
  const { id } = useParams();

  // Mock seller data - in a real app, this would come from an API
  const sellerData = {
    id,
    username: "GoldenSteps",
    displayName: "Olivia Grace",
    verificationBadge: true,
    rating: 4.8,
    reviewCount: 156,
    joinDate: "March 2023",
    subscribers: 248,
    likes: 1.2, // in thousands
    bio: "Hi there! I'm Olivia, a certified foot model with 5 years of experience. I specialize in high-quality artistic content focusing on arches and natural beauty. Subscribe for regular updates and exclusive content!",
    tags: ["Model", "Size 7", "Arches", "Natural"],
    subscriptionPrice: 14.99,
    photoCount: 137,
    videoCount: 42,
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&q=80",
    featuredContent: [
      { id: "p1", type: "photo", thumbnail: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=300&h=400&auto=format&q=80" },
      { id: "v1", type: "video", thumbnail: "https://images.unsplash.com/photo-1638272181967-78797a0a030d?w=300&h=400&auto=format&q=80" },
      { id: "p2", type: "photo", thumbnail: "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?w=300&h=400&auto=format&q=80" },
      { id: "p3", type: "photo", thumbnail: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=300&h=400&auto=format&q=80" },
    ]
  };

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link to="/browse" className="flex items-center text-gray-600 hover:text-gold mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Browse
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="h-32 w-32 border-4 border-gold">
                  <AvatarImage src={sellerData.profileImage} />
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
                <span className="font-medium">{sellerData.rating}</span>
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
                <Button variant="outline" className="border-gray-200 text-gray-700">
                  <Heart className="mr-2 h-5 w-5" />
                  Like
                </Button>
                <Button variant="outline" className="border-gray-200 text-gray-700">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content Tabs */}
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
